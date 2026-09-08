# Changelog

A month-by-month history of GRAB — *Generate Request to API from Browser* — from the first
commit in May 2025 through today. Every release on npm is published as
[`grab-url`](https://npmjs.org/package/grab-url); the docs live at [grab.js.org](https://grab.js.org).

---

## May 2025 — The first 49 commits

The project was born on **26 May 2025** as `grab-api.js` with a single commit that already shipped a
**fully functional `grab()` function** plus documentation. Within days it grew the shape it still has
today. **Bundling** arrived via Vite alongside the first **20 Vitest unit tests**, and the log store
was **renamed and converted to an array** so request history could be inspected properly in the
console. The **feature list was expanded to 15 points** and an `onBeforeCallback` hook was added.
**TypeScript types** were introduced specifically so editors would show tooltips describing every
request option — a theme that recurs through the project's whole life. **Documentation** was the
other obsession of the month: docs were moved around repeatedly to get **GitHub Pages** building
correctly, a **CNAME for js.org** was set (and re-set, over and over), and the site gained a
**favicon, logo and screenshots**. The month closed with two substantial content pushes: **10+ major
use-case examples** with a performance guide and **loading icons**, and a **comparison table**
benchmarking grab against axios, SuperAgent, TanStack Query, Alova, SWR and apisauce. A **proxy
example**, **instances** and **repeat requests** landed on the 29th.

## June 2025 — Streaming, icons and the 0.9.x series

June turned the prototype into a publishable package. **Infinite scroll** was fixed and joined by
**debounce**, **regrab on network change or window refocus**, and **scroll position recovery**. The
**icons package** was made to export correctly with tooltip previews, and **DevTools** (`Ctrl+I`)
started working. The headline feature was **`onStream` for streaming responses**, which took several
iterations across 9 June to stabilise. **Request and response types as parameters** were added so
developers get error-checking and tooltips on their own API shapes. A run of small but important
fixes followed: **no debug output by default**, **`globalThis` defaults for Node**, an
**`showAlert` crash in Node**, **`.data` axios compatibility**, and a **`http:` URL handling bug**.
Versions **0.9.112 through 0.9.127** were cut in rapid succession. The month ended with **coloured
log output and a spinner**.

## August 2025 — Docs replatform

After a quiet July, the documentation site was **migrated to Fumadocs** with an autobuild pipeline,
replacing the previous static setup. The **docs outline was reorganised** and a **build preview**
was wired into git.

## September 2025 — 1.0

The project reached **version 1.0.4** on the 5th and **1.0.7** by the 15th — the first stable
releases. The site got a **new logo and favicon**, plus an **"copy for LLM" button** so the docs
could be pasted wholesale into a chat assistant. The rest of the month was **URL and favicon fixes**.

## November 2025 — Maintenance

A single quiet release: **1.0.8**.

## December 2025 — Homepage rebuild and the Claude-authored PRs

December was the busiest month since launch, with 37 commits. Eight patch releases
(**1.0.9 → 1.0.15**) shipped on the 13th, three more (**1.0.16 → 1.0.18**) on the 26th. Then the
**docs homepage was rebuilt** from scratch, with **dependency and lockfile cleanup** alongside it.
The 30th is notable as the first day of **AI-authored pull requests** in the repo: PRs #2 through #5
added **syntax highlighting to the docs**, applied it **across every homepage code tab**, and
**fixed Fumadocs icon rendering**. Manual polish followed — **hero buttons**, **code font family**,
the **`Alt+` DevTools shortcut hint** — and two integrations were showcased: **mcp-use** and an
**api2ai video**. Releases **1.0.2 → 1.0.5** closed the year.

## January 2026 — Quiet

Three maintenance releases: **1.0.6**, **1.0.19** and **1.0.20**.

## March 2026 — The 1.5 rewrite and the monorepo

The largest month in the project's history at 80 commits, and the one that reshaped it structurally.
It opened on the 5th with the **1.5 major rewrite**: the single-file library was split into
**modular files**, given **full JSDoc**, and the docs were regenerated from it — **1.5.1 through
1.5.5** shipped the same day. The **Claude Agent Skill** (`use-grab-request`) was published so any
agent can install grab's usage rules with one command, **unit tests were wired into CI**, and an
**npm publish workflow** and **new logo** were added.

On the 6th came the **monorepo refactor**, splitting the codebase into dedicated packages for the
**CLI**, **API**, **logging**, **loading animations** and **web archiving**. The rest of the month
built out the documentation platform on top of that: **CLI aliases** and a **feature comparison
table**; **filetree and badge-tooltip components**; **interactive Mermaid diagrams** with pan/zoom,
node tooltips and highlighting; a **collapsible dependency graph**; and **tooltip, slider, popover
and markdown UI components** with proper `forwardRef` handling. Two fixes made **MDX serve as
`text/plain`** so browsers display rather than download it (PRs #6, #7), and **LLM-friendly
documentation routes** were added. Late in the month the file-tree generator was replaced wholesale
by a new **code graph analysis and visualization system**, with **C4 diagram generation** and
**import/export badges**. **Internal `@grab-url` packages were bundled** into the Vite build instead
of externalised, **missing CLI dependencies** (chalk, cli-table3, cli-progress) were fixed (PR #8),
and a **mobile info icon** was added to badge tooltips for touch devices (PR #9). Version **0.1.3**
of the monorepo packages closed the month.

## April 2026 — Mobile fixes and a package that didn't stay

Two mobile bugs were fixed on the 22nd: the **docs hero header being cut off** (PR #10) and
**horizontal scroll cutting off the sidebar and nav** (PR #11). Release **1.1.1** followed. Late in
the month a **`git0-download-repo` package** was initialised with core logic, CLI tools and
Docusaurus docs — then **removed again three days later**, with its documentation references cleaned
up. A **test script** and **universal asset classification** in `releases.ts` also landed.

## May 2026 — Quantum orbital, Cloudflare and package hygiene

Another **mobile horizontal-scroll fix** and the removal of the **Docs nav link** from the homepage
header opened the month (PR #12), followed by an upgrade to **fumadocs-core 16.8.5**. A round of
**deduplication** removed redundant code and unused graph hierarchy logic. The
**quantum-sphere-loading-animation** package got serious attention: **`QuantumWaveOrbital` was
renamed `QuantumOrbital`** and its logic extracted into specialized hooks and utility files, then
**sphere configuration was consolidated** into shared modules so the **React and Svelte
implementations share defaults**, and finally its **CSS was inlined** into the component.
**READMEs were added to every package**, **standard VSCode settings** were committed across the
workspace, and **OpenNext Cloudflare deployment** configuration was added. **API2AI security
features** were documented.

## June 2026 — Slim builds and restructuring

The grab API was refactored with **slim build support** and **enhanced content processing**, and
**response handling** was improved. **Repository URLs were corrected** across every `package.json` to
point at the GRAB-URL monorepo (in the `git+https` form npm requires), and a **CI lockfile bug** was
fixed so the workflow only adds lock files that exist. Release **1.6.22** shipped. Mid-month brought
a dedicated **grab-options documentation page** with expanded options, and a further **restructure of
`grab-api` and its sibling packages** for clarity.

## July 2026 — Coverage

**Codecov coverage reporting** was set up with Vitest and wired into CI (PR #13), giving the repo its
coverage badge. The **loading-animations package** got improved configuration and explicit
**licensing**.

## August 2026 — OpenAPI SDKs

The month's feature was **`heyapi-client-grab`**: an **OpenAPI SDK client powered by grab**, so a
typed client generated by [Hey API](https://heyapi.dev) sends its requests through `grab()` instead
of axios — every endpoint inheriting caching, retries, rate limiting, dedupe and mocks for free
(PR #14). Two fixes shipped alongside it: **mock keys now match with or without a leading slash**,
and a **broken npm install** that was blocking CI was repaired.

## September 2026 — Docs overhaul and runnable examples

The current month has been a concentrated push on the documentation site. **README and docs-site
badges** were brought to parity with debate-ai.com, with **npm downloads**, **bundle size** and
**grab.js.org** badges added (PRs #15, #16, #17). An **OpenAPI SDKs overview page** and matching
homepage section were published (PR #18), followed by a **Hey API setup guide**. The
**examples page was migrated to runnable, StackBlitz-linked examples** so every snippet can be forked
and executed in the browser (PRs #20, #21). The docs app's **routing and MDX config were synced with
template-fumadocs**, moving the `docs-search`, `llms.mdx` and `llms-full.txt` routes under
`app/docs/`. An **interactive KineticGrid backdrop** was added to the homepage hero (PR #23), the
deployment target was **switched from OpenNext/Cloudflare to plain Vercel-compatible Next.js**
(PRs #22, #24, #25), and the loading-animations package gained **8 monochrome spinners with a live
docs gallery** (PR #26). Finally, **all npm audit findings were cleared** and broken build tasks
repaired (PR #27).
