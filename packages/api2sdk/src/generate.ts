/**
 * @file generate.ts
 * @description Generates a typed SDK from an OpenAPI spec with
 * `@hey-api/openapi-ts`, then rewires the generated code to send its requests
 * through grab instead of the fetch or axios client it shipped with.
 */

import { spawn } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

/** npm package name of this client, as generated code should import it. */
export const CLIENT_PACKAGE = "api2sdk";

/** Hey API clients whose imports get pointed at this package instead. */
const REPLACED_PACKAGES = [
  "@hey-api/client-axios",
  "@hey-api/client-fetch",
  "@hey-api/client-ky",
  "@hey-api/client-next",
  "@hey-api/client-nuxt",
  "@hey-api/client-ofetch",
];

const GENERATED_EXTENSIONS = [".ts", ".tsx", ".mts", ".cts", ".js", ".mjs", ".cjs"];

/** Options for {@link generateFromOpenAPI}. */
export interface GenerateOptions {
  /** Path or URL of the OpenAPI spec. */
  input: string;
  /** default="./src/client" Directory to write the generated SDK into. */
  output?: string;
  /** default="@hey-api/client-fetch" Hey API client to generate against before rewiring. */
  client?: string;
  /** default=process.cwd() Directory to resolve `@hey-api/openapi-ts` and paths from. */
  cwd?: string;
  /** default=true Point the generated SDK at this grab-powered client. */
  rewire?: boolean;
  /** default=false Also generate Fumadocs MDX documentation pages from the spec. */
  docs?: boolean;
  /** default="./content/docs/api" Directory to write generated Fumadocs pages into, when `docs` is set. */
  docsOutput?: string;
  /** Extra arguments forwarded to the `openapi-ts` CLI. */
  args?: string[];
}

/** What {@link generateFromOpenAPI} did. */
export interface GenerateResult {
  /** Absolute path of the generated SDK directory. */
  output: string;
  /** Files rewritten to use the grab client. */
  rewired: string[];
  /** Absolute path of the generated Fumadocs pages, when `docs` was set. */
  docs?: string;
}

/**
 * Locates the `openapi-ts` CLI installed next to the project.
 *
 * @param cwd - Directory to resolve from.
 * @returns The command and leading arguments to spawn.
 */
const resolveOpenApiTs = (cwd: string): { command: string; args: string[] } => {
  try {
    const require = createRequire(pathToFileURL(join(cwd, "package.json")));
    const manifestPath = require.resolve("@hey-api/openapi-ts/package.json");
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
    const bin =
      typeof manifest.bin === "string" ? manifest.bin : manifest.bin?.["openapi-ts"];

    if (bin)
      return {
        command: process.execPath,
        args: [resolve(manifestPath, "..", bin)],
      };
  } catch {
    // Not installed locally — fall back to fetching it on demand.
  }

  return {
    command: process.platform === "win32" ? "npx.cmd" : "npx",
    args: ["-y", "@hey-api/openapi-ts"],
  };
};

/**
 * Locates a `@scalar/cli` binary installed next to the project.
 *
 * @param cwd - Directory to resolve from.
 * @returns The command and leading arguments to spawn.
 */
const resolveScalarCli = (cwd: string): { command: string; args: string[] } => {
  const localBin = join(
    cwd,
    "node_modules",
    ".bin",
    process.platform === "win32" ? "scalar.cmd" : "scalar",
  );

  if (existsSync(localBin)) return { command: localBin, args: [] };

  return {
    command: process.platform === "win32" ? "npx.cmd" : "npx",
    args: ["-y", "@scalar/cli"],
  };
};

/**
 * Generates Fumadocs MDX documentation pages from an OpenAPI spec with
 * `fumadocs-openapi`. Meant to be run inside a project that already has a
 * Fumadocs site set up — `fumadocs-openapi` requires `fumadocs-core`,
 * `fumadocs-ui`, `react` and `react-dom` as peers, all optional here since
 * they're only needed when generating docs.
 *
 * @param input - Path or URL of the OpenAPI spec.
 * @param output - Directory to write the generated MDX pages into.
 */
export const generateDocs = async (input: string, output: string): Promise<void> => {
  let generateFiles: typeof import("fumadocs-openapi").generateFiles;
  let createOpenAPI: typeof import("fumadocs-openapi/server").createOpenAPI;

  try {
    [{ generateFiles }, { createOpenAPI }] = await Promise.all([
      import("fumadocs-openapi"),
      import("fumadocs-openapi/server"),
    ]);
  } catch (error) {
    throw new Error(
      "Could not load fumadocs-openapi. It — and its peers fumadocs-core, " +
        "fumadocs-ui, react and react-dom — must be installed in a project " +
        "with a Fumadocs site set up. Run `npm i fumadocs-openapi fumadocs-core " +
        "fumadocs-ui react react-dom` to generate docs.\n" +
        (error as Error).message,
    );
  }

  const server = createOpenAPI({ input: [input] });

  await generateFiles({
    input: server,
    output,
    includeDescription: true,
  });
};

/**
 * Serves a local Scalar preview of an OpenAPI spec via the `@scalar/cli`
 * `document serve` command. Resolves once the server is stopped (Ctrl+C).
 *
 * @param input - Path or URL of the OpenAPI spec.
 * @param cwd - default=process.cwd() Directory to resolve a locally installed `@scalar/cli` from.
 * @param port - Port for the preview server, if not left to Scalar's default.
 */
export const previewWithScalar = (
  input: string,
  cwd: string = process.cwd(),
  port?: number,
): Promise<void> => {
  const { command, args } = resolveScalarCli(cwd);
  const portArgs = port ? ["-p", String(port)] : [];
  return run(command, [...args, "document", "serve", ...portArgs, input], cwd);
};

/** Runs a command, inheriting stdio, and resolves when it exits cleanly. */
const run = (command: string, args: string[], cwd: string): Promise<void> =>
  new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, { cwd, stdio: "inherit" });
    child.on("error", reject);
    child.on("close", (code) =>
      code === 0
        ? resolvePromise()
        : reject(new Error(`${command} exited with code ${code}`)),
    );
  });

/** Lists every generated file under a directory, recursively. */
const listFiles = (dir: string): string[] => {
  const entries: string[] = [];

  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) entries.push(...listFiles(path));
    else if (GENERATED_EXTENSIONS.some((ext) => path.endsWith(ext)))
      entries.push(path);
  }

  return entries;
};

/**
 * Body of the replacement client module for bundled output, where Hey API
 * copies its client into `<output>/client` instead of importing a package.
 */
const bundledClientShim = (hasTypes: boolean) =>
  hasTypes
    ? `// This file is generated by ${CLIENT_PACKAGE}. It replaces the bundled Hey API
// client so every request is sent by grab (grab.js.org).

import { createClient as createGrabClient } from "${CLIENT_PACKAGE}";

import type { Client, Config } from "./types.gen";

export const createClient = (config: Config = {}): Client =>
  createGrabClient(config as never) as unknown as Client;
`
    : `// This file is generated by ${CLIENT_PACKAGE}. It replaces the bundled Hey API
// client so every request is sent by grab (grab.js.org).

export { createClient } from "${CLIENT_PACKAGE}";
`;

/**
 * Points already generated Hey API output at the grab client. Handles both
 * output shapes: a bundled `client/` folder, and imports of a client package.
 *
 * @param output - Directory holding the generated SDK.
 * @param packageName - default="api2sdk" Client package to import.
 * @returns Paths of the files that were rewritten.
 */
export const rewireGeneratedClient = (
  output: string,
  packageName: string = CLIENT_PACKAGE,
): string[] => {
  const outputDir = resolve(output);

  if (!existsSync(outputDir))
    throw new Error(`No generated output found at ${outputDir}`);

  const rewired: string[] = [];

  // Bundled output: swap the copied client implementation for this one.
  const bundledClient = join(outputDir, "client", "client.gen.ts");
  if (existsSync(bundledClient)) {
    const hasTypes = existsSync(join(outputDir, "client", "types.gen.ts"));
    writeFileSync(bundledClient, bundledClientShim(hasTypes), "utf8");
    rewired.push(bundledClient);
  }

  // Package output: repoint imports of the fetch/axios/... clients.
  for (const file of listFiles(outputDir)) {
    const contents = readFileSync(file, "utf8");
    let updated = contents;

    for (const replaced of REPLACED_PACKAGES)
      updated = updated.split(`"${replaced}"`).join(`"${packageName}"`)
        .split(`'${replaced}'`).join(`'${packageName}'`);

    if (updated !== contents) {
      writeFileSync(file, updated, "utf8");
      rewired.push(file);
    }
  }

  return rewired;
};

/**
 * Generates an SDK from an OpenAPI spec and wires it to the grab client.
 *
 * @param options - Spec location, output directory and generation settings.
 * @returns The output directory and the files that were rewired.
 * @example
 * await generateFromOpenAPI({
 *   input: "https://petstore3.swagger.io/api/v3/openapi.json",
 *   output: "./src/client",
 * });
 */
export const generateFromOpenAPI = async (
  options: GenerateOptions,
): Promise<GenerateResult> => {
  const {
    input,
    output = "./src/client",
    client = "@hey-api/client-fetch",
    cwd = process.cwd(),
    rewire = true,
    docs = false,
    docsOutput = "./content/docs/api",
    args = [],
  } = options;

  if (!input) throw new Error("An OpenAPI spec path or URL is required");

  const outputDir = resolve(cwd, output);
  const { command, args: commandArgs } = resolveOpenApiTs(cwd);

  await run(
    command,
    [...commandArgs, "-i", input, "-o", outputDir, "-c", client, ...args],
    cwd,
  );

  const result: GenerateResult = {
    output: outputDir,
    rewired: rewire ? rewireGeneratedClient(outputDir) : [],
  };

  if (docs) {
    result.docs = resolve(cwd, docsOutput);
    await generateDocs(input, result.docs);
  }

  return result;
};
