//types
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";

/**
 * Generate docs from JSDoc comments in files, OpenAPI.yml spec for 
 * routes, search index of everything, custom pages, sidebar & theme.
 * 
 * Files: api-routes.yaml, docs-theme.css, plugin-openapi.mustache, 
 *  plugin-typedoc.js, sidebars.ts, docusaurus.config.ts
 * 
 * *Install dependencies*:
 * bun install -D @docusaurus/core @docusaurus/faster @docusaurus/plugin-google-gtag
 *  @docusaurus/preset-classic docusaurus-lunr-search docusaurus-plugin-openapi-docs 
 * docusaurus-plugin-typedoc docusaurus-theme-openapi-docs prism-react-renderer react
 *  react-dom clsx typedoc typedoc-plugin-markdown typescript
 * https://github.com/vtempest/ai-research-agent/blob/master/docs/api.mustache
 * *Add to package.json*:
 * "docs": "docusaurus serve --dir web-app/static/docs",
 * "docs:build": "NODE_NO_WARNINGS=1 docusaurus clean-api-docs  all --all-versions ;
 *  NODE_NO_WARNINGS=1 docusaurus  gen-api-docs all  --all-versions ;
 *  rm -rf web-app/static/docs;  DOCUSAURUS_IGNORE_SSG_WARNINGS=true docusaurus 
 *  build --out-dir web-app/static/docs",
 * 
 * For homepage Add to docs/functions/index.md
 * 
    ---
    sidebar_position: 1
    sidebar_label:  Introduction
    title:  Introduction    
    slug: /
    ---

x

 * @see
 * [Docusaurus Docs](https://docusaurus.io/docs)
 * [Typedoc Docs](https://typedoc.org/documents/)
 * [Typedoc Plugin Docs](https://typedoc-plugin-markdown.org/docs/options)
 * [OpenAPI Plugin Docs](https://docusaurus-openapi.tryingpan.dev)
 * @returns {Promise<Config>}
 * @author [vtempest](https://github.com/vtempest/)
 */
export default async function createConfig(options: any = {}) {
  const {
    name = "GRAB-API",
    domain = "https://grab.js.org",
    baseFolder = "./",
    typedocFolders = [
      {
        id: "lib",
        entryPoints: ["../src/**/*"],

      }
    ],
    showEditsOnGitHub = true,
    GOOGLE_ANALYTICS_ID = "/////G-E5TZ32BZD",
    gitRepo = "https://github.com/vtempest/grab-api.js/blob/main/",
    compileForSubdomain = !!process.env.DOCS_ON_SUBDOMAIN,
    tsconfig = "./tsconfig.json",
    readme = "../readme.md",
    sanitizeComments = false,
    appLogoURL = domain + "/icons/app-icon.svg",
  } = options;

  // foldersWithFunctions - should also add to tsconfig.json include:[]
  // compileForSubdomain is used to generate at domain.com/docs 
  // but on github pages workflow, it outputs to
  // subdomain like docprojects.user.github.io
  // sanitizeComments helps avoid errors in markdown like <> {} etc
  return {
    future: {
      v4: {
        removeLegacyPostBuildHeadAttribute: true, // REQUIRED for ssgWorkerThreads
      },
      experimental_faster: true,
    },
    title: name + " API Routes Docs",
    url: domain,
    baseUrl: compileForSubdomain ? "/" : "/",
    onBrokenLinks: "ignore",
    onBrokenMarkdownLinks: "ignore",
    favicon: domain + "/favicon.ico",
    projectName: "grab-api",
    presets: [
      [
        "classic",
        {
          docs: {
            routeBasePath: "/",
            sidebarPath: "./sidebars.ts",
            editUrl: gitRepo,
            docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          },
          blog: false,
          theme: {
            customCss: baseFolder + "docs-theme.css",
          },
          gtag: {
            trackingID: GOOGLE_ANALYTICS_ID,
            anonymizeIP: false,
          },
        } satisfies Preset.Options,
      ],
    ],

    plugins: [

      require.resolve("docusaurus-lunr-search"),

      ...(typedocFolders.map(({ id, entryPoints }) => [
        "docusaurus-plugin-typedoc",
        {
          id,
          entryPoints,
          tsconfig,
          out: baseFolder + "docs/" + id,
          readme,
          disableSources: !showEditsOnGitHub,
          sidebar: { pretty: true },
          textContentMappings: {
            "title.indexPage": name + " API",
            "title.memberPage": "{name}",
          },
          parametersFormat: "htmlTable",
          indexFormat: "list",
          expandParameters: true,
          interfacePropertiesFormat: "htmlTable",
          propertyMembersFormat: "htmlTable",
          enumMembersFormat: "htmlTable",
          typeDeclarationFormat: "htmlTable",
          typeDeclarationVisibility: "compact",
          sanitizeComments,
          useHTMLEncodedBrackets: true,
          hideBreadcrumbs: false,
          hideGroupHeadings: true,
          hidePageHeader: true,
          hidePageTitle: true,
          gitRemote: showEditsOnGitHub ? gitRepo : undefined,
          outputFileStrategy: "modules",
          useCodeBlocks: true,
        },
      ])),
    ],

    themeConfig: {
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: name + " Docs",
        // logo:null,
        items: [

          {
            to: "/lib",
            label: "GRAB-API Spec",
            position: "left",
          },
          {
            to: "/guide/Examples",
            label: "Examples",
            position: "left",
          },
          {
            to: "/guide/Performance",
            label: "Performance",
            position: "left",
          },
        ],
      },

      
    } satisfies Preset.ThemeConfig,

    themes: [
      "docusaurus-theme-openapi-docs"
    ],
    stylesheets: [
      {
        href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
        type: "text/css",
      },
    ],
  } satisfies Config;
}

