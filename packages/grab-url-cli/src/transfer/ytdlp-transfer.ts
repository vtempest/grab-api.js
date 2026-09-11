/**
 * @file ytdlp-transfer.ts
 * @description Video downloads delegated to the external
 * [`yt-dlp`](https://github.com/yt-dlp/yt-dlp) binary, wrapped in the same
 * cli-progress UI the HTTP and aria2c transfers use.
 *
 * Used by the `--page` archiver: yt-dlp recognises well over a thousand sites,
 * including videos embedded in an ordinary article, so the archiver simply
 * offers it every URL it saves and keeps whatever it catches. Everything here
 * is pure except {@link probeYtDlp} and {@link runYtDlpDownload}, which spawn
 * the binary.
 */

import fs from 'fs';
import path from 'path';
import { spawn, spawnSync } from 'child_process';

import cliProgress from 'cli-progress';

import {
    COL_BAR, COL_FILENAME,
    colors,
    formatBytesCompact, formatETA, formatProgress,
    formatSpeed, formatSpeedDisplay, formatTotalDisplay, truncateFilename,
} from '../display/progress-format.js';
import {
    calculateBarSize, getRandomBarColor, getRandomBarGlueColor,
    getRandomSpinner, getSpinnerFrames, getSpinnerWidth,
} from '../display/spinner-config.js';
import { isCancelInProgress } from '../cancel-state.js';

// ─── Types ────────────────────────────────────────────────────────────────────

/** The handful of `yt-dlp -J` fields the archiver reads. */
export interface YtDlpMetadata {
    id?: string;
    title?: string;
    ext?: string;
    extractor?: string;
    duration?: number;
    webpage_url?: string;
    /** Present on playlist/channel URLs, which the archiver declines to expand. */
    _type?: string;
}

/** One parsed `[download] ... ` progress line. */
export interface YtDlpProgress {
    percent: number;
    downloaded: number;
    total: number;
    speedBps: number;
    etaSeconds: number;
}

export interface YtDlpOptions {
    /** Destination directory. Defaults to cwd. */
    dir?: string;
    /** Base filename without extension — yt-dlp appends the container's own. */
    filename?: string;
    /** Format selector passed to `yt-dlp -f`. */
    format?: string | null;
    /** Raw extra flags appended verbatim to the invocation. */
    extraArgs?: string[];
}

// ─── Binary discovery ─────────────────────────────────────────────────────────

/**
 * Locate a working `yt-dlp`, honouring `GRAB_YTDLP_PATH`.
 *
 * @returns Its path and version, or null when it is missing or not runnable
 */
export function findYtDlp(): { path: string; version: string } | null {
    const candidate = process.env.GRAB_YTDLP_PATH || 'yt-dlp';
    try {
        const probe = spawnSync(candidate, ['--version'], { encoding: 'utf8' });
        if (probe.error || probe.status !== 0) return null;
        return { path: candidate, version: (probe.stdout || '').trim() || 'unknown' };
    } catch {
        return null;
    }
}

/** Platform-appropriate install hint shown when yt-dlp is missing. */
export function ytDlpInstallHint(): string {
    const hints: Record<string, string> = {
        darwin: 'brew install yt-dlp',
        linux: 'pipx install yt-dlp   (or: sudo apt install yt-dlp)',
        win32: 'winget install yt-dlp.yt-dlp   (or: scoop install yt-dlp)',
    };
    return hints[process.platform] ?? 'see https://github.com/yt-dlp/yt-dlp#installation';
}

// ─── Progress parsing ─────────────────────────────────────────────────────────

const UNIT_FACTORS: Record<string, number> = {
    B: 1, KIB: 1024, MIB: 1024 ** 2, GIB: 1024 ** 3, TIB: 1024 ** 4,
    K: 1024, M: 1024 ** 2, G: 1024 ** 3, T: 1024 ** 4,
    KB: 1024, MB: 1024 ** 2, GB: 1024 ** 3, TB: 1024 ** 4,
};

/**
 * Convert a yt-dlp size token (`1.44MiB`, `958.00KiB`, `~2.1GiB`) into bytes.
 * yt-dlp prefixes an estimated total with `~`, which carries no extra meaning
 * for a progress bar and is dropped.
 *
 * @param token - Size token, possibly undefined
 */
export function parseYtDlpSize(token: string | undefined | null): number {
    if (!token) return 0;
    const match = /^~?([\d.]+)\s*([KMGT]i?B|B)$/i.exec(token.trim());
    if (!match) return 0;
    const factor = UNIT_FACTORS[match[2].toUpperCase()] ?? 1;
    return Math.round(parseFloat(match[1]) * factor);
}

/**
 * Convert a yt-dlp ETA token (`00:42`, `01:02:03`, `Unknown`) into seconds.
 *
 * @param token - ETA token, possibly undefined
 */
export function parseYtDlpEta(token: string | undefined | null): number {
    if (!token) return 0;
    const parts = token.trim().split(':');
    if (parts.some((p) => !/^\d+$/.test(p))) return 0;
    return parts.reduce((total, part) => total * 60 + parseInt(part, 10), 0);
}

/**
 * Parse one `--newline` progress line into structured progress.
 * Returns null for every other line yt-dlp prints (format selection, merging,
 * warnings), so callers can keep those as diagnostics.
 *
 * Recognises the standard readout:
 * `[download]  23.4% of ~12.34MiB at  1.23MiB/s ETA 00:42`
 *
 * @param line - A single line of yt-dlp output
 */
export function parseYtDlpProgress(line: string): YtDlpProgress | null {
    if (!line.includes('[download]')) return null;
    const percentMatch = /\[download\]\s+([\d.]+)%\s+of/.exec(line);
    if (!percentMatch) return null;

    const percent = parseFloat(percentMatch[1]);
    const total = parseYtDlpSize(/of\s+(~?[\d.]+\s*[KMGT]?i?B)/i.exec(line)?.[1]);
    const speedBps = parseYtDlpSize(/at\s+([\d.]+\s*[KMGT]?i?B)\/s/i.exec(line)?.[1]);

    return {
        percent,
        downloaded: Math.round((total * percent) / 100),
        total,
        speedBps,
        etaSeconds: parseYtDlpEta(/ETA\s+([\d:]+)/i.exec(line)?.[1]),
    };
}

/**
 * Build the `yt-dlp` argument list for a download. Pure, so the flag matrix
 * stays unit-testable.
 *
 * @param url - Page or video URL to hand to yt-dlp
 * @param opts - Destination and format options
 */
export function buildYtDlpArgs(url: string, opts: YtDlpOptions = {}): string[] {
    // `%(ext)s` is left to yt-dlp: the container depends on the format it picks.
    const template = opts.filename
        ? `${opts.filename}.%(ext)s`
        : '%(title).150B [%(id)s].%(ext)s';

    const args = [
        '--newline',
        '--no-playlist',
        '--no-warnings',
        '--no-color',
        '--progress',
        '--restrict-filenames',
        '--no-part',
        '--paths', opts.dir || process.cwd(),
        '--output', template,
    ];

    if (opts.format) args.push('--format', opts.format);
    if (opts.extraArgs?.length) args.push(...opts.extraArgs);
    args.push(url);
    return args;
}

/** Map a yt-dlp exit code to a readable reason. */
export function describeYtDlpExit(code: number | null): string {
    if (code === null) return 'terminated by signal';
    if (code === 0) return 'completed';
    if (code === 1) return 'download failed';
    if (code === 2) return 'bad command-line option';
    if (code === 100) return 'yt-dlp needs a newer Python';
    return `exit code ${code}`;
}

// ─── Probe ────────────────────────────────────────────────────────────────────

/**
 * Ask yt-dlp whether it recognises a URL, without downloading anything.
 *
 * This is how the archiver decides if a page "has a video": most URLs it is
 * given are ordinary articles and yt-dlp exits non-zero on those, which is a
 * normal, silent outcome rather than an error.
 *
 * @param url - The URL being archived
 * @param timeoutMs - Give up after this long (default 30s)
 * @returns Video metadata, or null when yt-dlp does not support the URL
 */
export function probeYtDlp(url: string, timeoutMs = 30_000): YtDlpMetadata | null {
    const binary = findYtDlp();
    if (!binary) return null;
    try {
        const probe = spawnSync(
            binary.path,
            ['--dump-single-json', '--no-playlist', '--no-warnings', '--skip-download', url],
            { encoding: 'utf8', timeout: timeoutMs, maxBuffer: 64 * 1024 * 1024 },
        );
        if (probe.error || probe.status !== 0 || !probe.stdout) return null;
        const meta = JSON.parse(probe.stdout) as YtDlpMetadata;
        // Playlist and channel URLs would expand into an unbounded download.
        if (meta._type && meta._type !== 'video') return null;
        return meta;
    } catch {
        return null;
    }
}

// ─── Download ─────────────────────────────────────────────────────────────────

/**
 * Download a video with a live progress bar.
 *
 * @param url - Page or video URL
 * @param opts - Destination and format options
 * @param ctx - Receives the spawned child so callers can cancel it
 * @returns Absolute paths of the files yt-dlp reported writing
 * @throws When yt-dlp is missing or exits non-zero
 */
export async function runYtDlpDownload(
    url: string,
    opts: YtDlpOptions = {},
    ctx: { onChild?: (child: ReturnType<typeof spawn> | null) => void } = {},
): Promise<string[]> {
    const binary = findYtDlp();
    if (!binary) {
        throw new Error(
            `yt-dlp is required for video downloads but was not found. ` +
                `Install it with: ${ytDlpInstallHint()}`,
        );
    }

    const dir = opts.dir || process.cwd();
    try {
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    } catch (e: any) {
        throw new Error(`Could not create output directory ${dir}: ${e.message}`);
    }

    const args = buildYtDlpArgs(url, { ...opts, dir });
    const frames = getSpinnerFrames(getRandomSpinner());
    const barColor = getRandomBarColor();
    const barGlue = getRandomBarGlueColor();
    const spinnerWidth = getSpinnerWidth(frames[0]);
    const RESET = '\u001b[0m';

    const bar = new cliProgress.SingleBar({
        format:
            colors.success('{percentage}%') + ' ' +
            colors.yellow('{filename}') + ' ' +
            colors.cyan('{spinner}') + ' ' +
            barColor + '{bar}' + RESET + ' ' +
            colors.info('{downloadedDisplay}') + ' ' + colors.info('{totalDisplay}') + ' ' +
            colors.purple('{speed}') + ' ' + colors.pink('{etaFormatted}'),
        barCompleteChar: '█',
        barIncompleteChar: '░',
        barGlue,
        hideCursor: true,
        barsize: calculateBarSize(frames[0], COL_BAR),
        clearOnComplete: false,
        stopOnComplete: false,
    });

    bar.start(100, 0, {
        filename: truncateFilename(opts.filename || 'video', COL_FILENAME - spinnerWidth),
        spinner: frames[0],
        speed: formatSpeed('0B'),
        etaFormatted: formatETA(0),
        progress: formatProgress(0, 0),
        downloadedDisplay: formatBytesCompact(0),
        totalDisplay: formatTotalDisplay(0),
    });

    const child = spawn(binary.path, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    ctx.onChild?.(child);

    let frameIndex = 0;
    let lastFrame = Date.now();
    const written = new Set<string>();
    const messages: string[] = [];

    const handleLine = (line: string) => {
        const text = line.trim();
        if (!text) return;

        const progress = parseYtDlpProgress(text);
        if (progress) {
            const now = Date.now();
            if (now - lastFrame >= 120) {
                frameIndex = (frameIndex + 1) % frames.length;
                lastFrame = now;
                bar.options.barsize = calculateBarSize(frames[frameIndex], COL_BAR);
            }
            bar.update(progress.percent, {
                spinner: frames[frameIndex],
                speed: formatSpeed(formatSpeedDisplay(progress.speedBps)),
                etaFormatted: formatETA(progress.etaSeconds),
                progress: formatProgress(progress.downloaded, progress.total),
                downloadedDisplay: formatBytesCompact(progress.downloaded),
                totalDisplay: formatTotalDisplay(progress.total),
            });
            return;
        }

        // `[download] Destination: ...` and `[Merger] Merging formats into "..."`
        // are the two lines that name the file that ends up on disk.
        const destination =
            /^\[download\] Destination:\s*(.+)$/.exec(text)?.[1] ??
            /Merging formats into "(.+)"$/.exec(text)?.[1] ??
            /^\[download\]\s+(.+?)\s+has already been downloaded$/.exec(text)?.[1];
        if (destination) {
            written.add(path.resolve(dir, destination));
            return;
        }

        if (/^\[/.test(text)) return; // routine stage chatter
        messages.push(text);
        if (messages.length > 10) messages.shift();
    };

    const attach = (stream: NodeJS.ReadableStream | null) => {
        if (!stream) return;
        let buffer = '';
        stream.setEncoding('utf8');
        stream.on('data', (chunk: string) => {
            buffer += chunk;
            const parts = buffer.split(/\r|\n/);
            buffer = parts.pop() ?? '';
            parts.forEach(handleLine);
        });
        stream.on('end', () => { if (buffer) handleLine(buffer); });
    };
    attach(child.stdout);
    attach(child.stderr);

    const exitCode: number | null = await new Promise((resolve, reject) => {
        child.on('error', reject);
        child.on('close', (code) => resolve(code));
    });

    bar.stop();
    ctx.onChild?.(null);

    if (exitCode === 0) return [...written];

    if (isCancelInProgress()) throw new Error(`yt-dlp ${describeYtDlpExit(exitCode)}`);
    messages.slice(-5).forEach((m) => console.log(colors.warning(`   ${m}`)));
    throw new Error(`yt-dlp ${describeYtDlpExit(exitCode)}`);
}
