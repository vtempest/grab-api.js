[Documentation](modules.md) / grab-api

## GrabMockHandler&lt;TParams, TResponse&gt;

Defined in: [grab-api.ts:654](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L654)

Combined options and parameters interface
Mock server configuration for testing

### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`TParams`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`TResponse`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="response"></a> `response`

</td>
<td>

`TResponse` \| (`params`: `TParams`) => `TResponse`

</td>
<td>

Mock response data or function that returns response

</td>
<td>

[grab-api.ts:656](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L656)

</td>
</tr>
<tr>
<td>

<a id="method"></a> `method?`

</td>
<td>

`"GET"` \| `"POST"` \| `"PUT"` \| `"PATCH"` \| `"DELETE"` \| `"OPTIONS"` \| `"HEAD"`

</td>
<td>

HTTP method this mock should respond to

</td>
<td>

[grab-api.ts:658](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L658)

</td>
</tr>
<tr>
<td>

<a id="params"></a> `params?`

</td>
<td>

`TParams`

</td>
<td>

Request parameters this mock should match

</td>
<td>

[grab-api.ts:660](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L660)

</td>
</tr>
<tr>
<td>

<a id="delay"></a> `delay?`

</td>
<td>

`number`

</td>
<td>

Delay in seconds before returning mock response

</td>
<td>

[grab-api.ts:662](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L662)

</td>
</tr>
</tbody>
</table>

***

## GrabLogEntry

Defined in: [grab-api.ts:666](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L666)

Request log entry for debugging and history

### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="path"></a> `path`

</td>
<td>

`string`

</td>
<td>

API path that was requested

</td>
<td>

[grab-api.ts:668](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L668)

</td>
</tr>
<tr>
<td>

<a id="request"></a> `request`

</td>
<td>

`string`

</td>
<td>

Stringified request parameters

</td>
<td>

[grab-api.ts:670](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L670)

</td>
</tr>
<tr>
<td>

<a id="response-1"></a> `response?`

</td>
<td>

`any`

</td>
<td>

Response data (only present for successful requests)

</td>
<td>

[grab-api.ts:672](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L672)

</td>
</tr>
<tr>
<td>

<a id="error"></a> `error?`

</td>
<td>

`string`

</td>
<td>

Error message (only present for failed requests)

</td>
<td>

[grab-api.ts:674](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L674)

</td>
</tr>
<tr>
<td>

<a id="lastfetchtime"></a> `lastFetchTime`

</td>
<td>

`number`

</td>
<td>

Timestamp when request was made

</td>
<td>

[grab-api.ts:676](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L676)

</td>
</tr>
<tr>
<td>

<a id="controller"></a> `controller?`

</td>
<td>

`AbortController`

</td>
<td>

Abort controller for request cancellation

</td>
<td>

[grab-api.ts:678](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L678)

</td>
</tr>
<tr>
<td>

<a id="currentpage"></a> `currentPage?`

</td>
<td>

`number`

</td>
<td>

Current page number for paginated requests

</td>
<td>

[grab-api.ts:680](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L680)

</td>
</tr>
</tbody>
</table>

***

## GrabGlobal

Defined in: [grab-api.ts:684](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L684)

Global grab configuration and state

### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="defaults-2"></a> `defaults?`

</td>
<td>

`Partial`&lt;[`GrabOptions`](#graboptions)&gt;

</td>
<td>

Default options applied to all requests

</td>
<td>

[grab-api.ts:686](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L686)

</td>
</tr>
<tr>
<td>

<a id="log-2"></a> `log?`

</td>
<td>

[`GrabLogEntry`](#grablogentry)[]

</td>
<td>

Request history and debugging info

</td>
<td>

[grab-api.ts:688](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L688)

</td>
</tr>
<tr>
<td>

<a id="mock-2"></a> `mock?`

</td>
<td>

`Record`&lt;`string`, [`GrabMockHandler`](#grabmockhandler)&gt;

</td>
<td>

Mock server handlers for testing

</td>
<td>

[grab-api.ts:690](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L690)

</td>
</tr>
<tr>
<td>

<a id="instance-4"></a> `instance?`

</td>
<td>

(`defaultOptions?`: `Partial`&lt;[`GrabOptions`](#graboptions)&gt;) => [`GrabFunction`](#grabfunction)

</td>
<td>

Create a separate instance of grab with separate default options

</td>
<td>

[grab-api.ts:692](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L692)

</td>
</tr>
</tbody>
</table>

***

## GrabFunction()

Defined in: [grab-api.ts:696](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L696)

Main grab function signature with overloads for different use cases

### Call Signature

```ts
GrabFunction<TResponse, TParams>(path: string): Promise<GrabResponse<TResponse>>;
```

Defined in: [grab-api.ts:705](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L705)

Main grab function signature with overloads for different use cases

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`TResponse`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`TParams`

</td>
<td>

`Record`&lt;`string`, `any`&gt;

</td>
</tr>
</tbody>
</table>

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
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
</tr>
</tbody>
</table>

#### Returns

`Promise`&lt;[`GrabResponse`](#grabresponse)&lt;`TResponse`&gt;&gt;

The response object with resulting data or .error if error.

#### Author

[vtempest (2025)](https://github.com/vtempest/grab-api)

#### See

[🎯 Examples](https://grab.js.org/guide/Examples) [📑 Docs](https://grab.js.org/lib)

### Call Signature

```ts
GrabFunction<TResponse, TParams>(path: string, config: GrabOptions<TResponse, TParams>): Promise<GrabResponse<TResponse>>;
```

Defined in: [grab-api.ts:717](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L717)

Main grab function signature with overloads for different use cases

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`TResponse`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`TParams`

</td>
<td>

`Record`&lt;`string`, `any`&gt;

</td>
</tr>
</tbody>
</table>

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
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
</tr>
<tr>
<td>

`config`

</td>
<td>

[`GrabOptions`](#graboptions)&lt;`TResponse`, `TParams`&gt;

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`&lt;[`GrabResponse`](#grabresponse)&lt;`TResponse`&gt;&gt;

The response object with resulting data or .error if error.

#### Author

[vtempest (2025)](https://github.com/vtempest/grab-api)

#### See

[🎯 Examples](https://grab.js.org/guide/Examples) [📑 Docs](https://grab.js.org/lib)

### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="defaults-3"></a> `defaults?`

</td>
<td>

`Partial`&lt;[`GrabOptions`](#graboptions)&gt;

</td>
<td>

Default options applied to all requests

</td>
<td>

[grab-api.ts:723](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L723)

</td>
</tr>
<tr>
<td>

<a id="log-3"></a> `log?`

</td>
<td>

[`GrabLogEntry`](#grablogentry)[]

</td>
<td>

Request history and debugging info for all requests

</td>
<td>

[grab-api.ts:726](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L726)

</td>
</tr>
<tr>
<td>

<a id="mock-3"></a> `mock?`

</td>
<td>

`Record`&lt;`string`, [`GrabMockHandler`](#grabmockhandler)&gt;

</td>
<td>

Mock server handlers for testing

</td>
<td>

[grab-api.ts:729](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L729)

</td>
</tr>
<tr>
<td>

<a id="instance-5"></a> `instance?`

</td>
<td>

(`defaultOptions?`: `Partial`&lt;[`GrabOptions`](#graboptions)&gt;) => [`GrabFunction`](#grabfunction)

</td>
<td>

Create a separate instance of grab with separate default options

</td>
<td>

[grab-api.ts:732](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L732)

</td>
</tr>
</tbody>
</table>

***

## LogFunction()

Defined in: [grab-api.ts:736](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L736)

Log function for debugging

```ts
LogFunction(message: string | object, options?: LogOptions): void;
```

Defined in: [grab-api.ts:741](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L741)

Log function for debugging

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

`message`

</td>
<td>

`string` \| `object`

</td>
<td>

Message to log (string or object)

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

[`LogOptions`](log.md#logoptions)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

### Returns

`void`

***

## printJSONStructureFunction()

Defined in: [grab-api.ts:745](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L745)

Utility function to describe JSON structure

```ts
printJSONStructureFunction(obj: any): string;
```

Defined in: [grab-api.ts:751](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L751)

Utility function to describe JSON structure

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

The JSON object to describe

</td>
</tr>
</tbody>
</table>

### Returns

`string`

String representation of object structure

***

## GrabResponse&lt;TResponse&gt;

```ts
type GrabResponse<TResponse> = TResponse & object;
```

Defined in: [grab-api.ts:577](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L577)

Core response object that gets populated with API response data

### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`isLoading?`

</td>
<td>

`boolean`

</td>
<td>

Indicates if request is currently in progress

</td>
<td>

[grab-api.ts:579](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L579)

</td>
</tr>
<tr>
<td>

`error?`

</td>
<td>

`string`

</td>
<td>

Error message if request failed

</td>
<td>

[grab-api.ts:581](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L581)

</td>
</tr>
<tr>
<td>

`data?`

</td>
<td>

`TResponse` \| `any`

</td>
<td>

Binary or text response data (JSON is set to the root)

</td>
<td>

[grab-api.ts:583](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L583)

</td>
</tr>
</tbody>
</table>

### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`TResponse`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

***

## GrabOptions&lt;TResponse, TParams&gt;

```ts
type GrabOptions<TResponse, TParams> = TParams & object;
```

Defined in: [grab-api.ts:588](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L588)

### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`headers?`

</td>
<td>

`Record`&lt;`string`, `string`&gt;

</td>
<td>

include headers and authorization in the request

</td>
<td>

[grab-api.ts:590](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L590)

</td>
</tr>
<tr>
<td>

`response?`

</td>
<td>

`TResponse` \| (`params`: `TParams`) => `TResponse` \| `any`

</td>
<td>

Pre-initialized object which becomes response JSON, no need for .data

</td>
<td>

[grab-api.ts:592](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L592)

</td>
</tr>
<tr>
<td>

`method?`

</td>
<td>

`"GET"` \| `"POST"` \| `"PUT"` \| `"PATCH"` \| `"DELETE"` \| `"OPTIONS"` \| `"HEAD"`

</td>
<td>

default="GET" The HTTP method to use

</td>
<td>

[grab-api.ts:594](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L594)

</td>
</tr>
<tr>
<td>

`cache?`

</td>
<td>

`boolean`

</td>
<td>

default=false Whether to cache the request and from frontend cache

</td>
<td>

[grab-api.ts:596](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L596)

</td>
</tr>
<tr>
<td>

`cacheForTime?`

</td>
<td>

`number`

</td>
<td>

default=60 Seconds to consider data stale and invalidate cache

</td>
<td>

[grab-api.ts:598](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L598)

</td>
</tr>
<tr>
<td>

`timeout?`

</td>
<td>

`number`

</td>
<td>

default=30 The timeout for the request in seconds

</td>
<td>

[grab-api.ts:600](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L600)

</td>
</tr>
<tr>
<td>

`baseURL?`

</td>
<td>

`string`

</td>
<td>

default='/api/' base url prefix, override with SERVER_API_URL env

</td>
<td>

[grab-api.ts:602](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L602)

</td>
</tr>
<tr>
<td>

`cancelOngoingIfNew?`

</td>
<td>

`boolean`

</td>
<td>

default=true Cancel previous requests to same path

</td>
<td>

[grab-api.ts:604](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L604)

</td>
</tr>
<tr>
<td>

`cancelNewIfOngoing?`

</td>
<td>

`boolean`

</td>
<td>

default=false Cancel if a request to path is in progress

</td>
<td>

[grab-api.ts:606](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L606)

</td>
</tr>
<tr>
<td>

`rateLimit?`

</td>
<td>

`number`

</td>
<td>

default=false If set, how many seconds to wait between requests

</td>
<td>

[grab-api.ts:608](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L608)

</td>
</tr>
<tr>
<td>

`debug?`

</td>
<td>

`boolean`

</td>
<td>

default=false Whether to log the request and response

</td>
<td>

[grab-api.ts:610](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L610)

</td>
</tr>
<tr>
<td>

`infiniteScroll?`

</td>
<td>

\[`string`, `string`, `string`\]

</td>
<td>

default=null [page key, response field to concatenate, element with results]

</td>
<td>

[grab-api.ts:612](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L612)

</td>
</tr>
<tr>
<td>

`setDefaults?`

</td>
<td>

`boolean`

</td>
<td>

default=false Pass this with options to set those options as defaults for all requests

</td>
<td>

[grab-api.ts:614](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L614)

</td>
</tr>
<tr>
<td>

`retryAttempts?`

</td>
<td>

`number`

</td>
<td>

default=0 Retry failed requests this many times

</td>
<td>

[grab-api.ts:616](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L616)

</td>
</tr>
<tr>
<td>

`logger()?`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

default=log Custom logger to override the built-in color JSON log()

</td>
<td>

[grab-api.ts:618](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L618)

</td>
</tr>
<tr>
<td>

`onRequest()?`

</td>
<td>

(...`args`: `any`[]) => `any`

</td>
<td>

Set with defaults to modify each request data. Takes and returns in order: path, response, params, fetchParams

</td>
<td>

[grab-api.ts:620](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L620)

</td>
</tr>
<tr>
<td>

`onResponse()?`

</td>
<td>

(...`args`: `any`[]) => `any`

</td>
<td>

Set with defaults to modify each request data. Takes and returns in order: path, response, params, fetchParams

</td>
<td>

[grab-api.ts:622](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L622)

</td>
</tr>
<tr>
<td>

`onError()?`

</td>
<td>

(...`args`: `any`[]) => `any`

</td>
<td>

Set with defaults to modify each request data. Takes and returns in order: error, path, params

</td>
<td>

[grab-api.ts:624](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L624)

</td>
</tr>
<tr>
<td>

`onStream()?`

</td>
<td>

(...`args`: `any`[]) => `any`

</td>
<td>

Set with defaults to process the response as a stream (i.e., for instant unzip)

</td>
<td>

[grab-api.ts:626](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L626)

</td>
</tr>
<tr>
<td>

`repeat?`

</td>
<td>

`number`

</td>
<td>

default=0 Repeat request this many times

</td>
<td>

[grab-api.ts:628](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L628)

</td>
</tr>
<tr>
<td>

`repeatEvery?`

</td>
<td>

`number`

</td>
<td>

default=null Repeat request every seconds

</td>
<td>

[grab-api.ts:630](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L630)

</td>
</tr>
<tr>
<td>

`debounce?`

</td>
<td>

`number`

</td>
<td>

default=0 Seconds to debounce request, wait to execute so that other requests may override

</td>
<td>

[grab-api.ts:632](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L632)

</td>
</tr>
<tr>
<td>

`regrabOnStale?`

</td>
<td>

`boolean`

</td>
<td>

default=false Refetch when cache is past cacheForTime

</td>
<td>

[grab-api.ts:634](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L634)

</td>
</tr>
<tr>
<td>

`regrabOnFocus?`

</td>
<td>

`boolean`

</td>
<td>

default=false Refetch on window refocus

</td>
<td>

[grab-api.ts:636](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L636)

</td>
</tr>
<tr>
<td>

`regrabOnNetwork?`

</td>
<td>

`boolean`

</td>
<td>

default=false Refetch on network change

</td>
<td>

[grab-api.ts:638](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L638)

</td>
</tr>
<tr>
<td>

`post?`

</td>
<td>

`boolean`

</td>
<td>

shortcut for method: "POST"

</td>
<td>

[grab-api.ts:640](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L640)

</td>
</tr>
<tr>
<td>

`put?`

</td>
<td>

`boolean`

</td>
<td>

shortcut for method: "PUT"

</td>
<td>

[grab-api.ts:642](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L642)

</td>
</tr>
<tr>
<td>

`patch?`

</td>
<td>

`boolean`

</td>
<td>

shortcut for method: "PATCH"

</td>
<td>

[grab-api.ts:644](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L644)

</td>
</tr>
<tr>
<td>

`body?`

</td>
<td>

`any`

</td>
<td>

default=null The body of the POST/PUT/PATCH request (can be passed into main)

</td>
<td>

[grab-api.ts:646](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L646)

</td>
</tr>
</tbody>
</table>

### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`TResponse`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`TParams`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

***

## grab()

```ts
function grab<TResponse, TParams>(path: string, options?: GrabOptions<TResponse, TParams>): Promise<GrabResponse<TResponse>>;
```

Defined in: [grab-api.ts:88](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L88)

### GRAB: Generate Request to API from Browser
![GrabAPILogo](https://i.imgur.com/qrQWkeb.png)

1. **GRAB is the FBEST Request Manager: Functionally Brilliant, Elegantly Simple Tool**: One Function, no dependencies, 
   minimalist syntax, [more features than alternatives](https://grab.js.org/guide/Comparisons)
2. **Auto-JSON Convert**: Pass parameters and get response or error in JSON, handling other data types as is.
3. **isLoading Status**: Sets `.isLoading=true` on the pre-initialized response object so you can show a "Loading..." in any framework
4. **Debug Logging**: Adds global `log()` and prints colored JSON structure, response, timing for requests in test.
5. **Mock Server Support**: Configure `window.grab.mock` for development and testing environments
6. **Cancel Duplicates**: Prevent this request if one is ongoing to same path & params, or cancel the ongoing request.
7. **Timeout & Retry**: Customizable request timeout, default 30s, and auto-retry on error
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

### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`TResponse`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`TParams`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

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

The full URL path OR relative path on this server after `grab.defaults.baseURL`

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

[`GrabOptions`](#graboptions)&lt;`TResponse`, `TParams`&gt;

</td>
<td>

Request params for GET or body for POST/PUT/PATCH and utility options

</td>
</tr>
</tbody>
</table>

### Returns

`Promise`&lt;[`GrabResponse`](#grabresponse)&lt;`TResponse`&gt;&gt;

The response object with resulting data or .error if error.

### Author

[vtempest (2025)](https://github.com/vtempest/grab-api)

### See

[🎯 Examples](https://grab.js.org/guide/Examples) [📑 Docs](https://grab.js.org)

### Example

```ts
import grab from 'grab-api.js';
let res = {};
await grab('search', {
  response: res,
  query: "search words"
})
```

***

## default

Renames and re-exports [grab](#grab)

***

## log

Re-exports [log](log.md#log)

***

## showAlert

Re-exports [showAlert](log.md#showalert)

***

## printJSONStructure

Re-exports [printJSONStructure](log.md#printjsonstructure)
