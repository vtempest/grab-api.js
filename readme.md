
<p align="center">
    <img width="400px" src="https://i.imgur.com/qrQWkeb.png" />
</p>
<p align="center">
    <br />
    <a href="https://npmjs.org/package/grab-api.js">
        <img src="https://i.imgur.com/ifE8SbX.png"
            alt="NPM badge" />
    </a>
</p>
<p align="center">
  <a href="https://discord.gg/SJdBqBz3tV">
      <img src="https://img.shields.io/discord/1110227955554209923.svg?label=Chat&logo=Discord&colorB=7289da&style=flat"
            alt="Join Discord" />
    </a>
     <a href="https://github.com/vtempest/grab-api/discussions">
     <img alt="GitHub Stars" src="https://img.shields.io/github/stars/vtempest/grab-api" /></a>
   <a href="https://npmjs.org/package/grab-api.js">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/grab-api.js" />
  </a>
    <a href="https://github.com/vtempest/grab-API/discussions">
    <img alt="GitHub Discussions"
        src="https://img.shields.io/github/discussions/vtempest/grab-API" />
    </a>
    <a href="http://makeapullrequest.com">
        <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome"/>
    </a>
    <a href="https://codespaces.new/vtempest/grab-API">
    <img src="https://github.com/codespaces/badge.svg" width="150" height="20"/>
    </a>
</p>
<h3 align="center">
  <a href="https://grab.js.org"> 📑 Docs (grab.js.org)</a>
  <a href="https://grab.js.org/guide/Examples"> 🎯 Examples </a>
</h3>

```
npm i grab-api.js
```
### GRAB: Generate Request to API from Browser
1. **One Function**: 2Kb min.js less boilerplate complexity than axios, SuperAgent, Tanstack, Alova, SWR, TanStack, apisauce
2. **Auto-JSON Convert**: Pass parameters and get response or error in JSON, handling other data types as is.
3. **Reactive isLoading State**: Sets `.isLoading=true` on the pre-initialized response object so you can show a "Loading..." in any component framework.
4. **Mock Server Support**: Configure `window.grab.mock` for development and testing environments
5. **Concurrency Handling**: Prevent this request if one is ongoing to same path & params, or cancel the ongoing request.
6. **Rate Limiting**: Built-in rate limiting to prevent multi-click cascading responses, require to wait seconds between requests.
7. **Timeout & Retry**: Customizable request timeout, default 20s, and auto-retry on error
8. **Debug Logging**: Adds global `log()` and prints colored JSON structure, response, timing for requests in test.
9. **Request History**: Stores all request and response data in global `grab.log` object
10. **Pagination Infinite Scroll**: Built-in pagination for infinite scroll to auto-load and merge next result page.
11. **Base URL Based on Environment**: Configure `grab.defaults.baseURL` once at the top, overide with `SERVER_API_URL` in `.env`.
12. **Frontend Cache**: Set cache headers and retrieve from frontend memory for repeat requests to static data.
13. **Modular Design**: Single, flexible function that can be called from any part of your application.
14. **Framework Agnostic**: Alternatives like TanStack work only in component initialization and depend on React & others. 
15. **Globals**: Adds to window in browser or global in Node.js so you only import once: `grab()`, `log()`, `grab.log`, `grab.mock`, `grab.defaults`
16. **TypeScript Tooltips**: Developers can hover over option names for into and autocomplete TypeScript. Add to top of file: `import 'grab-api.js/globals'`


### Examples

```ts
import grab from 'grab-api.js';

let res = $state({}) as {
  results: Array<{title:string}>,
  isLoading: boolean,
  error: string,
};

await grab('search', {
  response: res,
  query: "search words",
  post: true
})
 
grab('user').then(log)

//in svelte component
{#if res.results}
    {res.results}
{:else if res.isLoading}
    ...
{:else if res.error}
    {res.error}
{/if}

 //Setup Mock testing server, response is object or function
 window.grab.mock["search"] = {
   response: (params) => {
     return { results: [{title:`Result about ${params.query}`}] };
   },
   method: "POST"
 };

 //set defaults for all requests
 grab("", { 
   setDefaults: true,
   baseURL: "http://localhost:8080",
   timeout: 30,
   debug: true,
   rateLimit: 1,
   cache: true,
   cancelOngoingIfNew: true,
 });

 grab.defaults.baseURL = "http://localhost:8080/api/";
```

### Screenshots

**Debug Colorized log(JSON)**
![Debug log](https://i.imgur.com/R8Qp6Vg.png)

**Autocomplete option names**
![Autocomplete](https://i.imgur.com/XlxILJ0.png)

**Hover over options for info**
![Info Tooltip](https://i.imgur.com/vV5jbZo.png)


### Comparison of HTTP Request Libraries

| Feature | [GRAB](https://github.com/vtempest/grab-api) | [Axios](https://github.com/axios/axios) | [TanStack Query](https://github.com/TanStack/query) | [SWR](https://github.com/vercel/swr) | [Alova](https://github.com/alovajs/alova) | [SuperAgent](https://github.com/ladjs/superagent) | [Apisauce](https://github.com/infinitered/apisauce) | [Ky](https://github.com/sindresorhus/ky) |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | 
| Size | ✅ 2KB | ❌ 13KB | ❌ 39KB | ❌ 4.2KB | ⚠️ 4KB | ❌ 19KB | ❌ 15KB (with axios) | ⚠️ 4KB |
| Zero Dependencies | ✅ Yes | ❌ No | ❌ No | ❌ No | ✅ Yes | ❌ No | ❌ Needs Axios | ✅ Yes |
| Framework Support | ✅ All frameworks | ✅ All frameworks | ⚠️ React-focused | ⚠️ React-focused | ✅ All frameworks | ✅ All frameworks | ✅ All frameworks | ✅ All frameworks |
| isLoading State Handling | ✅ Auto-managed | ❌ Manual | ✅ Yes | ✅ Yes | ✅ Yes | ❌ Manual | ❌ Manual | ❌ Manual |
| Auto JSON Handling | ✅ Automatic | ✅ Configurable | ❌ Manual | ❌ Manual | ✅ Automatic | ✅ Automatic | ✅ Automatic | ✅ Automatic |
| Request Deduplication | ✅ Built-in | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No | ❌ No | ❌ No |
| Caching | ✅ Memory cache | ❌ No | ✅ Advanced | ✅ Advanced | ✅ Multi-level | ❌ No | ❌ No | ❌ No |
| Mock Testing | ✅ Easy setup | ❌ Needs MSW/etc | ❌ Needs MSW/etc | ❌ Needs MSW/etc | ⚠️ Basic | ❌ Needs separate lib | ❌ Needs separate lib | ❌ Needs MSW/etc |
| Rate Limiting | ✅ Built-in | ❌ Manual | ❌ Manual | ❌ Manual | ⚠️ Basic | ❌ Manual | ❌ Manual | ❌ Manual |
| Automatic Retry | ✅ Configurable | ⚠️ Via interceptors | ✅ Built-in | ✅ Built-in | ✅ Built-in | ✅ Built-in | ❌ Manual | ✅ Built-in |
| Request Cancellation | ✅ Auto + manual | ✅ Manual | ✅ Automatic | ✅ Automatic | ✅ Manual | ✅ Manual | ✅ Manual | ✅ Manual |
| Pagination Support | ✅ Infinite scroll | ❌ Manual | ✅ Advanced | ⚠️ Basic | ✅ Built-in | ❌ Manual | ❌ Manual | ❌ Manual |
| TypeScript Support |  ✅ Excellent  | ✅ Excellent | ✅ Excellent | ✅ Excellent | ✅ Good | ✅ Good | ✅ Good | ✅ Excellent |
| Interceptors | ✅ Advanced | ✅ Advanced | ⚠️ Limited | ⚠️ Limited | ✅ Advanced | ✅ Plugins | ✅ Transforms | ✅ Hooks system |
| Debug Logging | ✅ Colored output | ⚠️ Basic | ✅ DevTools | ✅ DevTools | ⚠️ Basic | ⚠️ Basic | ⚠️ Basic | ⚠️ Basic |
| Request History | ✅ Built-in | ❌ Manual | ✅ DevTools | ✅ DevTools | ❌ Manual | ❌ Manual | ❌ Manual | ❌ Manual |
| Easy Syntax | ✅ Minimal | ⚠️ Medium | ❌ High | ❌ High | ⚠️ Medium | ⚠️ Medium | ✅ Low | ✅ Minimal |