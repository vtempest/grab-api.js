## grab()

```ts
function grab(
   path: string, 
   response: any, 
   options?: object): Promise<any>;
```

Defined in: grab-api.js:86

### GRAB: General Request APIs from Browser
![grabAPILogo](https://i.imgur.com/TE7jBZm.png)

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

\{ `baseURL`: `string`; `cache`: `boolean`; `cancelIfOngoing`: `boolean`; `cancelPrevious`: `boolean`; `debug`: `boolean`; `method`: `string`; `paginateKey`: `string`; `paginateResult`: `string`; `rateLimit`: `number`; `setDefaults`: `boolean`; `timeout`: `number`; \}

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

***

## log()

```ts
function log(
   message: any, 
   hideInProduction?: boolean, 
   style?: string): void;
```

Defined in: grab-api.js:279

Logs messages to the console with custom styling,
showing debug output in development and standard logs in production.

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

Defined in: grab-api.js:303

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
