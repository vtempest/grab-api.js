
<p align="center">
    <img width="350px" src="https://i.imgur.com/TE7jBZm.png" />
</p>
<p align="center">
    <br />
    <a href="https://npmjs.org/package/grab-api.js">
        <img src="https://i.imgur.com/ifE8SbX.png"
            alt="NPM badge for ai-research-agent" />
    </a>
</p>
<p align="center">
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
</h3>

### GRAB: General Request APIs from Browser

1. **Data Retrieval**: Fetches data from server APIs using JSON parameters and returns JSON responses or error objects
2. **Request/Response Format**: Standardized JSON communication for both input parameters and output data
3. **Automatic Loading States**: Sets `isLoading` to `true` during data fetching operations and `false` upon completion
4. **Mock Server Support**: Configure `window.grabMockServer` for development and testing environments
5. **Concurrent Request Handling**: Cancels duplicate or overlapping requests automatically
6. **Timeout Configuration**: Customizable request timeout settings
7. **Rate Limiting**: Built-in rate limiting to prevent API abuse
8. **Debug Logging**: Comprehensive logging system for request monitoring
9. **Request History**: Stores all request and response data in global `grabLog` object
10. **Pagination Support**: Built-in pagination handling for large datasets
11. **Environment Configuration**: Configurable base URLs for development and production environments
12. **Frontend Caching**: Intelligent caching system that prevents redundant API calls for repeat requests
13. **Modular Design**: Single, flexible function that can be called from any part of your application.
14. **Framework Agnostic**: No dependency on React hooks or component lifecycle - works with any JavaScript framework
15. **Universal Usage**:  More flexible than TanStack Query - works outside component initialization, 
16. **Minimalist Single Function**: Less boilerplate and complexity than axios, SuperAgent, Got

### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`path`

</td>
<td>

`string`

</td>
<td>

The path in the API after base url

</td>
</tr>
<tr>
<td>

`response`

</td>
<td>

`any`

</td>
<td>

Pre-initialized object to store the response in,
 isLoading and error are also set on this object.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

 `baseURL`: `string`; `cache`: `boolean`; `cancelIfOngoing`: `boolean`; `cancelPrevious`: `boolean`; `debug`: `boolean`; `method`: `string`; `paginateKey`: `string`; `paginateResult`: `string`; `rateLimit`: `number`; `setDefaults`: `boolean`; `timeout`: `number`; 

</td>
<td>

Request params for GET or POST and more options

</td>
</tr>
<tr>
<td>

`options.baseURL?`

</td>
<td>

`string`

</td>
<td>

default='/api/' base url prefix, override with SERVER_API_URL env

</td>
</tr>
<tr>
<td>

`options.cache?`

</td>
<td>

`boolean`

</td>
<td>

default=false Whether to cache the request and from frontend cache

</td>
</tr>
<tr>
<td>

`options.cancelIfOngoing?`

</td>
<td>

`boolean`

</td>
<td>

default=false Cancel if a request to path is in progress

</td>
</tr>
<tr>
<td>

`options.cancelPrevious?`

</td>
<td>

`boolean`

</td>
<td>

default=true Cancel previous requests to same path

</td>
</tr>
<tr>
<td>

`options.debug?`

</td>
<td>

`boolean`

</td>
<td>

default=false Whether to log the request and response

</td>
</tr>
<tr>
<td>

`options.method?`

</td>
<td>

`string`

</td>
<td>

default="GET" The HTTP method to use

</td>
</tr>
<tr>
<td>

`options.paginateKey?`

</td>
<td>

`string`

</td>
<td>

default="page" The key to paginate the request by

</td>
</tr>
<tr>
<td>

`options.paginateResult?`

</td>
<td>

`string`

</td>
<td>

default=null The key to paginate result data by

</td>
</tr>
<tr>
<td>

`options.rateLimit?`

</td>
<td>

`number`

</td>
<td>

default=0 If set, how many seconds to wait between requests

</td>
</tr>
<tr>
<td>

`options.setDefaults?`

</td>
<td>

`boolean`

</td>
<td>

default=false Pass this with options to set
 those options as defaults for all requests.

</td>
</tr>
<tr>
<td>

`options.timeout?`

</td>
<td>

`number`

</td>
<td>

default=20 The timeout for the request in seconds

</td>
</tr>
</tbody>
</table>

### Returns

`Promise`&lt;`any`&gt;

The response from the server API

### Author

[vtempest (2025)](https://github.com/vtempest)

### Example

```ts
import {grab} from "./grab-api";
 let responseData = $state({}) as {
     results: Array<{title:string}>,
     isLoading: boolean,
     error: string,
 };
  
 await grab('search', responseData, {
   query: "search words",
   method: 'POST'
 })
 
 {#if responseData.results}
     {responseData.results}
 {:else if responseData.isLoading}
     ...
 {:else if responseData.error}
     {responseData.error}
 {/if}

 //Setup Mock testing server, response is object or function
 window.grabMockServer["search"] = {
   response: (params) => {
     return { results: [{title:`Result about ${params.query}`}] };
   },
   method: "POST",
   params: {
     query: "search words"
   },
   delay : 1,
 };

 //set defaults for all requests
 grab("", {}, { 
   setDefaults: true,
   baseURL: "http://localhost:8080",
   timeout: 30,
   debug: true,
   rateLimit: 1,
   cache: true,
   cancelPrevious: true,
   cancelIfOngoing: true,
 });
```
