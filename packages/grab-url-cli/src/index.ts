/**
 * @file grab-url.ts
 * @description CLI entry point for grab-url. Supports API requests, file
 * downloads, SFTP / BitTorrent / magnet transfers (via aria2c), and detached
 * background jobs.
 *
 * Usage:
 *   npx grab-url <url> [options]
 *   npx grab-url https://api.example.com/data
 *   npx grab-url https://example.com/file.zip
 *   npx grab-url sftp://user@host/path/file.iso
 *   npx grab-url "magnet:?xt=urn:btih:..." --background
 */

import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import type { ChildProcess } from "child_process";

import chalk from "chalk";
import Table from "cli-table3";

import { ArgParser, isFileUrl } from "./cli-args.js";
import { MultiColorFileDownloaderCLI } from "./file-downloader.js";
import {
  classifyAria2Target,
  isAria2Target,
  runAria2Transfer,
} from "./transfer/aria2-transfer.js";
import {
  detachToBackground,
  isBackgroundChild,
  printJobs,
  promptYesNo,
  reportDetached,
} from "./background.js";
import { colors } from "./display/progress-format.js";
import { getStateDirectory } from "./transfer/resume-state.js";
import { isCancelInProgress, setCancelInProgress } from "./cancel-state.js";
import grab, { log } from "../../grab-api/src/index.js";

// ─── Library re-exports (for programmatic use) ──────────────────────────────
export { MultiColorFileDownloaderCLI } from "./file-downloader.js";
export type { Download } from "./file-downloader.js";
export {
  isValidUrl,
  generateFilename,
  getFileExtension,
} from "./keyboard-controls.js";
export { ArgParser, isFileUrl } from "./cli-args.js";
export {
  classifyAria2Target,
  isAria2Target,
  buildAria2Args,
  parseAria2Progress,
  parseAria2Size,
  parseAria2Eta,
  findAria2,
  runAria2Transfer,
} from "./transfer/aria2-transfer.js";
export type { Aria2Kind, Aria2Options } from "./transfer/aria2-transfer.js";
export {
  detachToBackground,
  buildChildArgv,
  isBackgroundChild,
  listJobs,
  printJobs,
  promptYesNo,
} from "./background.js";
export type { JobRecord } from "./background.js";
export { isCancelInProgress, setCancelInProgress } from "./cancel-state.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Run CLI only when executed directly (not when imported as a module)
const __isMain =
  (typeof import.meta.main === "boolean" && import.meta.main) ||
  (() => {
    try {
      const scriptArg = process.argv[1] ? path.resolve(process.argv[1]) : "";
      if (!scriptArg) return false;
      return import.meta.url === pathToFileURL(scriptArg).href;
    } catch {
      return false;
    }
  })();

if (__isMain) {
  const argv = new ArgParser()
    .usage("Usage: grab-url <url...> [options]")
    .command("$0 <url>", "Fetch data, download files, or transfer sftp/torrent/magnet")
    .option("no-save", {
      type: "boolean",
      default: false,
      describe: "Don't save output to file, just print to console",
    })
    .option("output", {
      alias: "o",
      type: "string",
      describe: "Output filename (default: output.json)",
      default: null,
    })
    .option("params", {
      alias: "p",
      type: "string",
      describe: 'JSON string of query parameters (e.g., \'{"key":"value"}\')',
      coerce: (arg: string) => {
        if (!arg) return {};
        try {
          return JSON.parse(arg);
        } catch {
          throw new Error(`Invalid JSON in params: ${arg}`);
        }
      },
    })
    .option("background", {
      alias: "b",
      type: "boolean",
      default: false,
      describe: "Detach and transfer in the background, logging to a file",
    })
    .option("jobs", {
      type: "boolean",
      default: false,
      standalone: true,
      describe: "List background transfers still running, then exit",
    })
    .option("log", {
      type: "string",
      default: null,
      describe: "Log file for background transfers (default: <state-dir>/logs)",
    })
    .option("no-bg-prompt", {
      type: "boolean",
      default: false,
      describe: "On Ctrl+C, cancel immediately instead of offering background",
    })
    .option("dir", {
      alias: "d",
      type: "string",
      default: null,
      describe: "Destination directory for downloads and sftp/torrent/magnet",
    })
    .option("seed", {
      type: "boolean",
      default: false,
      describe: "Keep seeding a torrent after it completes",
    })
    .option("connections", {
      alias: "c",
      type: "number",
      default: 8,
      describe: "Connections per server for sftp transfers (1-16)",
    })
    .option("user", {
      type: "string",
      default: null,
      describe: "Username for sftp transfers",
    })
    .option("password", {
      type: "string",
      default: null,
      describe: "Password for sftp transfers",
    })
    .option("ssh-host-key", {
      type: "string",
      default: null,
      describe: "Expected sftp host key digest, e.g. sha-1=b030503...",
    })
    .option("aria2-args", {
      type: "string",
      default: null,
      greedy: true,
      describe: "Extra space-separated flags passed straight to aria2c",
    })
    .option("grab-background-child", {
      type: "boolean",
      default: false,
      hidden: true,
      describe: "Internal: marks a detached background process",
    })
    .help()
    .alias("h", "help")
    .example(
      "grab-url https://api.example.com/data",
      "Fetch JSON/text from an API and save to output.json",
    )
    .example(
      "grab-url https://example.com/file1.zip https://example.com/file2.zip",
      "Download multiple files concurrently",
    )
    .example(
      "grab-url https://example.com/file.iso -o ubuntu.iso",
      "Save the first URL to a custom filename",
    )
    .example(
      "grab-url sftp://user@host/srv/backup.tar.gz --password hunter2",
      "Pull a file over SFTP with aria2c",
    )
    .example(
      'grab-url "magnet:?xt=urn:btih:HASH" -d ./downloads',
      "Download a magnet link into ./downloads",
    )
    .example(
      "grab-url https://example.com/big.iso --background",
      "Detach immediately and keep downloading in the background",
    )
    .example("grab-url --jobs", "List background transfers that are still running")
    .version("1.2.0")
    .strict()
    .parseSync();

  const urls: string[] = argv.urls || [];
  const params: Record<string, any> = argv.params || {};
  const outputFile: string | null = argv.output;
  const noSave: boolean = argv["no-save"];

  // Path only — the state directory is created by whichever transfer needs it,
  // so a plain API request leaves no .grab-downloads behind.
  const stateDir = getStateDirectory();

  let downloaderInstance: MultiColorFileDownloaderCLI | null = null;
  /** Build the downloader on first use and wire up its Ctrl+C handler. */
  const getDownloader = () => {
    if (!downloaderInstance) {
      downloaderInstance = new MultiColorFileDownloaderCLI();
      downloaderInstance.setCancelHandler(handleCancel);
    }
    return downloaderInstance;
  };

  // --- Background job listing (no URL needed) ---
  if (argv.jobs) {
    printJobs(stateDir);
    process.exit(0);
  }

  // --- Detach up front when --background was passed ---
  if (argv.background && !isBackgroundChild()) {
    const handoff = detachToBackground({
      stateDir,
      urls,
      logFile: argv.log,
      reason: "flag",
    });
    if (!handoff) process.exit(1);
    reportDetached(handoff);
    process.exit(0);
  }

  // Split targets: aria2c handles sftp / torrent / magnet, fetch() handles the rest
  const aria2Targets = urls.filter(isAria2Target);
  const webUrls = urls.filter((url) => !isAria2Target(url));
  const anyFileUrl = webUrls.some(isFileUrl);
  const isDownloadMode = webUrls.length > 1 || anyFileUrl;

  const aria2Options = {
    dir: argv.dir ? path.resolve(argv.dir) : process.cwd(),
    output: outputFile,
    seed: !!argv.seed,
    connections: Number(argv.connections) || 8,
    user: argv.user,
    password: argv.password,
    sshHostKey: argv["ssh-host-key"],
    extraArgs:
      typeof argv["aria2-args"] === "string"
        ? argv["aria2-args"].split(" ").filter(Boolean)
        : [],
  };

  // ── Cancellation: offer to keep the transfer running in the background ──────
  let aria2Child: ChildProcess | null = null;
  let cancelling = false;

  /** Stop in-flight transfers so a background handoff can take over the files. */
  const stopTransfers = async () => {
    if (aria2Child && !aria2Child.killed) {
      const child = aria2Child;
      // SIGINT lets aria2c flush its .aria2 control file so the next run resumes.
      const exited = new Promise<void>((resolve) => {
        child.once("close", () => resolve());
        setTimeout(resolve, 5000);
      });
      try {
        child.kill("SIGCONT");
        child.kill("SIGINT");
      } catch {
        /* already gone */
      }
      await exited;
    }
    downloaderInstance?.cleanup();
    // Give the write streams a beat to flush before another process appends.
    await new Promise((r) => setTimeout(r, 300));
  };

  const handleCancel = async () => {
    if (cancelling) return;
    cancelling = true;
    // Silences the abort-induced "failed" reporting in the transfer engines.
    setCancelInProgress(true);

    const canPrompt = process.stdin.isTTY && !argv["no-bg-prompt"];
    const keepGoing = canPrompt
      ? await promptYesNo("🛑 Cancel — keep transferring in the background?", true)
      : false;

    await stopTransfers();

    if (keepGoing) {
      const handoff = detachToBackground({
        stateDir,
        urls,
        logFile: argv.log,
        reason: "cancel",
      });
      if (handoff) {
        reportDetached(handoff);
        process.exit(0);
      }
    }

    console.log(colors.warning.bold("\n🛑 Transfer cancelled by user"));
    console.log(
      colors.info("💾 Partial progress saved. Run the same command to resume."),
    );
    process.exit(130);
  };

  if (!process.stdin.isTTY) process.on("SIGINT", () => void handleCancel());

  (async () => {
    // --- aria2c Mode: sftp / torrent / magnet ---
    let aria2Failures = 0;
    for (const target of aria2Targets) {
      const kind = classifyAria2Target(target)!;
      const downloader = getDownloader();
      downloader.setupGlobalKeyboardListener();
      try {
        await runAria2Transfer(target, aria2Options, {
          isPaused: () => downloader.isPaused,
          onChild: (child) => {
            aria2Child = child;
          },
        });
      } catch (error: any) {
        if (isCancelInProgress()) return;
        aria2Failures++;
        console.error(
          colors.error.bold(`💥 ${kind} transfer failed: `) +
            colors.warning(error.message),
        );
      }
    }
    if (aria2Targets.length && !webUrls.length) {
      downloaderInstance?.cleanup();
      process.exit(aria2Failures > 0 ? 1 : 0);
    }

    if (isDownloadMode) {
      // --- Download Mode ---
      const downloader = getDownloader();
      const targetDir = argv.dir ? path.resolve(argv.dir) : process.cwd();
      const downloadObjects = webUrls.map((url, i) => {
        let filename =
          i === 0 && outputFile ? outputFile : downloader.generateFilename(url, targetDir);
        const outputPath = path.isAbsolute(filename)
          ? filename
          : path.join(targetDir, filename);
        const outputDir = path.dirname(outputPath);
        try {
          if (!fs.existsSync(outputDir))
            fs.mkdirSync(outputDir, { recursive: true });
        } catch (error: any) {
          console.error(
            chalk.red.bold("❌ Could not create output directory: ") +
              error.message,
          );
          process.exit(1);
        }
        return { url, outputPath, filename: path.basename(filename) };
      });

      try {
        await downloader.downloadMultipleFiles(downloadObjects);
        if (isCancelInProgress()) return;

        // Display file stats table
        const statsTable = new Table({
          head: ["Filename", "Size", "Created"],
          colWidths: [32, 14, 25],
          colAligns: ["left", "right", "left"],
          style: {
            "padding-left": 1,
            "padding-right": 1,
            head: [],
            border: [],
          },
        });

        downloadObjects.forEach((obj) => {
          try {
            const stats = fs.statSync(obj.outputPath);
            statsTable.push([
              obj.filename,
              downloader.formatBytes(stats.size),
              stats.birthtime.toLocaleString(),
            ]);
          } catch {
            statsTable.push([obj.filename, "Error", "Could not read"]);
          }
        });

        console.log(chalk.cyan.bold("\nFile Details:"));
        console.log(statsTable.toString());
      } catch (error: any) {
        if (isCancelInProgress()) return;
        console.error(
          chalk.red.bold("Failed to download files: ") +
            chalk.yellow(error.message),
        );
        process.exit(1);
      }
      downloader.cleanup();
    } else {
      // --- API Mode ---
      const url = webUrls[0];
      const startTime = process.hrtime();

      try {
        const res = await grab(url, params);
        if (res.error) log(`\n\nStatus: ❌ ${res.error}`);

        let filePath: string | null = null;
        let outputData: any;
        let isTextData = false;

        if (typeof res.data === "string") {
          outputData = res.data;
          isTextData = true;
        } else if (
          Buffer.isBuffer(res.data) ||
          res.data instanceof Uint8Array
        ) {
          outputData = res.data;
          isTextData = false;
        } else if (res.data instanceof Blob) {
          outputData = Buffer.from(await res.data.arrayBuffer());
          isTextData = false;
        } else if (res.data && typeof res.data === "object") {
          outputData = JSON.stringify(res.data, null, 2);
          isTextData = true;
        } else {
          outputData = String(res.data);
          isTextData = true;
        }

        if (!noSave) {
          const urlPath = new URL(url).pathname;
          const urlExt = path.extname(urlPath);
          const defaultExt = isTextData ? ".json" : urlExt || ".bin";
          filePath = outputFile
            ? path.resolve(outputFile)
            : path.resolve(process.cwd(), `output${defaultExt}`);

          if (isTextData) fs.writeFileSync(filePath, outputData, "utf8");
          else fs.writeFileSync(filePath, outputData);

          const [seconds, nanoseconds] = process.hrtime(startTime);
          const elapsedMs = (seconds + nanoseconds / 1e9).toFixed(2);
          const stats = fs.statSync(filePath);
          const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(1);
          log(`⏱️ ${elapsedMs}s 📦 ${fileSizeMB}MB ✅ Saved to: ${filePath}`);
        } else {
          if (isTextData) log(outputData);
          else
            log(
              `Binary data received (${outputData.length} bytes). Use --output to save to file.`,
            );
        }
      } catch (error: any) {
        log(`Error: ${error.message}`, { color: "red" });
        process.exit(1);
      }
    }
  })();
}
