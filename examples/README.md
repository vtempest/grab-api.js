# Runnable Examples

Each folder here is a self-contained project that demonstrates one usage pattern from [`grab-url`](https://github.com/vtempest/grab-url). They're linked from `docs/content/docs/examples.mdx` via the `<StackBlitzExample>` component, which opens a fresh, editable StackBlitz fork of the folder for the reader.

| Example | Demonstrates |
|---|---|
| `basic-request` | GET, query params, and POST |
| `reactive-react` | Reactive loading state (React) |
| `reactive-vue` | Reactive loading state (Vue) |
| `reactive-svelte` | Reactive loading state (Svelte 5) |
| `cookbook` | Debounce, cache, rate limiting, retry, interceptors, file upload |

Each example installs and runs on its own:

```bash
cd examples/<name>
npm install
npm run dev
```
