## grab()

```ts
function grab(
   path: string, 
   response: any, 
   options?: object): Promise<any>;
```

Defined in: [grab-api.js:85](https://github.com/vtempest/grab-api/tree/master/src/grab-api.js#L85)

### GRAB: Generate Request to API from Browser
![grabAPILogo](https://i.imgur.com/qrQWkeb.png)

1. **Data Retrieval**: Fetches data from server APIs using JSON parameters and returns JSON responses or error objects
2. **Minimalist One Function**: 2Kb min.js less boilerplate complexity than axios, SuperAgent, Tanstack, Alova, SWR, TanStack, apisauce
3. **Automatic Loading States**: Sets `isLoading` to `true` during data fetching operations and `false` upon completion
4. **Mock Server Support**: Configure `window.grab.server` for development and testing environments
5. **Concurrency Handling**: Cancel ongoing or new request automatically
7. **Rate Limiting**: Built-in rate limiting to prevent API abuse
6. **Timeout**: Customizable request timeout settings
8. **Debug Logging**: Detailed colored log of JSON structure, response, request, timing
9. **Request History**: Stores all request and response data in global `grabLog` object
10. **Pagination Support**: Built-in pagination handling for large datasets
11. **Environment Configuration**: Configurable base URLs for development and production environments
12. **Frontend Caching**: Intelligent caching system that prevents redundant API calls for repeat requests
13. **Modular Design**: Single, flexible function that can be called from any part of your application.
14. **Framework Agnostic**: No dependency on React hooks or component lifecycle - works with any JavaScript framework
15. **Universal Usage**:  More flexible than TanStack Query - works outside component initialization,

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

\{ `method`: `string`; `cancelOngoingIfNew`: `boolean`; `cancelNewIfOngoing`: `boolean`; `cache`: `boolean`; `debug`: `boolean`; `timeout`: `number`; `rateLimit`: `number`; `paginateResult`: `string`; `paginateKey`: `string`; `baseURL`: `string`; `setDefaults`: `boolean`; \}

</td>
<td>

Request params for GET or POST and more options

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

`options.cancelOngoingIfNew?`

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

`options.cancelNewIfOngoing?`

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

`options.timeout?`

</td>
<td>

`number`

</td>
<td>

default=20 The timeout for the request in seconds

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

`options.paginateKey?`

</td>
<td>

`string`

</td>
<td>

default="" The key to paginate the request by

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
</tbody>
</table>

### Returns

`Promise`&lt;`any`&gt;

The response from the server API

### Author

[vtempest (2025)](https://github.com/vtempest/grab-api)

### Example

```ts
import { grab } from "grab-api.js";
 let res = $state({}) as {
     results: Array<{title:string}>,
     isLoading: boolean,
     error: string,
 };
  
 await grab('search', res, {
   query: "search words",
   method: 'POST'
 })
 //in svelte component
 {#if res.results}
     {res.results}
 {:else if res.isLoading}
     ...
 {:else if res.error}
     {res.error}
 {/if}

 //Setup Mock testing server, response is object or function
 window.grab.server["search"] = {
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
   cancelOngoingIfNew: true,
   cancelNewIfOngoing: true,
 });
```

***

## log()

```ts
function log(
   message: any, 
   hideInProduction?: boolean, 
   style?: string): void;
```

Defined in: [grab-api.js:322](https://github.com/vtempest/grab-api/tree/master/src/grab-api.js#L322)

Logs messages to the console with custom styling,
showing debug output in development and standard logs in production.
Pretty print JSON with description of structure layout.

### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`message`

</td>
<td>

`any`

</td>
<td>

`undefined`

</td>
<td>

The message to log. If an object is provided, it will be stringified.

</td>
</tr>
<tr>
<td>

`hideInProduction?`

</td>
<td>

`boolean`

</td>
<td>

`undefined`

</td>
<td>

default = auto-detects based on hostname.
 If true, uses `console.debug` (hidden in production). If false, uses `console.log`.

</td>
</tr>
<tr>
<td>

`style?`

</td>
<td>

`string`

</td>
<td>

`"color: blue; font-size: 14px;"`

</td>
<td>

default="color: blue; font-size: 15px;"] - CSS style string for the console output.

</td>
</tr>
</tbody>
</table>

### Returns

`void`

***

## printStructureJSON()

```ts
function printStructureJSON(obj: any): string;
```

Defined in: [grab-api.js:344](https://github.com/vtempest/grab-api/tree/master/src/grab-api.js#L344)

Generates TypeDoc-like string of layout of nested JSON object.

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

`obj`

</td>
<td>

`any`

</td>
<td>

The JSON object to describe.

</td>
</tr>
</tbody>
</table>

### Returns

`string`

A string of the object's structure.

### Example

```ts
{ name: string, age: number, pets: Array<string>}
```

***

## default

Renames and re-exports [grab](#grab)
