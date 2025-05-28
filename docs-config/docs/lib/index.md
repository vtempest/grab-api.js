[Documentation](modules.md) / index

## GrabResponse&lt;T&gt;

Defined in: [src/index.d.ts:7](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L7)

Core response object that gets populated with API response data

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

`T`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

### Indexable

```ts
[key: string]: string | boolean | T
```

The actual response data - type depends on API endpoint

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

<a id="isloading"></a> `isLoading?`

</td>
<td>

`boolean`

</td>
<td>

Indicates if request is currently in progress

</td>
<td>

[src/index.d.ts:9](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L9)

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

Error message if request failed

</td>
<td>

[src/index.d.ts:11](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L11)

</td>
</tr>
</tbody>
</table>

***

## GrabOptions&lt;TResponse, TParams&gt;

Defined in: [src/index.d.ts:17](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L17)

Options for configuring grab requests

### Extended by

- [`GrabRequestConfig`](#grabrequestconfig)

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

`Record`&lt;`string`, `any`&gt;

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

<a id="method"></a> `method?`

</td>
<td>

`"GET"` \| `"POST"` \| `"PUT"` \| `"PATCH"` \| `"DELETE"` \| `"HEAD"` \| `"OPTIONS"`

</td>
<td>

HTTP method to use

</td>
<td>

[src/index.d.ts:19](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L19)

</td>
</tr>
<tr>
<td>

<a id="response"></a> `response?`

</td>
<td>

[`GrabResponse`](#grabresponse)&lt;`TResponse`&gt;

</td>
<td>

Pre-initialized response object that will be populated with results

</td>
<td>

[src/index.d.ts:22](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L22)

</td>
</tr>
<tr>
<td>

<a id="headers"></a> `headers?`

</td>
<td>

`Record`&lt;`string`, `string`&gt;

</td>
<td>

Additional HTTP headers

</td>
<td>

[src/index.d.ts:25](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L25)

</td>
</tr>
<tr>
<td>

<a id="cancelongoingifnew"></a> `cancelOngoingIfNew?`

</td>
<td>

`boolean`

</td>
<td>

Cancel previous requests to same path when making new request

</td>
<td>

[src/index.d.ts:28](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L28)

</td>
</tr>
<tr>
<td>

<a id="cancelnewifongoing"></a> `cancelNewIfOngoing?`

</td>
<td>

`boolean`

</td>
<td>

Cancel new request if one to same path is already in progress

</td>
<td>

[src/index.d.ts:31](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L31)

</td>
</tr>
<tr>
<td>

<a id="cache"></a> `cache?`

</td>
<td>

`boolean`

</td>
<td>

Enable frontend caching for repeat requests

</td>
<td>

[src/index.d.ts:34](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L34)

</td>
</tr>
<tr>
<td>

<a id="timeout"></a> `timeout?`

</td>
<td>

`number`

</td>
<td>

Request timeout in seconds

</td>
<td>

[src/index.d.ts:37](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L37)

</td>
</tr>
<tr>
<td>

<a id="baseurl"></a> `baseURL?`

</td>
<td>

`string`

</td>
<td>

Base URL prefix for API requests

</td>
<td>

[src/index.d.ts:40](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L40)

</td>
</tr>
<tr>
<td>

<a id="ratelimit"></a> `rateLimit?`

</td>
<td>

`number`

</td>
<td>

Minimum seconds to wait between requests to same endpoint

</td>
<td>

[src/index.d.ts:43](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L43)

</td>
</tr>
<tr>
<td>

<a id="debug"></a> `debug?`

</td>
<td>

`boolean`

</td>
<td>

Enable debug logging

</td>
<td>

[src/index.d.ts:46](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L46)

</td>
</tr>
<tr>
<td>

<a id="paginateresult"></a> `paginateResult?`

</td>
<td>

`string`

</td>
<td>

Key in response object to paginate results by

</td>
<td>

[src/index.d.ts:49](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L49)

</td>
</tr>
<tr>
<td>

<a id="paginatekey"></a> `paginateKey?`

</td>
<td>

`string`

</td>
<td>

Request parameter key used for pagination

</td>
<td>

[src/index.d.ts:52](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L52)

</td>
</tr>
<tr>
<td>

<a id="setdefaults"></a> `setDefaults?`

</td>
<td>

`boolean`

</td>
<td>

Set these options as defaults for all future requests

</td>
<td>

[src/index.d.ts:55](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L55)

</td>
</tr>
<tr>
<td>

<a id="retryattempts"></a> `retryAttempts?`

</td>
<td>

`boolean`

</td>
<td>

Retry failed requests once

</td>
<td>

[src/index.d.ts:58](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L58)

</td>
</tr>
<tr>
<td>

<a id="onbeforerequest"></a> `onBeforeRequest?`

</td>
<td>

(`path`: `string`, `response`: [`GrabResponse`](#grabresponse)&lt;`TResponse`&gt;, `params`: `TParams`, `fetchParams`: `RequestInit`) => \[`string`, [`GrabResponse`](#grabresponse)&lt;`TResponse`&gt;, `TParams`, `RequestInit`\]

</td>
<td>

Hook function called before each request to modify request data

</td>
<td>

[src/index.d.ts:61](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L61)

</td>
</tr>
</tbody>
</table>

***

## GrabRequestConfig&lt;TResponse, TParams&gt;

Defined in: [src/index.d.ts:70](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L70)

Combined options and parameters interface

### Extends

- [`GrabOptions`](#graboptions)&lt;`TResponse`, `TParams`&gt;.`TParams`

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

`Record`&lt;`string`, `any`&gt;

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
<th>Inherited from</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="method-1"></a> `method?`

</td>
<td>

`"GET"` \| `"POST"` \| `"PUT"` \| `"PATCH"` \| `"DELETE"` \| `"HEAD"` \| `"OPTIONS"`

</td>
<td>

HTTP method to use

</td>
<td>

```ts
GrabOptions.method
```

</td>
<td>

[src/index.d.ts:19](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L19)

</td>
</tr>
<tr>
<td>

<a id="response-1"></a> `response?`

</td>
<td>

[`GrabResponse`](#grabresponse)&lt;`TResponse`&gt;

</td>
<td>

Pre-initialized response object that will be populated with results

</td>
<td>

```ts
GrabOptions.response
```

</td>
<td>

[src/index.d.ts:22](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L22)

</td>
</tr>
<tr>
<td>

<a id="headers-1"></a> `headers?`

</td>
<td>

`Record`&lt;`string`, `string`&gt;

</td>
<td>

Additional HTTP headers

</td>
<td>

```ts
GrabOptions.headers
```

</td>
<td>

[src/index.d.ts:25](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L25)

</td>
</tr>
<tr>
<td>

<a id="cancelongoingifnew-1"></a> `cancelOngoingIfNew?`

</td>
<td>

`boolean`

</td>
<td>

Cancel previous requests to same path when making new request

</td>
<td>

```ts
GrabOptions.cancelOngoingIfNew
```

</td>
<td>

[src/index.d.ts:28](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L28)

</td>
</tr>
<tr>
<td>

<a id="cancelnewifongoing-1"></a> `cancelNewIfOngoing?`

</td>
<td>

`boolean`

</td>
<td>

Cancel new request if one to same path is already in progress

</td>
<td>

```ts
GrabOptions.cancelNewIfOngoing
```

</td>
<td>

[src/index.d.ts:31](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L31)

</td>
</tr>
<tr>
<td>

<a id="cache-1"></a> `cache?`

</td>
<td>

`boolean`

</td>
<td>

Enable frontend caching for repeat requests

</td>
<td>

```ts
GrabOptions.cache
```

</td>
<td>

[src/index.d.ts:34](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L34)

</td>
</tr>
<tr>
<td>

<a id="timeout-1"></a> `timeout?`

</td>
<td>

`number`

</td>
<td>

Request timeout in seconds

</td>
<td>

```ts
GrabOptions.timeout
```

</td>
<td>

[src/index.d.ts:37](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L37)

</td>
</tr>
<tr>
<td>

<a id="baseurl-1"></a> `baseURL?`

</td>
<td>

`string`

</td>
<td>

Base URL prefix for API requests

</td>
<td>

```ts
GrabOptions.baseURL
```

</td>
<td>

[src/index.d.ts:40](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L40)

</td>
</tr>
<tr>
<td>

<a id="ratelimit-1"></a> `rateLimit?`

</td>
<td>

`number`

</td>
<td>

Minimum seconds to wait between requests to same endpoint

</td>
<td>

```ts
GrabOptions.rateLimit
```

</td>
<td>

[src/index.d.ts:43](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L43)

</td>
</tr>
<tr>
<td>

<a id="debug-1"></a> `debug?`

</td>
<td>

`boolean`

</td>
<td>

Enable debug logging

</td>
<td>

```ts
GrabOptions.debug
```

</td>
<td>

[src/index.d.ts:46](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L46)

</td>
</tr>
<tr>
<td>

<a id="paginateresult-1"></a> `paginateResult?`

</td>
<td>

`string`

</td>
<td>

Key in response object to paginate results by

</td>
<td>

```ts
GrabOptions.paginateResult
```

</td>
<td>

[src/index.d.ts:49](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L49)

</td>
</tr>
<tr>
<td>

<a id="paginatekey-1"></a> `paginateKey?`

</td>
<td>

`string`

</td>
<td>

Request parameter key used for pagination

</td>
<td>

```ts
GrabOptions.paginateKey
```

</td>
<td>

[src/index.d.ts:52](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L52)

</td>
</tr>
<tr>
<td>

<a id="setdefaults-1"></a> `setDefaults?`

</td>
<td>

`boolean`

</td>
<td>

Set these options as defaults for all future requests

</td>
<td>

```ts
GrabOptions.setDefaults
```

</td>
<td>

[src/index.d.ts:55](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L55)

</td>
</tr>
<tr>
<td>

<a id="retryattempts-1"></a> `retryAttempts?`

</td>
<td>

`boolean`

</td>
<td>

Retry failed requests once

</td>
<td>

```ts
GrabOptions.retryAttempts
```

</td>
<td>

[src/index.d.ts:58](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L58)

</td>
</tr>
<tr>
<td>

<a id="onbeforerequest-1"></a> `onBeforeRequest?`

</td>
<td>

(`path`: `string`, `response`: [`GrabResponse`](#grabresponse)&lt;`TResponse`&gt;, `params`: `TParams`, `fetchParams`: `RequestInit`) => \[`string`, [`GrabResponse`](#grabresponse)&lt;`TResponse`&gt;, `TParams`, `RequestInit`\]

</td>
<td>

Hook function called before each request to modify request data

</td>
<td>

```ts
GrabOptions.onBeforeRequest
```

</td>
<td>

[src/index.d.ts:61](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L61)

</td>
</tr>
</tbody>
</table>

***

## GrabMockHandler&lt;TParams, TResponse&gt;

Defined in: [src/index.d.ts:74](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L74)

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

<a id="response-2"></a> `response`

</td>
<td>

`TResponse` \| (`params`: `TParams`) => `TResponse`

</td>
<td>

Mock response data or function that returns response

</td>
<td>

[src/index.d.ts:76](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L76)

</td>
</tr>
<tr>
<td>

<a id="method-2"></a> `method?`

</td>
<td>

`string`

</td>
<td>

HTTP method this mock should respond to

</td>
<td>

[src/index.d.ts:78](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L78)

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

[src/index.d.ts:80](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L80)

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

[src/index.d.ts:82](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L82)

</td>
</tr>
</tbody>
</table>

***

## GrabLogEntry

Defined in: [src/index.d.ts:86](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L86)

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

[src/index.d.ts:88](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L88)

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

[src/index.d.ts:90](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L90)

</td>
</tr>
<tr>
<td>

<a id="response-3"></a> `response?`

</td>
<td>

`any`

</td>
<td>

Response data (only present for successful requests)

</td>
<td>

[src/index.d.ts:92](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L92)

</td>
</tr>
<tr>
<td>

<a id="error-1"></a> `error?`

</td>
<td>

`string`

</td>
<td>

Error message (only present for failed requests)

</td>
<td>

[src/index.d.ts:94](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L94)

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

[src/index.d.ts:96](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L96)

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

[src/index.d.ts:98](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L98)

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

[src/index.d.ts:100](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L100)

</td>
</tr>
</tbody>
</table>

***

## GrabGlobal

Defined in: [src/index.d.ts:104](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L104)

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

<a id="default"></a> `default`

</td>
<td>

`Partial`&lt;[`GrabOptions`](#graboptions)&lt;`any`, `Record`&lt;`string`, `any`&gt;&gt;&gt;

</td>
<td>

Default options applied to all requests

</td>
<td>

[src/index.d.ts:106](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L106)

</td>
</tr>
<tr>
<td>

<a id="log"></a> `log`

</td>
<td>

[`GrabLogEntry`](#grablogentry)[]

</td>
<td>

Request history and debugging info

</td>
<td>

[src/index.d.ts:108](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L108)

</td>
</tr>
<tr>
<td>

<a id="mock"></a> `mock`

</td>
<td>

`Record`&lt;`string`, [`GrabMockHandler`](#grabmockhandler)&lt;`any`, `any`&gt;&gt;

</td>
<td>

Mock server handlers for testing

</td>
<td>

[src/index.d.ts:110](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L110)

</td>
</tr>
</tbody>
</table>

***

## GrabFunction()

Defined in: [src/index.d.ts:114](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L114)

Main grab function signature with overloads for different use cases

### Call Signature

```ts
GrabFunction<TResponse>(path: string): Promise<GrabResponse<TResponse>>;
```

Defined in: [src/index.d.ts:118](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L118)

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

### Call Signature

```ts
GrabFunction<TResponse, TParams>(path: string, config: GrabRequestConfig<TResponse, TParams>): Promise<GrabResponse<TResponse>>;
```

Defined in: [src/index.d.ts:123](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L123)

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

[`GrabRequestConfig`](#grabrequestconfig)&lt;`TResponse`, `TParams`&gt;

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`&lt;[`GrabResponse`](#grabresponse)&lt;`TResponse`&gt;&gt;

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

<a id="default-1"></a> `default`

</td>
<td>

`Partial`&lt;[`GrabOptions`](#graboptions)&lt;`any`, `Record`&lt;`string`, `any`&gt;&gt;&gt;

</td>
<td>

Global configuration and state

</td>
<td>

[src/index.d.ts:129](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L129)

</td>
</tr>
<tr>
<td>

<a id="log-1"></a> `log`

</td>
<td>

[`GrabLogEntry`](#grablogentry)[]

</td>
<td>

&hyphen;

</td>
<td>

[src/index.d.ts:130](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L130)

</td>
</tr>
<tr>
<td>

<a id="mock-1"></a> `mock`

</td>
<td>

`Record`&lt;`string`, [`GrabMockHandler`](#grabmockhandler)&lt;`any`, `any`&gt;&gt;

</td>
<td>

&hyphen;

</td>
<td>

[src/index.d.ts:131](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L131)

</td>
</tr>
</tbody>
</table>

***

## LogFunction()

Defined in: [src/index.d.ts:135](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L135)

Log function for debugging

```ts
LogFunction(
   message: string | object, 
   hideInProduction?: boolean, 
   style?: string): void;
```

Defined in: [src/index.d.ts:142](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L142)

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

`hideInProduction?`

</td>
<td>

`boolean`

</td>
<td>

Whether to hide in production (auto-detected if undefined)

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

CSS style string for console output

</td>
</tr>
</tbody>
</table>

### Returns

`void`

***

## PrintStructureJSONFunction()

Defined in: [src/index.d.ts:150](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L150)

Utility function to describe JSON structure

```ts
PrintStructureJSONFunction(obj: any): string;
```

Defined in: [src/index.d.ts:156](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L156)

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

## UserData

Defined in: [src/index.d.ts:196](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L196)

Example usage types for common patterns

### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="id"></a> `id`

</td>
<td>

`number`

</td>
<td>

[src/index.d.ts:197](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L197)

</td>
</tr>
<tr>
<td>

<a id="name"></a> `name`

</td>
<td>

`string`

</td>
<td>

[src/index.d.ts:198](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L198)

</td>
</tr>
<tr>
<td>

<a id="email"></a> `email`

</td>
<td>

`string`

</td>
<td>

[src/index.d.ts:199](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L199)

</td>
</tr>
</tbody>
</table>

***

## SearchResult

Defined in: [src/index.d.ts:202](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L202)

### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="title"></a> `title`

</td>
<td>

`string`

</td>
<td>

[src/index.d.ts:203](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L203)

</td>
</tr>
<tr>
<td>

<a id="description"></a> `description`

</td>
<td>

`string`

</td>
<td>

[src/index.d.ts:204](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L204)

</td>
</tr>
<tr>
<td>

<a id="url"></a> `url`

</td>
<td>

`string`

</td>
<td>

[src/index.d.ts:205](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L205)

</td>
</tr>
</tbody>
</table>

***

## PaginatedResponse&lt;T&gt;

Defined in: [src/index.d.ts:208](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L208)

### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

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
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="results"></a> `results`

</td>
<td>

`T`[]

</td>
<td>

[src/index.d.ts:209](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L209)

</td>
</tr>
<tr>
<td>

<a id="page"></a> `page`

</td>
<td>

`number`

</td>
<td>

[src/index.d.ts:210](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L210)

</td>
</tr>
<tr>
<td>

<a id="totalpages"></a> `totalPages`

</td>
<td>

`number`

</td>
<td>

[src/index.d.ts:211](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L211)

</td>
</tr>
<tr>
<td>

<a id="hasmore"></a> `hasMore`

</td>
<td>

`boolean`

</td>
<td>

[src/index.d.ts:212](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L212)

</td>
</tr>
</tbody>
</table>

***

## GrabResponseWithData&lt;T&gt;

```ts
type GrabResponseWithData<T> = GrabResponse<T> & object;
```

Defined in: [src/index.d.ts:176](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L176)

Type helpers for common use cases

### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`data?`

</td>
<td>

`T`

</td>
<td>

[src/index.d.ts:177](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L177)

</td>
</tr>
</tbody>
</table>

### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
</tr>
</tbody>
</table>

***

## GrabResponseWithResults&lt;T&gt;

```ts
type GrabResponseWithResults<T> = GrabResponse<T> & object;
```

Defined in: [src/index.d.ts:180](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L180)

### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`results?`

</td>
<td>

`T`[]

</td>
<td>

[src/index.d.ts:181](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L181)

</td>
</tr>
</tbody>
</table>

### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
</tr>
</tbody>
</table>

***

## GrabResponseWithPagination&lt;T&gt;

```ts
type GrabResponseWithPagination<T> = GrabResponseWithResults<T> & object;
```

Defined in: [src/index.d.ts:184](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L184)

### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`page?`

</td>
<td>

`number`

</td>
<td>

[src/index.d.ts:185](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L185)

</td>
</tr>
<tr>
<td>

`totalPages?`

</td>
<td>

`number`

</td>
<td>

[src/index.d.ts:186](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L186)

</td>
</tr>
<tr>
<td>

`hasMore?`

</td>
<td>

`boolean`

</td>
<td>

[src/index.d.ts:187](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L187)

</td>
</tr>
</tbody>
</table>

### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
</tr>
</tbody>
</table>

***

## ApiEndpoint()&lt;TResponse, TParams&gt;

```ts
type ApiEndpoint<TResponse, TParams> = (params?: TParams & Partial<GrabOptions<TResponse, TParams>>) => Promise<GrabResponse<TResponse>>;
```

Defined in: [src/index.d.ts:191](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L191)

Utility types for type-safe API calls

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

&hyphen;

</td>
</tr>
<tr>
<td>

`TParams`

</td>
<td>

`object`

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
</tr>
</thead>
<tbody>
<tr>
<td>

`params?`

</td>
<td>

`TParams` & `Partial`&lt;[`GrabOptions`](#graboptions)&lt;`TResponse`, `TParams`&gt;&gt;

</td>
</tr>
</tbody>
</table>

### Returns

`Promise`&lt;[`GrabResponse`](#grabresponse)&lt;`TResponse`&gt;&gt;

***

## TypedGrabFunction()

```ts
type TypedGrabFunction = <TResponse, TParams>(path: string, config?: GrabRequestConfig<TResponse, TParams>) => Promise<GrabResponse<TResponse>>;
```

Defined in: [src/index.d.ts:216](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L216)

Helper type for creating typed API clients

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

`Record`&lt;`string`, `any`&gt;

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

`config?`

</td>
<td>

[`GrabRequestConfig`](#grabrequestconfig)&lt;`TResponse`, `TParams`&gt;

</td>
</tr>
</tbody>
</table>

### Returns

`Promise`&lt;[`GrabResponse`](#grabresponse)&lt;`TResponse`&gt;&gt;

***

## grab

```ts
const grab: GrabFunction;
```

Defined in: [src/index.d.ts:171](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L171)

Main export types

***

## log

```ts
const log: LogFunction;
```

Defined in: [src/index.d.ts:172](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L172)

***

## printStructureJSON

```ts
const printStructureJSON: PrintStructureJSONFunction;
```

Defined in: [src/index.d.ts:173](https://github.com/vtempest/grab-api/tree/master/src/index.d.ts#L173)

***

## default

Renames and re-exports [grab](#grab)
