# This folder is only the GitHub Pages redirect

The documentation site lives in [`../grab-help-docs`](../grab-help-docs) — a
Next.js + Fumadocs app deployed to <https://grab.js.org>.

GitHub Pages is configured to deploy from this branch's `/docs` folder, and
`/docs` is the only folder name it accepts besides the repository root, so this
folder stays behind with `_config.yml` and an `index.html` that redirects to
grab.js.org. Edit the docs in `grab-help-docs/content/docs/`.

## Deployments

- **GitHub Pages** (`grab-url.github.io` / this folder) — `_config.yml` plus the
  `index.html` redirect above; the real static export is built by
  `.github/workflows/pages.yml`.
- **Vercel** (<https://grab.js.org>) — builds `grab-help-docs`, not this folder.
  The Vercel project's **Root Directory** must be set to `grab-help-docs`;
  install and build commands come from `grab-help-docs/vercel.json`. If it is
  left pointing at `docs/`, the deploy fails with
  `The file "…/docs/.next/routes-manifest.json" couldn't be found`.
