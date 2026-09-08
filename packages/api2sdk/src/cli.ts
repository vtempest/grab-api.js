/**
 * @file cli.ts
 * @description `api2sdk` command: generate a typed SDK from an OpenAPI
 * spec and wire it to the grab-powered Hey API client.
 */

import {
  CLIENT_PACKAGE,
  generateFromOpenAPI,
  previewWithScalar,
  rewireGeneratedClient,
} from "./generate";

const HELP = `
api2sdk — generate an OpenAPI SDK that sends its requests with grab

Usage
  npx api2sdk <spec> [output] [options]

Options
  -i, --input <path|url>   OpenAPI spec to generate from
  -o, --output <dir>       Where to write the SDK        default ./src/client
  -c, --client <name>      Hey API client to generate against
                                                default @hey-api/client-fetch
  --rewire-only            Skip generation, only rewire an existing output dir
  --no-rewire              Generate without swapping in the grab client
  --docs [dir]             Also generate Fumadocs MDX pages from the spec
                                                default ./content/docs/api
                            (run inside a Fumadocs site — needs
                             fumadocs-openapi, fumadocs-core, fumadocs-ui,
                             react and react-dom installed)
  --preview                Serve a local Scalar preview of the spec when done
                            (uses a local \`@scalar/cli\`, or fetches it via npx)
  -h, --help               Show this message

Any other option is forwarded to the openapi-ts CLI.

Examples
  npx api2sdk https://petstore3.swagger.io/api/v3/openapi.json ./src/api
  npx api2sdk -i ./openapi.yaml -o ./src/client
  npx api2sdk --rewire-only ./src/client
  npx api2sdk ./openapi.yaml ./src/client --docs --preview
`;

/**
 * Parses argv into generation options, treating unknown flags as passthrough.
 *
 * @param argv - Arguments after the command name.
 */
const parseArgs = (argv: string[]) => {
  const positional: string[] = [];
  const passthrough: string[] = [];
  let input = "";
  let output = "";
  let client = "";
  let rewire = true;
  let rewireOnly = false;
  let help = false;
  let docs = false;
  let docsOutput = "";
  let preview = false;

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];

    switch (arg) {
      case "-h":
      case "--help":
        help = true;
        break;
      case "-i":
      case "--input":
        input = argv[++i];
        break;
      case "-o":
      case "--output":
        output = argv[++i];
        break;
      case "-c":
      case "--client":
        client = argv[++i];
        break;
      case "--no-rewire":
        rewire = false;
        break;
      case "--rewire-only":
        rewireOnly = true;
        break;
      case "--docs":
        docs = true;
        if (argv[i + 1] && !argv[i + 1].startsWith("-")) docsOutput = argv[++i];
        break;
      case "--preview":
        preview = true;
        break;
      default:
        if (arg.startsWith("-")) {
          passthrough.push(arg);
          // Keep the flag's value with it when one follows.
          if (argv[i + 1] && !argv[i + 1].startsWith("-")) passthrough.push(argv[++i]);
        } else {
          positional.push(arg);
        }
    }
  }

  return {
    client,
    docs,
    docsOutput,
    help,
    input: input || positional[0] || "",
    output: output || (input ? positional[0] : positional[1]) || "",
    passthrough,
    preview,
    rewire,
    rewireOnly,
  };
};

/** Runs the CLI. */
export const main = async (argv: string[] = process.argv.slice(2)) => {
  const options = parseArgs(argv);

  if (options.help || (!options.input && !options.rewireOnly)) {
    console.log(HELP);
    process.exit(options.help ? 0 : 1);
  }

  if (options.rewireOnly) {
    const target = options.output || options.input || "./src/client";
    const rewired = rewireGeneratedClient(target);
    console.log(
      `✓ Rewired ${rewired.length} file(s) in ${target} to use ${CLIENT_PACKAGE}`,
    );
    return;
  }

  const result = await generateFromOpenAPI({
    args: options.passthrough,
    client: options.client || undefined,
    docs: options.docs,
    docsOutput: options.docsOutput || undefined,
    input: options.input,
    output: options.output || undefined,
    rewire: options.rewire,
  });

  console.log(
    options.rewire
      ? `✓ Generated ${result.output} — requests are sent by grab (${result.rewired.length} file(s) rewired)`
      : `✓ Generated ${result.output}`,
  );

  if (result.docs) console.log(`✓ Generated Fumadocs pages in ${result.docs}`);

  if (options.preview) {
    console.log(`→ Serving a Scalar preview of ${options.input} (Ctrl+C to stop)`);
    await previewWithScalar(options.input);
  }
};

main().catch((error) => {
  console.error(`✗ ${error?.message || error}`);
  process.exit(1);
});
