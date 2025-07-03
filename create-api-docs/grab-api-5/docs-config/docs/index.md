---
id: index
title: ​​​​​‌‌‌
sidebar_position: 1
displayed_sidebar: lib
---


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
    <a href="https://github.blog/developer-skills/github/beginners-guide-to-github-creating-a-pull-request/">
        <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"/>
    </a>
    <a href="https://codespaces.new/vtempest/grab-API">
    <img src="https://github.com/codespaces/badge.svg" width="150" height="20"/>
    </a>
</p>
<h3 align="center">
  <a href="https://grab.js.org"> 📑 Docs (grab.js.org)</a>
  <a href="https://grab.js.org/guide/Examples"> 🎯 Example Strategies </a>
</h3>

```
npm i grab-api.js
```

### GRAB: Generate Request to API from Browser

**GRAB is the FBEST Request Manager: Functionally Brilliant, Elegantly Simple Tool**
1. **One Function**: 3Kb min, 0 dependencies, minimalist syntax, [more features than top alternatives](https://grab.js.org/guide/Comparisons)
2. **Auto-JSON Convert**: Pass parameters and get response or error in JSON, handling other data types as is.
3. **isLoading Status**: Sets `.isLoading=true` on the pre-initialized response object so you can show a "Loading..." in any framework
4. **Debug Logging**: Adds global `log()` and prints colored JSON structure, response, timing for requests in test.
5. **Mock Server Support**: Configure `window.grab.mock` for development and testing environments
6. **Cancel Duplicates**: Prevent this request if one is ongoing to same path & params, or cancel the ongoing request.
7. **Timeout & Retry**: Customizable request timeout, default 20s, and auto-retry on error
8. **DevTools**: `Ctrl+I` overlays webpage with devtools showing all requests and responses, timing, and JSON structure.
9. **Request History**: Stores all request and response data in global `grab.log` object
10. **Pagination Infinite Scroll**: Built-in pagination for infinite scroll to auto-load and merge next result page, with scroll position recovery.
11. **Base URL Based on Environment**: Configure `grab.defaults.baseURL` once at the top, overide with `SERVER_API_URL` in `.env`.
12. **Frontend Cache**: Set cache headers and retrieve from frontend memory for repeat requests to static data.
13. **Regrab On Error**: Regrab on timeout error, or on window refocus, or on network change, or on stale data.
14. **Framework Agnostic**: Alternatives like TanStack work only in component initialization and depend on React & others.
15. **Globals**: Adds to window in browser or global in Node.js so you only import once: `grab()`, `log()`, `grab.log`, `grab.mock`, `grab.defaults`
16. **TypeScript Tooltips**: Developers can hover over option names and autocomplete TypeScript.
17. **Request Stategies**: [🎯 Examples](https://grab.js.org/guide/Examples) show common stategies like debounce, repeat, proxy, unit tests, interceptors, file upload, etc
18. **Rate Limiting**: Built-in rate limiting to prevent multi-click cascading responses, require to wait seconds between requests.
19. **Repeat**: Repeat request this many times, or repeat every X seconds to poll for updates.
20. **Loading Icons**: Import from `grab-api.js/icons` to get enhanced animated loading icons.

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

**Animated SVG Loading Icons with Customizable Colors**
![icons](https://i.imgur.com/OqpWya1.gif)

**Set Types for Tooltips on Request &Response**
![types](https://i.imgur.com/IfR4OmC.png)

**Debug Colorized log(JSON)**
![Debug log](https://i.imgur.com/R8Qp6Vg.png)

**Autocomplete option names**

![Autocomplete](https://i.imgur.com/XlxILJ0.png)

**Hover over options for info**

![Info Tooltip](https://i.imgur.com/vV5jbZo.png)


### Comparison of HTTP Request Libraries

| Feature | [GRAB](https://github.com/vtempest/grab-api) | [Axios](https://github.com/axios/axios) | [TanStack Query](https://github.com/TanStack/query) | [SWR](https://github.com/vercel/swr) | [Alova](https://github.com/alovajs/alova) | [SuperAgent](https://github.com/ladjs/superagent) | [Apisauce](https://github.com/infinitered/apisauce) | [Ky](https://github.com/sindresorhus/ky) |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | 
| Size | ✅ 3KB | ❌ 13KB | ❌ 39KB | ❌ 4.2KB | ⚠️ 4KB | ❌ 19KB | ❌ 15KB (with axios) | ⚠️ 4KB |
| Zero Dependencies | ✅ Yes | ❌ No | ❌ No | ❌ No | ✅ Yes | ❌ No | ❌ Needs Axios | ✅ Yes |
| isLoading State Handling | ✅ Auto-managed | ❌ Manual | ✅ Yes | ✅ Yes | ✅ Yes | ❌ Manual | ❌ Manual | ❌ Manual |
| Auto JSON Handling | ✅ Automatic | ✅ Configurable | ❌ Manual | ❌ Manual | ✅ Automatic | ✅ Automatic | ✅ Automatic | ✅ Automatic |
| Request Deduplication | ✅ Built-in | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No | ❌ No | ❌ No |
| Caching | ✅ Multi-level | ❌ No | ✅ Advanced | ✅ Advanced | ✅ Multi-level | ❌ No | ❌ No | ❌ No |
| Mock Testing | ✅ Easy setup | ❌ Needs MSW/etc | ❌ Needs MSW/etc | ❌ Needs MSW/etc | ⚠️ Basic | ❌ Needs separate lib | ❌ Needs separate lib | ❌ Needs MSW/etc |
| Rate Limiting | ✅ Built-in | ❌ Manual | ❌ Manual | ❌ Manual | ⚠️ Basic | ❌ Manual | ❌ Manual | ❌ Manual |
| Automatic Retry | ✅ Configurable | ⚠️ Via interceptors | ✅ Built-in | ✅ Built-in | ✅ Built-in | ✅ Built-in | ❌ Manual | ✅ Built-in |
| Request Cancellation | ✅ Auto + manual | ✅ Manual | ✅ Automatic | ✅ Automatic | ✅ Manual | ✅ Manual | ✅ Manual | ✅ Manual |
| Pagination Support | ✅ Infinite scroll | ❌ Manual | ✅ Advanced | ⚠️ Basic | ✅ Built-in | ❌ Manual | ❌ Manual | ❌ Manual |
| Interceptors | ✅ Advanced | ✅ Advanced | ⚠️ Limited | ⚠️ Limited | ✅ Advanced | ✅ Plugins | ✅ Transforms | ✅ Hooks system |
| Debug Logging | ✅ Colored output | ⚠️ Basic | ✅ DevTools | ✅ DevTools | ⚠️ Basic | ⚠️ Basic | ⚠️ Basic | ⚠️ Basic |
| Request History | ✅ Built-in | ❌ Manual | ✅ DevTools | ✅ DevTools | ❌ Manual | ❌ Manual | ❌ Manual | ❌ Manual |
| Easy Syntax | ✅ Minimal | ⚠️ Medium | ❌ High | ❌ High | ⚠️ Medium | ⚠️ Medium | ✅ Low | ✅ Minimal |


**Stop trying to make fetch happen!** [*](https://knowyourmeme.com/memes/stop-trying-to-make-fetch-happen)

**Why fetch things when you can just GRAB?**

**Debugging requests is a bitch. [Make the switch!](https://grab.js.org/guide/Comparisons)**
