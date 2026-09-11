# @grab-url/cli

CLI front end for [`grab-url`](https://grab.js.org). Fetches API responses, downloads files over HTTP(S), archives whole web pages into readable folders, and transfers over **SFTP**, **BitTorrent** and **magnet** links — auto-detecting which mode to use from the URL — with colored multi-file progress bars, resumable transfers, keyboard controls, and detachable background jobs.

```bash
npx grab-url <url> [options]
```

## Examples

```bash
# Fetch JSON/text from an API and save to output.json
npx grab-url https://api.example.com/data

# Download a file
npx grab-url https://releases.ubuntu.com/24.04.2/ubuntu-24.04.2-live-server-amd64.iso

# Download multiple files concurrently
npx grab-url https://example.com/file1.zip https://example.com/file2.zip

# Save the first URL to a custom filename
npx grab-url https://example.com/file.iso -o ubuntu.iso

# Pass query params as JSON
npx grab-url https://api.example.com/search -p '{"q":"hello","limit":10}'

# Print to stdout instead of writing a file
npx grab-url https://api.example.com/data --no-save

# Pull a file over SFTP (aria2c)
npx grab-url sftp://user@host/srv/backup.tar.gz --password hunter2

# Download a torrent or a magnet link into ./downloads
npx grab-url ./ubuntu.torrent -d ./downloads
npx grab-url "magnet:?xt=urn:btih:HASH" -d ./downloads --seed

# Detach immediately and keep transferring in the background
npx grab-url https://example.com/big.iso --background

# See what is still running in the background
npx grab-url --jobs

# Archive a page into ./<Page Title>/ - full page, article, cite, transcript, video
npx grab-url https://example.com/article --page
```

## Options

| Flag                | Alias | Type    | Description                                                                |
| ------------------- | ----- | ------- | -------------------------------------------------------------------------- |
| `--output <file>`   | `-o`  | string  | Output filename (default: `output.json` for APIs, derived from URL for files) |
| `--params <json>`   | `-p`  | string  | JSON string of query parameters, e.g. `'{"key":"value"}'`                 |
| `--no-save`         |       | boolean | Don't save output to a file — just print to console                       |
| `--page`             | `-P`  | Archive each URL into a folder named after its page title                   |
| `--no-video`         |       | With `--page`, skip the yt-dlp video download                             |
| `--video-format <f>` |       | With `--page`, format selector passed to `yt-dlp -f`                       |
| `--lang <codes>`     |       | With `--page`, comma-separated transcript languages (default `en`)         |
| `--background`      | `-b`  | boolean | Detach at once and keep transferring in the background, logging to a file  |
| `--jobs`            |       | boolean | List background transfers that are still running, then exit                |
| `--log <file>`      |       | string  | Log file for background transfers (default: `<state-dir>/logs/`)          |
| `--no-bg-prompt`    |       | boolean | On Ctrl+C, cancel right away instead of offering the background handoff    |
| `--dir <path>`      | `-d`  | string  | Destination directory for downloads and sftp / torrent / magnet transfers  |
| `--seed`            |       | boolean | Keep seeding a torrent after it completes (default: stop at 100%)          |
| `--connections <n>` | `-c`  | number  | Connections per server for SFTP transfers, 1–16 (default 8)                |
| `--user <name>`     |       | string  | Username for SFTP transfers                                                |
| `--password <pw>`   |       | string  | Password for SFTP transfers                                                |
| `--ssh-host-key <d>`|       | string  | Expected SFTP host key digest, e.g. `sha-1=b030503…` — aborts on mismatch  |
| `--aria2-args <s>`  |       | string  | Extra space-separated flags passed straight to `aria2c`                    |
| `--help`            | `-h`  |         | Show help                                                                  |
| `--version`         |       |         | Show version                                                               |

The CLI auto-detects **download mode** when more than one URL is passed or any URL looks like a file. Otherwise it runs in **API mode** and tries to parse JSON.

## Page archives

`--page` saves a page as a folder you can read with no network, named after the page title:

```text
Rockets A Primer/
  page.html              the full page exactly as fetched
  content.html           reading-mode article body
  cite.html              APA citation + extracted metadata
  transcript.html        YouTube transcript, when the URL is a video
  Rockets [abc123].mp4   whatever yt-dlp caught, when it recognised the URL
```

```bash
npx grab-url https://example.com/article --page
npx grab-url https://youtu.be/dQw4w9WgXcQ --page -d ./archive --lang es,en
npx grab-url https://example.com/article --page --no-video
npx grab-url https://example.com/talk --page --video-format bestaudio
```

Content, citation and transcript come from
[`extract-webpage`](https://www.npmjs.com/package/extract-webpage), qwksearch's extractor:
the same Readability + Mercury content detection, 100+ site adapters and author/date citation
parsing. It is an **optional peer dependency** - it pulls in jsdom and linkedom, and only
`--page` needs it, so install it alongside the CLI when you want page archives:

```bash
npm i -g extract-webpage
```

The video step is handed to [`yt-dlp`](https://github.com/yt-dlp/yt-dlp), which is offered
every archived URL and keeps whatever it recognises - it supports well over a thousand sites,
including videos embedded in an ordinary article. It is optional too: without it the HTML
files are still written and the CLI says so. `GRAB_YTDLP_PATH` points at a binary that is not
on `PATH`. Playlists and channels are never expanded.

The page is fetched once and feeds both `page.html` and the extractor, so the archived page
and the archived article are always the same revision. Re-running the same command refreshes
an existing folder rather than creating a second copy.

`-d` chooses the parent directory; with a single URL, `-o` overrides the folder name
instead of deriving it from the page title. Several URLs can be archived in one command -
each gets its own folder, and one failure does not stop the rest.

## SFTP, torrents and magnet links

`fetch()` cannot speak SFTP or BitTorrent, so those targets are handed to
[`aria2c`](https://aria2.github.io/), whose progress readout is parsed and shown in the same
progress bar as every other transfer. A target is routed to aria2c when it is:

| Target                                | Kind      |
| ------------------------------------- | --------- |
| `sftp://user@host/path/file`          | `sftp`    |
| `magnet:?xt=urn:btih:…`               | `magnet`  |
| anything ending in `.torrent` (local path or URL) | `torrent` |

Everything else keeps using the built-in `fetch()` downloader, and a single command can mix
both: `grab-url https://a/f.iso ./b.torrent` downloads the torrent first, then the file.

**aria2c is required for these three kinds.** When it is missing, the CLI says so and prints the
install command for your platform (`brew install aria2`, `sudo apt install aria2`,
`winget install aria2.aria2`). Set `GRAB_ARIA2_PATH` to use a binary that is not on `PATH`. SFTP
and BitTorrent are compile-time features of aria2c, so a build without them is rejected up front
with the feature list it does have.

```bash
# Credentials inline, or as flags (flags keep them out of shell history files)
grab-url sftp://alice:hunter2@host:2222/srv/db.tar.zst
grab-url sftp://host:2222/srv/db.tar.zst --user alice --password hunter2

# Pin the host key; the transfer aborts if the server presents a different one
grab-url sftp://host/srv/db.tar.zst --user alice --password hunter2 \
  --ssh-host-key sha-1=b030503bb45f9f0e0a1e9c4a1e0b8f4c3d2e1f00

# Rename the downloaded file (sftp only — torrents carry their own names)
grab-url sftp://host/srv/db.tar.zst -o backup.tar.zst

# Throttle, or pass any other aria2c flag straight through
grab-url ./ubuntu.torrent --aria2-args "--max-overall-download-limit=2M --enable-dht=false"
```

Passwords are redacted (`sftp://alice:***@host`) everywhere the CLI echoes a URI — console
output, background logs and the job registry.

Interrupted transfers resume: aria2c keeps a `.aria2` control file next to the download, so
re-running the same command picks up where it stopped.

## Background transfers

Long transfers do not have to hold your terminal.

```bash
# Start detached right away — prints the PID and log path, then returns
grab-url https://example.com/big.iso --background

# List what is still running (dead jobs are pruned automatically)
grab-url --jobs

# Follow one, or stop it
tail -f .grab-downloads/logs/big.iso-….log
kill <pid>
```

Press **Ctrl+C** during any transfer and the CLI asks before it throws the work away:

```
🛑 Cancel — keep transferring in the background? [Y/n]
```

- **y** (or Enter) — the transfer is handed to a detached process that resumes from the partial
  file, and you get its PID and log path. The prompt auto-accepts after 15 seconds so a
  disconnected terminal does not strand the download.
- **n** — the transfer stops. The partial file and its resume state stay on disk, so running the
  same command again continues from there.

Ctrl+C a second time while the prompt is up answers **n**. `--no-bg-prompt` skips the question
entirely, and non-interactive shells (pipes, CI) always cancel outright.

Backgrounding re-launches the same command as a detached child rather than migrating live
sockets, so it relies on the same resume machinery as any interrupted transfer: HTTP transfers
resume when the server supports range requests, and SFTP/torrent transfers resume from aria2c's
control file. Job records and logs live under the download state directory
(`.grab-downloads/` by default, or `GRAB_DOWNLOAD_STATE_DIR`).

## Keyboard controls

| Key      | Action                                                    |
| -------- | --------------------------------------------------------- |
| `p`      | Pause / resume every transfer (aria2c children included)   |
| `a`      | Prompt for another URL to add to the running session       |
| `Ctrl+C` | Cancel — with the option to keep going in the background  |

## Programmatic API

The package also exports its primitives so you can embed the downloader in your own scripts:

```ts
import {
  MultiColorFileDownloaderCLI,
  ArgParser,
  isFileUrl,
  isValidUrl,
  generateFilename,
  getFileExtension,
} from "@grab-url/cli";

const downloader = new MultiColorFileDownloaderCLI();
await downloader.downloadMultipleFiles([
  { url: "https://example.com/a.zip", outputPath: "./a.zip", filename: "a.zip" },
  { url: "https://example.com/b.zip", outputPath: "./b.zip", filename: "b.zip" },
]);
```

## What's in this package

| File / Folder                                   | Purpose                                                            |
| ----------------------------------------------- | ------------------------------------------------------------------ |
| [index.ts](index.ts)                            | CLI entry point — argv parsing, mode detection, dispatch           |
| [cli-args.ts](cli-args.ts)                      | Minimal `ArgParser` (yargs-like) and `isFileUrl` detection          |
| [file-downloader.ts](file-downloader.ts)        | `MultiColorFileDownloaderCLI` — concurrent download orchestrator    |
| [background.ts](background.ts)                  | Detached background jobs, the job registry, and the cancel prompt   |
| [cancel-state.ts](cancel-state.ts)              | Shared "user is cancelling" flag that quiets abort-induced errors   |
| [keyboard-controls.ts](keyboard-controls.ts)    | Pause / resume / cancel keybindings while downloads run            |
| [download-spinners.ts](download-spinners.ts)    | Spinner frames used by progress bars                               |
| [display/](display/)                            | Progress bar formatting and spinner configuration                  |
| [transfer/](transfer/)                          | Single-file & multi-file transfer engines, resume state, and the aria2c bridge |

## Dependencies

- [`chalk`](https://github.com/chalk/chalk) — terminal colors
- [`cli-progress`](https://github.com/npkgz/cli-progress) — multi-bar progress UI
- [`cli-table3`](https://github.com/cli-table/cli-table3) — final stats table
- [`@grab-url/loading-animations`](../loading-animations) — spinner frame data
- [`aria2c`](https://aria2.github.io/) — *external binary*, only needed for SFTP, torrent and magnet transfers

## License

MIT
