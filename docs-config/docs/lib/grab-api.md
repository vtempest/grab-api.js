[Documentation](modules.md) / grab-api

## GrabResponse&lt;T&gt;

Defined in: [grab-api.ts:579](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L579)

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

[grab-api.ts:581](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L581)

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

[grab-api.ts:583](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L583)

</td>
</tr>
<tr>
<td>

<a id="data"></a> `data?`

</td>
<td>

`T`

</td>
<td>

Binary or text response data (JSON is set to the root)

</td>
<td>

[grab-api.ts:585](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L585)

</td>
</tr>
</tbody>
</table>

***

## GrabOptions&lt;TResponse, TParams&gt;

Defined in: [grab-api.ts:591](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L591)

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

### Indexable

```ts
[key: string]: any
```

All other params become GET params, POST body, and other methods

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

<a id="headers"></a> `headers?`

</td>
<td>

`Record`&lt;`string`, `string`&gt;

</td>
<td>

include headers and authorization in the request

</td>
<td>

[grab-api.ts:593](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L593)

</td>
</tr>
<tr>
<td>

<a id="response"></a> `response?`

</td>
<td>

`Record`&lt;`string`, `any`&gt;

</td>
<td>

Pre-initialized object which becomes response JSON, no need for .data

</td>
<td>

[grab-api.ts:595](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L595)

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

default="GET" The HTTP method to use

</td>
<td>

[grab-api.ts:597](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L597)

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

default=false Whether to cache the request and from frontend cache

</td>
<td>

[grab-api.ts:599](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L599)

</td>
</tr>
<tr>
<td>

<a id="cachefortime"></a> `cacheForTime?`

</td>
<td>

`number`

</td>
<td>

default=60 Seconds to consider data stale and invalidate cache

</td>
<td>

[grab-api.ts:601](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L601)

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

default=30 The timeout for the request in seconds

</td>
<td>

[grab-api.ts:603](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L603)

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

default='/api/' base url prefix, override with SERVER_API_URL env

</td>
<td>

[grab-api.ts:605](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L605)

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

default=true Cancel previous requests to same path

</td>
<td>

[grab-api.ts:607](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L607)

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

default=false Cancel if a request to path is in progress

</td>
<td>

[grab-api.ts:609](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L609)

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

default=false If set, how many seconds to wait between requests

</td>
<td>

[grab-api.ts:611](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L611)

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

default=false Whether to log the request and response

</td>
<td>

[grab-api.ts:613](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L613)

</td>
</tr>
<tr>
<td>

<a id="infinitescroll"></a> `infiniteScroll?`

</td>
<td>

\[`string`, `string`, `string`\]

</td>
<td>

default=null [page key, response field to concatenate, element with results]

</td>
<td>

[grab-api.ts:615](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L615)

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

default=false Pass this with options to set those options as defaults for all requests

</td>
<td>

[grab-api.ts:617](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L617)

</td>
</tr>
<tr>
<td>

<a id="retryattempts"></a> `retryAttempts?`

</td>
<td>

`number`

</td>
<td>

default=0 Retry failed requests this many times

</td>
<td>

[grab-api.ts:619](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L619)

</td>
</tr>
<tr>
<td>

<a id="logger"></a> `logger?`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

default=log Custom logger to override the built-in color JSON log()

</td>
<td>

[grab-api.ts:621](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L621)

</td>
</tr>
<tr>
<td>

<a id="onbeforerequest"></a> `onBeforeRequest?`

</td>
<td>

(...`args`: `any`[]) => `any`

</td>
<td>

Set with defaults to modify each request data. Takes and returns in order: path, response, params, fetchParams

</td>
<td>

[grab-api.ts:623](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L623)

</td>
</tr>
<tr>
<td>

<a id="onafterrequest"></a> `onAfterRequest?`

</td>
<td>

(...`args`: `any`[]) => `any`

</td>
<td>

Set with defaults to modify each request data. Takes and returns in order: path, response, params, fetchParams

</td>
<td>

[grab-api.ts:625](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L625)

</td>
</tr>
<tr>
<td>

<a id="onerror"></a> `onError?`

</td>
<td>

(...`args`: `any`[]) => `any`

</td>
<td>

Set with defaults to modify each request data. Takes and returns in order: error, path, params

</td>
<td>

[grab-api.ts:627](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L627)

</td>
</tr>
<tr>
<td>

<a id="onstream"></a> `onStream?`

</td>
<td>

(...`args`: `any`[]) => `any`

</td>
<td>

Set with defaults to process the response as a stream (i.e., for instant unzip)

</td>
<td>

[grab-api.ts:629](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L629)

</td>
</tr>
<tr>
<td>

<a id="repeat"></a> `repeat?`

</td>
<td>

`number`

</td>
<td>

default=0 Repeat request this many times

</td>
<td>

[grab-api.ts:631](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L631)

</td>
</tr>
<tr>
<td>

<a id="repeatevery"></a> `repeatEvery?`

</td>
<td>

`number`

</td>
<td>

default=null Repeat request every seconds

</td>
<td>

[grab-api.ts:633](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L633)

</td>
</tr>
<tr>
<td>

<a id="debounce"></a> `debounce?`

</td>
<td>

`number`

</td>
<td>

default=0 Seconds to debounce request, wait to execute so that other requests may override

</td>
<td>

[grab-api.ts:635](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L635)

</td>
</tr>
<tr>
<td>

<a id="regrabonstale"></a> `regrabOnStale?`

</td>
<td>

`boolean`

</td>
<td>

default=false Refetch when cache is past cacheForTime

</td>
<td>

[grab-api.ts:637](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L637)

</td>
</tr>
<tr>
<td>

<a id="regrabonfocus"></a> `regrabOnFocus?`

</td>
<td>

`boolean`

</td>
<td>

default=false Refetch on window refocus

</td>
<td>

[grab-api.ts:639](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L639)

</td>
</tr>
<tr>
<td>

<a id="regrabonnetwork"></a> `regrabOnNetwork?`

</td>
<td>

`boolean`

</td>
<td>

default=false Refetch on network change

</td>
<td>

[grab-api.ts:641](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L641)

</td>
</tr>
<tr>
<td>

<a id="post"></a> `post?`

</td>
<td>

`boolean`

</td>
<td>

shortcut for method: "POST"

</td>
<td>

[grab-api.ts:643](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L643)

</td>
</tr>
<tr>
<td>

<a id="put"></a> `put?`

</td>
<td>

`boolean`

</td>
<td>

shortcut for method: "PUT"

</td>
<td>

[grab-api.ts:645](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L645)

</td>
</tr>
<tr>
<td>

<a id="patch"></a> `patch?`

</td>
<td>

`boolean`

</td>
<td>

shortcut for method: "PATCH"

</td>
<td>

[grab-api.ts:647](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L647)

</td>
</tr>
<tr>
<td>

<a id="body"></a> `body?`

</td>
<td>

`any`

</td>
<td>

default=null The body of the POST/PUT/PATCH request (can be passed into main)

</td>
<td>

[grab-api.ts:649](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L649)

</td>
</tr>
</tbody>
</table>

***

## GrabRequestConfig&lt;TResponse, TParams&gt;

Defined in: [grab-api.ts:656](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L656)

Combined options and parameters interface

### Extends

- [`GrabOptions`](#graboptions)&lt;`TResponse`, `TParams`&gt;

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

### Indexable

```ts
[key: string]: any
```

All other params become GET params, POST body, and other methods

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

<a id="headers-1"></a> `headers?`

</td>
<td>

`Record`&lt;`string`, `string`&gt;

</td>
<td>

include headers and authorization in the request

</td>
<td>

[`GrabOptions`](#graboptions).[`headers`](#headers)

</td>
<td>

[grab-api.ts:593](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L593)

</td>
</tr>
<tr>
<td>

<a id="response-1"></a> `response?`

</td>
<td>

`Record`&lt;`string`, `any`&gt;

</td>
<td>

Pre-initialized object which becomes response JSON, no need for .data

</td>
<td>

[`GrabOptions`](#graboptions).[`response`](#response)

</td>
<td>

[grab-api.ts:595](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L595)

</td>
</tr>
<tr>
<td>

<a id="method-1"></a> `method?`

</td>
<td>

`"GET"` \| `"POST"` \| `"PUT"` \| `"PATCH"` \| `"DELETE"` \| `"OPTIONS"` \| `"HEAD"`

</td>
<td>

default="GET" The HTTP method to use

</td>
<td>

[`GrabOptions`](#graboptions).[`method`](#method)

</td>
<td>

[grab-api.ts:597](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L597)

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

default=false Whether to cache the request and from frontend cache

</td>
<td>

[`GrabOptions`](#graboptions).[`cache`](#cache)

</td>
<td>

[grab-api.ts:599](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L599)

</td>
</tr>
<tr>
<td>

<a id="cachefortime-1"></a> `cacheForTime?`

</td>
<td>

`number`

</td>
<td>

default=60 Seconds to consider data stale and invalidate cache

</td>
<td>

[`GrabOptions`](#graboptions).[`cacheForTime`](#cachefortime)

</td>
<td>

[grab-api.ts:601](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L601)

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

default=30 The timeout for the request in seconds

</td>
<td>

[`GrabOptions`](#graboptions).[`timeout`](#timeout)

</td>
<td>

[grab-api.ts:603](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L603)

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

default='/api/' base url prefix, override with SERVER_API_URL env

</td>
<td>

[`GrabOptions`](#graboptions).[`baseURL`](#baseurl)

</td>
<td>

[grab-api.ts:605](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L605)

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

default=true Cancel previous requests to same path

</td>
<td>

[`GrabOptions`](#graboptions).[`cancelOngoingIfNew`](#cancelongoingifnew)

</td>
<td>

[grab-api.ts:607](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L607)

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

default=false Cancel if a request to path is in progress

</td>
<td>

[`GrabOptions`](#graboptions).[`cancelNewIfOngoing`](#cancelnewifongoing)

</td>
<td>

[grab-api.ts:609](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L609)

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

default=false If set, how many seconds to wait between requests

</td>
<td>

[`GrabOptions`](#graboptions).[`rateLimit`](#ratelimit)

</td>
<td>

[grab-api.ts:611](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L611)

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

default=false Whether to log the request and response

</td>
<td>

[`GrabOptions`](#graboptions).[`debug`](#debug)

</td>
<td>

[grab-api.ts:613](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L613)

</td>
</tr>
<tr>
<td>

<a id="infinitescroll-1"></a> `infiniteScroll?`

</td>
<td>

\[`string`, `string`, `string`\]

</td>
<td>

default=null [page key, response field to concatenate, element with results]

</td>
<td>

[`GrabOptions`](#graboptions).[`infiniteScroll`](#infinitescroll)

</td>
<td>

[grab-api.ts:615](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L615)

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

default=false Pass this with options to set those options as defaults for all requests

</td>
<td>

[`GrabOptions`](#graboptions).[`setDefaults`](#setdefaults)

</td>
<td>

[grab-api.ts:617](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L617)

</td>
</tr>
<tr>
<td>

<a id="retryattempts-1"></a> `retryAttempts?`

</td>
<td>

`number`

</td>
<td>

default=0 Retry failed requests this many times

</td>
<td>

[`GrabOptions`](#graboptions).[`retryAttempts`](#retryattempts)

</td>
<td>

[grab-api.ts:619](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L619)

</td>
</tr>
<tr>
<td>

<a id="logger-1"></a> `logger?`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

default=log Custom logger to override the built-in color JSON log()

</td>
<td>

[`GrabOptions`](#graboptions).[`logger`](#logger)

</td>
<td>

[grab-api.ts:621](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L621)

</td>
</tr>
<tr>
<td>

<a id="onbeforerequest-1"></a> `onBeforeRequest?`

</td>
<td>

(...`args`: `any`[]) => `any`

</td>
<td>

Set with defaults to modify each request data. Takes and returns in order: path, response, params, fetchParams

</td>
<td>

[`GrabOptions`](#graboptions).[`onBeforeRequest`](#onbeforerequest)

</td>
<td>

[grab-api.ts:623](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L623)

</td>
</tr>
<tr>
<td>

<a id="onafterrequest-1"></a> `onAfterRequest?`

</td>
<td>

(...`args`: `any`[]) => `any`

</td>
<td>

Set with defaults to modify each request data. Takes and returns in order: path, response, params, fetchParams

</td>
<td>

[`GrabOptions`](#graboptions).[`onAfterRequest`](#onafterrequest)

</td>
<td>

[grab-api.ts:625](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L625)

</td>
</tr>
<tr>
<td>

<a id="onerror-1"></a> `onError?`

</td>
<td>

(...`args`: `any`[]) => `any`

</td>
<td>

Set with defaults to modify each request data. Takes and returns in order: error, path, params

</td>
<td>

[`GrabOptions`](#graboptions).[`onError`](#onerror)

</td>
<td>

[grab-api.ts:627](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L627)

</td>
</tr>
<tr>
<td>

<a id="onstream-1"></a> `onStream?`

</td>
<td>

(...`args`: `any`[]) => `any`

</td>
<td>

Set with defaults to process the response as a stream (i.e., for instant unzip)

</td>
<td>

[`GrabOptions`](#graboptions).[`onStream`](#onstream)

</td>
<td>

[grab-api.ts:629](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L629)

</td>
</tr>
<tr>
<td>

<a id="repeat-1"></a> `repeat?`

</td>
<td>

`number`

</td>
<td>

default=0 Repeat request this many times

</td>
<td>

[`GrabOptions`](#graboptions).[`repeat`](#repeat)

</td>
<td>

[grab-api.ts:631](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L631)

</td>
</tr>
<tr>
<td>

<a id="repeatevery-1"></a> `repeatEvery?`

</td>
<td>

`number`

</td>
<td>

default=null Repeat request every seconds

</td>
<td>

[`GrabOptions`](#graboptions).[`repeatEvery`](#repeatevery)

</td>
<td>

[grab-api.ts:633](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L633)

</td>
</tr>
<tr>
<td>

<a id="debounce-1"></a> `debounce?`

</td>
<td>

`number`

</td>
<td>

default=0 Seconds to debounce request, wait to execute so that other requests may override

</td>
<td>

[`GrabOptions`](#graboptions).[`debounce`](#debounce)

</td>
<td>

[grab-api.ts:635](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L635)

</td>
</tr>
<tr>
<td>

<a id="regrabonstale-1"></a> `regrabOnStale?`

</td>
<td>

`boolean`

</td>
<td>

default=false Refetch when cache is past cacheForTime

</td>
<td>

[`GrabOptions`](#graboptions).[`regrabOnStale`](#regrabonstale)

</td>
<td>

[grab-api.ts:637](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L637)

</td>
</tr>
<tr>
<td>

<a id="regrabonfocus-1"></a> `regrabOnFocus?`

</td>
<td>

`boolean`

</td>
<td>

default=false Refetch on window refocus

</td>
<td>

[`GrabOptions`](#graboptions).[`regrabOnFocus`](#regrabonfocus)

</td>
<td>

[grab-api.ts:639](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L639)

</td>
</tr>
<tr>
<td>

<a id="regrabonnetwork-1"></a> `regrabOnNetwork?`

</td>
<td>

`boolean`

</td>
<td>

default=false Refetch on network change

</td>
<td>

[`GrabOptions`](#graboptions).[`regrabOnNetwork`](#regrabonnetwork)

</td>
<td>

[grab-api.ts:641](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L641)

</td>
</tr>
<tr>
<td>

<a id="post-1"></a> `post?`

</td>
<td>

`boolean`

</td>
<td>

shortcut for method: "POST"

</td>
<td>

[`GrabOptions`](#graboptions).[`post`](#post)

</td>
<td>

[grab-api.ts:643](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L643)

</td>
</tr>
<tr>
<td>

<a id="put-1"></a> `put?`

</td>
<td>

`boolean`

</td>
<td>

shortcut for method: "PUT"

</td>
<td>

[`GrabOptions`](#graboptions).[`put`](#put)

</td>
<td>

[grab-api.ts:645](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L645)

</td>
</tr>
<tr>
<td>

<a id="patch-1"></a> `patch?`

</td>
<td>

`boolean`

</td>
<td>

shortcut for method: "PATCH"

</td>
<td>

[`GrabOptions`](#graboptions).[`patch`](#patch)

</td>
<td>

[grab-api.ts:647](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L647)

</td>
</tr>
<tr>
<td>

<a id="body-1"></a> `body?`

</td>
<td>

`any`

</td>
<td>

default=null The body of the POST/PUT/PATCH request (can be passed into main)

</td>
<td>

[`GrabOptions`](#graboptions).[`body`](#body)

</td>
<td>

[grab-api.ts:649](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L649)

</td>
</tr>
</tbody>
</table>

***

## GrabMockHandler&lt;TParams, TResponse&gt;

Defined in: [grab-api.ts:662](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L662)

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

[grab-api.ts:664](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L664)

</td>
</tr>
<tr>
<td>

<a id="method-2"></a> `method?`

</td>
<td>

`"GET"` \| `"POST"` \| `"PUT"` \| `"PATCH"` \| `"DELETE"` \| `"OPTIONS"` \| `"HEAD"`

</td>
<td>

HTTP method this mock should respond to

</td>
<td>

[grab-api.ts:666](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L666)

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

[grab-api.ts:668](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L668)

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

[grab-api.ts:670](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L670)

</td>
</tr>
</tbody>
</table>

***

## GrabLogEntry

Defined in: [grab-api.ts:674](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L674)

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

[grab-api.ts:676](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L676)

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

[grab-api.ts:678](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L678)

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

[grab-api.ts:680](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L680)

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

[grab-api.ts:682](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L682)

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

[grab-api.ts:684](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L684)

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

[grab-api.ts:686](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L686)

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

[grab-api.ts:688](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L688)

</td>
</tr>
</tbody>
</table>

***

## GrabGlobal

Defined in: [grab-api.ts:692](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L692)

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

[grab-api.ts:694](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L694)

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

[grab-api.ts:696](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L696)

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

[grab-api.ts:698](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L698)

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

[grab-api.ts:700](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L700)

</td>
</tr>
</tbody>
</table>

***

## GrabFunction()

Defined in: [grab-api.ts:704](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L704)

Main grab function signature with overloads for different use cases

### Call Signature

```ts
GrabFunction<TResponse>(path: string): Promise<GrabResponse<TResponse>>;
```

Defined in: [grab-api.ts:713](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L713)

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

The response object with resulting data or .error if error.

#### Author

[vtempest (2025)](https://github.com/vtempest/grab-api)

#### See

[🎯 Examples](https://grab.js.org/guide/Examples) [📑 Docs](https://grab.js.org/lib)

### Call Signature

```ts
GrabFunction<TResponse, TParams>(path: string, config: GrabRequestConfig<TResponse, TParams>): Promise<GrabResponse<TResponse>>;
```

Defined in: [grab-api.ts:723](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L723)

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

[grab-api.ts:729](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L729)

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

[grab-api.ts:732](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L732)

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

[grab-api.ts:735](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L735)

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

[grab-api.ts:738](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L738)

</td>
</tr>
</tbody>
</table>

***

## LogFunction()

Defined in: [grab-api.ts:742](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L742)

Log function for debugging

```ts
LogFunction(
   message: string | object, 
   hideInProduction?: boolean, 
   style?: string): void;
```

Defined in: [grab-api.ts:749](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L749)

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

Defined in: [grab-api.ts:753](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L753)

Utility function to describe JSON structure

```ts
PrintStructureJSONFunction(obj: any): string;
```

Defined in: [grab-api.ts:759](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L759)

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

## GrabResponseWithData&lt;T&gt;

```ts
type GrabResponseWithData<T> = GrabResponse<T> & object;
```

Defined in: [grab-api.ts:764](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L764)

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

[grab-api.ts:765](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L765)

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

## TypedGrabFunction()

```ts
type TypedGrabFunction = <TResponse, TParams>(path: string, config?: GrabRequestConfig<TResponse, TParams>) => Promise<GrabResponse<TResponse>>;
```

Defined in: [grab-api.ts:770](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L770)

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

## grab()

```ts
function grab(path: string, options?: GrabOptions): Promise<unknown>;
```

Defined in: [grab-api.ts:84](https://github.com/vtempest/grab-api/tree/master/src/grab-api.ts#L84)

### GRAB: Generate Request to API from Browser
![GrabAPILogo](https://i.imgur.com/qrQWkeb.png)
**GRAB is the FBEST Request Manager: Functionally Brilliant, Elegantly Simple Tool**
1. **One Function**: 3Kb min, 0 dependencies, minimalist syntax, [more features than top alternatives](https://grab.js.org/guide/Comparisons)
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

[`GrabOptions`](#graboptions)

</td>
<td>

Request params for GET or body for POST/PUT/PATCH and utility options

</td>
</tr>
</tbody>
</table>

### Returns

`Promise`&lt;`unknown`&gt;

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

## printStructureJSON

Re-exports [printStructureJSON](log.md#printstructurejson)
