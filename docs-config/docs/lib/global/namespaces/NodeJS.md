[Documentation](../../modules.md) / [global](../README.md) / NodeJS

Node.js globals

## Iterator&lt;T, TReturn, TNext&gt;

Defined in: docs-config/node\_modules/@types/node/compatibility/iterators.d.ts:14

Populate iterator methods for TS <5.6

### Extends

- `Iterator`&lt;`T`, `TReturn`, `TNext`&gt;.`IteratorObject`&lt;`T`, `TReturn`, `TNext`&gt;

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
<tr>
<td>

`TReturn`

</td>
</tr>
<tr>
<td>

`TNext`

</td>
</tr>
</tbody>
</table>

### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="tostringtag"></a> `[toStringTag]`

</td>
<td>

`readonly`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/typescript/lib/lib.esnext.iterator.d.ts:134

</td>
</tr>
</tbody>
</table>

### Methods

#### \[iterator\]()

```ts
iterator: Iterator<T, TReturn, TNext>;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:441

##### Returns

[`Iterator`](#iterator)&lt;`T`, `TReturn`, `TNext`&gt;

#### next()

```ts
next(...__namedParameters: [] | [TNext]): IteratorResult<T, TReturn>;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:43

NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.

##### Parameters

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

...`__namedParameters`

</td>
<td>

\[\] \| \[`TNext`\]

</td>
</tr>
</tbody>
</table>

##### Returns

`IteratorResult`&lt;`T`, `TReturn`&gt;

##### Inherited from

```ts
globalThis.Iterator.next
```

#### return()?

```ts
optional return(value?: TReturn): IteratorResult<T, TReturn>;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:44

##### Parameters

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

`value?`

</td>
<td>

`TReturn`

</td>
</tr>
</tbody>
</table>

##### Returns

`IteratorResult`&lt;`T`, `TReturn`&gt;

##### Inherited from

```ts
globalThis.Iterator.return
```

#### throw()?

```ts
optional throw(e?: any): IteratorResult<T, TReturn>;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:45

##### Parameters

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

`e?`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

##### Returns

`IteratorResult`&lt;`T`, `TReturn`&gt;

##### Inherited from

```ts
globalThis.Iterator.throw
```

#### map()

```ts
map<U>(callbackfn: (value: T, index: number) => U): IteratorObject<U, undefined, unknown>;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.esnext.iterator.d.ts:50

Creates an iterator whose values are the result of applying the callback to the values from this iterator.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`U`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`callbackfn`

</td>
<td>

(`value`: `T`, `index`: `number`) => `U`

</td>
<td>

A function that accepts up to two arguments to be used to transform values from the underlying iterator.

</td>
</tr>
</tbody>
</table>

##### Returns

`IteratorObject`&lt;`U`, `undefined`, `unknown`&gt;

#### filter()

##### Call Signature

```ts
filter<S>(predicate: (value: T, index: number) => value is S): IteratorObject<S, undefined, unknown>;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.esnext.iterator.d.ts:56

Creates an iterator whose values are those from this iterator for which the provided predicate returns true.

###### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`S`

</td>
</tr>
</tbody>
</table>

###### Parameters

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

`predicate`

</td>
<td>

(`value`: `T`, `index`: `number`) => `value is S`

</td>
<td>

A function that accepts up to two arguments to be used to test values from the underlying iterator.

</td>
</tr>
</tbody>
</table>

###### Returns

`IteratorObject`&lt;`S`, `undefined`, `unknown`&gt;

##### Call Signature

```ts
filter(predicate: (value: T, index: number) => unknown): IteratorObject<T, undefined, unknown>;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.esnext.iterator.d.ts:62

Creates an iterator whose values are those from this iterator for which the provided predicate returns true.

###### Parameters

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

`predicate`

</td>
<td>

(`value`: `T`, `index`: `number`) => `unknown`

</td>
<td>

A function that accepts up to two arguments to be used to test values from the underlying iterator.

</td>
</tr>
</tbody>
</table>

###### Returns

`IteratorObject`&lt;`T`, `undefined`, `unknown`&gt;

#### take()

```ts
take(limit: number): IteratorObject<T, undefined, unknown>;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.esnext.iterator.d.ts:68

Creates an iterator whose values are the values from this iterator, stopping once the provided limit is reached.

##### Parameters

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

`limit`

</td>
<td>

`number`

</td>
<td>

The maximum number of values to yield.

</td>
</tr>
</tbody>
</table>

##### Returns

`IteratorObject`&lt;`T`, `undefined`, `unknown`&gt;

#### drop()

```ts
drop(count: number): IteratorObject<T, undefined, unknown>;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.esnext.iterator.d.ts:74

Creates an iterator whose values are the values from this iterator after skipping the provided count.

##### Parameters

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

`count`

</td>
<td>

`number`

</td>
<td>

The number of values to drop.

</td>
</tr>
</tbody>
</table>

##### Returns

`IteratorObject`&lt;`T`, `undefined`, `unknown`&gt;

#### flatMap()

```ts
flatMap<U>(callback: (value: T, index: number) => 
  | Iterator<U, unknown, undefined>
  | Iterable<U, unknown, undefined>): IteratorObject<U, undefined, unknown>;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.esnext.iterator.d.ts:80

Creates an iterator whose values are the result of applying the callback to the values from this iterator and then flattening the resulting iterators or iterables.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`U`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`callback`

</td>
<td>

(`value`: `T`, `index`: `number`) => \| `Iterator`&lt;`U`, `unknown`, `undefined`&gt; \| `Iterable`&lt;`U`, `unknown`, `undefined`&gt;

</td>
<td>

A function that accepts up to two arguments to be used to transform values from the underlying iterator into new iterators or iterables to be flattened into the result.

</td>
</tr>
</tbody>
</table>

##### Returns

`IteratorObject`&lt;`U`, `undefined`, `unknown`&gt;

#### reduce()

##### Call Signature

```ts
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number) => T): T;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.esnext.iterator.d.ts:87

Calls the specified callback function for all the elements in this iterator. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

###### Parameters

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

`callbackfn`

</td>
<td>

(`previousValue`: `T`, `currentValue`: `T`, `currentIndex`: `number`) => `T`

</td>
<td>

A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the iterator.

</td>
</tr>
</tbody>
</table>

###### Returns

`T`

##### Call Signature

```ts
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number) => T, initialValue: T): T;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.esnext.iterator.d.ts:88

###### Parameters

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

`callbackfn`

</td>
<td>

(`previousValue`: `T`, `currentValue`: `T`, `currentIndex`: `number`) => `T`

</td>
</tr>
<tr>
<td>

`initialValue`

</td>
<td>

`T`

</td>
</tr>
</tbody>
</table>

###### Returns

`T`

##### Call Signature

```ts
reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.esnext.iterator.d.ts:95

Calls the specified callback function for all the elements in this iterator. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

###### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`U`

</td>
</tr>
</tbody>
</table>

###### Parameters

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

`callbackfn`

</td>
<td>

(`previousValue`: `U`, `currentValue`: `T`, `currentIndex`: `number`) => `U`

</td>
<td>

A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the iterator.

</td>
</tr>
<tr>
<td>

`initialValue`

</td>
<td>

`U`

</td>
<td>

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of a value from the iterator.

</td>
</tr>
</tbody>
</table>

###### Returns

`U`

#### toArray()

```ts
toArray(): T[];
```

Defined in: docs-config/node\_modules/typescript/lib/lib.esnext.iterator.d.ts:100

Creates a new array from the values yielded by this iterator.

##### Returns

`T`[]

#### forEach()

```ts
forEach(callbackfn: (value: T, index: number) => void): void;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.esnext.iterator.d.ts:106

Performs the specified action for each element in the iterator.

##### Parameters

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

`callbackfn`

</td>
<td>

(`value`: `T`, `index`: `number`) => `void`

</td>
<td>

A function that accepts up to two arguments. forEach calls the callbackfn function one time for each element in the iterator.

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

#### some()

```ts
some(predicate: (value: T, index: number) => unknown): boolean;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.esnext.iterator.d.ts:114

Determines whether the specified callback function returns true for any element of this iterator.

##### Parameters

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

`predicate`

</td>
<td>

(`value`: `T`, `index`: `number`) => `unknown`

</td>
<td>

A function that accepts up to two arguments. The some method calls
the predicate function for each element in this iterator until the predicate returns a value
true, or until the end of the iterator.

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

#### every()

```ts
every(predicate: (value: T, index: number) => unknown): boolean;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.esnext.iterator.d.ts:122

Determines whether all the members of this iterator satisfy the specified test.

##### Parameters

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

`predicate`

</td>
<td>

(`value`: `T`, `index`: `number`) => `unknown`

</td>
<td>

A function that accepts up to two arguments. The every method calls
the predicate function for each element in this iterator until the predicate returns
false, or until the end of this iterator.

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

#### find()

##### Call Signature

```ts
find<S>(predicate: (value: T, index: number) => value is S): S;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.esnext.iterator.d.ts:131

Returns the value of the first element in this iterator where predicate is true, and undefined
otherwise.

###### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`S`

</td>
</tr>
</tbody>
</table>

###### Parameters

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

`predicate`

</td>
<td>

(`value`: `T`, `index`: `number`) => `value is S`

</td>
<td>

find calls predicate once for each element of this iterator, in
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

</td>
</tr>
</tbody>
</table>

###### Returns

`S`

##### Call Signature

```ts
find(predicate: (value: T, index: number) => unknown): T;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.esnext.iterator.d.ts:132

###### Parameters

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

`predicate`

</td>
<td>

(`value`: `T`, `index`: `number`) => `unknown`

</td>
</tr>
</tbody>
</table>

###### Returns

`T`

#### \[dispose\]()

##### Call Signature

```ts
dispose: void;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.esnext.disposable.d.ts:36

###### Returns

`void`

##### Call Signature

```ts
dispose: void;
```

Defined in: docs-config/node\_modules/@types/node/compatibility/disposable.d.ts:11

###### Returns

`void`

***

## AsyncIterator&lt;T, TReturn, TNext&gt;

Defined in: docs-config/node\_modules/@types/node/compatibility/iterators.d.ts:15

Default TReturn/TNext in v22 is `any`, for compatibility with the previously-used AsyncIterableIterator.
TODO: In next major @types/node version, change default TReturn to undefined.

### Extends

- `AsyncIterator`&lt;`T`, `TReturn`, `TNext`&gt;.`AsyncIteratorObject`&lt;`T`, `TReturn`, `TNext`&gt;

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
<tr>
<td>

`TReturn`

</td>
</tr>
<tr>
<td>

`TNext`

</td>
</tr>
</tbody>
</table>

### Methods

#### \[asyncIterator\]()

```ts
asyncIterator: AsyncIterator<T, TReturn, TNext>;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:448

##### Returns

[`AsyncIterator`](#asynciterator)&lt;`T`, `TReturn`, `TNext`&gt;

#### next()

```ts
next(...__namedParameters: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:32

NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.

##### Parameters

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

...`__namedParameters`

</td>
<td>

\[\] \| \[`TNext`\]

</td>
</tr>
</tbody>
</table>

##### Returns

`Promise`&lt;`IteratorResult`&lt;`T`, `TReturn`&gt;&gt;

##### Inherited from

```ts
globalThis.AsyncIterator.next
```

#### return()?

```ts
optional return(value?: TReturn | PromiseLike<TReturn>): Promise<IteratorResult<T, TReturn>>;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:33

##### Parameters

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

`value?`

</td>
<td>

`TReturn` \| `PromiseLike`&lt;`TReturn`&gt;

</td>
</tr>
</tbody>
</table>

##### Returns

`Promise`&lt;`IteratorResult`&lt;`T`, `TReturn`&gt;&gt;

##### Inherited from

```ts
globalThis.AsyncIterator.return
```

#### throw()?

```ts
optional throw(e?: any): Promise<IteratorResult<T, TReturn>>;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:34

##### Parameters

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

`e?`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

##### Returns

`Promise`&lt;`IteratorResult`&lt;`T`, `TReturn`&gt;&gt;

##### Inherited from

```ts
globalThis.AsyncIterator.throw
```

#### \[asyncDispose\]()

##### Call Signature

```ts
asyncDispose: PromiseLike<void>;
```

Defined in: docs-config/node\_modules/typescript/lib/lib.esnext.disposable.d.ts:40

###### Returns

`PromiseLike`&lt;`void`&gt;

##### Call Signature

```ts
asyncDispose: PromiseLike<void>;
```

Defined in: docs-config/node\_modules/@types/node/compatibility/disposable.d.ts:15

###### Returns

`PromiseLike`&lt;`void`&gt;

***

## Process

Defined in: docs-config/node\_modules/bun-types/deprecated.d.ts:48

### Extends

- [`EventEmitter`](#eventemitter)

### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="stdout"></a> `stdout`

</td>
<td>

`public`

</td>
<td>

[`WriteStream`](#writestream) & `object`

</td>
<td>

The `process.stdout` property returns a stream connected to`stdout` (fd `1`). It is a `net.Socket` (which is a `Duplex` stream) unless fd `1` refers to a file, in which case it is
a `Writable` stream.

For example, to copy `process.stdin` to `process.stdout`:

```js
import { stdin, stdout } from 'node:process';

stdin.pipe(stdout);
```

`process.stdout` differs from other Node.js streams in important ways. See `note on process I/O` for more information.

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:577

</td>
</tr>
<tr>
<td>

<a id="stderr"></a> `stderr`

</td>
<td>

`public`

</td>
<td>

[`WriteStream`](#writestream) & `object`

</td>
<td>

The `process.stderr` property returns a stream connected to`stderr` (fd `2`). It is a `net.Socket` (which is a `Duplex` stream) unless fd `2` refers to a file, in which case it is
a `Writable` stream.

`process.stderr` differs from other Node.js streams in important ways. See `note on process I/O` for more information.

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:586

</td>
</tr>
<tr>
<td>

<a id="stdin"></a> `stdin`

</td>
<td>

`public`

</td>
<td>

[`ReadStream`](#readstream) & `object`

</td>
<td>

The `process.stdin` property returns a stream connected to`stdin` (fd `0`). It is a `net.Socket` (which is a `Duplex` stream) unless fd `0` refers to a file, in which case it is
a `Readable` stream.

For details of how to read from `stdin` see `readable.read()`.

As a `Duplex` stream, `process.stdin` can also be used in "old" mode that
is compatible with scripts written for Node.js prior to v0.10\.
For more information see `Stream compatibility`.

In "old" streams mode the `stdin` stream is paused by default, so one
must call `process.stdin.resume()` to read from it. Note also that calling `process.stdin.resume()` itself would switch stream to "old" mode.

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:602

</td>
</tr>
<tr>
<td>

<a id="argv"></a> `argv`

</td>
<td>

`public`

</td>
<td>

`string`[]

</td>
<td>

The `process.argv` property returns an array containing the command-line
arguments passed when the Node.js process was launched. The first element will
be [execPath](#execpath). See `process.argv0` if access to the original value
of `argv[0]` is needed. The second element will be the path to the JavaScript
file being executed. The remaining elements will be any additional command-line
arguments.

For example, assuming the following script for `process-args.js`:

```js
import { argv } from 'node:process';

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
```

Launching the Node.js process as:

```bash
node process-args.js one two=three four
```

Would generate the output:

```text
0: /usr/local/bin/node
1: /Users/mjr/work/node/process-args.js
2: one
3: two=three
4: four
```

**Since**

v0.1.27

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:641

</td>
</tr>
<tr>
<td>

<a id="argv0"></a> `argv0`

</td>
<td>

`public`

</td>
<td>

`string`

</td>
<td>

The `process.argv0` property stores a read-only copy of the original value of`argv[0]` passed when Node.js starts.

```console
$ bash -c 'exec -a customArgv0 ./node'
> process.argv[0]
'/Volumes/code/external/node/out/Release/node'
> process.argv0
'customArgv0'
```

**Since**

v6.4.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:654

</td>
</tr>
<tr>
<td>

<a id="execargv"></a> `execArgv`

</td>
<td>

`public`

</td>
<td>

`string`[]

</td>
<td>

The `process.execArgv` property returns the set of Node.js-specific command-line
options passed when the Node.js process was launched. These options do not
appear in the array returned by the [argv](#argv) property, and do not
include the Node.js executable, the name of the script, or any options following
the script name. These options are useful in order to spawn child processes with
the same execution environment as the parent.

```bash
node --icu-data-dir=./foo --require ./bar.js script.js --version
```

Results in `process.execArgv`:

```js
["--icu-data-dir=./foo", "--require", "./bar.js"]
```

And `process.argv`:

```js
['/usr/local/bin/node', 'script.js', '--version']
```

Refer to `Worker constructor` for the detailed behavior of worker
threads with this property.

**Since**

v0.7.7

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:683

</td>
</tr>
<tr>
<td>

<a id="execpath"></a> `execPath`

</td>
<td>

`public`

</td>
<td>

`string`

</td>
<td>

The `process.execPath` property returns the absolute pathname of the executable
that started the Node.js process. Symbolic links, if any, are resolved.

```js
'/usr/local/bin/node'
```

**Since**

v0.1.100

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:693

</td>
</tr>
<tr>
<td>

<a id="debugport"></a> `debugPort`

</td>
<td>

`public`

</td>
<td>

`number`

</td>
<td>

The port used by the Node.js debugger when enabled.

```js
import process from 'node:process';

process.debugPort = 5858;
```

**Since**

v0.7.2

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:745

</td>
</tr>
<tr>
<td>

<a id="env"></a> `env`

</td>
<td>

`public`

</td>
<td>

[`ProcessEnv`](#processenv-1)

</td>
<td>

The `process.env` property returns an object containing the user environment.
See [`environ(7)`](http://man7.org/linux/man-pages/man7/environ.7.html).

An example of this object looks like:

```js
{
  TERM: 'xterm-256color',
  SHELL: '/usr/local/bin/bash',
  USER: 'maciej',
  PATH: '~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin',
  PWD: '/Users/maciej',
  EDITOR: 'vim',
  SHLVL: '1',
  HOME: '/Users/maciej',
  LOGNAME: 'maciej',
  _: '/usr/local/bin/node'
}
```

It is possible to modify this object, but such modifications will not be
reflected outside the Node.js process, or (unless explicitly requested)
to other `Worker` threads.
In other words, the following example would not work:

```bash
node -e 'process.env.foo = "bar"' &#x26;&#x26; echo $foo
```

While the following will:

```js
import { env } from 'node:process';

env.foo = 'bar';
console.log(env.foo);
```

Assigning a property on `process.env` will implicitly convert the value
to a string. **This behavior is deprecated.** Future versions of Node.js may
throw an error when the value is not a string, number, or boolean.

```js
import { env } from 'node:process';

env.test = null;
console.log(env.test);
// => 'null'
env.test = undefined;
console.log(env.test);
// => 'undefined'
```

Use `delete` to delete a property from `process.env`.

```js
import { env } from 'node:process';

env.TEST = 1;
delete env.TEST;
console.log(env.TEST);
// => undefined
```

On Windows operating systems, environment variables are case-insensitive.

```js
import { env } from 'node:process';

env.TEST = 1;
console.log(env.test);
// => 1
```

Unless explicitly specified when creating a `Worker` instance,
each `Worker` thread has its own copy of `process.env`, based on its
parent thread's `process.env`, or whatever was specified as the `env` option
to the `Worker` constructor. Changes to `process.env` will not be visible
across `Worker` threads, and only the main thread can make changes that
are visible to the operating system or to native add-ons. On Windows, a copy of `process.env` on a `Worker` instance operates in a case-sensitive manner
unlike the main thread.

**Since**

v0.1.27

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:928

</td>
</tr>
<tr>
<td>

<a id="exitcode"></a> `exitCode?`

</td>
<td>

`public`

</td>
<td>

`string` \| `number`

</td>
<td>

A number which will be the process exit code, when the process either
exits gracefully, or is exited via [exit](#exit) without specifying
a code.

Specifying a code to [exit](#exit) will override any
previous setting of `process.exitCode`.

**Default**

```ts
undefined
```

**Since**

v0.11.8

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1005

</td>
</tr>
<tr>
<td>

<a id="finalization"></a> `finalization`

</td>
<td>

`public`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1006

</td>
</tr>
<tr>
<td>

`finalization.register`

</td>
<td>

`public`

</td>
<td>

`void`

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1021

</td>
</tr>
<tr>
<td>

`finalization.registerBeforeExit`

</td>
<td>

`public`

</td>
<td>

`void`

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1031

</td>
</tr>
<tr>
<td>

`finalization.unregister`

</td>
<td>

`public`

</td>
<td>

`void`

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1038

</td>
</tr>
<tr>
<td>

<a id="getgid"></a> `getgid?`

</td>
<td>

`public`

</td>
<td>

() => `number`

</td>
<td>

The `process.getgid()` method returns the numerical group identity of the
process. (See [`getgid(2)`](http://man7.org/linux/man-pages/man2/getgid.2.html).)

```js
import process from 'node:process';

if (process.getgid) {
  console.log(`Current gid: ${process.getgid()}`);
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).

**Since**

v0.1.31

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1080

</td>
</tr>
<tr>
<td>

<a id="setgid"></a> `setgid?`

</td>
<td>

`public`

</td>
<td>

(`id`: `string` \| `number`) => `void`

</td>
<td>

The `process.setgid()` method sets the group identity of the process. (See [`setgid(2)`](http://man7.org/linux/man-pages/man2/setgid.2.html).) The `id` can be passed as either a
numeric ID or a group name
string. If a group name is specified, this method blocks while resolving the
associated numeric ID.

```js
import process from 'node:process';

if (process.getgid &#x26;&#x26; process.setgid) {
  console.log(`Current gid: ${process.getgid()}`);
  try {
    process.setgid(501);
    console.log(`New gid: ${process.getgid()}`);
  } catch (err) {
    console.log(`Failed to set gid: ${err}`);
  }
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).
This feature is not available in `Worker` threads.

**Since**

v0.1.31

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1107

</td>
</tr>
<tr>
<td>

<a id="getuid"></a> `getuid?`

</td>
<td>

`public`

</td>
<td>

() => `number`

</td>
<td>

The `process.getuid()` method returns the numeric user identity of the process.
(See [`getuid(2)`](http://man7.org/linux/man-pages/man2/getuid.2.html).)

```js
import process from 'node:process';

if (process.getuid) {
  console.log(`Current uid: ${process.getuid()}`);
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).

**Since**

v0.1.28

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1124

</td>
</tr>
<tr>
<td>

<a id="setuid"></a> `setuid?`

</td>
<td>

`public`

</td>
<td>

(`id`: `string` \| `number`) => `void`

</td>
<td>

The `process.setuid(id)` method sets the user identity of the process. (See [`setuid(2)`](http://man7.org/linux/man-pages/man2/setuid.2.html).) The `id` can be passed as either a
numeric ID or a username string.
If a username is specified, the method blocks while resolving the associated
numeric ID.

```js
import process from 'node:process';

if (process.getuid &#x26;&#x26; process.setuid) {
  console.log(`Current uid: ${process.getuid()}`);
  try {
    process.setuid(501);
    console.log(`New uid: ${process.getuid()}`);
  } catch (err) {
    console.log(`Failed to set uid: ${err}`);
  }
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).
This feature is not available in `Worker` threads.

**Since**

v0.1.28

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1150

</td>
</tr>
<tr>
<td>

<a id="geteuid"></a> `geteuid?`

</td>
<td>

`public`

</td>
<td>

() => `number`

</td>
<td>

The `process.geteuid()` method returns the numerical effective user identity of
the process. (See [`geteuid(2)`](http://man7.org/linux/man-pages/man2/geteuid.2.html).)

```js
import process from 'node:process';

if (process.geteuid) {
  console.log(`Current uid: ${process.geteuid()}`);
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).

**Since**

v2.0.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1167

</td>
</tr>
<tr>
<td>

<a id="seteuid"></a> `seteuid?`

</td>
<td>

`public`

</td>
<td>

(`id`: `string` \| `number`) => `void`

</td>
<td>

The `process.seteuid()` method sets the effective user identity of the process.
(See [`seteuid(2)`](http://man7.org/linux/man-pages/man2/seteuid.2.html).) The `id` can be passed as either a numeric ID or a username
string. If a username is specified, the method blocks while resolving the
associated numeric ID.

```js
import process from 'node:process';

if (process.geteuid &#x26;&#x26; process.seteuid) {
  console.log(`Current uid: ${process.geteuid()}`);
  try {
    process.seteuid(501);
    console.log(`New uid: ${process.geteuid()}`);
  } catch (err) {
    console.log(`Failed to set uid: ${err}`);
  }
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).
This feature is not available in `Worker` threads.

**Since**

v2.0.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1194

</td>
</tr>
<tr>
<td>

<a id="getegid"></a> `getegid?`

</td>
<td>

`public`

</td>
<td>

() => `number`

</td>
<td>

The `process.getegid()` method returns the numerical effective group identity
of the Node.js process. (See [`getegid(2)`](http://man7.org/linux/man-pages/man2/getegid.2.html).)

```js
import process from 'node:process';

if (process.getegid) {
  console.log(`Current gid: ${process.getegid()}`);
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).

**Since**

v2.0.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1211

</td>
</tr>
<tr>
<td>

<a id="setegid"></a> `setegid?`

</td>
<td>

`public`

</td>
<td>

(`id`: `string` \| `number`) => `void`

</td>
<td>

The `process.setegid()` method sets the effective group identity of the process.
(See [`setegid(2)`](http://man7.org/linux/man-pages/man2/setegid.2.html).) The `id` can be passed as either a numeric ID or a group
name string. If a group name is specified, this method blocks while resolving
the associated a numeric ID.

```js
import process from 'node:process';

if (process.getegid &#x26;&#x26; process.setegid) {
  console.log(`Current gid: ${process.getegid()}`);
  try {
    process.setegid(501);
    console.log(`New gid: ${process.getegid()}`);
  } catch (err) {
    console.log(`Failed to set gid: ${err}`);
  }
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).
This feature is not available in `Worker` threads.

**Since**

v2.0.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1238

</td>
</tr>
<tr>
<td>

<a id="getgroups"></a> `getgroups?`

</td>
<td>

`public`

</td>
<td>

() => `number`[]

</td>
<td>

The `process.getgroups()` method returns an array with the supplementary group
IDs. POSIX leaves it unspecified if the effective group ID is included but
Node.js ensures it always is.

```js
import process from 'node:process';

if (process.getgroups) {
  console.log(process.getgroups()); // [ 16, 21, 297 ]
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).

**Since**

v0.9.4

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1256

</td>
</tr>
<tr>
<td>

<a id="setgroups"></a> `setgroups?`

</td>
<td>

`public`

</td>
<td>

(`groups`: readonly (`string` \| `number`)[]) => `void`

</td>
<td>

The `process.setgroups()` method sets the supplementary group IDs for the
Node.js process. This is a privileged operation that requires the Node.js
process to have `root` or the `CAP_SETGID` capability.

The `groups` array can contain numeric group IDs, group names, or both.

```js
import process from 'node:process';

if (process.getgroups &#x26;&#x26; process.setgroups) {
  try {
    process.setgroups([501]);
    console.log(process.getgroups()); // new groups
  } catch (err) {
    console.log(`Failed to set groups: ${err}`);
  }
}
```

This function is only available on POSIX platforms (i.e. not Windows or
Android).
This feature is not available in `Worker` threads.

**Since**

v0.9.4

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1282

</td>
</tr>
<tr>
<td>

<a id="sourcemapsenabled"></a> `sourceMapsEnabled`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

**`Experimental`**

The `process.sourceMapsEnabled` property returns whether the [Source Map v3](https://sourcemaps.info/spec.html) support for stack traces is enabled.

**Since**

v20.7.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1312

</td>
</tr>
<tr>
<td>

<a id="version"></a> `version`

</td>
<td>

`readonly`

</td>
<td>

`string`

</td>
<td>

The `process.version` property contains the Node.js version string.

```js
import { version } from 'node:process';

console.log(`Version: ${version}`);
// Version: v14.8.0
```

To get the version string without the prepended _v_, use`process.versions.node`.

**Since**

v0.1.3

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1338

</td>
</tr>
<tr>
<td>

<a id="versions"></a> `versions`

</td>
<td>

`readonly`

</td>
<td>

[`ProcessVersions`](#processversions-1)

</td>
<td>

The `process.versions` property returns an object listing the version strings of
Node.js and its dependencies. `process.versions.modules` indicates the current
ABI version, which is increased whenever a C++ API changes. Node.js will refuse
to load modules that were compiled against a different module ABI version.

```js
import { versions } from 'node:process';

console.log(versions);
```

Will generate an object similar to:

```console
{ node: '20.2.0',
  acorn: '8.8.2',
  ada: '2.4.0',
  ares: '1.19.0',
  base64: '0.5.0',
  brotli: '1.0.9',
  cjs_module_lexer: '1.2.2',
  cldr: '43.0',
  icu: '73.1',
  llhttp: '8.1.0',
  modules: '115',
  napi: '8',
  nghttp2: '1.52.0',
  nghttp3: '0.7.0',
  ngtcp2: '0.8.1',
  openssl: '3.0.8+quic',
  simdutf: '3.2.9',
  tz: '2023c',
  undici: '5.22.0',
  unicode: '15.0',
  uv: '1.44.2',
  uvwasi: '0.0.16',
  v8: '11.3.244.8-node.9',
  zlib: '1.2.13' }
```

**Since**

v0.2.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1381

</td>
</tr>
<tr>
<td>

<a id="config"></a> `config`

</td>
<td>

`readonly`

</td>
<td>

[`ProcessConfig`](#processconfig-1)

</td>
<td>

The `process.config` property returns a frozen `Object` containing the
JavaScript representation of the configure options used to compile the current
Node.js executable. This is the same as the `config.gypi` file that was produced
when running the `./configure` script.

An example of the possible output looks like:

```js
{
  target_defaults:
   { cflags: [],
     default_configuration: 'Release',
     defines: [],
     include_dirs: [],
     libraries: [] },
  variables:
   {
     host_arch: 'x64',
     napi_build_version: 5,
     node_install_npm: 'true',
     node_prefix: '',
     node_shared_cares: 'false',
     node_shared_http_parser: 'false',
     node_shared_libuv: 'false',
     node_shared_zlib: 'false',
     node_use_openssl: 'true',
     node_shared_openssl: 'false',
     strict_aliasing: 'true',
     target_arch: 'x64',
     v8_use_snapshot: 1
   }
}
```

**Since**

v0.7.7

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1418

</td>
</tr>
<tr>
<td>

<a id="pid"></a> `pid`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

The `process.pid` property returns the PID of the process.

```js
import { pid } from 'node:process';

console.log(`This process is pid ${pid}`);
```

**Since**

v0.1.15

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1480

</td>
</tr>
<tr>
<td>

<a id="ppid"></a> `ppid`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

The `process.ppid` property returns the PID of the parent of the
current process.

```js
import { ppid } from 'node:process';

console.log(`The parent process is pid ${ppid}`);
```

**Since**

v9.2.0, v8.10.0, v6.13.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1492

</td>
</tr>
<tr>
<td>

<a id="title"></a> `title`

</td>
<td>

`public`

</td>
<td>

`string`

</td>
<td>

The `process.title` property returns the current process title (i.e. returns
the current value of `ps`). Assigning a new value to `process.title` modifies
the current value of `ps`.

When a new value is assigned, different platforms will impose different maximum
length restrictions on the title. Usually such restrictions are quite limited.
For instance, on Linux and macOS, `process.title` is limited to the size of the
binary name plus the length of the command-line arguments because setting the `process.title` overwrites the `argv` memory of the process. Node.js v0.8
allowed for longer process title strings by also overwriting the `environ` memory but that was potentially insecure and confusing in some (rather obscure)
cases.

Assigning a value to `process.title` might not result in an accurate label
within process manager applications such as macOS Activity Monitor or Windows
Services Manager.

**Since**

v0.1.104

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1510

</td>
</tr>
<tr>
<td>

<a id="arch"></a> `arch`

</td>
<td>

`readonly`

</td>
<td>

[`Architecture`](#architecture)

</td>
<td>

The operating system CPU architecture for which the Node.js binary was compiled.
Possible values are: `'arm'`, `'arm64'`, `'ia32'`, `'loong64'`, `'mips'`, `'mipsel'`, `'ppc'`, `'ppc64'`, `'riscv64'`, `'s390'`, `'s390x'`, and `'x64'`.

```js
import { arch } from 'node:process';

console.log(`This processor architecture is ${arch}`);
```

**Since**

v0.5.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1522

</td>
</tr>
<tr>
<td>

<a id="platform"></a> `platform`

</td>
<td>

`readonly`

</td>
<td>

[`Platform`](#platform-1)

</td>
<td>

The `process.platform` property returns a string identifying the operating
system platform for which the Node.js binary was compiled.

Currently possible values are:

* `'aix'`
* `'darwin'`
* `'freebsd'`
* `'linux'`
* `'openbsd'`
* `'sunos'`
* `'win32'`

```js
import { platform } from 'node:process';

console.log(`This platform is ${platform}`);
```

The value `'android'` may also be returned if the Node.js is built on the
Android operating system. However, Android support in Node.js [is experimental](https://github.com/nodejs/node/blob/HEAD/BUILDING.md#androidandroid-based-devices-eg-firefox-os).

**Since**

v0.1.16

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1547

</td>
</tr>
<tr>
<td>

<a id="mainmodule"></a> ~~`mainModule?`~~

</td>
<td>

`public`

</td>
<td>

[`Module`](#module)

</td>
<td>

The `process.mainModule` property provides an alternative way of retrieving `require.main`. The difference is that if the main module changes at
runtime, `require.main` may still refer to the original main module in
modules that were required before the change occurred. Generally, it's
safe to assume that the two refer to the same module.

As with `require.main`, `process.mainModule` will be `undefined` if there
is no entry script.

**Since**

v0.1.17

**Deprecated**

Since v14.0.0 - Use `main` instead.

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1559

</td>
</tr>
<tr>
<td>

<a id="memoryusage"></a> `memoryUsage`

</td>
<td>

`public`

</td>
<td>

[`MemoryUsageFn`](#memoryusagefn)

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1560

</td>
</tr>
<tr>
<td>

<a id="permission"></a> `permission`

</td>
<td>

`public`

</td>
<td>

[`ProcessPermission`](#processpermission-1)

</td>
<td>

This API is available through the [--permission](https://nodejs.org/api/cli.html#--permission) flag.

`process.permission` is an object whose methods are used to manage permissions for the current process.
Additional documentation is available in the [Permission Model](https://nodejs.org/api/permissions.html#permission-model).

**Since**

v20.0.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1702

</td>
</tr>
<tr>
<td>

<a id="release"></a> `release`

</td>
<td>

`readonly`

</td>
<td>

[`ProcessRelease`](#processrelease-1)

</td>
<td>

The `process.release` property returns an `Object` containing metadata related
to the current release, including URLs for the source tarball and headers-only
tarball.

`process.release` contains the following properties:

```js
{
  name: 'node',
  lts: 'Hydrogen',
  sourceUrl: 'https://nodejs.org/download/release/v18.12.0/node-v18.12.0.tar.gz',
  headersUrl: 'https://nodejs.org/download/release/v18.12.0/node-v18.12.0-headers.tar.gz',
  libUrl: 'https://nodejs.org/download/release/v18.12.0/win-x64/node.lib'
}
```

In custom builds from non-release versions of the source tree, only the `name` property may be present. The additional properties should not be
relied upon to exist.

**Since**

v3.0.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1724

</td>
</tr>
<tr>
<td>

<a id="features"></a> `features`

</td>
<td>

`readonly`

</td>
<td>

[`ProcessFeatures`](#processfeatures-1)

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1725

</td>
</tr>
<tr>
<td>

<a id="hrtime"></a> `hrtime`

</td>
<td>

`public`

</td>
<td>

[`HRTime`](#hrtime-1)

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1747

</td>
</tr>
<tr>
<td>

<a id="channel"></a> `channel?`

</td>
<td>

`public`

</td>
<td>

`object`

</td>
<td>

If the Node.js process was spawned with an IPC channel, the process.channel property is a reference to the IPC channel.
If no IPC channel exists, this property is undefined.

**Since**

v7.1.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1753

</td>
</tr>
<tr>
<td>

`channel.ref`

</td>
<td>

`public`

</td>
<td>

`void`

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1758

</td>
</tr>
<tr>
<td>

`channel.unref`

</td>
<td>

`public`

</td>
<td>

`void`

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1763

</td>
</tr>
<tr>
<td>

<a id="connected"></a> `connected`

</td>
<td>

`public`

</td>
<td>

`boolean`

</td>
<td>

If the Node.js process is spawned with an IPC channel (see the `Child Process` and `Cluster` documentation), the `process.connected` property will return `true` so long as the IPC
channel is connected and will return `false` after `process.disconnect()` is called.

Once `process.connected` is `false`, it is no longer possible to send messages
over the IPC channel using `process.send()`.

**Since**

v0.7.2

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1803

</td>
</tr>
<tr>
<td>

<a id="allowednodeenvironmentflags"></a> `allowedNodeEnvironmentFlags`

</td>
<td>

`public`

</td>
<td>

`ReadonlySet`&lt;`string`&gt;

</td>
<td>

The `process.allowedNodeEnvironmentFlags` property is a special,
read-only `Set` of flags allowable within the `NODE_OPTIONS` environment variable.

`process.allowedNodeEnvironmentFlags` extends `Set`, but overrides `Set.prototype.has` to recognize several different possible flag
representations. `process.allowedNodeEnvironmentFlags.has()` will
return `true` in the following cases:

* Flags may omit leading single (`-`) or double (`--`) dashes; e.g., `inspect-brk` for `--inspect-brk`, or `r` for `-r`.
* Flags passed through to V8 (as listed in `--v8-options`) may replace
one or more _non-leading_ dashes for an underscore, or vice-versa;
e.g., `--perf_basic_prof`, `--perf-basic-prof`, `--perf_basic-prof`,
etc.
* Flags may contain one or more equals (`=`) characters; all
characters after and including the first equals will be ignored;
e.g., `--stack-trace-limit=100`.
* Flags _must_ be allowable within `NODE_OPTIONS`.

When iterating over `process.allowedNodeEnvironmentFlags`, flags will
appear only _once_; each will begin with one or more dashes. Flags
passed through to V8 will contain underscores instead of non-leading
dashes:

```js
import { allowedNodeEnvironmentFlags } from 'node:process';

allowedNodeEnvironmentFlags.forEach((flag) => {
  // -r
  // --inspect-brk
  // --abort_on_uncaught_exception
  // ...
});
```

The methods `add()`, `clear()`, and `delete()` of`process.allowedNodeEnvironmentFlags` do nothing, and will fail
silently.

If Node.js was compiled _without_ `NODE_OPTIONS` support (shown in [config](#config)), `process.allowedNodeEnvironmentFlags` will
contain what _would have_ been allowable.

**Since**

v10.10.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1845

</td>
</tr>
<tr>
<td>

<a id="report"></a> `report`

</td>
<td>

`public`

</td>
<td>

[`ProcessReport`](#processreport-1)

</td>
<td>

`process.report` is an object whose methods are used to generate diagnostic reports for the current process.
Additional documentation is available in the [report documentation](https://nodejs.org/docs/latest-v22.x/api/report.html).

**Since**

v11.8.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1851

</td>
</tr>
<tr>
<td>

<a id="throwdeprecation"></a> `throwDeprecation`

</td>
<td>

`public`

</td>
<td>

`boolean`

</td>
<td>

The initial value of `process.throwDeprecation` indicates whether the `--throw-deprecation` flag is set on the current Node.js process. `process.throwDeprecation`
is mutable, so whether or not deprecation warnings result in errors may be altered at runtime. See the documentation for the 'warning' event and the emitWarning()
method for more information.

```bash
$ node --throw-deprecation -p "process.throwDeprecation"
true
$ node -p "process.throwDeprecation"
undefined
$ node
> process.emitWarning('test', 'DeprecationWarning');
undefined
> (node:26598) DeprecationWarning: test
> process.throwDeprecation = true;
true
> process.emitWarning('test', 'DeprecationWarning');
Thrown:
[DeprecationWarning: test] { name: 'DeprecationWarning' }
```

**Since**

v0.9.12

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1905

</td>
</tr>
<tr>
<td>

<a id="tracedeprecation"></a> `traceDeprecation`

</td>
<td>

`public`

</td>
<td>

`boolean`

</td>
<td>

The `process.traceDeprecation` property indicates whether the `--trace-deprecation` flag is set on the current Node.js process. See the
documentation for the `'warning' event` and the `emitWarning() method` for more information about this
flag's behavior.

**Since**

v0.8.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:1912

</td>
</tr>
<tr>
<td>

<a id="browser"></a> `browser`

</td>
<td>

`public`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:9

</td>
</tr>
<tr>
<td>

<a id="isbun"></a> `isBun`

</td>
<td>

`public`

</td>
<td>

`true`

</td>
<td>

Whether you are using Bun

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:14

</td>
</tr>
<tr>
<td>

<a id="revision"></a> `revision`

</td>
<td>

`public`

</td>
<td>

`string`

</td>
<td>

The current git sha of Bun

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:19

</td>
</tr>
<tr>
<td>

<a id="_exiting"></a> `_exiting`

</td>
<td>

`public`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:23

</td>
</tr>
<tr>
<td>

<a id="nodeprecation"></a> `noDeprecation`

</td>
<td>

`public`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:24

</td>
</tr>
</tbody>
</table>

### Methods

#### ~~assert()~~

```ts
assert(value: unknown, message?: string | Error): asserts value;
```

Defined in: docs-config/node\_modules/bun-types/deprecated.d.ts:52

##### Parameters

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

`value`

</td>
<td>

`unknown`

</td>
</tr>
<tr>
<td>

`message?`

</td>
<td>

`string` \| `Error`

</td>
</tr>
</tbody>
</table>

##### Returns

`asserts value`

##### Deprecated

This is deprecated; use the "node:assert" module instead.

#### abort()

```ts
abort(): never;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:701

The `process.abort()` method causes the Node.js process to exit immediately and
generate a core file.

This feature is not available in `Worker` threads.

##### Returns

`never`

##### Since

v0.7.0

#### chdir()

```ts
chdir(directory: string): void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:722

The `process.chdir()` method changes the current working directory of the
Node.js process or throws an exception if doing so fails (for instance, if
the specified `directory` does not exist).

```js
import { chdir, cwd } from 'node:process';

console.log(`Starting directory: ${cwd()}`);
try {
  chdir('/tmp');
  console.log(`New directory: ${cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}
```

This feature is not available in `Worker` threads.

##### Parameters

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

`directory`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Since

v0.1.17

#### cwd()

```ts
cwd(): string;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:734

The `process.cwd()` method returns the current working directory of the Node.js
process.

```js
import { cwd } from 'node:process';

console.log(`Current directory: ${cwd()}`);
```

##### Returns

`string`

##### Since

v0.1.8

#### dlopen()

##### Call Signature

```ts
dlopen(
   module: object, 
   filename: string, 
   flags?: number): void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:771

The `process.dlopen()` method allows dynamically loading shared objects. It is primarily used by `require()` to load C++ Addons, and
should not be used directly, except in special cases. In other words, `require()` should be preferred over `process.dlopen()`
unless there are specific reasons such as custom dlopen flags or loading from ES modules.

The `flags` argument is an integer that allows to specify dlopen behavior. See the `[os.constants.dlopen](https://nodejs.org/docs/latest-v22.x/api/os.html#dlopen-constants)`
documentation for details.

An important requirement when calling `process.dlopen()` is that the `module` instance must be passed. Functions exported by the C++ Addon
are then accessible via `module.exports`.

The example below shows how to load a C++ Addon, named `local.node`, that exports a `foo` function. All the symbols are loaded before the call returns, by passing the `RTLD_NOW` constant.
In this example the constant is assumed to be available.

```js
import { dlopen } from 'node:process';
import { constants } from 'node:os';
import { fileURLToPath } from 'node:url';

const module = { exports: {} };
dlopen(module, fileURLToPath(new URL('local.node', import.meta.url)),
       constants.dlopen.RTLD_NOW);
module.exports.foo();
```

###### Parameters

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

`module`

</td>
<td>

`object`

</td>
</tr>
<tr>
<td>

`filename`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`flags?`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

##### Call Signature

```ts
dlopen(
   module: object, 
   filename: string, 
   flags?: number): void;
```

Defined in: docs-config/node\_modules/bun-types/overrides.d.ts:22

###### Parameters

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

`module`

</td>
<td>

\{ `exports`: `any`; \}

</td>
</tr>
<tr>
<td>

`module.exports`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`filename`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`flags?`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

#### emitWarning()

##### Call Signature

```ts
emitWarning(warning: string | Error, ctor?: Function): void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:840

The `process.emitWarning()` method can be used to emit custom or application
specific process warnings. These can be listened for by adding a handler to the `'warning'` event.

```js
import { emitWarning } from 'node:process';

// Emit a warning using a string.
emitWarning('Something happened!');
// Emits: (node: 56338) Warning: Something happened!
```

```js
import { emitWarning } from 'node:process';

// Emit a warning using a string and a type.
emitWarning('Something Happened!', 'CustomWarning');
// Emits: (node:56338) CustomWarning: Something Happened!
```

```js
import { emitWarning } from 'node:process';

emitWarning('Something happened!', 'CustomWarning', 'WARN001');
// Emits: (node:56338) [WARN001] CustomWarning: Something happened!
```js

In each of the previous examples, an `Error` object is generated internally by `process.emitWarning()` and passed through to the `'warning'` handler.

```js
import process from 'node:process';

process.on('warning', (warning) => {
  console.warn(warning.name);    // 'Warning'
  console.warn(warning.message); // 'Something happened!'
  console.warn(warning.code);    // 'MY_WARNING'
  console.warn(warning.stack);   // Stack trace
  console.warn(warning.detail);  // 'This is some additional information'
});
```

If `warning` is passed as an `Error` object, it will be passed through to the `'warning'` event handler
unmodified (and the optional `type`, `code` and `ctor` arguments will be ignored):

```js
import { emitWarning } from 'node:process';

// Emit a warning using an Error object.
const myWarning = new Error('Something happened!');
// Use the Error name property to specify the type name
myWarning.name = 'CustomWarning';
myWarning.code = 'WARN001';

emitWarning(myWarning);
// Emits: (node:56338) [WARN001] CustomWarning: Something happened!
```

A `TypeError` is thrown if `warning` is anything other than a string or `Error` object.

While process warnings use `Error` objects, the process warning mechanism is not a replacement for normal error handling mechanisms.

The following additional handling is implemented if the warning `type` is `'DeprecationWarning'`:
* If the `--throw-deprecation` command-line flag is used, the deprecation warning is thrown as an exception rather than being emitted as an event.
* If the `--no-deprecation` command-line flag is used, the deprecation warning is suppressed.
* If the `--trace-deprecation` command-line flag is used, the deprecation warning is printed to `stderr` along with the full stack trace.

###### Parameters

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

`warning`

</td>
<td>

`string` \| `Error`

</td>
<td>

The warning to emit.

</td>
</tr>
<tr>
<td>

`ctor?`

</td>
<td>

`Function`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

###### Since

v8.0.0

##### Call Signature

```ts
emitWarning(
   warning: string | Error, 
   type?: string, 
   ctor?: Function): void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:841

###### Parameters

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

`warning`

</td>
<td>

`string` \| `Error`

</td>
</tr>
<tr>
<td>

`type?`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`ctor?`

</td>
<td>

`Function`

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

##### Call Signature

```ts
emitWarning(
   warning: string | Error, 
   type?: string, 
   code?: string, 
   ctor?: Function): void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:842

###### Parameters

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

`warning`

</td>
<td>

`string` \| `Error`

</td>
</tr>
<tr>
<td>

`type?`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`code?`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`ctor?`

</td>
<td>

`Function`

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

##### Call Signature

```ts
emitWarning(warning: string | Error, options?: EmitWarningOptions): void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:843

###### Parameters

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

`warning`

</td>
<td>

`string` \| `Error`

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

[`EmitWarningOptions`](#emitwarningoptions)

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

#### exit()

```ts
exit(code?: string | number): never;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:994

The `process.exit()` method instructs Node.js to terminate the process
synchronously with an exit status of `code`. If `code` is omitted, exit uses
either the 'success' code `0` or the value of `process.exitCode` if it has been
set. Node.js will not terminate until all the `'exit'` event listeners are
called.

To exit with a 'failure' code:

```js
import { exit } from 'node:process';

exit(1);
```

The shell that executed Node.js should see the exit code as `1`.

Calling `process.exit()` will force the process to exit as quickly as possible
even if there are still asynchronous operations pending that have not yet
completed fully, including I/O operations to `process.stdout` and `process.stderr`.

In most situations, it is not actually necessary to call `process.exit()` explicitly. The Node.js process will exit on its own _if there is no additional_
_work pending_ in the event loop. The `process.exitCode` property can be set to
tell the process which exit code to use when the process exits gracefully.

For instance, the following example illustrates a _misuse_ of the `process.exit()` method that could lead to data printed to stdout being
truncated and lost:

```js
import { exit } from 'node:process';

// This is an example of what *not* to do:
if (someConditionNotMet()) {
  printUsageToStdout();
  exit(1);
}
```

The reason this is problematic is because writes to `process.stdout` in Node.js
are sometimes _asynchronous_ and may occur over multiple ticks of the Node.js
event loop. Calling `process.exit()`, however, forces the process to exit _before_ those additional writes to `stdout` can be performed.

Rather than calling `process.exit()` directly, the code _should_ set the `process.exitCode` and allow the process to exit naturally by avoiding
scheduling any additional work for the event loop:

```js
import process from 'node:process';

// How to properly set the exit code while letting
// the process exit gracefully.
if (someConditionNotMet()) {
  printUsageToStdout();
  process.exitCode = 1;
}
```

If it is necessary to terminate the Node.js process due to an error condition,
throwing an _uncaught_ error and allowing the process to terminate accordingly
is safer than calling `process.exit()`.

In `Worker` threads, this function stops the current thread rather
than the current process.

##### Parameters

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

`code?`

</td>
<td>

`string` \| `number`

</td>
<td>

The exit code. For string type, only integer strings (e.g.,'1') are allowed.

</td>
</tr>
</tbody>
</table>

##### Returns

`never`

##### Since

v0.1.13

#### getActiveResourcesInfo()

```ts
getActiveResourcesInfo(): string[];
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1057

The `process.getActiveResourcesInfo()` method returns an array of strings containing
the types of the active resources that are currently keeping the event loop alive.

```js
import { getActiveResourcesInfo } from 'node:process';
import { setTimeout } from 'node:timers';

console.log('Before:', getActiveResourcesInfo());
setTimeout(() => {}, 1000);
console.log('After:', getActiveResourcesInfo());
// Prints:
//   Before: [ 'TTYWrap', 'TTYWrap', 'TTYWrap' ]
//   After: [ 'TTYWrap', 'TTYWrap', 'TTYWrap', 'Timeout' ]
```

##### Returns

`string`[]

##### Since

v17.3.0, v16.14.0

#### getBuiltinModule()

##### Call Signature

```ts
getBuiltinModule<ID>(id: ID): BuiltInModule[ID];
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1062

Provides a way to load built-in modules in a globally available function.

###### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`ID` *extends* keyof `BuiltInModule`

</td>
</tr>
</tbody>
</table>

###### Parameters

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

`id`

</td>
<td>

`ID`

</td>
<td>

ID of the built-in module being requested.

</td>
</tr>
</tbody>
</table>

###### Returns

`BuiltInModule`\[`ID`\]

##### Call Signature

```ts
getBuiltinModule(id: string): object;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1063

###### Parameters

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

`id`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

###### Returns

`object`

#### setUncaughtExceptionCaptureCallback()

```ts
setUncaughtExceptionCaptureCallback(cb: (err: Error) => void): void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1301

The `process.setUncaughtExceptionCaptureCallback()` function sets a function
that will be invoked when an uncaught exception occurs, which will receive the
exception value itself as its first argument.

If such a function is set, the `'uncaughtException'` event will
not be emitted. If `--abort-on-uncaught-exception` was passed from the
command line or set through `v8.setFlagsFromString()`, the process will
not abort. Actions configured to take place on exceptions such as report
generations will be affected too

To unset the capture function, `process.setUncaughtExceptionCaptureCallback(null)` may be used. Calling this
method with a non-`null` argument while another capture function is set will
throw an error.

Using this function is mutually exclusive with using the deprecated `domain` built-in module.

##### Parameters

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

`cb`

</td>
<td>

(`err`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Since

v9.3.0

#### hasUncaughtExceptionCaptureCallback()

```ts
hasUncaughtExceptionCaptureCallback(): boolean;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1306

Indicates whether a callback has been set using [setUncaughtExceptionCaptureCallback](#setuncaughtexceptioncapturecallback).

##### Returns

`boolean`

##### Since

v9.3.0

#### setSourceMapsEnabled()

```ts
setSourceMapsEnabled(value: boolean): void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1324

**`Experimental`**

This function enables or disables the [Source Map v3](https://sourcemaps.info/spec.html) support for
stack traces.

It provides same features as launching Node.js process with commandline options `--enable-source-maps`.

Only source maps in JavaScript files that are loaded after source maps has been
enabled will be parsed and loaded.

##### Parameters

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

`value`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Since

v16.6.0, v14.18.0

#### kill()

```ts
kill(pid: number, signal?: string | number): true;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1454

The `process.kill()` method sends the `signal` to the process identified by`pid`.

Signal names are strings such as `'SIGINT'` or `'SIGHUP'`. See `Signal Events` and [`kill(2)`](http://man7.org/linux/man-pages/man2/kill.2.html) for more information.

This method will throw an error if the target `pid` does not exist. As a special
case, a signal of `0` can be used to test for the existence of a process.
Windows platforms will throw an error if the `pid` is used to kill a process
group.

Even though the name of this function is `process.kill()`, it is really just a
signal sender, like the `kill` system call. The signal sent may do something
other than kill the target process.

```js
import process, { kill } from 'node:process';

process.on('SIGHUP', () => {
  console.log('Got SIGHUP signal.');
});

setTimeout(() => {
  console.log('Exiting.');
  process.exit(0);
}, 100);

kill(process.pid, 'SIGHUP');
```

When `SIGUSR1` is received by a Node.js process, Node.js will start the
debugger. See `Signal Events`.

##### Parameters

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

`pid`

</td>
<td>

`number`

</td>
<td>

A process ID

</td>
</tr>
<tr>
<td>

`signal?`

</td>
<td>

`string` \| `number`

</td>
<td>

The signal to send, either as a string or number.

</td>
</tr>
</tbody>
</table>

##### Returns

`true`

##### Since

v0.0.6

#### loadEnvFile()

```ts
loadEnvFile(path?: string | URL | Buffer<ArrayBufferLike>): void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1469

Loads the environment configuration from a `.env` file into `process.env`. If
the file is not found, error will be thrown.

To load a specific .env file by specifying its path, use the following code:

```js
import { loadEnvFile } from 'node:process';

loadEnvFile('./development.env')
```

##### Parameters

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

`path?`

</td>
<td>

`string` \| `URL` \| `Buffer`&lt;`ArrayBufferLike`&gt;

</td>
<td>

The path to the .env file

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Since

v20.12.0

#### constrainedMemory()

```ts
constrainedMemory(): number;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1571

**`Experimental`**

Gets the amount of memory available to the process (in bytes) based on
limits imposed by the OS. If there is no such constraint, or the constraint
is unknown, `0` is returned.

See [`uv_get_constrained_memory`](https://docs.libuv.org/en/v1.x/misc.html#c.uv_get_constrained_memory) for more
information.

##### Returns

`number`

##### Since

v19.6.0, v18.15.0

#### availableMemory()

```ts
availableMemory(): number;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1578

**`Experimental`**

Gets the amount of free memory that is still available to the process (in bytes).
See [`uv_get_available_memory`](https://nodejs.org/docs/latest-v22.x/api/process.html#processavailablememory) for more information.

##### Returns

`number`

##### Since

v20.13.0

#### cpuUsage()

```ts
cpuUsage(previousValue?: CpuUsage): CpuUsage;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1605

The `process.cpuUsage()` method returns the user and system CPU time usage of
the current process, in an object with properties `user` and `system`, whose
values are microsecond values (millionth of a second). These values measure time
spent in user and system code respectively, and may end up being greater than
actual elapsed time if multiple CPU cores are performing work for this process.

The result of a previous call to `process.cpuUsage()` can be passed as the
argument to the function, to get a diff reading.

```js
import { cpuUsage } from 'node:process';

const startUsage = cpuUsage();
// { user: 38579, system: 6986 }

// spin the CPU for 500 milliseconds
const now = Date.now();
while (Date.now() - now < 500);

console.log(cpuUsage(startUsage));
// { user: 514883, system: 11226 }
```

##### Parameters

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

`previousValue?`

</td>
<td>

[`CpuUsage`](#cpuusage-2)

</td>
<td>

A previous return value from calling `process.cpuUsage()`

</td>
</tr>
</tbody>
</table>

##### Returns

[`CpuUsage`](#cpuusage-2)

##### Since

v6.1.0

#### nextTick()

```ts
nextTick(callback: Function, ...args: any[]): void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1694

`process.nextTick()` adds `callback` to the "next tick queue". This queue is
fully drained after the current operation on the JavaScript stack runs to
completion and before the event loop is allowed to continue. It's possible to
create an infinite loop if one were to recursively call `process.nextTick()`.
See the [Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#process-nexttick) guide for more background.

```js
import { nextTick } from 'node:process';

console.log('start');
nextTick(() => {
  console.log('nextTick callback');
});
console.log('scheduled');
// Output:
// start
// scheduled
// nextTick callback
```

This is important when developing APIs in order to give users the opportunity
to assign event handlers _after_ an object has been constructed but before any
I/O has occurred:

```js
import { nextTick } from 'node:process';

function MyThing(options) {
  this.setupOptions(options);

  nextTick(() => {
    this.startDoingStuff();
  });
}

const thing = new MyThing();
thing.getReadyForStuff();

// thing.startDoingStuff() gets called now, not before.
```

It is very important for APIs to be either 100% synchronous or 100%
asynchronous. Consider this example:

```js
// WARNING!  DO NOT USE!  BAD UNSAFE HAZARD!
function maybeSync(arg, cb) {
  if (arg) {
    cb();
    return;
  }

  fs.stat('file', cb);
}
```

This API is hazardous because in the following case:

```js
const maybeTrue = Math.random() > 0.5;

maybeSync(maybeTrue, () => {
  foo();
});

bar();
```

It is not clear whether `foo()` or `bar()` will be called first.

The following approach is much better:

```js
import { nextTick } from 'node:process';

function definitelyAsync(arg, cb) {
  if (arg) {
    nextTick(cb);
    return;
  }

  fs.stat('file', cb);
}
```

##### Parameters

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

`callback`

</td>
<td>

`Function`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`any`[]

</td>
<td>

Additional arguments to pass when invoking the `callback`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Since

v0.1.26

#### umask()

##### Call Signature

```ts
umask(): number;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1733

`process.umask()` returns the Node.js process's file mode creation mask. Child
processes inherit the mask from the parent process.

###### Returns

`number`

###### Since

v0.1.19

###### Deprecated

Calling `process.umask()` with no argument causes the process-wide umask to be written twice. This introduces a race condition between threads, and is a potential
security vulnerability. There is no safe, cross-platform alternative API.

##### Call Signature

```ts
umask(mask: string | number): number;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1737

Can only be set if not in worker thread.

###### Parameters

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

`mask`

</td>
<td>

`string` \| `number`

</td>
</tr>
</tbody>
</table>

###### Returns

`number`

#### uptime()

```ts
uptime(): number;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1746

The `process.uptime()` method returns the number of seconds the current Node.js
process has been running.

The return value includes fractions of a second. Use `Math.floor()` to get whole
seconds.

##### Returns

`number`

##### Since

v0.5.0

#### send()?

```ts
optional send(
   message: any, 
   sendHandle?: any, 
   options?: object, 
   callback?: (error: Error) => void): boolean;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1776

If Node.js is spawned with an IPC channel, the `process.send()` method can be
used to send messages to the parent process. Messages will be received as a `'message'` event on the parent's `ChildProcess` object.

If Node.js was not spawned with an IPC channel, `process.send` will be `undefined`.

The message goes through serialization and parsing. The resulting message might
not be the same as what is originally sent.

##### Parameters

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

`any`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`sendHandle?`

</td>
<td>

`any`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `keepOpen`: `boolean`; \}

</td>
<td>

used to parameterize the sending of certain types of handles. `options` supports the following properties:

</td>
</tr>
<tr>
<td>

`options.keepOpen?`

</td>
<td>

`boolean`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`callback?`

</td>
<td>

(`error`: `Error`) => `void`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

##### Since

v0.5.9

#### disconnect()

```ts
disconnect(): void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1794

If the Node.js process is spawned with an IPC channel (see the `Child Process` and `Cluster` documentation), the `process.disconnect()` method will close the
IPC channel to the parent process, allowing the child process to exit gracefully
once there are no other connections keeping it alive.

The effect of calling `process.disconnect()` is the same as calling `ChildProcess.disconnect()` from the parent process.

If the Node.js process was not spawned with an IPC channel, `process.disconnect()` will be `undefined`.

##### Returns

`void`

##### Since

v0.7.2

#### resourceUsage()

```ts
resourceUsage(): ResourceUsage;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1882

```js
import { resourceUsage } from 'node:process';

console.log(resourceUsage());
/*
  Will output:
  {
    userCPUTime: 82872,
    systemCPUTime: 4143,
    maxRSS: 33164,
    sharedMemorySize: 0,
    unsharedDataSize: 0,
    unsharedStackSize: 0,
    minorPageFault: 2469,
    majorPageFault: 0,
    swappedOut: 0,
    fsRead: 0,
    fsWrite: 8,
    ipcSent: 0,
    ipcReceived: 0,
    signalsCount: 0,
    voluntaryContextSwitches: 79,
    involuntaryContextSwitches: 1
  }

```

##### Returns

[`ResourceUsage`](#resourceusage-2)

the resource usage for the current process. All of these values come from the `uv_getrusage` call which returns a [`uv_rusage_t` struct][uv_rusage_t].

##### Since

v12.6.0

#### ref()

```ts
ref(maybeRefable: any): void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1926

**`Experimental`**

An object is "refable" if it implements the Node.js "Refable protocol".
Specifically, this means that the object implements the `Symbol.for('nodejs.ref')`
and `Symbol.for('nodejs.unref')` methods. "Ref'd" objects will keep the Node.js
event loop alive, while "unref'd" objects will not. Historically, this was
implemented by using `ref()` and `unref()` methods directly on the objects.
This pattern, however, is being deprecated in favor of the "Refable protocol"
in order to better support Web Platform API types whose APIs cannot be modified
to add `ref()` and `unref()` methods but still need to support that behavior.

##### Parameters

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

`maybeRefable`

</td>
<td>

`any`

</td>
<td>

An object that may be "refable".

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Since

v22.14.0

#### unref()

```ts
unref(maybeRefable: any): void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1940

**`Experimental`**

An object is "unrefable" if it implements the Node.js "Refable protocol".
Specifically, this means that the object implements the `Symbol.for('nodejs.ref')`
and `Symbol.for('nodejs.unref')` methods. "Ref'd" objects will keep the Node.js
event loop alive, while "unref'd" objects will not. Historically, this was
implemented by using `ref()` and `unref()` methods directly on the objects.
This pattern, however, is being deprecated in favor of the "Refable protocol"
in order to better support Web Platform API types whose APIs cannot be modified
to add `ref()` and `unref()` methods but still need to support that behavior.

##### Parameters

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

`maybeRefable`

</td>
<td>

`any`

</td>
<td>

An object that may be "unref'd".

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Since

v22.14.0

#### addListener()

##### Call Signature

```ts
addListener(event: "beforeExit", listener: BeforeExitListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1942

EventEmitter

###### Parameters

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

`event`

</td>
<td>

`"beforeExit"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`BeforeExitListener`](#beforeexitlistener)

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

[`EventEmitter`](#eventemitter).[`addListener`](#addlistener-19)

##### Call Signature

```ts
addListener(event: "disconnect", listener: DisconnectListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1943

Alias for `emitter.on(eventName, listener)`.

###### Parameters

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

`event`

</td>
<td>

`"disconnect"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`DisconnectListener`](#disconnectlistener)

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.26

##### Call Signature

```ts
addListener(event: "exit", listener: ExitListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1944

Alias for `emitter.on(eventName, listener)`.

###### Parameters

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

`event`

</td>
<td>

`"exit"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`ExitListener`](#exitlistener)

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.26

##### Call Signature

```ts
addListener(event: "rejectionHandled", listener: RejectionHandledListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1945

Alias for `emitter.on(eventName, listener)`.

###### Parameters

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

`event`

</td>
<td>

`"rejectionHandled"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`RejectionHandledListener`](#rejectionhandledlistener)

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.26

##### Call Signature

```ts
addListener(event: "uncaughtException", listener: UncaughtExceptionListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1946

Alias for `emitter.on(eventName, listener)`.

###### Parameters

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

`event`

</td>
<td>

`"uncaughtException"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`UncaughtExceptionListener`](#uncaughtexceptionlistener)

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.26

##### Call Signature

```ts
addListener(event: "uncaughtExceptionMonitor", listener: UncaughtExceptionListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1947

Alias for `emitter.on(eventName, listener)`.

###### Parameters

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

`event`

</td>
<td>

`"uncaughtExceptionMonitor"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`UncaughtExceptionListener`](#uncaughtexceptionlistener)

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.26

##### Call Signature

```ts
addListener(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1948

Alias for `emitter.on(eventName, listener)`.

###### Parameters

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

`event`

</td>
<td>

`"unhandledRejection"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`UnhandledRejectionListener`](#unhandledrejectionlistener)

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.26

##### Call Signature

```ts
addListener(event: "warning", listener: WarningListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1949

Alias for `emitter.on(eventName, listener)`.

###### Parameters

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

`event`

</td>
<td>

`"warning"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`WarningListener`](#warninglistener)

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.26

##### Call Signature

```ts
addListener(event: "message", listener: MessageListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1950

Alias for `emitter.on(eventName, listener)`.

###### Parameters

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

`event`

</td>
<td>

`"message"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`MessageListener`](#messagelistener)

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.26

##### Call Signature

```ts
addListener(event: Signals, listener: SignalsListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1951

Alias for `emitter.on(eventName, listener)`.

###### Parameters

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

`event`

</td>
<td>

[`Signals`](#signals)

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`SignalsListener`](#signalslistener)

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.26

##### Call Signature

```ts
addListener(event: "multipleResolves", listener: MultipleResolveListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1952

Alias for `emitter.on(eventName, listener)`.

###### Parameters

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

`event`

</td>
<td>

`"multipleResolves"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`MultipleResolveListener`](#multipleresolvelistener)

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.26

##### Call Signature

```ts
addListener(event: "worker", listener: WorkerListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1953

Alias for `emitter.on(eventName, listener)`.

###### Parameters

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

`event`

</td>
<td>

`"worker"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`WorkerListener`](#workerlistener)

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.26

#### emit()

##### Call Signature

```ts
emit(event: "beforeExit", code: number): boolean;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1954

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

###### Parameters

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

`event`

</td>
<td>

`"beforeExit"`

</td>
</tr>
<tr>
<td>

`code`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Since

v0.1.26

###### Inherited from

[`EventEmitter`](#eventemitter).[`emit`](#emit-19)

##### Call Signature

```ts
emit(event: "disconnect"): boolean;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1955

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

###### Parameters

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

`event`

</td>
<td>

`"disconnect"`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Since

v0.1.26

##### Call Signature

```ts
emit(event: "exit", code: number): boolean;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1956

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

###### Parameters

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

`event`

</td>
<td>

`"exit"`

</td>
</tr>
<tr>
<td>

`code`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Since

v0.1.26

##### Call Signature

```ts
emit(event: "rejectionHandled", promise: Promise<unknown>): boolean;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1957

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

###### Parameters

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

`event`

</td>
<td>

`"rejectionHandled"`

</td>
</tr>
<tr>
<td>

`promise`

</td>
<td>

`Promise`&lt;`unknown`&gt;

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Since

v0.1.26

##### Call Signature

```ts
emit(event: "uncaughtException", error: Error): boolean;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1958

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

###### Parameters

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

`event`

</td>
<td>

`"uncaughtException"`

</td>
</tr>
<tr>
<td>

`error`

</td>
<td>

`Error`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Since

v0.1.26

##### Call Signature

```ts
emit(event: "uncaughtExceptionMonitor", error: Error): boolean;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1959

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

###### Parameters

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

`event`

</td>
<td>

`"uncaughtExceptionMonitor"`

</td>
</tr>
<tr>
<td>

`error`

</td>
<td>

`Error`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Since

v0.1.26

##### Call Signature

```ts
emit(
   event: "unhandledRejection", 
   reason: unknown, 
   promise: Promise<unknown>): boolean;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1960

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

###### Parameters

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

`event`

</td>
<td>

`"unhandledRejection"`

</td>
</tr>
<tr>
<td>

`reason`

</td>
<td>

`unknown`

</td>
</tr>
<tr>
<td>

`promise`

</td>
<td>

`Promise`&lt;`unknown`&gt;

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Since

v0.1.26

##### Call Signature

```ts
emit(event: "warning", warning: Error): boolean;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1961

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

###### Parameters

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

`event`

</td>
<td>

`"warning"`

</td>
</tr>
<tr>
<td>

`warning`

</td>
<td>

`Error`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Since

v0.1.26

##### Call Signature

```ts
emit(
   event: "message", 
   message: unknown, 
   sendHandle: unknown): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1962

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

###### Parameters

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

`event`

</td>
<td>

`"message"`

</td>
</tr>
<tr>
<td>

`message`

</td>
<td>

`unknown`

</td>
</tr>
<tr>
<td>

`sendHandle`

</td>
<td>

`unknown`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.26

##### Call Signature

```ts
emit(event: Signals, signal?: Signals): boolean;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1963

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

###### Parameters

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

`event`

</td>
<td>

[`Signals`](#signals)

</td>
</tr>
<tr>
<td>

`signal?`

</td>
<td>

[`Signals`](#signals)

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Since

v0.1.26

##### Call Signature

```ts
emit(
   event: "multipleResolves", 
   type: MultipleResolveType, 
   promise: Promise<unknown>, 
   value: unknown): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1964

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

###### Parameters

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

`event`

</td>
<td>

`"multipleResolves"`

</td>
</tr>
<tr>
<td>

`type`

</td>
<td>

[`MultipleResolveType`](#multipleresolvetype)

</td>
</tr>
<tr>
<td>

`promise`

</td>
<td>

`Promise`&lt;`unknown`&gt;

</td>
</tr>
<tr>
<td>

`value`

</td>
<td>

`unknown`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.26

##### Call Signature

```ts
emit(event: "worker", listener: WorkerListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1970

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

###### Parameters

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

`event`

</td>
<td>

`"worker"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`WorkerListener`](#workerlistener)

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.26

#### on()

##### Call Signature

```ts
on(event: "beforeExit", listener: BeforeExitListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1971

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"beforeExit"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`BeforeExitListener`](#beforeexitlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.101

###### Inherited from

[`EventEmitter`](#eventemitter).[`on`](#on-20)

##### Call Signature

```ts
on(event: "disconnect", listener: DisconnectListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1972

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"disconnect"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`DisconnectListener`](#disconnectlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.101

##### Call Signature

```ts
on(event: "exit", listener: ExitListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1973

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"exit"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`ExitListener`](#exitlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.101

##### Call Signature

```ts
on(event: "rejectionHandled", listener: RejectionHandledListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1974

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"rejectionHandled"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`RejectionHandledListener`](#rejectionhandledlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.101

##### Call Signature

```ts
on(event: "uncaughtException", listener: UncaughtExceptionListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1975

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"uncaughtException"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`UncaughtExceptionListener`](#uncaughtexceptionlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.101

##### Call Signature

```ts
on(event: "uncaughtExceptionMonitor", listener: UncaughtExceptionListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1976

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"uncaughtExceptionMonitor"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`UncaughtExceptionListener`](#uncaughtexceptionlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.101

##### Call Signature

```ts
on(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1977

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"unhandledRejection"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`UnhandledRejectionListener`](#unhandledrejectionlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.101

##### Call Signature

```ts
on(event: "warning", listener: WarningListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1978

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"warning"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`WarningListener`](#warninglistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.101

##### Call Signature

```ts
on(event: "message", listener: MessageListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1979

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"message"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`MessageListener`](#messagelistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.101

##### Call Signature

```ts
on(event: Signals, listener: SignalsListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1980

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

[`Signals`](#signals)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`SignalsListener`](#signalslistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.101

##### Call Signature

```ts
on(event: "multipleResolves", listener: MultipleResolveListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1981

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"multipleResolves"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`MultipleResolveListener`](#multipleresolvelistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.101

##### Call Signature

```ts
on(event: "worker", listener: WorkerListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1982

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"worker"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`WorkerListener`](#workerlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.101

##### Call Signature

```ts
on(event: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1983

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`string` \| `symbol`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.101

#### once()

##### Call Signature

```ts
once(event: "beforeExit", listener: BeforeExitListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1984

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"beforeExit"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`BeforeExitListener`](#beforeexitlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.3.0

###### Inherited from

[`EventEmitter`](#eventemitter).[`once`](#once-20)

##### Call Signature

```ts
once(event: "disconnect", listener: DisconnectListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1985

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"disconnect"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`DisconnectListener`](#disconnectlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.3.0

##### Call Signature

```ts
once(event: "exit", listener: ExitListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1986

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"exit"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`ExitListener`](#exitlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.3.0

##### Call Signature

```ts
once(event: "rejectionHandled", listener: RejectionHandledListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1987

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"rejectionHandled"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`RejectionHandledListener`](#rejectionhandledlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.3.0

##### Call Signature

```ts
once(event: "uncaughtException", listener: UncaughtExceptionListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1988

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"uncaughtException"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`UncaughtExceptionListener`](#uncaughtexceptionlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.3.0

##### Call Signature

```ts
once(event: "uncaughtExceptionMonitor", listener: UncaughtExceptionListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1989

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"uncaughtExceptionMonitor"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`UncaughtExceptionListener`](#uncaughtexceptionlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.3.0

##### Call Signature

```ts
once(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1990

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"unhandledRejection"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`UnhandledRejectionListener`](#unhandledrejectionlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.3.0

##### Call Signature

```ts
once(event: "warning", listener: WarningListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1991

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"warning"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`WarningListener`](#warninglistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.3.0

##### Call Signature

```ts
once(event: "message", listener: MessageListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1992

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"message"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`MessageListener`](#messagelistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.3.0

##### Call Signature

```ts
once(event: Signals, listener: SignalsListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1993

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

[`Signals`](#signals)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`SignalsListener`](#signalslistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.3.0

##### Call Signature

```ts
once(event: "multipleResolves", listener: MultipleResolveListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1994

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"multipleResolves"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`MultipleResolveListener`](#multipleresolvelistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.3.0

##### Call Signature

```ts
once(event: "worker", listener: WorkerListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1995

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`"worker"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`WorkerListener`](#workerlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.3.0

##### Call Signature

```ts
once(event: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1996

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Parameters

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

`event`

</td>
<td>

`string` \| `symbol`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.3.0

#### prependListener()

##### Call Signature

```ts
prependListener(event: "beforeExit", listener: BeforeExitListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1997

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"beforeExit"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`BeforeExitListener`](#beforeexitlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

###### Inherited from

[`EventEmitter`](#eventemitter).[`prependListener`](#prependlistener-19)

##### Call Signature

```ts
prependListener(event: "disconnect", listener: DisconnectListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1998

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"disconnect"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`DisconnectListener`](#disconnectlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependListener(event: "exit", listener: ExitListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:1999

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"exit"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`ExitListener`](#exitlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependListener(event: "rejectionHandled", listener: RejectionHandledListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2000

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"rejectionHandled"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`RejectionHandledListener`](#rejectionhandledlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependListener(event: "uncaughtException", listener: UncaughtExceptionListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2001

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"uncaughtException"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`UncaughtExceptionListener`](#uncaughtexceptionlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependListener(event: "uncaughtExceptionMonitor", listener: UncaughtExceptionListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2002

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"uncaughtExceptionMonitor"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`UncaughtExceptionListener`](#uncaughtexceptionlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependListener(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2003

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"unhandledRejection"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`UnhandledRejectionListener`](#unhandledrejectionlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependListener(event: "warning", listener: WarningListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2004

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"warning"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`WarningListener`](#warninglistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependListener(event: "message", listener: MessageListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2005

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"message"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`MessageListener`](#messagelistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependListener(event: Signals, listener: SignalsListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2006

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

[`Signals`](#signals)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`SignalsListener`](#signalslistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependListener(event: "multipleResolves", listener: MultipleResolveListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2007

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"multipleResolves"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`MultipleResolveListener`](#multipleresolvelistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependListener(event: "worker", listener: WorkerListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2008

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"worker"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`WorkerListener`](#workerlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

#### prependOnceListener()

##### Call Signature

```ts
prependOnceListener(event: "beforeExit", listener: BeforeExitListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2009

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"beforeExit"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`BeforeExitListener`](#beforeexitlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

###### Inherited from

[`EventEmitter`](#eventemitter).[`prependOnceListener`](#prependoncelistener-19)

##### Call Signature

```ts
prependOnceListener(event: "disconnect", listener: DisconnectListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2010

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"disconnect"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`DisconnectListener`](#disconnectlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependOnceListener(event: "exit", listener: ExitListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2011

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"exit"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`ExitListener`](#exitlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependOnceListener(event: "rejectionHandled", listener: RejectionHandledListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2012

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"rejectionHandled"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`RejectionHandledListener`](#rejectionhandledlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependOnceListener(event: "uncaughtException", listener: UncaughtExceptionListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2013

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"uncaughtException"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`UncaughtExceptionListener`](#uncaughtexceptionlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependOnceListener(event: "uncaughtExceptionMonitor", listener: UncaughtExceptionListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2014

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"uncaughtExceptionMonitor"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`UncaughtExceptionListener`](#uncaughtexceptionlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependOnceListener(event: "unhandledRejection", listener: UnhandledRejectionListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2015

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"unhandledRejection"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`UnhandledRejectionListener`](#unhandledrejectionlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependOnceListener(event: "warning", listener: WarningListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2016

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"warning"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`WarningListener`](#warninglistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependOnceListener(event: "message", listener: MessageListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2017

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"message"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`MessageListener`](#messagelistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependOnceListener(event: Signals, listener: SignalsListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2018

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

[`Signals`](#signals)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`SignalsListener`](#signalslistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependOnceListener(event: "multipleResolves", listener: MultipleResolveListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2019

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"multipleResolves"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`MultipleResolveListener`](#multipleresolvelistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

##### Call Signature

```ts
prependOnceListener(event: "worker", listener: WorkerListener): this;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2020

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"worker"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

[`WorkerListener`](#workerlistener)

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v6.0.0

#### listeners()

##### Call Signature

```ts
listeners(event: "beforeExit"): BeforeExitListener[];
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2021

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

###### Parameters

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

`event`

</td>
<td>

`"beforeExit"`

</td>
</tr>
</tbody>
</table>

###### Returns

[`BeforeExitListener`](#beforeexitlistener)[]

###### Since

v0.1.26

###### Inherited from

[`EventEmitter`](#eventemitter).[`listeners`](#listeners-19)

##### Call Signature

```ts
listeners(event: "disconnect"): DisconnectListener[];
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2022

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

###### Parameters

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

`event`

</td>
<td>

`"disconnect"`

</td>
</tr>
</tbody>
</table>

###### Returns

[`DisconnectListener`](#disconnectlistener)[]

###### Since

v0.1.26

##### Call Signature

```ts
listeners(event: "exit"): ExitListener[];
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2023

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

###### Parameters

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

`event`

</td>
<td>

`"exit"`

</td>
</tr>
</tbody>
</table>

###### Returns

[`ExitListener`](#exitlistener)[]

###### Since

v0.1.26

##### Call Signature

```ts
listeners(event: "rejectionHandled"): RejectionHandledListener[];
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2024

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

###### Parameters

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

`event`

</td>
<td>

`"rejectionHandled"`

</td>
</tr>
</tbody>
</table>

###### Returns

[`RejectionHandledListener`](#rejectionhandledlistener)[]

###### Since

v0.1.26

##### Call Signature

```ts
listeners(event: "uncaughtException"): UncaughtExceptionListener[];
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2025

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

###### Parameters

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

`event`

</td>
<td>

`"uncaughtException"`

</td>
</tr>
</tbody>
</table>

###### Returns

[`UncaughtExceptionListener`](#uncaughtexceptionlistener)[]

###### Since

v0.1.26

##### Call Signature

```ts
listeners(event: "uncaughtExceptionMonitor"): UncaughtExceptionListener[];
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2026

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

###### Parameters

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

`event`

</td>
<td>

`"uncaughtExceptionMonitor"`

</td>
</tr>
</tbody>
</table>

###### Returns

[`UncaughtExceptionListener`](#uncaughtexceptionlistener)[]

###### Since

v0.1.26

##### Call Signature

```ts
listeners(event: "unhandledRejection"): UnhandledRejectionListener[];
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2027

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

###### Parameters

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

`event`

</td>
<td>

`"unhandledRejection"`

</td>
</tr>
</tbody>
</table>

###### Returns

[`UnhandledRejectionListener`](#unhandledrejectionlistener)[]

###### Since

v0.1.26

##### Call Signature

```ts
listeners(event: "warning"): WarningListener[];
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2028

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

###### Parameters

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

`event`

</td>
<td>

`"warning"`

</td>
</tr>
</tbody>
</table>

###### Returns

[`WarningListener`](#warninglistener)[]

###### Since

v0.1.26

##### Call Signature

```ts
listeners(event: "message"): MessageListener[];
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2029

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

###### Parameters

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

`event`

</td>
<td>

`"message"`

</td>
</tr>
</tbody>
</table>

###### Returns

[`MessageListener`](#messagelistener)[]

###### Since

v0.1.26

##### Call Signature

```ts
listeners(event: Signals): SignalsListener[];
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2030

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

###### Parameters

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

`event`

</td>
<td>

[`Signals`](#signals)

</td>
</tr>
</tbody>
</table>

###### Returns

[`SignalsListener`](#signalslistener)[]

###### Since

v0.1.26

##### Call Signature

```ts
listeners(event: "multipleResolves"): MultipleResolveListener[];
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2031

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

###### Parameters

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

`event`

</td>
<td>

`"multipleResolves"`

</td>
</tr>
</tbody>
</table>

###### Returns

[`MultipleResolveListener`](#multipleresolvelistener)[]

###### Since

v0.1.26

##### Call Signature

```ts
listeners(event: "worker"): WorkerListener[];
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:2032

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

###### Parameters

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

`event`

</td>
<td>

`"worker"`

</td>
</tr>
</tbody>
</table>

###### Returns

[`WorkerListener`](#workerlistener)[]

###### Since

v0.1.26

#### reallyExit()

```ts
reallyExit(code?: number): never;
```

Defined in: docs-config/node\_modules/bun-types/overrides.d.ts:21

##### Parameters

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

`code?`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

##### Returns

`never`

#### binding()

##### Call Signature

```ts
binding(m: "constants"): object;
```

Defined in: docs-config/node\_modules/bun-types/overrides.d.ts:26

###### Parameters

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

`m`

</td>
<td>

`"constants"`

</td>
</tr>
</tbody>
</table>

###### Returns

`object`

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

`os`

</td>
<td>

*typeof* `constants`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:27

</td>
</tr>
<tr>
<td>

`fs`

</td>
<td>

*typeof* `constants`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:28

</td>
</tr>
<tr>
<td>

`crypto`

</td>
<td>

*typeof* `constants`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:29

</td>
</tr>
<tr>
<td>

`zlib`

</td>
<td>

*typeof* `constants`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:30

</td>
</tr>
<tr>
<td>

`trace`

</td>
<td>

\{
  `TRACE_EVENT_PHASE_BEGIN`: `number`;
  `TRACE_EVENT_PHASE_END`: `number`;
  `TRACE_EVENT_PHASE_COMPLETE`: `number`;
  `TRACE_EVENT_PHASE_INSTANT`: `number`;
  `TRACE_EVENT_PHASE_ASYNC_BEGIN`: `number`;
  `TRACE_EVENT_PHASE_ASYNC_STEP_INTO`: `number`;
  `TRACE_EVENT_PHASE_ASYNC_STEP_PAST`: `number`;
  `TRACE_EVENT_PHASE_ASYNC_END`: `number`;
  `TRACE_EVENT_PHASE_NESTABLE_ASYNC_BEGIN`: `number`;
  `TRACE_EVENT_PHASE_NESTABLE_ASYNC_END`: `number`;
  `TRACE_EVENT_PHASE_NESTABLE_ASYNC_INSTANT`: `number`;
  `TRACE_EVENT_PHASE_FLOW_BEGIN`: `number`;
  `TRACE_EVENT_PHASE_FLOW_STEP`: `number`;
  `TRACE_EVENT_PHASE_FLOW_END`: `number`;
  `TRACE_EVENT_PHASE_METADATA`: `number`;
  `TRACE_EVENT_PHASE_COUNTER`: `number`;
  `TRACE_EVENT_PHASE_SAMPLE`: `number`;
  `TRACE_EVENT_PHASE_CREATE_OBJECT`: `number`;
  `TRACE_EVENT_PHASE_SNAPSHOT_OBJECT`: `number`;
  `TRACE_EVENT_PHASE_DELETE_OBJECT`: `number`;
  `TRACE_EVENT_PHASE_MEMORY_DUMP`: `number`;
  `TRACE_EVENT_PHASE_MARK`: `number`;
  `TRACE_EVENT_PHASE_CLOCK_SYNC`: `number`;
  `TRACE_EVENT_PHASE_ENTER_CONTEXT`: `number`;
  `TRACE_EVENT_PHASE_LEAVE_CONTEXT`: `number`;
  `TRACE_EVENT_PHASE_LINK_IDS`: `number`;
\}

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:31

</td>
</tr>
</tbody>
</table>

##### Call Signature

```ts
binding(m: "uv"): object;
```

Defined in: docs-config/node\_modules/bun-types/overrides.d.ts:60

###### Parameters

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

`m`

</td>
<td>

`"uv"`

</td>
</tr>
</tbody>
</table>

###### Returns

`object`

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

`errname()`

</td>
<td>

(`code`: `number`) => 

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:61

</td>
</tr>
<tr>
<td>

`UV_E2BIG`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:62

</td>
</tr>
<tr>
<td>

`UV_EACCES`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:63

</td>
</tr>
<tr>
<td>

`UV_EADDRINUSE`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:64

</td>
</tr>
<tr>
<td>

`UV_EADDRNOTAVAIL`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:65

</td>
</tr>
<tr>
<td>

`UV_EAFNOSUPPORT`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:66

</td>
</tr>
<tr>
<td>

`UV_EAGAIN`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:67

</td>
</tr>
<tr>
<td>

`UV_EAI_ADDRFAMILY`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:68

</td>
</tr>
<tr>
<td>

`UV_EAI_AGAIN`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:69

</td>
</tr>
<tr>
<td>

`UV_EAI_BADFLAGS`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:70

</td>
</tr>
<tr>
<td>

`UV_EAI_BADHINTS`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:71

</td>
</tr>
<tr>
<td>

`UV_EAI_CANCELED`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:72

</td>
</tr>
<tr>
<td>

`UV_EAI_FAIL`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:73

</td>
</tr>
<tr>
<td>

`UV_EAI_FAMILY`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:74

</td>
</tr>
<tr>
<td>

`UV_EAI_MEMORY`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:75

</td>
</tr>
<tr>
<td>

`UV_EAI_NODATA`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:76

</td>
</tr>
<tr>
<td>

`UV_EAI_NONAME`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:77

</td>
</tr>
<tr>
<td>

`UV_EAI_OVERFLOW`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:78

</td>
</tr>
<tr>
<td>

`UV_EAI_PROTOCOL`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:79

</td>
</tr>
<tr>
<td>

`UV_EAI_SERVICE`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:80

</td>
</tr>
<tr>
<td>

`UV_EAI_SOCKTYPE`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:81

</td>
</tr>
<tr>
<td>

`UV_EALREADY`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:82

</td>
</tr>
<tr>
<td>

`UV_EBADF`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:83

</td>
</tr>
<tr>
<td>

`UV_EBUSY`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:84

</td>
</tr>
<tr>
<td>

`UV_ECANCELED`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:85

</td>
</tr>
<tr>
<td>

`UV_ECHARSET`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:86

</td>
</tr>
<tr>
<td>

`UV_ECONNABORTED`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:87

</td>
</tr>
<tr>
<td>

`UV_ECONNREFUSED`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:88

</td>
</tr>
<tr>
<td>

`UV_ECONNRESET`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:89

</td>
</tr>
<tr>
<td>

`UV_EDESTADDRREQ`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:90

</td>
</tr>
<tr>
<td>

`UV_EEXIST`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:91

</td>
</tr>
<tr>
<td>

`UV_EFAULT`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:92

</td>
</tr>
<tr>
<td>

`UV_EFBIG`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:93

</td>
</tr>
<tr>
<td>

`UV_EHOSTUNREACH`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:94

</td>
</tr>
<tr>
<td>

`UV_EINTR`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:95

</td>
</tr>
<tr>
<td>

`UV_EINVAL`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:96

</td>
</tr>
<tr>
<td>

`UV_EIO`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:97

</td>
</tr>
<tr>
<td>

`UV_EISCONN`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:98

</td>
</tr>
<tr>
<td>

`UV_EISDIR`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:99

</td>
</tr>
<tr>
<td>

`UV_ELOOP`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:100

</td>
</tr>
<tr>
<td>

`UV_EMFILE`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:101

</td>
</tr>
<tr>
<td>

`UV_EMSGSIZE`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:102

</td>
</tr>
<tr>
<td>

`UV_ENAMETOOLONG`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:103

</td>
</tr>
<tr>
<td>

`UV_ENETDOWN`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:104

</td>
</tr>
<tr>
<td>

`UV_ENETUNREACH`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:105

</td>
</tr>
<tr>
<td>

`UV_ENFILE`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:106

</td>
</tr>
<tr>
<td>

`UV_ENOBUFS`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:107

</td>
</tr>
<tr>
<td>

`UV_ENODEV`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:108

</td>
</tr>
<tr>
<td>

`UV_ENOENT`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:109

</td>
</tr>
<tr>
<td>

`UV_ENOMEM`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:110

</td>
</tr>
<tr>
<td>

`UV_ENONET`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:111

</td>
</tr>
<tr>
<td>

`UV_ENOPROTOOPT`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:112

</td>
</tr>
<tr>
<td>

`UV_ENOSPC`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:113

</td>
</tr>
<tr>
<td>

`UV_ENOSYS`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:114

</td>
</tr>
<tr>
<td>

`UV_ENOTCONN`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:115

</td>
</tr>
<tr>
<td>

`UV_ENOTDIR`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:116

</td>
</tr>
<tr>
<td>

`UV_ENOTEMPTY`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:117

</td>
</tr>
<tr>
<td>

`UV_ENOTSOCK`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:118

</td>
</tr>
<tr>
<td>

`UV_ENOTSUP`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:119

</td>
</tr>
<tr>
<td>

`UV_EOVERFLOW`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:120

</td>
</tr>
<tr>
<td>

`UV_EPERM`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:121

</td>
</tr>
<tr>
<td>

`UV_EPIPE`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:122

</td>
</tr>
<tr>
<td>

`UV_EPROTO`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:123

</td>
</tr>
<tr>
<td>

`UV_EPROTONOSUPPORT`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:124

</td>
</tr>
<tr>
<td>

`UV_EPROTOTYPE`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:125

</td>
</tr>
<tr>
<td>

`UV_ERANGE`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:126

</td>
</tr>
<tr>
<td>

`UV_EROFS`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:127

</td>
</tr>
<tr>
<td>

`UV_ESHUTDOWN`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:128

</td>
</tr>
<tr>
<td>

`UV_ESPIPE`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:129

</td>
</tr>
<tr>
<td>

`UV_ESRCH`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:130

</td>
</tr>
<tr>
<td>

`UV_ETIMEDOUT`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:131

</td>
</tr>
<tr>
<td>

`UV_ETXTBSY`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:132

</td>
</tr>
<tr>
<td>

`UV_EXDEV`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:133

</td>
</tr>
<tr>
<td>

`UV_UNKNOWN`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:134

</td>
</tr>
<tr>
<td>

`UV_EOF`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:135

</td>
</tr>
<tr>
<td>

`UV_ENXIO`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:136

</td>
</tr>
<tr>
<td>

`UV_EMLINK`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:137

</td>
</tr>
<tr>
<td>

`UV_EHOSTDOWN`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:138

</td>
</tr>
<tr>
<td>

`UV_EREMOTEIO`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:139

</td>
</tr>
<tr>
<td>

`UV_ENOTTY`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:140

</td>
</tr>
<tr>
<td>

`UV_EFTYPE`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:141

</td>
</tr>
<tr>
<td>

`UV_EILSEQ`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:142

</td>
</tr>
<tr>
<td>

`UV_ESOCKTNOSUPPORT`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:143

</td>
</tr>
<tr>
<td>

`UV_ENODATA`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:144

</td>
</tr>
<tr>
<td>

`UV_EUNATCH`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:145

</td>
</tr>
</tbody>
</table>

##### Call Signature

```ts
binding(m: string): object;
```

Defined in: docs-config/node\_modules/bun-types/overrides.d.ts:147

###### Parameters

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

`m`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

###### Returns

`object`

#### removeListener()

```ts
removeListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:742

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

[`EventEmitter`](#eventemitter).[`removeListener`](#removelistener-8)

#### off()

```ts
off<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:747

Alias for `emitter.removeListener()`.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v10.0.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`off`](#off-8)

#### removeAllListeners()

```ts
removeAllListeners(eventName?: string | symbol): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:758

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

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

`eventName?`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

[`EventEmitter`](#eventemitter).[`removeAllListeners`](#removealllisteners-8)

#### setMaxListeners()

```ts
setMaxListeners(n: number): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:768

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

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

`n`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.3.5

##### Inherited from

[`EventEmitter`](#eventemitter).[`setMaxListeners`](#setmaxlisteners-8)

#### getMaxListeners()

```ts
getMaxListeners(): number;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:774

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to EventEmitter.defaultMaxListeners.

##### Returns

`number`

##### Since

v1.0.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`getMaxListeners`](#getmaxlisteners-8)

#### rawListeners()

```ts
rawListeners<K>(eventName: string | symbol): Function[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:818

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`Function`[]

##### Since

v9.4.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`rawListeners`](#rawlisteners-8)

#### listenerCount()

```ts
listenerCount<K>(eventName: string | symbol, listener?: Function): number;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:868

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event being listened for

</td>
</tr>
<tr>
<td>

`listener?`

</td>
<td>

`Function`

</td>
<td>

The event handler function

</td>
</tr>
</tbody>
</table>

##### Returns

`number`

##### Since

v3.2.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`listenerCount`](#listenercount-8)

#### eventNames()

```ts
eventNames(): (string | symbol)[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:922

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

##### Returns

(`string` \| `symbol`)[]

##### Since

v6.0.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`eventNames`](#eventnames-8)

#### \[captureRejectionSymbol\]()?

```ts
optional [captureRejectionSymbol]<K>(
   error: Error, 
   event: string | symbol, ...
   args: AnyRest): void;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:592

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`error`

</td>
<td>

`Error`

</td>
</tr>
<tr>
<td>

`event`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`AnyRest`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

[`EventEmitter`](#eventemitter).[`[captureRejectionSymbol]`](#capturerejectionsymbol-8)

***

## Global

Defined in: [src/global.d.ts:18](https://github.com/vtempest/grab-api/tree/master/src/global.d.ts#L18)

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

<a id="grab"></a> `grab`

</td>
<td>

[`GrabFunction`](../../index.md#grabfunction)

</td>
<td>

[src/global.d.ts:19](https://github.com/vtempest/grab-api/tree/master/src/global.d.ts#L19)

</td>
</tr>
<tr>
<td>

<a id="log"></a> `log`

</td>
<td>

[`LogFunction`](../../index.md#logfunction)

</td>
<td>

[src/global.d.ts:20](https://github.com/vtempest/grab-api/tree/master/src/global.d.ts#L20)

</td>
</tr>
</tbody>
</table>

***

## CallSite

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:292

### Methods

#### getThis()

```ts
getThis(): unknown;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:296

Value of "this"

##### Returns

`unknown`

#### getTypeName()

```ts
getTypeName(): string;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:304

Type of "this" as a string.
This is the name of the function stored in the constructor field of
"this", if available.  Otherwise the object's [[Class]] internal
property.

##### Returns

`string`

#### getFunction()

```ts
getFunction(): Function;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:309

Current function

##### Returns

`Function`

#### getFunctionName()

```ts
getFunctionName(): string;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:316

Name of the current function, typically its name property.
If a name property is not available an attempt will be made to try
to infer a name from the function's context.

##### Returns

`string`

#### getMethodName()

```ts
getMethodName(): string;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:322

Name of the property [of "this" or one of its prototypes] that holds
the current function

##### Returns

`string`

#### getFileName()

```ts
getFileName(): string;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:327

Name of the script [if this function was defined in a script]

##### Returns

`string`

#### getLineNumber()

```ts
getLineNumber(): number;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:332

Current line number [if this function was defined in a script]

##### Returns

`number`

#### getColumnNumber()

```ts
getColumnNumber(): number;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:337

Current column number [if this function was defined in a script]

##### Returns

`number`

#### getEvalOrigin()

```ts
getEvalOrigin(): string;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:343

A call site object representing the location where eval was called
[if this function was created using a call to eval]

##### Returns

`string`

#### isToplevel()

```ts
isToplevel(): boolean;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:348

Is this a toplevel invocation, that is, is "this" the global object?

##### Returns

`boolean`

#### isEval()

```ts
isEval(): boolean;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:353

Does this call take place in code defined by a call to eval?

##### Returns

`boolean`

#### isNative()

```ts
isNative(): boolean;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:358

Is this call in native V8 code?

##### Returns

`boolean`

#### isConstructor()

```ts
isConstructor(): boolean;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:363

Is this a constructor call?

##### Returns

`boolean`

#### isAsync()

```ts
isAsync(): boolean;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:368

is this an async call (i.e. await, Promise.all(), or Promise.any())?

##### Returns

`boolean`

#### isPromiseAll()

```ts
isPromiseAll(): boolean;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:373

is this an async call to Promise.all()?

##### Returns

`boolean`

#### getPromiseIndex()

```ts
getPromiseIndex(): number;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:380

returns the index of the promise element that was followed in
Promise.all() or Promise.any() for async stack traces, or null
if the CallSite is not an async

##### Returns

`number`

#### getScriptNameOrSourceURL()

```ts
getScriptNameOrSourceURL(): string;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:382

##### Returns

`string`

#### getScriptHash()

```ts
getScriptHash(): string;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:383

##### Returns

`string`

#### getEnclosingColumnNumber()

```ts
getEnclosingColumnNumber(): number;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:385

##### Returns

`number`

#### getEnclosingLineNumber()

```ts
getEnclosingLineNumber(): number;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:386

##### Returns

`number`

#### getPosition()

```ts
getPosition(): number;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:387

##### Returns

`number`

#### toString()

```ts
toString(): string;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:389

##### Returns

`string`

***

## ErrnoException

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:392

### Extends

- `Error`

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

<a id="errno"></a> `errno?`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/@types/node/globals.d.ts:393

</td>
</tr>
<tr>
<td>

<a id="code"></a> `code?`

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/@types/node/globals.d.ts:394

</td>
</tr>
<tr>
<td>

<a id="path"></a> `path?`

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/@types/node/globals.d.ts:395

</td>
</tr>
<tr>
<td>

<a id="syscall"></a> `syscall?`

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/@types/node/globals.d.ts:396

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

&hyphen;

</td>
<td>

```ts
Error.name
```

</td>
<td>

docs-config/node\_modules/typescript/lib/lib.es5.d.ts:1076

</td>
</tr>
<tr>
<td>

<a id="message"></a> `message`

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
<td>

```ts
Error.message
```

</td>
<td>

docs-config/node\_modules/typescript/lib/lib.es5.d.ts:1077

</td>
</tr>
<tr>
<td>

<a id="stack"></a> `stack?`

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
<td>

```ts
Error.stack
```

</td>
<td>

docs-config/node\_modules/typescript/lib/lib.es5.d.ts:1078

</td>
</tr>
<tr>
<td>

<a id="cause"></a> `cause?`

</td>
<td>

`unknown`

</td>
<td>

The cause of the error.

</td>
<td>

```ts
Error.cause
```

</td>
<td>

docs-config/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

</td>
</tr>
</tbody>
</table>

***

## ReadableStream

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:399

### Extends

- [`EventEmitter`](#eventemitter)

### Extended by

- [`ReadWriteStream`](#readwritestream)

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

<a id="readable"></a> `readable`

</td>
<td>

`boolean`

</td>
<td>

docs-config/node\_modules/@types/node/globals.d.ts:400

</td>
</tr>
</tbody>
</table>

### Methods

#### read()

```ts
read(size?: number): string | Buffer<ArrayBufferLike>;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:401

##### Parameters

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

`size?`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

##### Returns

`string` \| `Buffer`&lt;`ArrayBufferLike`&gt;

#### setEncoding()

```ts
setEncoding(encoding: BufferEncoding): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:402

##### Parameters

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

`encoding`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

#### pause()

```ts
pause(): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:403

##### Returns

`this`

#### resume()

```ts
resume(): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:404

##### Returns

`this`

#### isPaused()

```ts
isPaused(): boolean;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:405

##### Returns

`boolean`

#### pipe()

```ts
pipe<T>(destination: T, options?: object): T;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:406

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T` *extends* [`WritableStream`](#writablestream)

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`destination`

</td>
<td>

`T`

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `end`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.end?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

##### Returns

`T`

#### unpipe()

```ts
unpipe(destination?: WritableStream): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:407

##### Parameters

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

`destination?`

</td>
<td>

[`WritableStream`](#writablestream)

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

#### unshift()

```ts
unshift(chunk: string | Uint8Array<ArrayBufferLike>, encoding?: BufferEncoding): void;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:408

##### Parameters

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

`chunk`

</td>
<td>

`string` \| `Uint8Array`&lt;`ArrayBufferLike`&gt;

</td>
</tr>
<tr>
<td>

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

#### wrap()

```ts
wrap(oldStream: ReadableStream): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:409

##### Parameters

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

`oldStream`

</td>
<td>

[`ReadableStream`](#readablestream)

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

#### \[asyncIterator\]()

```ts
asyncIterator: AsyncIterator<string | Buffer<ArrayBufferLike>>;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:410

##### Returns

[`AsyncIterator`](#asynciterator)&lt;`string` \| `Buffer`&lt;`ArrayBufferLike`&gt;&gt;

#### addListener()

```ts
addListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:597

Alias for `emitter.on(eventName, listener)`.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

[`EventEmitter`](#eventemitter).[`addListener`](#addlistener-19)

#### on()

```ts
on<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:629

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.101

##### Inherited from

[`EventEmitter`](#eventemitter).[`on`](#on-20)

#### once()

```ts
once<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:659

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.3.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`once`](#once-20)

#### removeListener()

```ts
removeListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:742

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

[`EventEmitter`](#eventemitter).[`removeListener`](#removelistener-8)

#### off()

```ts
off<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:747

Alias for `emitter.removeListener()`.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v10.0.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`off`](#off-8)

#### removeAllListeners()

```ts
removeAllListeners(eventName?: string | symbol): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:758

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

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

`eventName?`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

[`EventEmitter`](#eventemitter).[`removeAllListeners`](#removealllisteners-8)

#### setMaxListeners()

```ts
setMaxListeners(n: number): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:768

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

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

`n`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.3.5

##### Inherited from

[`EventEmitter`](#eventemitter).[`setMaxListeners`](#setmaxlisteners-8)

#### getMaxListeners()

```ts
getMaxListeners(): number;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:774

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to EventEmitter.defaultMaxListeners.

##### Returns

`number`

##### Since

v1.0.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`getMaxListeners`](#getmaxlisteners-8)

#### listeners()

```ts
listeners<K>(eventName: string | symbol): Function[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:787

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`Function`[]

##### Since

v0.1.26

##### Inherited from

[`EventEmitter`](#eventemitter).[`listeners`](#listeners-19)

#### rawListeners()

```ts
rawListeners<K>(eventName: string | symbol): Function[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:818

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`Function`[]

##### Since

v9.4.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`rawListeners`](#rawlisteners-8)

#### emit()

```ts
emit<K>(eventName: string | symbol, ...args: AnyRest): boolean;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:859

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`AnyRest`

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

##### Since

v0.1.26

##### Inherited from

[`EventEmitter`](#eventemitter).[`emit`](#emit-19)

#### listenerCount()

```ts
listenerCount<K>(eventName: string | symbol, listener?: Function): number;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:868

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event being listened for

</td>
</tr>
<tr>
<td>

`listener?`

</td>
<td>

`Function`

</td>
<td>

The event handler function

</td>
</tr>
</tbody>
</table>

##### Returns

`number`

##### Since

v3.2.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`listenerCount`](#listenercount-8)

#### prependListener()

```ts
prependListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:886

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`prependListener`](#prependlistener-19)

#### prependOnceListener()

```ts
prependOnceListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:902

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`prependOnceListener`](#prependoncelistener-19)

#### eventNames()

```ts
eventNames(): (string | symbol)[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:922

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

##### Returns

(`string` \| `symbol`)[]

##### Since

v6.0.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`eventNames`](#eventnames-8)

#### \[captureRejectionSymbol\]()?

```ts
optional [captureRejectionSymbol]<K>(
   error: Error, 
   event: string | symbol, ...
   args: AnyRest): void;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:592

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`error`

</td>
<td>

`Error`

</td>
</tr>
<tr>
<td>

`event`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`AnyRest`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

[`EventEmitter`](#eventemitter).[`[captureRejectionSymbol]`](#capturerejectionsymbol-8)

***

## WritableStream

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:413

### Extends

- [`EventEmitter`](#eventemitter)

### Extended by

- [`ReadWriteStream`](#readwritestream)

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

<a id="writable"></a> `writable`

</td>
<td>

`boolean`

</td>
<td>

docs-config/node\_modules/@types/node/globals.d.ts:414

</td>
</tr>
</tbody>
</table>

### Methods

#### write()

##### Call Signature

```ts
write(buffer: string | Uint8Array<ArrayBufferLike>, cb?: (err?: Error) => void): boolean;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:415

###### Parameters

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

`buffer`

</td>
<td>

`string` \| `Uint8Array`&lt;`ArrayBufferLike`&gt;

</td>
</tr>
<tr>
<td>

`cb?`

</td>
<td>

(`err?`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

##### Call Signature

```ts
write(
   str: string, 
   encoding?: BufferEncoding, 
   cb?: (err?: Error) => void): boolean;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:416

###### Parameters

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

`str`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
</tr>
<tr>
<td>

`cb?`

</td>
<td>

(`err?`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

#### end()

##### Call Signature

```ts
end(cb?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:417

###### Parameters

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

`cb?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

##### Call Signature

```ts
end(data: string | Uint8Array<ArrayBufferLike>, cb?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:418

###### Parameters

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

`data`

</td>
<td>

`string` \| `Uint8Array`&lt;`ArrayBufferLike`&gt;

</td>
</tr>
<tr>
<td>

`cb?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

##### Call Signature

```ts
end(
   str: string, 
   encoding?: BufferEncoding, 
   cb?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:419

###### Parameters

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

`str`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
</tr>
<tr>
<td>

`cb?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

#### addListener()

```ts
addListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:597

Alias for `emitter.on(eventName, listener)`.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

[`EventEmitter`](#eventemitter).[`addListener`](#addlistener-19)

#### on()

```ts
on<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:629

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.101

##### Inherited from

[`EventEmitter`](#eventemitter).[`on`](#on-20)

#### once()

```ts
once<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:659

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.3.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`once`](#once-20)

#### removeListener()

```ts
removeListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:742

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

[`EventEmitter`](#eventemitter).[`removeListener`](#removelistener-8)

#### off()

```ts
off<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:747

Alias for `emitter.removeListener()`.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v10.0.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`off`](#off-8)

#### removeAllListeners()

```ts
removeAllListeners(eventName?: string | symbol): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:758

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

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

`eventName?`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

[`EventEmitter`](#eventemitter).[`removeAllListeners`](#removealllisteners-8)

#### setMaxListeners()

```ts
setMaxListeners(n: number): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:768

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

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

`n`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.3.5

##### Inherited from

[`EventEmitter`](#eventemitter).[`setMaxListeners`](#setmaxlisteners-8)

#### getMaxListeners()

```ts
getMaxListeners(): number;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:774

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to EventEmitter.defaultMaxListeners.

##### Returns

`number`

##### Since

v1.0.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`getMaxListeners`](#getmaxlisteners-8)

#### listeners()

```ts
listeners<K>(eventName: string | symbol): Function[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:787

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`Function`[]

##### Since

v0.1.26

##### Inherited from

[`EventEmitter`](#eventemitter).[`listeners`](#listeners-19)

#### rawListeners()

```ts
rawListeners<K>(eventName: string | symbol): Function[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:818

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`Function`[]

##### Since

v9.4.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`rawListeners`](#rawlisteners-8)

#### emit()

```ts
emit<K>(eventName: string | symbol, ...args: AnyRest): boolean;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:859

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`AnyRest`

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

##### Since

v0.1.26

##### Inherited from

[`EventEmitter`](#eventemitter).[`emit`](#emit-19)

#### listenerCount()

```ts
listenerCount<K>(eventName: string | symbol, listener?: Function): number;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:868

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event being listened for

</td>
</tr>
<tr>
<td>

`listener?`

</td>
<td>

`Function`

</td>
<td>

The event handler function

</td>
</tr>
</tbody>
</table>

##### Returns

`number`

##### Since

v3.2.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`listenerCount`](#listenercount-8)

#### prependListener()

```ts
prependListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:886

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`prependListener`](#prependlistener-19)

#### prependOnceListener()

```ts
prependOnceListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:902

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`prependOnceListener`](#prependoncelistener-19)

#### eventNames()

```ts
eventNames(): (string | symbol)[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:922

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

##### Returns

(`string` \| `symbol`)[]

##### Since

v6.0.0

##### Inherited from

[`EventEmitter`](#eventemitter).[`eventNames`](#eventnames-8)

#### \[captureRejectionSymbol\]()?

```ts
optional [captureRejectionSymbol]<K>(
   error: Error, 
   event: string | symbol, ...
   args: AnyRest): void;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:592

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`error`

</td>
<td>

`Error`

</td>
</tr>
<tr>
<td>

`event`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`AnyRest`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

[`EventEmitter`](#eventemitter).[`[captureRejectionSymbol]`](#capturerejectionsymbol-8)

***

## ReadWriteStream

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:422

### Extends

- [`ReadableStream`](#readablestream).[`WritableStream`](#writablestream)

### Extended by

- [`Socket`](#socket)

### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Inherited from</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="readable-1"></a> `readable`

</td>
<td>

`boolean`

</td>
<td>

[`ReadableStream`](#readablestream).[`readable`](#readable)

</td>
<td>

docs-config/node\_modules/@types/node/globals.d.ts:400

</td>
</tr>
<tr>
<td>

<a id="writable-1"></a> `writable`

</td>
<td>

`boolean`

</td>
<td>

[`WritableStream`](#writablestream).[`writable`](#writable)

</td>
<td>

docs-config/node\_modules/@types/node/globals.d.ts:414

</td>
</tr>
</tbody>
</table>

### Methods

#### read()

```ts
read(size?: number): string | Buffer<ArrayBufferLike>;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:401

##### Parameters

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

`size?`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

##### Returns

`string` \| `Buffer`&lt;`ArrayBufferLike`&gt;

##### Inherited from

[`ReadableStream`](#readablestream).[`read`](#read)

#### setEncoding()

```ts
setEncoding(encoding: BufferEncoding): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:402

##### Parameters

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

`encoding`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Inherited from

[`ReadableStream`](#readablestream).[`setEncoding`](#setencoding)

#### pause()

```ts
pause(): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:403

##### Returns

`this`

##### Inherited from

[`ReadableStream`](#readablestream).[`pause`](#pause)

#### resume()

```ts
resume(): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:404

##### Returns

`this`

##### Inherited from

[`ReadableStream`](#readablestream).[`resume`](#resume)

#### isPaused()

```ts
isPaused(): boolean;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:405

##### Returns

`boolean`

##### Inherited from

[`ReadableStream`](#readablestream).[`isPaused`](#ispaused)

#### pipe()

```ts
pipe<T>(destination: T, options?: object): T;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:406

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T` *extends* [`WritableStream`](#writablestream)

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`destination`

</td>
<td>

`T`

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `end`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.end?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

##### Returns

`T`

##### Inherited from

[`ReadableStream`](#readablestream).[`pipe`](#pipe)

#### unpipe()

```ts
unpipe(destination?: WritableStream): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:407

##### Parameters

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

`destination?`

</td>
<td>

[`WritableStream`](#writablestream)

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Inherited from

[`ReadableStream`](#readablestream).[`unpipe`](#unpipe)

#### unshift()

```ts
unshift(chunk: string | Uint8Array<ArrayBufferLike>, encoding?: BufferEncoding): void;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:408

##### Parameters

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

`chunk`

</td>
<td>

`string` \| `Uint8Array`&lt;`ArrayBufferLike`&gt;

</td>
</tr>
<tr>
<td>

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

[`ReadableStream`](#readablestream).[`unshift`](#unshift)

#### wrap()

```ts
wrap(oldStream: ReadableStream): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:409

##### Parameters

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

`oldStream`

</td>
<td>

[`ReadableStream`](#readablestream)

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Inherited from

[`ReadableStream`](#readablestream).[`wrap`](#wrap)

#### \[asyncIterator\]()

```ts
asyncIterator: AsyncIterator<string | Buffer<ArrayBufferLike>>;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:410

##### Returns

[`AsyncIterator`](#asynciterator)&lt;`string` \| `Buffer`&lt;`ArrayBufferLike`&gt;&gt;

##### Inherited from

[`ReadableStream`](#readablestream).[`[asyncIterator]`](#asynciterator-3)

#### addListener()

```ts
addListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:597

Alias for `emitter.on(eventName, listener)`.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

[`WritableStream`](#writablestream).[`addListener`](#addlistener-15)

#### on()

```ts
on<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:629

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.101

##### Inherited from

[`WritableStream`](#writablestream).[`on`](#on-16)

#### once()

```ts
once<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:659

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.3.0

##### Inherited from

[`WritableStream`](#writablestream).[`once`](#once-16)

#### removeListener()

```ts
removeListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:742

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

[`WritableStream`](#writablestream).[`removeListener`](#removelistener-4)

#### off()

```ts
off<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:747

Alias for `emitter.removeListener()`.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v10.0.0

##### Inherited from

[`WritableStream`](#writablestream).[`off`](#off-4)

#### removeAllListeners()

```ts
removeAllListeners(eventName?: string | symbol): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:758

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

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

`eventName?`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

[`WritableStream`](#writablestream).[`removeAllListeners`](#removealllisteners-4)

#### setMaxListeners()

```ts
setMaxListeners(n: number): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:768

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

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

`n`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.3.5

##### Inherited from

[`WritableStream`](#writablestream).[`setMaxListeners`](#setmaxlisteners-4)

#### getMaxListeners()

```ts
getMaxListeners(): number;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:774

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to EventEmitter.defaultMaxListeners.

##### Returns

`number`

##### Since

v1.0.0

##### Inherited from

[`WritableStream`](#writablestream).[`getMaxListeners`](#getmaxlisteners-4)

#### listeners()

```ts
listeners<K>(eventName: string | symbol): Function[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:787

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`Function`[]

##### Since

v0.1.26

##### Inherited from

[`WritableStream`](#writablestream).[`listeners`](#listeners-15)

#### rawListeners()

```ts
rawListeners<K>(eventName: string | symbol): Function[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:818

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`Function`[]

##### Since

v9.4.0

##### Inherited from

[`WritableStream`](#writablestream).[`rawListeners`](#rawlisteners-4)

#### emit()

```ts
emit<K>(eventName: string | symbol, ...args: AnyRest): boolean;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:859

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`AnyRest`

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

##### Since

v0.1.26

##### Inherited from

[`WritableStream`](#writablestream).[`emit`](#emit-15)

#### listenerCount()

```ts
listenerCount<K>(eventName: string | symbol, listener?: Function): number;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:868

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event being listened for

</td>
</tr>
<tr>
<td>

`listener?`

</td>
<td>

`Function`

</td>
<td>

The event handler function

</td>
</tr>
</tbody>
</table>

##### Returns

`number`

##### Since

v3.2.0

##### Inherited from

[`WritableStream`](#writablestream).[`listenerCount`](#listenercount-4)

#### prependListener()

```ts
prependListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:886

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

[`WritableStream`](#writablestream).[`prependListener`](#prependlistener-15)

#### prependOnceListener()

```ts
prependOnceListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:902

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

[`WritableStream`](#writablestream).[`prependOnceListener`](#prependoncelistener-15)

#### eventNames()

```ts
eventNames(): (string | symbol)[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:922

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

##### Returns

(`string` \| `symbol`)[]

##### Since

v6.0.0

##### Inherited from

[`WritableStream`](#writablestream).[`eventNames`](#eventnames-4)

#### \[captureRejectionSymbol\]()?

```ts
optional [captureRejectionSymbol]<K>(
   error: Error, 
   event: string | symbol, ...
   args: AnyRest): void;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:592

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`error`

</td>
<td>

`Error`

</td>
</tr>
<tr>
<td>

`event`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`AnyRest`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

[`WritableStream`](#writablestream).[`[captureRejectionSymbol]`](#capturerejectionsymbol-4)

#### write()

##### Call Signature

```ts
write(buffer: string | Uint8Array<ArrayBufferLike>, cb?: (err?: Error) => void): boolean;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:415

###### Parameters

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

`buffer`

</td>
<td>

`string` \| `Uint8Array`&lt;`ArrayBufferLike`&gt;

</td>
</tr>
<tr>
<td>

`cb?`

</td>
<td>

(`err?`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

[`WritableStream`](#writablestream).[`write`](#write)

##### Call Signature

```ts
write(
   str: string, 
   encoding?: BufferEncoding, 
   cb?: (err?: Error) => void): boolean;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:416

###### Parameters

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

`str`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
</tr>
<tr>
<td>

`cb?`

</td>
<td>

(`err?`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

[`WritableStream`](#writablestream).[`write`](#write)

#### end()

##### Call Signature

```ts
end(cb?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:417

###### Parameters

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

`cb?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

[`WritableStream`](#writablestream).[`end`](#end)

##### Call Signature

```ts
end(data: string | Uint8Array<ArrayBufferLike>, cb?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:418

###### Parameters

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

`data`

</td>
<td>

`string` \| `Uint8Array`&lt;`ArrayBufferLike`&gt;

</td>
</tr>
<tr>
<td>

`cb?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

[`WritableStream`](#writablestream).[`end`](#end)

##### Call Signature

```ts
end(
   str: string, 
   encoding?: BufferEncoding, 
   cb?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:419

###### Parameters

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

`str`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
</tr>
<tr>
<td>

`cb?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

[`WritableStream`](#writablestream).[`end`](#end)

***

## RefCounted

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:424

### Extended by

- [`Immediate`](#immediate)
- [`Timer`](#timer)
- [`Timeout`](#timeout-2)

### Methods

#### ref()

```ts
ref(): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:425

##### Returns

`this`

#### unref()

```ts
unref(): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:426

##### Returns

`this`

***

## Dict&lt;T&gt;

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:429

### Extended by

- [`RequireExtensions`](#requireextensions-1)
- [`ProcessVersions`](#processversions-1)
- [`ProcessEnv`](#processenv-1)

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

### Indexable

```ts
[key: string]: T
```

***

## ReadOnlyDict&lt;T&gt;

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:433

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

### Indexable

```ts
[key: string]: T
```

***

## EventEmitter&lt;T&gt;

Defined in: docs-config/node\_modules/@types/node/events.d.ts:591

### Extended by

- [`Process`](#process)
- [`ReadableStream`](#readablestream)
- [`WritableStream`](#writablestream)

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

`T` *extends* `EventMap`&lt;`T`&gt;

</td>
<td>

`DefaultEventMap`

</td>
</tr>
</tbody>
</table>

### Methods

#### addListener()

```ts
addListener<K>(eventName: Key<K, T>, listener: Listener<K, T>): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:597

Alias for `emitter.on(eventName, listener)`.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`Key`&lt;`K`, `T`&gt;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

`Listener`&lt;`K`, `T`&gt;

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

#### on()

```ts
on<K>(eventName: Key<K, T>, listener: Listener<K, T>): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:629

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`Key`&lt;`K`, `T`&gt;

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

`Listener`&lt;`K`, `T`&gt;

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.101

#### once()

```ts
once<K>(eventName: Key<K, T>, listener: Listener<K, T>): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:659

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`Key`&lt;`K`, `T`&gt;

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

`Listener`&lt;`K`, `T`&gt;

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.3.0

#### removeListener()

```ts
removeListener<K>(eventName: Key<K, T>, listener: Listener<K, T>): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:742

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`Key`&lt;`K`, `T`&gt;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

`Listener`&lt;`K`, `T`&gt;

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

#### off()

```ts
off<K>(eventName: Key<K, T>, listener: Listener<K, T>): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:747

Alias for `emitter.removeListener()`.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`Key`&lt;`K`, `T`&gt;

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

`Listener`&lt;`K`, `T`&gt;

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v10.0.0

#### removeAllListeners()

```ts
removeAllListeners(eventName?: Key<unknown, T>): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:758

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

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

`eventName?`

</td>
<td>

`Key`&lt;`unknown`, `T`&gt;

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

#### setMaxListeners()

```ts
setMaxListeners(n: number): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:768

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

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

`n`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.3.5

#### getMaxListeners()

```ts
getMaxListeners(): number;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:774

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to EventEmitter.defaultMaxListeners.

##### Returns

`number`

##### Since

v1.0.0

#### listeners()

```ts
listeners<K>(eventName: Key<K, T>): Listener<K, T, Function>[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:787

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`Key`&lt;`K`, `T`&gt;

</td>
</tr>
</tbody>
</table>

##### Returns

`Listener`&lt;`K`, `T`, `Function`&gt;[]

##### Since

v0.1.26

#### rawListeners()

```ts
rawListeners<K>(eventName: Key<K, T>): Listener<K, T, Function>[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:818

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`Key`&lt;`K`, `T`&gt;

</td>
</tr>
</tbody>
</table>

##### Returns

`Listener`&lt;`K`, `T`, `Function`&gt;[]

##### Since

v9.4.0

#### emit()

```ts
emit<K>(eventName: Key<K, T>, ...args: Args<K, T>): boolean;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:859

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`Key`&lt;`K`, `T`&gt;

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`Args`&lt;`K`, `T`&gt;

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

##### Since

v0.1.26

#### listenerCount()

```ts
listenerCount<K>(eventName: Key<K, T>, listener?: Listener<K, T>): number;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:868

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`Key`&lt;`K`, `T`&gt;

</td>
<td>

The name of the event being listened for

</td>
</tr>
<tr>
<td>

`listener?`

</td>
<td>

`Listener`&lt;`K`, `T`&gt;

</td>
<td>

The event handler function

</td>
</tr>
</tbody>
</table>

##### Returns

`number`

##### Since

v3.2.0

#### prependListener()

```ts
prependListener<K>(eventName: Key<K, T>, listener: Listener<K, T>): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:886

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`Key`&lt;`K`, `T`&gt;

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

`Listener`&lt;`K`, `T`&gt;

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v6.0.0

#### prependOnceListener()

```ts
prependOnceListener<K>(eventName: Key<K, T>, listener: Listener<K, T>): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:902

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`Key`&lt;`K`, `T`&gt;

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

`Listener`&lt;`K`, `T`&gt;

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v6.0.0

#### eventNames()

```ts
eventNames(): string | symbol & Key2<unknown, T>[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:922

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

##### Returns

`string` \| `symbol` & `Key2`&lt;`unknown`, `T`&gt;[]

##### Since

v6.0.0

#### \[captureRejectionSymbol\]()?

```ts
optional [captureRejectionSymbol]<K>(
   error: Error, 
   event: Key<K, T>, ...
   args: Args<K, T>): void;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:592

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`error`

</td>
<td>

`Error`

</td>
</tr>
<tr>
<td>

`event`

</td>
<td>

`Key`&lt;`K`, `T`&gt;

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`Args`&lt;`K`, `T`&gt;

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

***

## Module

Defined in: docs-config/node\_modules/@types/node/module.d.ts:568

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

<a id="children"></a> `children`

</td>
<td>

[`Module`](#module)[]

</td>
<td>

The module objects required for the first time by this one.

**Since**

v0.1.16

</td>
<td>

docs-config/node\_modules/@types/node/module.d.ts:573

</td>
</tr>
<tr>
<td>

<a id="exports"></a> `exports`

</td>
<td>

`any`

</td>
<td>

The `module.exports` object is created by the `Module` system. Sometimes this is
not acceptable; many want their module to be an instance of some class. To do
this, assign the desired export object to `module.exports`.

**Since**

v0.1.16

</td>
<td>

docs-config/node\_modules/@types/node/module.d.ts:580

</td>
</tr>
<tr>
<td>

<a id="filename"></a> `filename`

</td>
<td>

`string`

</td>
<td>

The fully resolved filename of the module.

**Since**

v0.1.16

</td>
<td>

docs-config/node\_modules/@types/node/module.d.ts:585

</td>
</tr>
<tr>
<td>

<a id="id"></a> `id`

</td>
<td>

`string`

</td>
<td>

The identifier for the module. Typically this is the fully resolved
filename.

**Since**

v0.1.16

</td>
<td>

docs-config/node\_modules/@types/node/module.d.ts:591

</td>
</tr>
<tr>
<td>

<a id="ispreloading"></a> `isPreloading`

</td>
<td>

`boolean`

</td>
<td>

`true` if the module is running during the Node.js preload
phase.

**Since**

v15.4.0, v14.17.0

</td>
<td>

docs-config/node\_modules/@types/node/module.d.ts:597

</td>
</tr>
<tr>
<td>

<a id="loaded"></a> `loaded`

</td>
<td>

`boolean`

</td>
<td>

Whether or not the module is done loading, or is in the process of
loading.

**Since**

v0.1.16

</td>
<td>

docs-config/node\_modules/@types/node/module.d.ts:603

</td>
</tr>
<tr>
<td>

<a id="parent"></a> ~~`parent`~~

</td>
<td>

[`Module`](#module)

</td>
<td>

The module that first required this one, or `null` if the current module is the
entry point of the current process, or `undefined` if the module was loaded by
something that is not a CommonJS module (e.g. REPL or `import`).

**Since**

v0.1.16

**Deprecated**

Please use `require.main` and `module.children` instead.

</td>
<td>

docs-config/node\_modules/@types/node/module.d.ts:611

</td>
</tr>
<tr>
<td>

<a id="path-1"></a> `path`

</td>
<td>

`string`

</td>
<td>

The directory name of the module. This is usually the same as the
`path.dirname()` of the `module.id`.

**Since**

v11.14.0

</td>
<td>

docs-config/node\_modules/@types/node/module.d.ts:617

</td>
</tr>
<tr>
<td>

<a id="paths"></a> `paths`

</td>
<td>

`string`[]

</td>
<td>

The search paths for the module.

**Since**

v0.4.0

</td>
<td>

docs-config/node\_modules/@types/node/module.d.ts:622

</td>
</tr>
</tbody>
</table>

### Methods

#### require()

```ts
require(id: string): any;
```

Defined in: docs-config/node\_modules/@types/node/module.d.ts:628

The `module.require()` method provides a way to load a module as if
`require()` was called from the original module.

##### Parameters

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

`id`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

##### Returns

`any`

##### Since

v0.5.1

***

## Require()

Defined in: docs-config/node\_modules/@types/node/module.d.ts:630

```ts
Require(id: string): any;
```

Defined in: docs-config/node\_modules/@types/node/module.d.ts:635

Used to import modules, `JSON`, and local files.

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

`id`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

### Returns

`any`

### Since

v0.1.13

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

<a id="cache"></a> `cache`

</td>
<td>

[`Dict`](#dict)&lt;[`Module`](#module)&gt;

</td>
<td>

Modules are cached in this object when they are required. By deleting a key
value from this object, the next `require` will reload the module.
This does not apply to
[native addons](https://nodejs.org/docs/latest-v22.x/api/addons.html),
for which reloading will result in an error.

**Since**

v0.3.0

</td>
<td>

docs-config/node\_modules/@types/node/module.d.ts:644

</td>
</tr>
<tr>
<td>

<a id="extensions"></a> ~~`extensions`~~

</td>
<td>

[`RequireExtensions`](#requireextensions-1)

</td>
<td>

Instruct `require` on how to handle certain file extensions.

**Since**

v0.3.0

**Deprecated**

</td>
<td>

docs-config/node\_modules/@types/node/module.d.ts:650

</td>
</tr>
<tr>
<td>

<a id="main"></a> `main`

</td>
<td>

[`Module`](#module)

</td>
<td>

The `Module` object representing the entry script loaded when the Node.js
process launched, or `undefined` if the entry point of the program is not a
CommonJS module.

**Since**

v0.1.17

</td>
<td>

docs-config/node\_modules/@types/node/module.d.ts:657

</td>
</tr>
<tr>
<td>

<a id="resolve"></a> `resolve`

</td>
<td>

[`RequireResolve`](#requireresolve-1)

</td>
<td>

**Since**

v0.3.0

</td>
<td>

docs-config/node\_modules/@types/node/module.d.ts:661

</td>
</tr>
</tbody>
</table>

***

## ~~RequireExtensions~~

Defined in: docs-config/node\_modules/@types/node/module.d.ts:664

### Deprecated

### Extends

- [`Dict`](#dict)&lt;(`module`: [`Module`](#module), `filename`: `string`) => `any`&gt;

### Indexable

```ts
[key: string]: (module: Module, filename: string) => any
```

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

<a id="js"></a> ~~`.js`~~

</td>
<td>

(`module`: [`Module`](#module), `filename`: `string`) => `any`

</td>
<td>

docs-config/node\_modules/@types/node/module.d.ts:665

</td>
</tr>
<tr>
<td>

<a id="json"></a> ~~`.json`~~

</td>
<td>

(`module`: [`Module`](#module), `filename`: `string`) => `any`

</td>
<td>

docs-config/node\_modules/@types/node/module.d.ts:666

</td>
</tr>
<tr>
<td>

<a id="node"></a> ~~`.node`~~

</td>
<td>

(`module`: [`Module`](#module), `filename`: `string`) => `any`

</td>
<td>

docs-config/node\_modules/@types/node/module.d.ts:667

</td>
</tr>
</tbody>
</table>

***

## RequireResolveOptions

Defined in: docs-config/node\_modules/@types/node/module.d.ts:669

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

<a id="paths-1"></a> `paths?`

</td>
<td>

`string`[]

</td>
<td>

Paths to resolve module location from. If present, these
paths are used instead of the default resolution paths, with the exception
of
[GLOBAL\_FOLDERS](https://nodejs.org/docs/latest-v22.x/api/modules.html#loading-from-the-global-folders)
like `$HOME/.node_modules`, which are
always included. Each of these paths is used as a starting point for
the module resolution algorithm, meaning that the `node_modules` hierarchy
is checked from this location.

**Since**

v8.9.0

</td>
<td>

docs-config/node\_modules/@types/node/module.d.ts:681

</td>
</tr>
</tbody>
</table>

***

## RequireResolve()

Defined in: docs-config/node\_modules/@types/node/module.d.ts:683

```ts
RequireResolve(request: string, options?: RequireResolveOptions): string;
```

Defined in: docs-config/node\_modules/@types/node/module.d.ts:692

Use the internal `require()` machinery to look up the location of a module,
but rather than loading the module, just return the resolved filename.

If the module can not be found, a `MODULE_NOT_FOUND` error is thrown.

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

`request`

</td>
<td>

`string`

</td>
<td>

The module path to resolve.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

[`RequireResolveOptions`](#requireresolveoptions)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

### Returns

`string`

### Since

v0.3.0

### Methods

#### paths()

```ts
paths(request: string): string[];
```

Defined in: docs-config/node\_modules/@types/node/module.d.ts:700

Returns an array containing the paths searched during resolution of `request` or
`null` if the `request` string references a core module, for example `http` or
`fs`.

##### Parameters

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

`request`

</td>
<td>

`string`

</td>
<td>

The module path whose lookup paths are being retrieved.

</td>
</tr>
</tbody>
</table>

##### Returns

`string`[]

##### Since

v8.9.0

***

## ReadStream

Defined in: docs-config/node\_modules/@types/node/process.d.ts:125

this namespace merge is here because these are specifically used
as the type for process.stdin, process.stdout, and process.stderr.
they can't live in tty.d.ts because we need to disambiguate the imported name.

### Extends

- `ReadStream`

### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Description</th>
<th>Inherited from</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="israw"></a> `isRaw`

</td>
<td>

`public`

</td>
<td>

`boolean`

</td>
<td>

A `boolean` that is `true` if the TTY is currently configured to operate as a
raw device.

This flag is always `false` when a process starts, even if the terminal is
operating in raw mode. Its value will change with subsequent calls to `setRawMode`.

**Since**

v0.7.7

</td>
<td>

```ts
tty.ReadStream.isRaw
```

</td>
<td>

docs-config/node\_modules/@types/node/tty.d.ts:51

</td>
</tr>
<tr>
<td>

<a id="istty"></a> `isTTY`

</td>
<td>

`public`

</td>
<td>

`boolean`

</td>
<td>

A `boolean` that is always `true` for `tty.ReadStream` instances.

**Since**

v0.5.8

</td>
<td>

```ts
tty.ReadStream.isTTY
```

</td>
<td>

docs-config/node\_modules/@types/node/tty.d.ts:70

</td>
</tr>
<tr>
<td>

<a id="autoselectfamilyattemptedaddresses"></a> `autoSelectFamilyAttemptedAddresses`

</td>
<td>

`readonly`

</td>
<td>

`string`[]

</td>
<td>

This property is only present if the family autoselection algorithm is enabled in `socket.connect(options)`
and it is an array of the addresses that have been attempted.

Each address is a string in the form of `$IP:$PORT`.
If the connection was successful, then the last address is the one that the socket is currently connected to.

**Since**

v19.4.0

</td>
<td>

```ts
tty.ReadStream.autoSelectFamilyAttemptedAddresses
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:248

</td>
</tr>
<tr>
<td>

<a id="buffersize"></a> ~~`bufferSize`~~

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

This property shows the number of characters buffered for writing. The buffer
may contain strings whose length after encoding is not yet known. So this number
is only an approximation of the number of bytes in the buffer.

`net.Socket` has the property that `socket.write()` always works. This is to
help users get up and running quickly. The computer cannot always keep up
with the amount of data that is written to a socket. The network connection
simply might be too slow. Node.js will internally queue up the data written to a
socket and send it out over the wire when it is possible.

The consequence of this internal buffering is that memory may grow.
Users who experience large or growing `bufferSize` should attempt to
"throttle" the data flows in their program with `socket.pause()` and `socket.resume()`.

**Since**

v0.3.8

**Deprecated**

Since v14.6.0 - Use `writableLength` instead.

</td>
<td>

```ts
tty.ReadStream.bufferSize
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:266

</td>
</tr>
<tr>
<td>

<a id="bytesread"></a> `bytesRead`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

The amount of received bytes.

**Since**

v0.5.3

</td>
<td>

```ts
tty.ReadStream.bytesRead
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:271

</td>
</tr>
<tr>
<td>

<a id="byteswritten"></a> `bytesWritten`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

The amount of bytes sent.

**Since**

v0.5.3

</td>
<td>

```ts
tty.ReadStream.bytesWritten
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:276

</td>
</tr>
<tr>
<td>

<a id="connecting"></a> `connecting`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

If `true`, `socket.connect(options[, connectListener])` was
called and has not yet finished. It will stay `true` until the socket becomes
connected, then it is set to `false` and the `'connect'` event is emitted. Note
that the `socket.connect(options[, connectListener])` callback is a listener for the `'connect'` event.

**Since**

v6.1.0

</td>
<td>

```ts
tty.ReadStream.connecting
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:284

</td>
</tr>
<tr>
<td>

<a id="pending"></a> `pending`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

This is `true` if the socket is not connected yet, either because `.connect()`has not yet been called or because it is still in the process of connecting
(see `socket.connecting`).

**Since**

v11.2.0, v10.16.0

</td>
<td>

```ts
tty.ReadStream.pending
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:290

</td>
</tr>
<tr>
<td>

<a id="destroyed"></a> `destroyed`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

See `writable.destroyed` for further details.

</td>
<td>

```ts
tty.ReadStream.destroyed
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:294

</td>
</tr>
<tr>
<td>

<a id="localaddress"></a> `localAddress?`

</td>
<td>

`readonly`

</td>
<td>

`string`

</td>
<td>

The string representation of the local IP address the remote client is
connecting on. For example, in a server listening on `'0.0.0.0'`, if a client
connects on `'192.168.1.1'`, the value of `socket.localAddress` would be`'192.168.1.1'`.

**Since**

v0.9.6

</td>
<td>

```ts
tty.ReadStream.localAddress
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:301

</td>
</tr>
<tr>
<td>

<a id="localport"></a> `localPort?`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

The numeric representation of the local port. For example, `80` or `21`.

**Since**

v0.9.6

</td>
<td>

```ts
tty.ReadStream.localPort
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:306

</td>
</tr>
<tr>
<td>

<a id="localfamily"></a> `localFamily?`

</td>
<td>

`readonly`

</td>
<td>

`string`

</td>
<td>

The string representation of the local IP family. `'IPv4'` or `'IPv6'`.

**Since**

v18.8.0, v16.18.0

</td>
<td>

```ts
tty.ReadStream.localFamily
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:311

</td>
</tr>
<tr>
<td>

<a id="readystate"></a> `readyState`

</td>
<td>

`readonly`

</td>
<td>

`SocketReadyState`

</td>
<td>

This property represents the state of the connection as a string.

* If the stream is connecting `socket.readyState` is `opening`.
* If the stream is readable and writable, it is `open`.
* If the stream is readable and not writable, it is `readOnly`.
* If the stream is not readable and writable, it is `writeOnly`.

**Since**

v0.5.0

</td>
<td>

```ts
tty.ReadStream.readyState
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:321

</td>
</tr>
<tr>
<td>

<a id="remoteaddress"></a> `remoteAddress?`

</td>
<td>

`readonly`

</td>
<td>

`string`

</td>
<td>

The string representation of the remote IP address. For example,`'74.125.127.100'` or `'2001:4860:a005::68'`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

**Since**

v0.5.10

</td>
<td>

```ts
tty.ReadStream.remoteAddress
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:327

</td>
</tr>
<tr>
<td>

<a id="remotefamily"></a> `remoteFamily?`

</td>
<td>

`readonly`

</td>
<td>

`string`

</td>
<td>

The string representation of the remote IP family. `'IPv4'` or `'IPv6'`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

**Since**

v0.11.14

</td>
<td>

```ts
tty.ReadStream.remoteFamily
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:333

</td>
</tr>
<tr>
<td>

<a id="remoteport"></a> `remotePort?`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

The numeric representation of the remote port. For example, `80` or `21`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

**Since**

v0.5.10

</td>
<td>

```ts
tty.ReadStream.remotePort
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:339

</td>
</tr>
<tr>
<td>

<a id="timeout"></a> `timeout?`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

The socket timeout in milliseconds as set by `socket.setTimeout()`.
It is `undefined` if a timeout has not been set.

**Since**

v10.7.0

</td>
<td>

```ts
tty.ReadStream.timeout
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:345

</td>
</tr>
<tr>
<td>

<a id="allowhalfopen"></a> `allowHalfOpen`

</td>
<td>

`public`

</td>
<td>

`boolean`

</td>
<td>

If `false` then the stream will automatically end the writable side when the
readable side ends. Set initially by the `allowHalfOpen` constructor option,
which defaults to `true`.

This can be changed manually to change the half-open behavior of an existing
`Duplex` stream instance, but must be changed before the `'end'` event is emitted.

**Since**

v0.9.4

</td>
<td>

```ts
tty.ReadStream.allowHalfOpen
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:1049

</td>
</tr>
<tr>
<td>

<a id="readableaborted"></a> `readableAborted`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

**`Experimental`**

Returns whether the stream was destroyed or errored before emitting `'end'`.

**Since**

v16.8.0

</td>
<td>

```ts
tty.ReadStream.readableAborted
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:106

</td>
</tr>
<tr>
<td>

<a id="readable-2"></a> `readable`

</td>
<td>

`public`

</td>
<td>

`boolean`

</td>
<td>

Is `true` if it is safe to call [read](#read-4), which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

**Since**

v11.4.0

</td>
<td>

```ts
tty.ReadStream.readable
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:112

</td>
</tr>
<tr>
<td>

<a id="readabledidread"></a> `readableDidRead`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

**`Experimental`**

Returns whether `'data'` has been emitted.

**Since**

v16.7.0, v14.18.0

</td>
<td>

```ts
tty.ReadStream.readableDidRead
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:118

</td>
</tr>
<tr>
<td>

<a id="readableencoding"></a> `readableEncoding`

</td>
<td>

`readonly`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
<td>

Getter for the property `encoding` of a given `Readable` stream. The `encoding` property can be set using the [setEncoding](#setencoding-4) method.

**Since**

v12.7.0

</td>
<td>

```ts
tty.ReadStream.readableEncoding
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:123

</td>
</tr>
<tr>
<td>

<a id="readableended"></a> `readableEnded`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

Becomes `true` when [`'end'`](https://nodejs.org/docs/latest-v22.x/api/stream.html#event-end) event is emitted.

**Since**

v12.9.0

</td>
<td>

```ts
tty.ReadStream.readableEnded
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:128

</td>
</tr>
<tr>
<td>

<a id="readableflowing"></a> `readableFlowing`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

This property reflects the current state of a `Readable` stream as described
in the [Three states](https://nodejs.org/docs/latest-v22.x/api/stream.html#three-states) section.

**Since**

v9.4.0

</td>
<td>

```ts
tty.ReadStream.readableFlowing
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:134

</td>
</tr>
<tr>
<td>

<a id="readablehighwatermark"></a> `readableHighWaterMark`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

Returns the value of `highWaterMark` passed when creating this `Readable`.

**Since**

v9.3.0

</td>
<td>

```ts
tty.ReadStream.readableHighWaterMark
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:139

</td>
</tr>
<tr>
<td>

<a id="readablelength"></a> `readableLength`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

**Since**

v9.4.0

</td>
<td>

```ts
tty.ReadStream.readableLength
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:146

</td>
</tr>
<tr>
<td>

<a id="readableobjectmode"></a> `readableObjectMode`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

Getter for the property `objectMode` of a given `Readable` stream.

**Since**

v12.3.0

</td>
<td>

```ts
tty.ReadStream.readableObjectMode
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:151

</td>
</tr>
<tr>
<td>

<a id="closed"></a> `closed`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

Is `true` after `'close'` has been emitted.

**Since**

v18.0.0

</td>
<td>

```ts
tty.ReadStream.closed
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:161

</td>
</tr>
<tr>
<td>

<a id="errored"></a> `errored`

</td>
<td>

`readonly`

</td>
<td>

`Error`

</td>
<td>

Returns error if the stream has been destroyed with an error.

**Since**

v18.0.0

</td>
<td>

```ts
tty.ReadStream.errored
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:166

</td>
</tr>
<tr>
<td>

<a id="writable-2"></a> `writable`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored, or ended.

**Since**

v11.4.0

</td>
<td>

```ts
tty.ReadStream.writable
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:739

</td>
</tr>
<tr>
<td>

<a id="writableended"></a> `writableEnded`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

**Since**

v12.9.0

</td>
<td>

```ts
tty.ReadStream.writableEnded
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:745

</td>
</tr>
<tr>
<td>

<a id="writablefinished"></a> `writableFinished`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

Is set to `true` immediately before the `'finish'` event is emitted.

**Since**

v12.6.0

</td>
<td>

```ts
tty.ReadStream.writableFinished
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:750

</td>
</tr>
<tr>
<td>

<a id="writablehighwatermark"></a> `writableHighWaterMark`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

Return the value of `highWaterMark` passed when creating this `Writable`.

**Since**

v9.3.0

</td>
<td>

```ts
tty.ReadStream.writableHighWaterMark
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:755

</td>
</tr>
<tr>
<td>

<a id="writablelength"></a> `writableLength`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

This property contains the number of bytes (or objects) in the queue
ready to be written. The value provides introspection data regarding
the status of the `highWaterMark`.

**Since**

v9.4.0

</td>
<td>

```ts
tty.ReadStream.writableLength
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:762

</td>
</tr>
<tr>
<td>

<a id="writableobjectmode"></a> `writableObjectMode`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

Getter for the property `objectMode` of a given `Writable` stream.

**Since**

v12.3.0

</td>
<td>

```ts
tty.ReadStream.writableObjectMode
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:767

</td>
</tr>
<tr>
<td>

<a id="writablecorked"></a> `writableCorked`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

**Since**

v13.2.0, v12.16.0

</td>
<td>

```ts
tty.ReadStream.writableCorked
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:773

</td>
</tr>
<tr>
<td>

<a id="writableneeddrain"></a> `writableNeedDrain`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

Is `true` if the stream's buffer has been full and stream will emit `'drain'`.

**Since**

v15.2.0, v14.17.0

</td>
<td>

```ts
tty.ReadStream.writableNeedDrain
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:793

</td>
</tr>
</tbody>
</table>

### Methods

#### setRawMode()

```ts
setRawMode(mode: boolean): this;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:65

Allows configuration of `tty.ReadStream` so that it operates as a raw device.

When in raw mode, input is always available character-by-character, not
including modifiers. Additionally, all special processing of characters by the
terminal is disabled, including echoing input
characters. Ctrl+C will no longer cause a `SIGINT` when
in this mode.

##### Parameters

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

`mode`

</td>
<td>

`boolean`

</td>
<td>

If `true`, configures the `tty.ReadStream` to operate as a raw device. If `false`, configures the `tty.ReadStream` to operate in its default mode. The `readStream.isRaw`
property will be set to the resulting mode.

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

The read stream instance.

##### Since

v0.7.7

##### Inherited from

```ts
tty.ReadStream.setRawMode
```

#### destroySoon()

```ts
destroySoon(): void;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:96

Destroys the socket after all data is written. If the `finish` event was already emitted the socket is destroyed immediately.
If the socket is still writable it implicitly calls `socket.end()`.

##### Returns

`void`

##### Since

v0.3.4

##### Inherited from

```ts
tty.ReadStream.destroySoon
```

#### write()

##### Call Signature

```ts
write(buffer: string | Uint8Array<ArrayBufferLike>, cb?: (err?: Error) => void): boolean;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:112

Sends data on the socket. The second parameter specifies the encoding in the
case of a string. It defaults to UTF8 encoding.

Returns `true` if the entire data was flushed successfully to the kernel
buffer. Returns `false` if all or part of the data was queued in user memory.`'drain'` will be emitted when the buffer is again free.

The optional `callback` parameter will be executed when the data is finally
written out, which may not be immediately.

See `Writable` stream `write()` method for more
information.

###### Parameters

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

`buffer`

</td>
<td>

`string` \| `Uint8Array`&lt;`ArrayBufferLike`&gt;

</td>
</tr>
<tr>
<td>

`cb?`

</td>
<td>

(`err?`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Since

v0.1.90

###### Inherited from

```ts
tty.ReadStream.write
```

##### Call Signature

```ts
write(
   str: string | Uint8Array<ArrayBufferLike>, 
   encoding?: BufferEncoding, 
   cb?: (err?: Error) => void): boolean;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:113

Sends data on the socket. The second parameter specifies the encoding in the
case of a string. It defaults to UTF8 encoding.

Returns `true` if the entire data was flushed successfully to the kernel
buffer. Returns `false` if all or part of the data was queued in user memory.`'drain'` will be emitted when the buffer is again free.

The optional `callback` parameter will be executed when the data is finally
written out, which may not be immediately.

See `Writable` stream `write()` method for more
information.

###### Parameters

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

`str`

</td>
<td>

`string` \| `Uint8Array`&lt;`ArrayBufferLike`&gt;

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
<td>

Only used when data is `string`.

</td>
</tr>
<tr>
<td>

`cb?`

</td>
<td>

(`err?`: `Error`) => `void`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Since

v0.1.90

###### Inherited from

```ts
tty.ReadStream.write
```

#### connect()

##### Call Signature

```ts
connect(options: SocketConnectOpts, connectionListener?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:133

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

###### Parameters

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

`options`

</td>
<td>

`SocketConnectOpts`

</td>
</tr>
<tr>
<td>

`connectionListener?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.connect
```

##### Call Signature

```ts
connect(
   port: number, 
   host: string, 
   connectionListener?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:134

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

###### Parameters

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

`port`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`host`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`connectionListener?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.connect
```

##### Call Signature

```ts
connect(port: number, connectionListener?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:135

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

###### Parameters

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

`port`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`connectionListener?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.connect
```

##### Call Signature

```ts
connect(path: string, connectionListener?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:136

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

###### Parameters

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

`connectionListener?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.connect
```

#### setEncoding()

```ts
setEncoding(encoding?: BufferEncoding): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:142

Set the encoding for the socket as a `Readable Stream`. See `readable.setEncoding()` for more information.

##### Parameters

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

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

The socket itself.

##### Since

v0.1.90

##### Inherited from

```ts
tty.ReadStream.setEncoding
```

#### pause()

```ts
pause(): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:148

Pauses the reading of data. That is, `'data'` events will not be emitted.
Useful to throttle back an upload.

##### Returns

`this`

The socket itself.

##### Inherited from

```ts
tty.ReadStream.pause
```

#### resetAndDestroy()

```ts
resetAndDestroy(): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:156

Close the TCP connection by sending an RST packet and destroy the stream.
If this TCP socket is in connecting status, it will send an RST packet and destroy this TCP socket once it is connected.
Otherwise, it will call `socket.destroy` with an `ERR_SOCKET_CLOSED` Error.
If this is not a TCP socket (for example, a pipe), calling this method will immediately throw an `ERR_INVALID_HANDLE_TYPE` Error.

##### Returns

`this`

##### Since

v18.3.0, v16.17.0

##### Inherited from

```ts
tty.ReadStream.resetAndDestroy
```

#### resume()

```ts
resume(): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:161

Resumes reading after a call to `socket.pause()`.

##### Returns

`this`

The socket itself.

##### Inherited from

```ts
tty.ReadStream.resume
```

#### setTimeout()

```ts
setTimeout(timeout: number, callback?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:183

Sets the socket to timeout after `timeout` milliseconds of inactivity on
the socket. By default `net.Socket` do not have a timeout.

When an idle timeout is triggered the socket will receive a `'timeout'` event but the connection will not be severed. The user must manually call `socket.end()` or `socket.destroy()` to
end the connection.

```js
socket.setTimeout(3000);
socket.on('timeout', () => {
  console.log('socket timeout');
  socket.end();
});
```

If `timeout` is 0, then the existing idle timeout is disabled.

The optional `callback` parameter will be added as a one-time listener for the `'timeout'` event.

##### Parameters

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

`timeout`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`callback?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

The socket itself.

##### Since

v0.1.90

##### Inherited from

```ts
tty.ReadStream.setTimeout
```

#### setNoDelay()

```ts
setNoDelay(noDelay?: boolean): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:199

Enable/disable the use of Nagle's algorithm.

When a TCP connection is created, it will have Nagle's algorithm enabled.

Nagle's algorithm delays data before it is sent via the network. It attempts
to optimize throughput at the expense of latency.

Passing `true` for `noDelay` or not passing an argument will disable Nagle's
algorithm for the socket. Passing `false` for `noDelay` will enable Nagle's
algorithm.

##### Parameters

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

`noDelay?`

</td>
<td>

`boolean`

</td>
<td>

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

The socket itself.

##### Since

v0.1.90

##### Inherited from

```ts
tty.ReadStream.setNoDelay
```

#### setKeepAlive()

```ts
setKeepAlive(enable?: boolean, initialDelay?: number): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:219

Enable/disable keep-alive functionality, and optionally set the initial
delay before the first keepalive probe is sent on an idle socket.

Set `initialDelay` (in milliseconds) to set the delay between the last
data packet received and the first keepalive probe. Setting `0` for`initialDelay` will leave the value unchanged from the default
(or previous) setting.

Enabling the keep-alive functionality will set the following socket options:

* `SO_KEEPALIVE=1`
* `TCP_KEEPIDLE=initialDelay`
* `TCP_KEEPCNT=10`
* `TCP_KEEPINTVL=1`

##### Parameters

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

`enable?`

</td>
<td>

`boolean`

</td>
<td>

</td>
</tr>
<tr>
<td>

`initialDelay?`

</td>
<td>

`number`

</td>
<td>

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

The socket itself.

##### Since

v0.1.92

##### Inherited from

```ts
tty.ReadStream.setKeepAlive
```

#### address()

```ts
address(): 
  | {
}
  | AddressInfo;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:225

Returns the bound `address`, the address `family` name and `port` of the
socket as reported by the operating system:`{ port: 12346, family: 'IPv4', address: '127.0.0.1' }`

##### Returns

  \| \{
\}
  \| `AddressInfo`

##### Since

v0.1.90

##### Inherited from

```ts
tty.ReadStream.address
```

#### unref()

```ts
unref(): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:232

Calling `unref()` on a socket will allow the program to exit if this is the only
active socket in the event system. If the socket is already `unref`ed calling`unref()` again will have no effect.

##### Returns

`this`

The socket itself.

##### Since

v0.9.1

##### Inherited from

```ts
tty.ReadStream.unref
```

#### ref()

```ts
ref(): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:239

Opposite of `unref()`, calling `ref()` on a previously `unref`ed socket will _not_ let the program exit if it's the only socket left (the default behavior).
If the socket is `ref`ed calling `ref` again will have no effect.

##### Returns

`this`

The socket itself.

##### Since

v0.9.1

##### Inherited from

```ts
tty.ReadStream.ref
```

#### end()

##### Call Signature

```ts
end(callback?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:356

Half-closes the socket. i.e., it sends a FIN packet. It is possible the
server will still send some data.

See `writable.end()` for further details.

###### Parameters

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

`callback?`

</td>
<td>

() => `void`

</td>
<td>

Optional callback for when the socket is finished.

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

The socket itself.

###### Since

v0.1.90

###### Inherited from

```ts
tty.ReadStream.end
```

##### Call Signature

```ts
end(buffer: string | Uint8Array<ArrayBufferLike>, callback?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:357

Half-closes the socket. i.e., it sends a FIN packet. It is possible the
server will still send some data.

See `writable.end()` for further details.

###### Parameters

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

`buffer`

</td>
<td>

`string` \| `Uint8Array`&lt;`ArrayBufferLike`&gt;

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`callback?`

</td>
<td>

() => `void`

</td>
<td>

Optional callback for when the socket is finished.

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

The socket itself.

###### Since

v0.1.90

###### Inherited from

```ts
tty.ReadStream.end
```

##### Call Signature

```ts
end(
   str: string | Uint8Array<ArrayBufferLike>, 
   encoding?: BufferEncoding, 
   callback?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:358

Half-closes the socket. i.e., it sends a FIN packet. It is possible the
server will still send some data.

See `writable.end()` for further details.

###### Parameters

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

`str`

</td>
<td>

`string` \| `Uint8Array`&lt;`ArrayBufferLike`&gt;

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
<td>

Only used when data is `string`.

</td>
</tr>
<tr>
<td>

`callback?`

</td>
<td>

() => `void`

</td>
<td>

Optional callback for when the socket is finished.

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

The socket itself.

###### Since

v0.1.90

###### Inherited from

```ts
tty.ReadStream.end
```

#### addListener()

##### Call Signature

```ts
addListener(event: string, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:374

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

###### Parameters

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

`event`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.addListener
```

##### Call Signature

```ts
addListener(event: "close", listener: (hadError: boolean) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:375

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

###### Parameters

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

`event`

</td>
<td>

`"close"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`hadError`: `boolean`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.addListener
```

##### Call Signature

```ts
addListener(event: "connect", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:376

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

###### Parameters

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

`event`

</td>
<td>

`"connect"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.addListener
```

##### Call Signature

```ts
addListener(event: "connectionAttempt", listener: (ip: string, port: number, family: number) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:377

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

###### Parameters

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

`event`

</td>
<td>

`"connectionAttempt"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`ip`: `string`, `port`: `number`, `family`: `number`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.addListener
```

##### Call Signature

```ts
addListener(event: "connectionAttemptFailed", listener: (ip: string, port: number, family: number) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:378

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

###### Parameters

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

`event`

</td>
<td>

`"connectionAttemptFailed"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`ip`: `string`, `port`: `number`, `family`: `number`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.addListener
```

##### Call Signature

```ts
addListener(event: "connectionAttemptTimeout", listener: (ip: string, port: number, family: number) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:382

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

###### Parameters

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

`event`

</td>
<td>

`"connectionAttemptTimeout"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`ip`: `string`, `port`: `number`, `family`: `number`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.addListener
```

##### Call Signature

```ts
addListener(event: "data", listener: (data: Buffer) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:386

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

###### Parameters

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

`event`

</td>
<td>

`"data"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`data`: `Buffer`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.addListener
```

##### Call Signature

```ts
addListener(event: "drain", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:387

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

###### Parameters

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

`event`

</td>
<td>

`"drain"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.addListener
```

##### Call Signature

```ts
addListener(event: "end", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:388

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

###### Parameters

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

`event`

</td>
<td>

`"end"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.addListener
```

##### Call Signature

```ts
addListener(event: "error", listener: (err: Error) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:389

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

###### Parameters

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

`event`

</td>
<td>

`"error"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`err`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.addListener
```

##### Call Signature

```ts
addListener(event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:390

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

###### Parameters

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

`event`

</td>
<td>

`"lookup"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`err`: `Error`, `address`: `string`, `family`: `string` \| `number`, `host`: `string`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.addListener
```

##### Call Signature

```ts
addListener(event: "ready", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:394

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

###### Parameters

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

`event`

</td>
<td>

`"ready"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.addListener
```

##### Call Signature

```ts
addListener(event: "timeout", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:395

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

###### Parameters

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

`event`

</td>
<td>

`"timeout"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.addListener
```

#### emit()

##### Call Signature

```ts
emit(event: string | symbol, ...args: any[]): boolean;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:396

###### Parameters

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

`event`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`any`[]

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

```ts
tty.ReadStream.emit
```

##### Call Signature

```ts
emit(event: "close", hadError: boolean): boolean;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:397

###### Parameters

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

`event`

</td>
<td>

`"close"`

</td>
</tr>
<tr>
<td>

`hadError`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

```ts
tty.ReadStream.emit
```

##### Call Signature

```ts
emit(event: "connect"): boolean;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:398

###### Parameters

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

`event`

</td>
<td>

`"connect"`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

```ts
tty.ReadStream.emit
```

##### Call Signature

```ts
emit(
   event: "connectionAttempt", 
   ip: string, 
   port: number, 
   family: number): boolean;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:399

###### Parameters

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

`event`

</td>
<td>

`"connectionAttempt"`

</td>
</tr>
<tr>
<td>

`ip`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`port`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`family`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

```ts
tty.ReadStream.emit
```

##### Call Signature

```ts
emit(
   event: "connectionAttemptFailed", 
   ip: string, 
   port: number, 
   family: number): boolean;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:400

###### Parameters

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

`event`

</td>
<td>

`"connectionAttemptFailed"`

</td>
</tr>
<tr>
<td>

`ip`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`port`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`family`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

```ts
tty.ReadStream.emit
```

##### Call Signature

```ts
emit(
   event: "connectionAttemptTimeout", 
   ip: string, 
   port: number, 
   family: number): boolean;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:401

###### Parameters

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

`event`

</td>
<td>

`"connectionAttemptTimeout"`

</td>
</tr>
<tr>
<td>

`ip`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`port`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`family`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

```ts
tty.ReadStream.emit
```

##### Call Signature

```ts
emit(event: "data", data: Buffer): boolean;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:402

###### Parameters

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

`event`

</td>
<td>

`"data"`

</td>
</tr>
<tr>
<td>

`data`

</td>
<td>

`Buffer`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

```ts
tty.ReadStream.emit
```

##### Call Signature

```ts
emit(event: "drain"): boolean;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:403

###### Parameters

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

`event`

</td>
<td>

`"drain"`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

```ts
tty.ReadStream.emit
```

##### Call Signature

```ts
emit(event: "end"): boolean;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:404

###### Parameters

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

`event`

</td>
<td>

`"end"`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

```ts
tty.ReadStream.emit
```

##### Call Signature

```ts
emit(event: "error", err: Error): boolean;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:405

###### Parameters

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

`event`

</td>
<td>

`"error"`

</td>
</tr>
<tr>
<td>

`err`

</td>
<td>

`Error`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

```ts
tty.ReadStream.emit
```

##### Call Signature

```ts
emit(
   event: "lookup", 
   err: Error, 
   address: string, 
   family: string | number, 
   host: string): boolean;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:406

###### Parameters

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

`event`

</td>
<td>

`"lookup"`

</td>
</tr>
<tr>
<td>

`err`

</td>
<td>

`Error`

</td>
</tr>
<tr>
<td>

`address`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`family`

</td>
<td>

`string` \| `number`

</td>
</tr>
<tr>
<td>

`host`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

```ts
tty.ReadStream.emit
```

##### Call Signature

```ts
emit(event: "ready"): boolean;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:407

###### Parameters

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

`event`

</td>
<td>

`"ready"`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

```ts
tty.ReadStream.emit
```

##### Call Signature

```ts
emit(event: "timeout"): boolean;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:408

###### Parameters

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

`event`

</td>
<td>

`"timeout"`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

```ts
tty.ReadStream.emit
```

#### on()

##### Call Signature

```ts
on(event: string, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:409

###### Parameters

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

`event`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.on
```

##### Call Signature

```ts
on(event: "close", listener: (hadError: boolean) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:410

###### Parameters

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

`event`

</td>
<td>

`"close"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`hadError`: `boolean`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.on
```

##### Call Signature

```ts
on(event: "connect", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:411

###### Parameters

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

`event`

</td>
<td>

`"connect"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.on
```

##### Call Signature

```ts
on(event: "connectionAttempt", listener: (ip: string, port: number, family: number) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:412

###### Parameters

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

`event`

</td>
<td>

`"connectionAttempt"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`ip`: `string`, `port`: `number`, `family`: `number`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.on
```

##### Call Signature

```ts
on(event: "connectionAttemptFailed", listener: (ip: string, port: number, family: number) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:413

###### Parameters

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

`event`

</td>
<td>

`"connectionAttemptFailed"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`ip`: `string`, `port`: `number`, `family`: `number`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.on
```

##### Call Signature

```ts
on(event: "connectionAttemptTimeout", listener: (ip: string, port: number, family: number) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:414

###### Parameters

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

`event`

</td>
<td>

`"connectionAttemptTimeout"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`ip`: `string`, `port`: `number`, `family`: `number`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.on
```

##### Call Signature

```ts
on(event: "data", listener: (data: Buffer) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:415

###### Parameters

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

`event`

</td>
<td>

`"data"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`data`: `Buffer`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.on
```

##### Call Signature

```ts
on(event: "drain", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:416

###### Parameters

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

`event`

</td>
<td>

`"drain"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.on
```

##### Call Signature

```ts
on(event: "end", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:417

###### Parameters

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

`event`

</td>
<td>

`"end"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.on
```

##### Call Signature

```ts
on(event: "error", listener: (err: Error) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:418

###### Parameters

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

`event`

</td>
<td>

`"error"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`err`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.on
```

##### Call Signature

```ts
on(event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:419

###### Parameters

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

`event`

</td>
<td>

`"lookup"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`err`: `Error`, `address`: `string`, `family`: `string` \| `number`, `host`: `string`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.on
```

##### Call Signature

```ts
on(event: "ready", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:423

###### Parameters

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

`event`

</td>
<td>

`"ready"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.on
```

##### Call Signature

```ts
on(event: "timeout", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:424

###### Parameters

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

`event`

</td>
<td>

`"timeout"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.on
```

#### once()

##### Call Signature

```ts
once(event: string, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:425

###### Parameters

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

`event`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.once
```

##### Call Signature

```ts
once(event: "close", listener: (hadError: boolean) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:426

###### Parameters

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

`event`

</td>
<td>

`"close"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`hadError`: `boolean`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.once
```

##### Call Signature

```ts
once(event: "connectionAttempt", listener: (ip: string, port: number, family: number) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:427

###### Parameters

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

`event`

</td>
<td>

`"connectionAttempt"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`ip`: `string`, `port`: `number`, `family`: `number`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.once
```

##### Call Signature

```ts
once(event: "connectionAttemptFailed", listener: (ip: string, port: number, family: number) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:428

###### Parameters

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

`event`

</td>
<td>

`"connectionAttemptFailed"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`ip`: `string`, `port`: `number`, `family`: `number`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.once
```

##### Call Signature

```ts
once(event: "connectionAttemptTimeout", listener: (ip: string, port: number, family: number) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:429

###### Parameters

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

`event`

</td>
<td>

`"connectionAttemptTimeout"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`ip`: `string`, `port`: `number`, `family`: `number`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.once
```

##### Call Signature

```ts
once(event: "connect", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:430

###### Parameters

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

`event`

</td>
<td>

`"connect"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.once
```

##### Call Signature

```ts
once(event: "data", listener: (data: Buffer) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:431

###### Parameters

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

`event`

</td>
<td>

`"data"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`data`: `Buffer`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.once
```

##### Call Signature

```ts
once(event: "drain", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:432

###### Parameters

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

`event`

</td>
<td>

`"drain"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.once
```

##### Call Signature

```ts
once(event: "end", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:433

###### Parameters

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

`event`

</td>
<td>

`"end"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.once
```

##### Call Signature

```ts
once(event: "error", listener: (err: Error) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:434

###### Parameters

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

`event`

</td>
<td>

`"error"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`err`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.once
```

##### Call Signature

```ts
once(event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:435

###### Parameters

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

`event`

</td>
<td>

`"lookup"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`err`: `Error`, `address`: `string`, `family`: `string` \| `number`, `host`: `string`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.once
```

##### Call Signature

```ts
once(event: "ready", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:439

###### Parameters

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

`event`

</td>
<td>

`"ready"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.once
```

##### Call Signature

```ts
once(event: "timeout", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:440

###### Parameters

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

`event`

</td>
<td>

`"timeout"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.once
```

#### prependListener()

##### Call Signature

```ts
prependListener(event: string, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:441

###### Parameters

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

`event`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependListener
```

##### Call Signature

```ts
prependListener(event: "close", listener: (hadError: boolean) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:442

###### Parameters

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

`event`

</td>
<td>

`"close"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`hadError`: `boolean`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependListener
```

##### Call Signature

```ts
prependListener(event: "connect", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:443

###### Parameters

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

`event`

</td>
<td>

`"connect"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependListener
```

##### Call Signature

```ts
prependListener(event: "connectionAttempt", listener: (ip: string, port: number, family: number) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:444

###### Parameters

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

`event`

</td>
<td>

`"connectionAttempt"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`ip`: `string`, `port`: `number`, `family`: `number`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependListener
```

##### Call Signature

```ts
prependListener(event: "connectionAttemptFailed", listener: (ip: string, port: number, family: number) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:445

###### Parameters

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

`event`

</td>
<td>

`"connectionAttemptFailed"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`ip`: `string`, `port`: `number`, `family`: `number`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependListener
```

##### Call Signature

```ts
prependListener(event: "connectionAttemptTimeout", listener: (ip: string, port: number, family: number) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:449

###### Parameters

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

`event`

</td>
<td>

`"connectionAttemptTimeout"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`ip`: `string`, `port`: `number`, `family`: `number`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependListener
```

##### Call Signature

```ts
prependListener(event: "data", listener: (data: Buffer) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:453

###### Parameters

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

`event`

</td>
<td>

`"data"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`data`: `Buffer`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependListener
```

##### Call Signature

```ts
prependListener(event: "drain", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:454

###### Parameters

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

`event`

</td>
<td>

`"drain"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependListener
```

##### Call Signature

```ts
prependListener(event: "end", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:455

###### Parameters

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

`event`

</td>
<td>

`"end"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependListener
```

##### Call Signature

```ts
prependListener(event: "error", listener: (err: Error) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:456

###### Parameters

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

`event`

</td>
<td>

`"error"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`err`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependListener
```

##### Call Signature

```ts
prependListener(event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:457

###### Parameters

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

`event`

</td>
<td>

`"lookup"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`err`: `Error`, `address`: `string`, `family`: `string` \| `number`, `host`: `string`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependListener
```

##### Call Signature

```ts
prependListener(event: "ready", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:461

###### Parameters

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

`event`

</td>
<td>

`"ready"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependListener
```

##### Call Signature

```ts
prependListener(event: "timeout", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:462

###### Parameters

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

`event`

</td>
<td>

`"timeout"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependListener
```

#### prependOnceListener()

##### Call Signature

```ts
prependOnceListener(event: string, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:463

###### Parameters

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

`event`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependOnceListener
```

##### Call Signature

```ts
prependOnceListener(event: "close", listener: (hadError: boolean) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:464

###### Parameters

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

`event`

</td>
<td>

`"close"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`hadError`: `boolean`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependOnceListener
```

##### Call Signature

```ts
prependOnceListener(event: "connect", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:465

###### Parameters

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

`event`

</td>
<td>

`"connect"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependOnceListener
```

##### Call Signature

```ts
prependOnceListener(event: "connectionAttempt", listener: (ip: string, port: number, family: number) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:466

###### Parameters

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

`event`

</td>
<td>

`"connectionAttempt"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`ip`: `string`, `port`: `number`, `family`: `number`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependOnceListener
```

##### Call Signature

```ts
prependOnceListener(event: "connectionAttemptFailed", listener: (ip: string, port: number, family: number) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:470

###### Parameters

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

`event`

</td>
<td>

`"connectionAttemptFailed"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`ip`: `string`, `port`: `number`, `family`: `number`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependOnceListener
```

##### Call Signature

```ts
prependOnceListener(event: "connectionAttemptTimeout", listener: (ip: string, port: number, family: number) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:474

###### Parameters

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

`event`

</td>
<td>

`"connectionAttemptTimeout"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`ip`: `string`, `port`: `number`, `family`: `number`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependOnceListener
```

##### Call Signature

```ts
prependOnceListener(event: "data", listener: (data: Buffer) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:478

###### Parameters

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

`event`

</td>
<td>

`"data"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`data`: `Buffer`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependOnceListener
```

##### Call Signature

```ts
prependOnceListener(event: "drain", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:479

###### Parameters

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

`event`

</td>
<td>

`"drain"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependOnceListener
```

##### Call Signature

```ts
prependOnceListener(event: "end", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:480

###### Parameters

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

`event`

</td>
<td>

`"end"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependOnceListener
```

##### Call Signature

```ts
prependOnceListener(event: "error", listener: (err: Error) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:481

###### Parameters

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

`event`

</td>
<td>

`"error"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`err`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependOnceListener
```

##### Call Signature

```ts
prependOnceListener(event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:482

###### Parameters

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

`event`

</td>
<td>

`"lookup"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`err`: `Error`, `address`: `string`, `family`: `string` \| `number`, `host`: `string`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependOnceListener
```

##### Call Signature

```ts
prependOnceListener(event: "ready", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:486

###### Parameters

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

`event`

</td>
<td>

`"ready"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependOnceListener
```

##### Call Signature

```ts
prependOnceListener(event: "timeout", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:487

###### Parameters

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

`event`

</td>
<td>

`"timeout"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.prependOnceListener
```

#### removeListener()

##### Call Signature

```ts
removeListener(event: "close", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1195

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"close"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.26

###### Inherited from

```ts
tty.ReadStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "data", listener: (chunk: any) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1196

###### Parameters

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

`event`

</td>
<td>

`"data"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`chunk`: `any`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "drain", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1197

###### Parameters

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

`event`

</td>
<td>

`"drain"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "end", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1198

###### Parameters

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

`event`

</td>
<td>

`"end"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "error", listener: (err: Error) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1199

###### Parameters

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

`event`

</td>
<td>

`"error"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`err`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "finish", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1200

###### Parameters

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

`event`

</td>
<td>

`"finish"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "pause", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1201

###### Parameters

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

`event`

</td>
<td>

`"pause"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "pipe", listener: (src: Readable) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1202

###### Parameters

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

`event`

</td>
<td>

`"pipe"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`src`: `Readable`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "readable", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1203

###### Parameters

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

`event`

</td>
<td>

`"readable"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "resume", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1204

###### Parameters

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

`event`

</td>
<td>

`"resume"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "unpipe", listener: (src: Readable) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1205

###### Parameters

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

`event`

</td>
<td>

`"unpipe"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`src`: `Readable`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.removeListener
```

##### Call Signature

```ts
removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1206

###### Parameters

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

`event`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.ReadStream.removeListener
```

#### pipe()

```ts
pipe<T>(destination: T, options?: object): T;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:29

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T` *extends* [`WritableStream`](#writablestream)

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`destination`

</td>
<td>

`T`

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `end`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.end?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

##### Returns

`T`

##### Inherited from

```ts
tty.ReadStream.pipe
```

#### compose()

```ts
compose<T>(stream: 
  | T
  | ComposeFnParam
  | Iterable<T, any, any>
  | AsyncIterable<T, any, any>, options?: object): T;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:35

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T` *extends* [`ReadableStream`](#readablestream)

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`stream`

</td>
<td>

 \| `T` \| `ComposeFnParam` \| `Iterable`&lt;`T`, `any`, `any`&gt; \| `AsyncIterable`&lt;`T`, `any`, `any`&gt;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `signal`: `AbortSignal`; \}

</td>
</tr>
<tr>
<td>

`options.signal?`

</td>
<td>

`AbortSignal`

</td>
</tr>
</tbody>
</table>

##### Returns

`T`

##### Inherited from

```ts
tty.ReadStream.compose
```

#### \[captureRejectionSymbol\]()?

```ts
optional [captureRejectionSymbol]<K>(
   error: Error, 
   event: string | symbol, ...
   args: AnyRest): void;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:136

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`error`

</td>
<td>

`Error`

</td>
</tr>
<tr>
<td>

`event`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`AnyRest`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

```ts
tty.ReadStream.[captureRejectionSymbol]
```

#### off()

```ts
off<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:747

Alias for `emitter.removeListener()`.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v10.0.0

##### Inherited from

```ts
tty.ReadStream.off
```

#### removeAllListeners()

```ts
removeAllListeners(eventName?: string | symbol): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:758

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

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

`eventName?`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

```ts
tty.ReadStream.removeAllListeners
```

#### setMaxListeners()

```ts
setMaxListeners(n: number): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:768

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

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

`n`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.3.5

##### Inherited from

```ts
tty.ReadStream.setMaxListeners
```

#### getMaxListeners()

```ts
getMaxListeners(): number;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:774

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to EventEmitter.defaultMaxListeners.

##### Returns

`number`

##### Since

v1.0.0

##### Inherited from

```ts
tty.ReadStream.getMaxListeners
```

#### listeners()

```ts
listeners<K>(eventName: string | symbol): Function[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:787

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`Function`[]

##### Since

v0.1.26

##### Inherited from

```ts
tty.ReadStream.listeners
```

#### rawListeners()

```ts
rawListeners<K>(eventName: string | symbol): Function[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:818

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`Function`[]

##### Since

v9.4.0

##### Inherited from

```ts
tty.ReadStream.rawListeners
```

#### listenerCount()

```ts
listenerCount<K>(eventName: string | symbol, listener?: Function): number;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:868

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event being listened for

</td>
</tr>
<tr>
<td>

`listener?`

</td>
<td>

`Function`

</td>
<td>

The event handler function

</td>
</tr>
</tbody>
</table>

##### Returns

`number`

##### Since

v3.2.0

##### Inherited from

```ts
tty.ReadStream.listenerCount
```

#### eventNames()

```ts
eventNames(): (string | symbol)[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:922

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

##### Returns

(`string` \| `symbol`)[]

##### Since

v6.0.0

##### Inherited from

```ts
tty.ReadStream.eventNames
```

#### \_construct()?

```ts
optional _construct(callback: (error?: Error) => void): void;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:168

##### Parameters

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

`callback`

</td>
<td>

(`error?`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

```ts
tty.ReadStream._construct
```

#### \_read()

```ts
_read(size: number): void;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:169

##### Parameters

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

`size`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

```ts
tty.ReadStream._read
```

#### read()

```ts
read(size?: number): any;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:247

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If
`size` bytes are not available to be read, `null` will be returned _unless_ the
stream has ended, in which case all of the data remaining in the internal buffer
will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the `size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](#read-4) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

##### Parameters

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

`size?`

</td>
<td>

`number`

</td>
<td>

Optional argument to specify how much data to read.

</td>
</tr>
</tbody>
</table>

##### Returns

`any`

##### Since

v0.9.4

##### Inherited from

```ts
tty.ReadStream.read
```

#### isPaused()

```ts
isPaused(): boolean;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:330

The `readable.isPaused()` method returns the current operating state of the `Readable`.
This is used primarily by the mechanism that underlies the `readable.pipe()` method.
In most typical cases, there will be no reason to use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

##### Returns

`boolean`

##### Since

v0.11.14

##### Inherited from

```ts
tty.ReadStream.isPaused
```

#### unpipe()

```ts
unpipe(destination?: WritableStream): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:357

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](#pipe-4) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
import fs from 'node:fs';
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt',
// but only for the first second.
readable.pipe(writable);
setTimeout(() => {
  console.log('Stop writing to file.txt.');
  readable.unpipe(writable);
  console.log('Manually close the file stream.');
  writable.end();
}, 1000);
```

##### Parameters

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

`destination?`

</td>
<td>

[`WritableStream`](#writablestream)

</td>
<td>

Optional specific stream to unpipe

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.9.4

##### Inherited from

```ts
tty.ReadStream.unpipe
```

#### unshift()

```ts
unshift(chunk: any, encoding?: BufferEncoding): void;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:423

Passing `chunk` as `null` signals the end of the stream (EOF) and behaves the
same as `readable.push(null)`, after which no more data can be written. The EOF
signal is put at the end of the buffer and any buffered data will still be
flushed.

The `readable.unshift()` method pushes a chunk of data back into the internal
buffer. This is useful in certain situations where a stream is being consumed by
code that needs to "un-consume" some amount of data that it has optimistically
pulled out of the source, so that the data can be passed on to some other party.

The `stream.unshift(chunk)` method cannot be called after the `'end'` event
has been emitted or a runtime error will be thrown.

Developers using `stream.unshift()` often should consider switching to
use of a `Transform` stream instead. See the `API for stream implementers` section for more information.

```js
// Pull off a header delimited by \n\n.
// Use unshift() if we get too much.
// Call the callback with (error, header, stream).
import { StringDecoder } from 'node:string_decoder';
function parseHeader(stream, callback) {
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      const str = decoder.write(chunk);
      if (str.includes('\n\n')) {
        // Found the header boundary.
        const split = str.split(/\n\n/);
        header += split.shift();
        const remaining = split.join('\n\n');
        const buf = Buffer.from(remaining, 'utf8');
        stream.removeListener('error', callback);
        // Remove the 'readable' listener before unshifting.
        stream.removeListener('readable', onReadable);
        if (buf.length)
          stream.unshift(buf);
        // Now the body of the message can be read from the stream.
        callback(null, header, stream);
        return;
      }
      // Still reading the header.
      header += str;
    }
  }
}
```

Unlike [push](#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [\_read](#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

##### Parameters

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

`chunk`

</td>
<td>

`any`

</td>
<td>

Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must
be a {string}, {Buffer}, {TypedArray}, {DataView} or `null`. For object mode streams, `chunk` may be any JavaScript value.

</td>
</tr>
<tr>
<td>

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
<td>

Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`.

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Since

v0.9.11

##### Inherited from

```ts
tty.ReadStream.unshift
```

#### wrap()

```ts
wrap(stream: ReadableStream): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:449

Prior to Node.js 0.10, streams did not implement the entire `node:stream` module API as it is currently defined. (See `Compatibility` for more
information.)

When using an older Node.js library that emits `'data'` events and has a [pause](#pause-4) method that is advisory only, the `readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
import { OldReader } from './old-api-module.js';
import { Readable } from 'node:stream';
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () => {
  myReader.read(); // etc.
});
```

##### Parameters

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

`stream`

</td>
<td>

[`ReadableStream`](#readablestream)

</td>
<td>

An "old style" readable stream

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.9.4

##### Inherited from

```ts
tty.ReadStream.wrap
```

#### push()

```ts
push(chunk: any, encoding?: BufferEncoding): boolean;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:450

##### Parameters

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

`chunk`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

##### Inherited from

```ts
tty.ReadStream.push
```

#### iterator()

```ts
iterator(options?: object): AsyncIterator<any>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:460

The iterator created by this method gives users the option to cancel the destruction
of the stream if the `for await...of` loop is exited by `return`, `break`, or `throw`,
or if the iterator should destroy the stream if the stream emitted an error during iteration.

##### Parameters

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

`options?`

</td>
<td>

\{ `destroyOnReturn`: `boolean`; \}

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.destroyOnReturn?`

</td>
<td>

`boolean`

</td>
<td>

When set to `false`, calling `return` on the async iterator,
or exiting a `for await...of` iteration using a `break`, `return`, or `throw` will not destroy the stream.
**Default: `true`**.

</td>
</tr>
</tbody>
</table>

##### Returns

[`AsyncIterator`](#asynciterator)&lt;`any`&gt;

##### Since

v16.3.0

##### Inherited from

```ts
tty.ReadStream.iterator
```

#### map()

```ts
map(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => any, options?: ArrayOptions): Readable;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:468

This method allows mapping over the stream. The *fn* function will be called for every chunk in the stream.
If the *fn* function returns a promise - that promise will be `await`ed before being passed to the result stream.

##### Parameters

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

`fn`

</td>
<td>

(`data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `any`

</td>
<td>

a function to map over every chunk in the stream. Async or not.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`ArrayOptions`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Readable`

a stream mapped with the function *fn*.

##### Since

v17.4.0, v16.14.0

##### Inherited from

```ts
tty.ReadStream.map
```

#### filter()

```ts
filter(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => boolean | Promise<boolean>, options?: ArrayOptions): Readable;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:477

This method allows filtering the stream. For each chunk in the stream the *fn* function will be called
and if it returns a truthy value, the chunk will be passed to the result stream.
If the *fn* function returns a promise - that promise will be `await`ed.

##### Parameters

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

`fn`

</td>
<td>

(`data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `boolean` \| `Promise`&lt;`boolean`&gt;

</td>
<td>

a function to filter chunks from the stream. Async or not.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`ArrayOptions`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Readable`

a stream filtered with the predicate *fn*.

##### Since

v17.4.0, v16.14.0

##### Inherited from

```ts
tty.ReadStream.filter
```

#### forEach()

```ts
forEach(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => void | Promise<void>, options?: ArrayOptions): Promise<void>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:496

This method allows iterating a stream. For each chunk in the stream the *fn* function will be called.
If the *fn* function returns a promise - that promise will be `await`ed.

This method is different from `for await...of` loops in that it can optionally process chunks concurrently.
In addition, a `forEach` iteration can only be stopped by having passed a `signal` option
and aborting the related AbortController while `for await...of` can be stopped with `break` or `return`.
In either case the stream will be destroyed.

This method is different from listening to the `'data'` event in that it uses the `readable` event
in the underlying machinary and can limit the number of concurrent *fn* calls.

##### Parameters

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

`fn`

</td>
<td>

(`data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `void` \| `Promise`&lt;`void`&gt;

</td>
<td>

a function to call on each chunk of the stream. Async or not.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`ArrayOptions`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Promise`&lt;`void`&gt;

a promise for when the stream has finished.

##### Since

v17.5.0

##### Inherited from

```ts
tty.ReadStream.forEach
```

#### toArray()

```ts
toArray(options?: Pick<ArrayOptions, "signal">): Promise<any[]>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:508

This method allows easily obtaining the contents of a stream.

As this method reads the entire stream into memory, it negates the benefits of streams. It's intended
for interoperability and convenience, not as the primary way to consume streams.

##### Parameters

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

`options?`

</td>
<td>

`Pick`&lt;`ArrayOptions`, `"signal"`&gt;

</td>
</tr>
</tbody>
</table>

##### Returns

`Promise`&lt;`any`[]&gt;

a promise containing an array with the contents of the stream.

##### Since

v17.5.0

##### Inherited from

```ts
tty.ReadStream.toArray
```

#### some()

```ts
some(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => boolean | Promise<boolean>, options?: ArrayOptions): Promise<boolean>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:518

This method is similar to `Array.prototype.some` and calls *fn* on each chunk in the stream
until the awaited return value is `true` (or any truthy value). Once an *fn* call on a chunk
`await`ed return value is truthy, the stream is destroyed and the promise is fulfilled with `true`.
If none of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `false`.

##### Parameters

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

`fn`

</td>
<td>

(`data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `boolean` \| `Promise`&lt;`boolean`&gt;

</td>
<td>

a function to call on each chunk of the stream. Async or not.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`ArrayOptions`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Promise`&lt;`boolean`&gt;

a promise evaluating to `true` if *fn* returned a truthy value for at least one of the chunks.

##### Since

v17.5.0

##### Inherited from

```ts
tty.ReadStream.some
```

#### find()

##### Call Signature

```ts
find<T>(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => data is T, options?: ArrayOptions): Promise<T>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:532

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

###### Type Parameters

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

###### Parameters

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

`fn`

</td>
<td>

(`data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `data is T`

</td>
<td>

a function to call on each chunk of the stream. Async or not.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`ArrayOptions`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`&lt;`T`&gt;

a promise evaluating to the first chunk for which *fn* evaluated with a truthy value,
or `undefined` if no element was found.

###### Since

v17.5.0

###### Inherited from

```ts
tty.ReadStream.find
```

##### Call Signature

```ts
find(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => boolean | Promise<boolean>, options?: ArrayOptions): Promise<any>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:536

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

###### Parameters

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

`fn`

</td>
<td>

(`data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `boolean` \| `Promise`&lt;`boolean`&gt;

</td>
<td>

a function to call on each chunk of the stream. Async or not.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`ArrayOptions`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`&lt;`any`&gt;

a promise evaluating to the first chunk for which *fn* evaluated with a truthy value,
or `undefined` if no element was found.

###### Since

v17.5.0

###### Inherited from

```ts
tty.ReadStream.find
```

#### every()

```ts
every(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => boolean | Promise<boolean>, options?: ArrayOptions): Promise<boolean>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:549

This method is similar to `Array.prototype.every` and calls *fn* on each chunk in the stream
to check if all awaited return values are truthy value for *fn*. Once an *fn* call on a chunk
`await`ed return value is falsy, the stream is destroyed and the promise is fulfilled with `false`.
If all of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `true`.

##### Parameters

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

`fn`

</td>
<td>

(`data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `boolean` \| `Promise`&lt;`boolean`&gt;

</td>
<td>

a function to call on each chunk of the stream. Async or not.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`ArrayOptions`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Promise`&lt;`boolean`&gt;

a promise evaluating to `true` if *fn* returned a truthy value for every one of the chunks.

##### Since

v17.5.0

##### Inherited from

```ts
tty.ReadStream.every
```

#### flatMap()

```ts
flatMap(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => any, options?: ArrayOptions): Readable;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:563

This method returns a new stream by applying the given callback to each chunk of the stream
and then flattening the result.

It is possible to return a stream or another iterable or async iterable from *fn* and the result streams
will be merged (flattened) into the returned stream.

##### Parameters

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

`fn`

</td>
<td>

(`data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `any`

</td>
<td>

a function to map over every chunk in the stream. May be async. May be a stream or generator.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`ArrayOptions`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Readable`

a stream flat-mapped with the function *fn*.

##### Since

v17.5.0

##### Inherited from

```ts
tty.ReadStream.flatMap
```

#### drop()

```ts
drop(limit: number, options?: Pick<ArrayOptions, "signal">): Readable;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:570

This method returns a new stream with the first *limit* chunks dropped from the start.

##### Parameters

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

`limit`

</td>
<td>

`number`

</td>
<td>

the number of chunks to drop from the readable.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`Pick`&lt;`ArrayOptions`, `"signal"`&gt;

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Readable`

a stream with *limit* chunks dropped from the start.

##### Since

v17.5.0

##### Inherited from

```ts
tty.ReadStream.drop
```

#### take()

```ts
take(limit: number, options?: Pick<ArrayOptions, "signal">): Readable;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:577

This method returns a new stream with the first *limit* chunks.

##### Parameters

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

`limit`

</td>
<td>

`number`

</td>
<td>

the number of chunks to take from the readable.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`Pick`&lt;`ArrayOptions`, `"signal"`&gt;

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Readable`

a stream with *limit* chunks taken.

##### Since

v17.5.0

##### Inherited from

```ts
tty.ReadStream.take
```

#### asIndexedPairs()

```ts
asIndexedPairs(options?: Pick<ArrayOptions, "signal">): Readable;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:584

This method returns a new stream with chunks of the underlying stream paired with a counter
in the form `[index, chunk]`. The first index value is `0` and it increases by 1 for each chunk produced.

##### Parameters

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

`options?`

</td>
<td>

`Pick`&lt;`ArrayOptions`, `"signal"`&gt;

</td>
</tr>
</tbody>
</table>

##### Returns

`Readable`

a stream of indexed pairs.

##### Since

v17.5.0

##### Inherited from

```ts
tty.ReadStream.asIndexedPairs
```

#### reduce()

##### Call Signature

```ts
reduce<T>(
   fn: (previous: any, data: any, options?: Pick<ArrayOptions, "signal">) => T, 
   initial?: undefined, 
   options?: Pick<ArrayOptions, "signal">): Promise<T>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:599

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

###### Type Parameters

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

###### Parameters

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

`fn`

</td>
<td>

(`previous`: `any`, `data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `T`

</td>
<td>

a reducer function to call over every chunk in the stream. Async or not.

</td>
</tr>
<tr>
<td>

`initial?`

</td>
<td>

`undefined`

</td>
<td>

the initial value to use in the reduction.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`Pick`&lt;`ArrayOptions`, `"signal"`&gt;

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`&lt;`T`&gt;

a promise for the final value of the reduction.

###### Since

v17.5.0

###### Inherited from

```ts
tty.ReadStream.reduce
```

##### Call Signature

```ts
reduce<T>(
   fn: (previous: T, data: any, options?: Pick<ArrayOptions, "signal">) => T, 
   initial: T, 
   options?: Pick<ArrayOptions, "signal">): Promise<T>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:604

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

###### Type Parameters

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

###### Parameters

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

`fn`

</td>
<td>

(`previous`: `T`, `data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `T`

</td>
<td>

a reducer function to call over every chunk in the stream. Async or not.

</td>
</tr>
<tr>
<td>

`initial`

</td>
<td>

`T`

</td>
<td>

the initial value to use in the reduction.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`Pick`&lt;`ArrayOptions`, `"signal"`&gt;

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`&lt;`T`&gt;

a promise for the final value of the reduction.

###### Since

v17.5.0

###### Inherited from

```ts
tty.ReadStream.reduce
```

#### \_destroy()

```ts
_destroy(error: Error, callback: (error?: Error) => void): void;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:609

##### Parameters

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

`error`

</td>
<td>

`Error`

</td>
</tr>
<tr>
<td>

`callback`

</td>
<td>

(`error?`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

```ts
tty.ReadStream._destroy
```

#### destroy()

```ts
destroy(error?: Error): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:621

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'` event (unless `emitClose` is set to `false`). After this call, the readable
stream will release any internal resources and subsequent calls to `push()` will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

##### Parameters

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

`error?`

</td>
<td>

`Error`

</td>
<td>

Error which will be passed as payload in `'error'` event

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v8.0.0

##### Inherited from

```ts
tty.ReadStream.destroy
```

#### \[asyncIterator\]()

```ts
asyncIterator: AsyncIterator<any>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:689

##### Returns

[`AsyncIterator`](#asynciterator)&lt;`any`&gt;

##### Inherited from

```ts
tty.ReadStream.[asyncIterator]
```

#### \[asyncDispose\]()

```ts
asyncDispose: Promise<void>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:694

Calls `readable.destroy()` with an `AbortError` and returns a promise that fulfills when the stream is finished.

##### Returns

`Promise`&lt;`void`&gt;

##### Since

v20.4.0

##### Inherited from

```ts
tty.ReadStream.[asyncDispose]
```

#### \_write()

```ts
_write(
   chunk: any, 
   encoding: BufferEncoding, 
   callback: (error?: Error) => void): void;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:795

##### Parameters

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

`chunk`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`encoding`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
</tr>
<tr>
<td>

`callback`

</td>
<td>

(`error?`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

```ts
tty.ReadStream._write
```

#### \_writev()?

```ts
optional _writev(chunks: object[], callback: (error?: Error) => void): void;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:796

##### Parameters

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

`chunks`

</td>
<td>

`object`[]

</td>
</tr>
<tr>
<td>

`callback`

</td>
<td>

(`error?`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

```ts
tty.ReadStream._writev
```

#### \_final()

```ts
_final(callback: (error?: Error) => void): void;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:805

##### Parameters

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

`callback`

</td>
<td>

(`error?`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

```ts
tty.ReadStream._final
```

#### setDefaultEncoding()

```ts
setDefaultEncoding(encoding: BufferEncoding): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:869

The `writable.setDefaultEncoding()` method sets the default `encoding` for a `Writable` stream.

##### Parameters

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

`encoding`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
<td>

The new default encoding

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.11.15

##### Inherited from

```ts
tty.ReadStream.setDefaultEncoding
```

#### cork()

```ts
cork(): void;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:909

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the [uncork](#uncork) or [end](#end-8) methods are called.

The primary intent of `writable.cork()` is to accommodate a situation in which
several small chunks are written to the stream in rapid succession. Instead of
immediately forwarding them to the underlying destination, `writable.cork()` buffers all the chunks until `writable.uncork()` is called, which will pass them
all to `writable._writev()`, if present. This prevents a head-of-line blocking
situation where data is being buffered while waiting for the first small chunk
to be processed. However, use of `writable.cork()` without implementing `writable._writev()` may have an adverse effect on throughput.

See also: `writable.uncork()`, `writable._writev()`.

##### Returns

`void`

##### Since

v0.11.2

##### Inherited from

```ts
tty.ReadStream.cork
```

#### uncork()

```ts
uncork(): void;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:943

The `writable.uncork()` method flushes all data buffered since [cork](#cork) was called.

When using `writable.cork()` and `writable.uncork()` to manage the buffering
of writes to a stream, defer calls to `writable.uncork()` using `process.nextTick()`. Doing so allows batching of all `writable.write()` calls that occur within a given Node.js event
loop phase.

```js
stream.cork();
stream.write('some ');
stream.write('data ');
process.nextTick(() => stream.uncork());
```

If the `writable.cork()` method is called multiple times on a stream, the
same number of calls to `writable.uncork()` must be called to flush the buffered
data.

```js
stream.cork();
stream.write('some ');
stream.cork();
stream.write('data ');
process.nextTick(() => {
  stream.uncork();
  // The data will not be flushed until uncork() is called a second time.
  stream.uncork();
});
```

See also: `writable.cork()`.

##### Returns

`void`

##### Since

v0.11.2

##### Inherited from

```ts
tty.ReadStream.uncork
```

***

## WriteStream

Defined in: docs-config/node\_modules/@types/node/process.d.ts:126

### Extends

- `WriteStream`

### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Description</th>
<th>Inherited from</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="columns"></a> `columns`

</td>
<td>

`public`

</td>
<td>

`number`

</td>
<td>

A `number` specifying the number of columns the TTY currently has. This property
is updated whenever the `'resize'` event is emitted.

**Since**

v0.7.7

</td>
<td>

```ts
tty.WriteStream.columns
```

</td>
<td>

docs-config/node\_modules/@types/node/tty.d.ts:192

</td>
</tr>
<tr>
<td>

<a id="rows"></a> `rows`

</td>
<td>

`public`

</td>
<td>

`number`

</td>
<td>

A `number` specifying the number of rows the TTY currently has. This property
is updated whenever the `'resize'` event is emitted.

**Since**

v0.7.7

</td>
<td>

```ts
tty.WriteStream.rows
```

</td>
<td>

docs-config/node\_modules/@types/node/tty.d.ts:198

</td>
</tr>
<tr>
<td>

<a id="istty-1"></a> `isTTY`

</td>
<td>

`public`

</td>
<td>

`boolean`

</td>
<td>

A `boolean` that is always `true`.

**Since**

v0.5.8

</td>
<td>

```ts
tty.WriteStream.isTTY
```

</td>
<td>

docs-config/node\_modules/@types/node/tty.d.ts:203

</td>
</tr>
<tr>
<td>

<a id="autoselectfamilyattemptedaddresses-1"></a> `autoSelectFamilyAttemptedAddresses`

</td>
<td>

`readonly`

</td>
<td>

`string`[]

</td>
<td>

This property is only present if the family autoselection algorithm is enabled in `socket.connect(options)`
and it is an array of the addresses that have been attempted.

Each address is a string in the form of `$IP:$PORT`.
If the connection was successful, then the last address is the one that the socket is currently connected to.

**Since**

v19.4.0

</td>
<td>

```ts
tty.WriteStream.autoSelectFamilyAttemptedAddresses
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:248

</td>
</tr>
<tr>
<td>

<a id="buffersize-1"></a> ~~`bufferSize`~~

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

This property shows the number of characters buffered for writing. The buffer
may contain strings whose length after encoding is not yet known. So this number
is only an approximation of the number of bytes in the buffer.

`net.Socket` has the property that `socket.write()` always works. This is to
help users get up and running quickly. The computer cannot always keep up
with the amount of data that is written to a socket. The network connection
simply might be too slow. Node.js will internally queue up the data written to a
socket and send it out over the wire when it is possible.

The consequence of this internal buffering is that memory may grow.
Users who experience large or growing `bufferSize` should attempt to
"throttle" the data flows in their program with `socket.pause()` and `socket.resume()`.

**Since**

v0.3.8

**Deprecated**

Since v14.6.0 - Use `writableLength` instead.

</td>
<td>

```ts
tty.WriteStream.bufferSize
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:266

</td>
</tr>
<tr>
<td>

<a id="bytesread-1"></a> `bytesRead`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

The amount of received bytes.

**Since**

v0.5.3

</td>
<td>

```ts
tty.WriteStream.bytesRead
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:271

</td>
</tr>
<tr>
<td>

<a id="byteswritten-1"></a> `bytesWritten`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

The amount of bytes sent.

**Since**

v0.5.3

</td>
<td>

```ts
tty.WriteStream.bytesWritten
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:276

</td>
</tr>
<tr>
<td>

<a id="connecting-1"></a> `connecting`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

If `true`, `socket.connect(options[, connectListener])` was
called and has not yet finished. It will stay `true` until the socket becomes
connected, then it is set to `false` and the `'connect'` event is emitted. Note
that the `socket.connect(options[, connectListener])` callback is a listener for the `'connect'` event.

**Since**

v6.1.0

</td>
<td>

```ts
tty.WriteStream.connecting
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:284

</td>
</tr>
<tr>
<td>

<a id="pending-1"></a> `pending`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

This is `true` if the socket is not connected yet, either because `.connect()`has not yet been called or because it is still in the process of connecting
(see `socket.connecting`).

**Since**

v11.2.0, v10.16.0

</td>
<td>

```ts
tty.WriteStream.pending
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:290

</td>
</tr>
<tr>
<td>

<a id="destroyed-1"></a> `destroyed`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

See `writable.destroyed` for further details.

</td>
<td>

```ts
tty.WriteStream.destroyed
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:294

</td>
</tr>
<tr>
<td>

<a id="localaddress-1"></a> `localAddress?`

</td>
<td>

`readonly`

</td>
<td>

`string`

</td>
<td>

The string representation of the local IP address the remote client is
connecting on. For example, in a server listening on `'0.0.0.0'`, if a client
connects on `'192.168.1.1'`, the value of `socket.localAddress` would be`'192.168.1.1'`.

**Since**

v0.9.6

</td>
<td>

```ts
tty.WriteStream.localAddress
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:301

</td>
</tr>
<tr>
<td>

<a id="localport-1"></a> `localPort?`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

The numeric representation of the local port. For example, `80` or `21`.

**Since**

v0.9.6

</td>
<td>

```ts
tty.WriteStream.localPort
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:306

</td>
</tr>
<tr>
<td>

<a id="localfamily-1"></a> `localFamily?`

</td>
<td>

`readonly`

</td>
<td>

`string`

</td>
<td>

The string representation of the local IP family. `'IPv4'` or `'IPv6'`.

**Since**

v18.8.0, v16.18.0

</td>
<td>

```ts
tty.WriteStream.localFamily
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:311

</td>
</tr>
<tr>
<td>

<a id="readystate-1"></a> `readyState`

</td>
<td>

`readonly`

</td>
<td>

`SocketReadyState`

</td>
<td>

This property represents the state of the connection as a string.

* If the stream is connecting `socket.readyState` is `opening`.
* If the stream is readable and writable, it is `open`.
* If the stream is readable and not writable, it is `readOnly`.
* If the stream is not readable and writable, it is `writeOnly`.

**Since**

v0.5.0

</td>
<td>

```ts
tty.WriteStream.readyState
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:321

</td>
</tr>
<tr>
<td>

<a id="remoteaddress-1"></a> `remoteAddress?`

</td>
<td>

`readonly`

</td>
<td>

`string`

</td>
<td>

The string representation of the remote IP address. For example,`'74.125.127.100'` or `'2001:4860:a005::68'`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

**Since**

v0.5.10

</td>
<td>

```ts
tty.WriteStream.remoteAddress
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:327

</td>
</tr>
<tr>
<td>

<a id="remotefamily-1"></a> `remoteFamily?`

</td>
<td>

`readonly`

</td>
<td>

`string`

</td>
<td>

The string representation of the remote IP family. `'IPv4'` or `'IPv6'`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

**Since**

v0.11.14

</td>
<td>

```ts
tty.WriteStream.remoteFamily
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:333

</td>
</tr>
<tr>
<td>

<a id="remoteport-1"></a> `remotePort?`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

The numeric representation of the remote port. For example, `80` or `21`. Value may be `undefined` if
the socket is destroyed (for example, if the client disconnected).

**Since**

v0.5.10

</td>
<td>

```ts
tty.WriteStream.remotePort
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:339

</td>
</tr>
<tr>
<td>

<a id="timeout-1"></a> `timeout?`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

The socket timeout in milliseconds as set by `socket.setTimeout()`.
It is `undefined` if a timeout has not been set.

**Since**

v10.7.0

</td>
<td>

```ts
tty.WriteStream.timeout
```

</td>
<td>

docs-config/node\_modules/@types/node/net.d.ts:345

</td>
</tr>
<tr>
<td>

<a id="allowhalfopen-1"></a> `allowHalfOpen`

</td>
<td>

`public`

</td>
<td>

`boolean`

</td>
<td>

If `false` then the stream will automatically end the writable side when the
readable side ends. Set initially by the `allowHalfOpen` constructor option,
which defaults to `true`.

This can be changed manually to change the half-open behavior of an existing
`Duplex` stream instance, but must be changed before the `'end'` event is emitted.

**Since**

v0.9.4

</td>
<td>

```ts
tty.WriteStream.allowHalfOpen
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:1049

</td>
</tr>
<tr>
<td>

<a id="readableaborted-1"></a> `readableAborted`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

**`Experimental`**

Returns whether the stream was destroyed or errored before emitting `'end'`.

**Since**

v16.8.0

</td>
<td>

```ts
tty.WriteStream.readableAborted
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:106

</td>
</tr>
<tr>
<td>

<a id="readable-3"></a> `readable`

</td>
<td>

`public`

</td>
<td>

`boolean`

</td>
<td>

Is `true` if it is safe to call [read](#read-4), which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

**Since**

v11.4.0

</td>
<td>

```ts
tty.WriteStream.readable
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:112

</td>
</tr>
<tr>
<td>

<a id="readabledidread-1"></a> `readableDidRead`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

**`Experimental`**

Returns whether `'data'` has been emitted.

**Since**

v16.7.0, v14.18.0

</td>
<td>

```ts
tty.WriteStream.readableDidRead
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:118

</td>
</tr>
<tr>
<td>

<a id="readableencoding-1"></a> `readableEncoding`

</td>
<td>

`readonly`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
<td>

Getter for the property `encoding` of a given `Readable` stream. The `encoding` property can be set using the [setEncoding](#setencoding-6) method.

**Since**

v12.7.0

</td>
<td>

```ts
tty.WriteStream.readableEncoding
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:123

</td>
</tr>
<tr>
<td>

<a id="readableended-1"></a> `readableEnded`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

Becomes `true` when [`'end'`](https://nodejs.org/docs/latest-v22.x/api/stream.html#event-end) event is emitted.

**Since**

v12.9.0

</td>
<td>

```ts
tty.WriteStream.readableEnded
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:128

</td>
</tr>
<tr>
<td>

<a id="readableflowing-1"></a> `readableFlowing`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

This property reflects the current state of a `Readable` stream as described
in the [Three states](https://nodejs.org/docs/latest-v22.x/api/stream.html#three-states) section.

**Since**

v9.4.0

</td>
<td>

```ts
tty.WriteStream.readableFlowing
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:134

</td>
</tr>
<tr>
<td>

<a id="readablehighwatermark-1"></a> `readableHighWaterMark`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

Returns the value of `highWaterMark` passed when creating this `Readable`.

**Since**

v9.3.0

</td>
<td>

```ts
tty.WriteStream.readableHighWaterMark
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:139

</td>
</tr>
<tr>
<td>

<a id="readablelength-1"></a> `readableLength`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

**Since**

v9.4.0

</td>
<td>

```ts
tty.WriteStream.readableLength
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:146

</td>
</tr>
<tr>
<td>

<a id="readableobjectmode-1"></a> `readableObjectMode`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

Getter for the property `objectMode` of a given `Readable` stream.

**Since**

v12.3.0

</td>
<td>

```ts
tty.WriteStream.readableObjectMode
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:151

</td>
</tr>
<tr>
<td>

<a id="closed-1"></a> `closed`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

Is `true` after `'close'` has been emitted.

**Since**

v18.0.0

</td>
<td>

```ts
tty.WriteStream.closed
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:161

</td>
</tr>
<tr>
<td>

<a id="errored-1"></a> `errored`

</td>
<td>

`readonly`

</td>
<td>

`Error`

</td>
<td>

Returns error if the stream has been destroyed with an error.

**Since**

v18.0.0

</td>
<td>

```ts
tty.WriteStream.errored
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:166

</td>
</tr>
<tr>
<td>

<a id="writable-3"></a> `writable`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored, or ended.

**Since**

v11.4.0

</td>
<td>

```ts
tty.WriteStream.writable
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:739

</td>
</tr>
<tr>
<td>

<a id="writableended-1"></a> `writableEnded`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

**Since**

v12.9.0

</td>
<td>

```ts
tty.WriteStream.writableEnded
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:745

</td>
</tr>
<tr>
<td>

<a id="writablefinished-1"></a> `writableFinished`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

Is set to `true` immediately before the `'finish'` event is emitted.

**Since**

v12.6.0

</td>
<td>

```ts
tty.WriteStream.writableFinished
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:750

</td>
</tr>
<tr>
<td>

<a id="writablehighwatermark-1"></a> `writableHighWaterMark`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

Return the value of `highWaterMark` passed when creating this `Writable`.

**Since**

v9.3.0

</td>
<td>

```ts
tty.WriteStream.writableHighWaterMark
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:755

</td>
</tr>
<tr>
<td>

<a id="writablelength-1"></a> `writableLength`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

This property contains the number of bytes (or objects) in the queue
ready to be written. The value provides introspection data regarding
the status of the `highWaterMark`.

**Since**

v9.4.0

</td>
<td>

```ts
tty.WriteStream.writableLength
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:762

</td>
</tr>
<tr>
<td>

<a id="writableobjectmode-1"></a> `writableObjectMode`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

Getter for the property `objectMode` of a given `Writable` stream.

**Since**

v12.3.0

</td>
<td>

```ts
tty.WriteStream.writableObjectMode
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:767

</td>
</tr>
<tr>
<td>

<a id="writablecorked-1"></a> `writableCorked`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

**Since**

v13.2.0, v12.16.0

</td>
<td>

```ts
tty.WriteStream.writableCorked
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:773

</td>
</tr>
<tr>
<td>

<a id="writableneeddrain-1"></a> `writableNeedDrain`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

Is `true` if the stream's buffer has been full and stream will emit `'drain'`.

**Since**

v15.2.0, v14.17.0

</td>
<td>

```ts
tty.WriteStream.writableNeedDrain
```

</td>
<td>

docs-config/node\_modules/@types/node/stream.d.ts:793

</td>
</tr>
</tbody>
</table>

### Methods

#### addListener()

##### Call Signature

```ts
addListener(event: string, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:85

events.EventEmitter
  1. close
  2. connect
  3. connectionAttempt
  4. connectionAttemptFailed
  5. connectionAttemptTimeout
  6. data
  7. drain
  8. end
  9. error
  10. lookup
  11. ready
  12. timeout

###### Parameters

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

`event`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.addListener
```

##### Call Signature

```ts
addListener(event: "resize", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:86

###### Parameters

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

`event`

</td>
<td>

`"resize"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.addListener
```

#### emit()

##### Call Signature

```ts
emit(event: string | symbol, ...args: any[]): boolean;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:87

###### Parameters

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

`event`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`any`[]

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

```ts
tty.WriteStream.emit
```

##### Call Signature

```ts
emit(event: "resize"): boolean;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:88

###### Parameters

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

`event`

</td>
<td>

`"resize"`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

```ts
tty.WriteStream.emit
```

#### on()

##### Call Signature

```ts
on(event: string, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:89

###### Parameters

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

`event`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.on
```

##### Call Signature

```ts
on(event: "resize", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:90

###### Parameters

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

`event`

</td>
<td>

`"resize"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.on
```

#### once()

##### Call Signature

```ts
once(event: string, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:91

###### Parameters

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

`event`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.once
```

##### Call Signature

```ts
once(event: "resize", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:92

###### Parameters

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

`event`

</td>
<td>

`"resize"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.once
```

#### prependListener()

##### Call Signature

```ts
prependListener(event: string, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:93

###### Parameters

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

`event`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.prependListener
```

##### Call Signature

```ts
prependListener(event: "resize", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:94

###### Parameters

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

`event`

</td>
<td>

`"resize"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.prependListener
```

#### prependOnceListener()

##### Call Signature

```ts
prependOnceListener(event: string, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:95

###### Parameters

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

`event`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.prependOnceListener
```

##### Call Signature

```ts
prependOnceListener(event: "resize", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:96

###### Parameters

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

`event`

</td>
<td>

`"resize"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.prependOnceListener
```

#### clearLine()

```ts
clearLine(dir: Direction, callback?: () => void): boolean;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:104

`writeStream.clearLine()` clears the current line of this `WriteStream` in a
direction identified by `dir`.

##### Parameters

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

`dir`

</td>
<td>

`Direction`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`callback?`

</td>
<td>

() => `void`

</td>
<td>

Invoked once the operation completes.

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

##### Since

v0.7.7

##### Inherited from

```ts
tty.WriteStream.clearLine
```

#### clearScreenDown()

```ts
clearScreenDown(callback?: () => void): boolean;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:112

`writeStream.clearScreenDown()` clears this `WriteStream` from the current
cursor down.

##### Parameters

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

`callback?`

</td>
<td>

() => `void`

</td>
<td>

Invoked once the operation completes.

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

##### Since

v0.7.7

##### Inherited from

```ts
tty.WriteStream.clearScreenDown
```

#### cursorTo()

##### Call Signature

```ts
cursorTo(
   x: number, 
   y?: number, 
   callback?: () => void): boolean;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:120

`writeStream.cursorTo()` moves this `WriteStream`'s cursor to the specified
position.

###### Parameters

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

`x`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`y?`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`callback?`

</td>
<td>

() => `void`

</td>
<td>

Invoked once the operation completes.

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

###### Since

v0.7.7

###### Inherited from

```ts
tty.WriteStream.cursorTo
```

##### Call Signature

```ts
cursorTo(x: number, callback: () => void): boolean;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:121

`writeStream.cursorTo()` moves this `WriteStream`'s cursor to the specified
position.

###### Parameters

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

`x`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`callback`

</td>
<td>

() => `void`

</td>
<td>

Invoked once the operation completes.

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

###### Since

v0.7.7

###### Inherited from

```ts
tty.WriteStream.cursorTo
```

#### moveCursor()

```ts
moveCursor(
   dx: number, 
   dy: number, 
   callback?: () => void): boolean;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:129

`writeStream.moveCursor()` moves this `WriteStream`'s cursor _relative_ to its
current position.

##### Parameters

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

`dx`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`dy`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`callback?`

</td>
<td>

() => `void`

</td>
<td>

Invoked once the operation completes.

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

##### Since

v0.7.7

##### Inherited from

```ts
tty.WriteStream.moveCursor
```

#### getColorDepth()

```ts
getColorDepth(env?: object): number;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:156

Returns:

* `1` for 2,
* `4` for 16,
* `8` for 256,
* `24` for 16,777,216 colors supported.

Use this to determine what colors the terminal supports. Due to the nature of
colors in terminals it is possible to either have false positives or false
negatives. It depends on process information and the environment variables that
may lie about what terminal is used.
It is possible to pass in an `env` object to simulate the usage of a specific
terminal. This can be useful to check how specific environment settings behave.

To enforce a specific color support, use one of the below environment settings.

* 2 colors: `FORCE_COLOR = 0` (Disables colors)
* 16 colors: `FORCE_COLOR = 1`
* 256 colors: `FORCE_COLOR = 2`
* 16,777,216 colors: `FORCE_COLOR = 3`

Disabling color support is also possible by using the `NO_COLOR` and `NODE_DISABLE_COLORS` environment variables.

##### Parameters

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

`env?`

</td>
<td>

`object`

</td>
<td>

An object containing the environment variables to check. This enables simulating the usage of a specific terminal.

</td>
</tr>
</tbody>
</table>

##### Returns

`number`

##### Since

v9.9.0

##### Inherited from

```ts
tty.WriteStream.getColorDepth
```

#### hasColors()

##### Call Signature

```ts
hasColors(count?: number): boolean;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:177

Returns `true` if the `writeStream` supports at least as many colors as provided
in `count`. Minimum support is 2 (black and white).

This has the same false positives and negatives as described in `writeStream.getColorDepth()`.

```js
process.stdout.hasColors();
// Returns true or false depending on if `stdout` supports at least 16 colors.
process.stdout.hasColors(256);
// Returns true or false depending on if `stdout` supports at least 256 colors.
process.stdout.hasColors({ TMUX: '1' });
// Returns true.
process.stdout.hasColors(2 ** 24, { TMUX: '1' });
// Returns false (the environment setting pretends to support 2 ** 8 colors).
```

###### Parameters

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

`count?`

</td>
<td>

`number`

</td>
<td>

The number of colors that are requested (minimum 2).

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Since

v11.13.0, v10.16.0

###### Inherited from

```ts
tty.WriteStream.hasColors
```

##### Call Signature

```ts
hasColors(env?: object): boolean;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:178

Returns `true` if the `writeStream` supports at least as many colors as provided
in `count`. Minimum support is 2 (black and white).

This has the same false positives and negatives as described in `writeStream.getColorDepth()`.

```js
process.stdout.hasColors();
// Returns true or false depending on if `stdout` supports at least 16 colors.
process.stdout.hasColors(256);
// Returns true or false depending on if `stdout` supports at least 256 colors.
process.stdout.hasColors({ TMUX: '1' });
// Returns true.
process.stdout.hasColors(2 ** 24, { TMUX: '1' });
// Returns false (the environment setting pretends to support 2 ** 8 colors).
```

###### Parameters

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

`env?`

</td>
<td>

`object`

</td>
<td>

An object containing the environment variables to check. This enables simulating the usage of a specific terminal.

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Since

v11.13.0, v10.16.0

###### Inherited from

```ts
tty.WriteStream.hasColors
```

##### Call Signature

```ts
hasColors(count: number, env?: object): boolean;
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:179

Returns `true` if the `writeStream` supports at least as many colors as provided
in `count`. Minimum support is 2 (black and white).

This has the same false positives and negatives as described in `writeStream.getColorDepth()`.

```js
process.stdout.hasColors();
// Returns true or false depending on if `stdout` supports at least 16 colors.
process.stdout.hasColors(256);
// Returns true or false depending on if `stdout` supports at least 256 colors.
process.stdout.hasColors({ TMUX: '1' });
// Returns true.
process.stdout.hasColors(2 ** 24, { TMUX: '1' });
// Returns false (the environment setting pretends to support 2 ** 8 colors).
```

###### Parameters

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

`count`

</td>
<td>

`number`

</td>
<td>

The number of colors that are requested (minimum 2).

</td>
</tr>
<tr>
<td>

`env?`

</td>
<td>

`object`

</td>
<td>

An object containing the environment variables to check. This enables simulating the usage of a specific terminal.

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Since

v11.13.0, v10.16.0

###### Inherited from

```ts
tty.WriteStream.hasColors
```

#### getWindowSize()

```ts
getWindowSize(): [number, number];
```

Defined in: docs-config/node\_modules/@types/node/tty.d.ts:186

`writeStream.getWindowSize()` returns the size of the TTY
corresponding to this `WriteStream`. The array is of the type `[numColumns, numRows]` where `numColumns` and `numRows` represent the number
of columns and rows in the corresponding TTY.

##### Returns

\[`number`, `number`\]

##### Since

v0.7.7

##### Inherited from

```ts
tty.WriteStream.getWindowSize
```

#### destroySoon()

```ts
destroySoon(): void;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:96

Destroys the socket after all data is written. If the `finish` event was already emitted the socket is destroyed immediately.
If the socket is still writable it implicitly calls `socket.end()`.

##### Returns

`void`

##### Since

v0.3.4

##### Inherited from

```ts
tty.WriteStream.destroySoon
```

#### write()

##### Call Signature

```ts
write(buffer: string | Uint8Array<ArrayBufferLike>, cb?: (err?: Error) => void): boolean;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:112

Sends data on the socket. The second parameter specifies the encoding in the
case of a string. It defaults to UTF8 encoding.

Returns `true` if the entire data was flushed successfully to the kernel
buffer. Returns `false` if all or part of the data was queued in user memory.`'drain'` will be emitted when the buffer is again free.

The optional `callback` parameter will be executed when the data is finally
written out, which may not be immediately.

See `Writable` stream `write()` method for more
information.

###### Parameters

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

`buffer`

</td>
<td>

`string` \| `Uint8Array`&lt;`ArrayBufferLike`&gt;

</td>
</tr>
<tr>
<td>

`cb?`

</td>
<td>

(`err?`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Since

v0.1.90

###### Inherited from

```ts
tty.WriteStream.write
```

##### Call Signature

```ts
write(
   str: string | Uint8Array<ArrayBufferLike>, 
   encoding?: BufferEncoding, 
   cb?: (err?: Error) => void): boolean;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:113

Sends data on the socket. The second parameter specifies the encoding in the
case of a string. It defaults to UTF8 encoding.

Returns `true` if the entire data was flushed successfully to the kernel
buffer. Returns `false` if all or part of the data was queued in user memory.`'drain'` will be emitted when the buffer is again free.

The optional `callback` parameter will be executed when the data is finally
written out, which may not be immediately.

See `Writable` stream `write()` method for more
information.

###### Parameters

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

`str`

</td>
<td>

`string` \| `Uint8Array`&lt;`ArrayBufferLike`&gt;

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
<td>

Only used when data is `string`.

</td>
</tr>
<tr>
<td>

`cb?`

</td>
<td>

(`err?`: `Error`) => `void`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Since

v0.1.90

###### Inherited from

```ts
tty.WriteStream.write
```

#### connect()

##### Call Signature

```ts
connect(options: SocketConnectOpts, connectionListener?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:133

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

###### Parameters

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

`options`

</td>
<td>

`SocketConnectOpts`

</td>
</tr>
<tr>
<td>

`connectionListener?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.connect
```

##### Call Signature

```ts
connect(
   port: number, 
   host: string, 
   connectionListener?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:134

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

###### Parameters

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

`port`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`host`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`connectionListener?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.connect
```

##### Call Signature

```ts
connect(port: number, connectionListener?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:135

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

###### Parameters

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

`port`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`connectionListener?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.connect
```

##### Call Signature

```ts
connect(path: string, connectionListener?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:136

Initiate a connection on a given socket.

Possible signatures:

* `socket.connect(options[, connectListener])`
* `socket.connect(path[, connectListener])` for `IPC` connections.
* `socket.connect(port[, host][, connectListener])` for TCP connections.
* Returns: `net.Socket` The socket itself.

This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
instead of a `'connect'` event, an `'error'` event will be emitted with
the error passed to the `'error'` listener.
The last parameter `connectListener`, if supplied, will be added as a listener
for the `'connect'` event **once**.

This function should only be used for reconnecting a socket after`'close'` has been emitted or otherwise it may lead to undefined
behavior.

###### Parameters

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

`connectionListener?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.connect
```

#### setEncoding()

```ts
setEncoding(encoding?: BufferEncoding): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:142

Set the encoding for the socket as a `Readable Stream`. See `readable.setEncoding()` for more information.

##### Parameters

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

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

The socket itself.

##### Since

v0.1.90

##### Inherited from

```ts
tty.WriteStream.setEncoding
```

#### pause()

```ts
pause(): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:148

Pauses the reading of data. That is, `'data'` events will not be emitted.
Useful to throttle back an upload.

##### Returns

`this`

The socket itself.

##### Inherited from

```ts
tty.WriteStream.pause
```

#### resetAndDestroy()

```ts
resetAndDestroy(): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:156

Close the TCP connection by sending an RST packet and destroy the stream.
If this TCP socket is in connecting status, it will send an RST packet and destroy this TCP socket once it is connected.
Otherwise, it will call `socket.destroy` with an `ERR_SOCKET_CLOSED` Error.
If this is not a TCP socket (for example, a pipe), calling this method will immediately throw an `ERR_INVALID_HANDLE_TYPE` Error.

##### Returns

`this`

##### Since

v18.3.0, v16.17.0

##### Inherited from

```ts
tty.WriteStream.resetAndDestroy
```

#### resume()

```ts
resume(): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:161

Resumes reading after a call to `socket.pause()`.

##### Returns

`this`

The socket itself.

##### Inherited from

```ts
tty.WriteStream.resume
```

#### setTimeout()

```ts
setTimeout(timeout: number, callback?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:183

Sets the socket to timeout after `timeout` milliseconds of inactivity on
the socket. By default `net.Socket` do not have a timeout.

When an idle timeout is triggered the socket will receive a `'timeout'` event but the connection will not be severed. The user must manually call `socket.end()` or `socket.destroy()` to
end the connection.

```js
socket.setTimeout(3000);
socket.on('timeout', () => {
  console.log('socket timeout');
  socket.end();
});
```

If `timeout` is 0, then the existing idle timeout is disabled.

The optional `callback` parameter will be added as a one-time listener for the `'timeout'` event.

##### Parameters

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

`timeout`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`callback?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

The socket itself.

##### Since

v0.1.90

##### Inherited from

```ts
tty.WriteStream.setTimeout
```

#### setNoDelay()

```ts
setNoDelay(noDelay?: boolean): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:199

Enable/disable the use of Nagle's algorithm.

When a TCP connection is created, it will have Nagle's algorithm enabled.

Nagle's algorithm delays data before it is sent via the network. It attempts
to optimize throughput at the expense of latency.

Passing `true` for `noDelay` or not passing an argument will disable Nagle's
algorithm for the socket. Passing `false` for `noDelay` will enable Nagle's
algorithm.

##### Parameters

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

`noDelay?`

</td>
<td>

`boolean`

</td>
<td>

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

The socket itself.

##### Since

v0.1.90

##### Inherited from

```ts
tty.WriteStream.setNoDelay
```

#### setKeepAlive()

```ts
setKeepAlive(enable?: boolean, initialDelay?: number): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:219

Enable/disable keep-alive functionality, and optionally set the initial
delay before the first keepalive probe is sent on an idle socket.

Set `initialDelay` (in milliseconds) to set the delay between the last
data packet received and the first keepalive probe. Setting `0` for`initialDelay` will leave the value unchanged from the default
(or previous) setting.

Enabling the keep-alive functionality will set the following socket options:

* `SO_KEEPALIVE=1`
* `TCP_KEEPIDLE=initialDelay`
* `TCP_KEEPCNT=10`
* `TCP_KEEPINTVL=1`

##### Parameters

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

`enable?`

</td>
<td>

`boolean`

</td>
<td>

</td>
</tr>
<tr>
<td>

`initialDelay?`

</td>
<td>

`number`

</td>
<td>

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

The socket itself.

##### Since

v0.1.92

##### Inherited from

```ts
tty.WriteStream.setKeepAlive
```

#### address()

```ts
address(): 
  | {
}
  | AddressInfo;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:225

Returns the bound `address`, the address `family` name and `port` of the
socket as reported by the operating system:`{ port: 12346, family: 'IPv4', address: '127.0.0.1' }`

##### Returns

  \| \{
\}
  \| `AddressInfo`

##### Since

v0.1.90

##### Inherited from

```ts
tty.WriteStream.address
```

#### unref()

```ts
unref(): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:232

Calling `unref()` on a socket will allow the program to exit if this is the only
active socket in the event system. If the socket is already `unref`ed calling`unref()` again will have no effect.

##### Returns

`this`

The socket itself.

##### Since

v0.9.1

##### Inherited from

```ts
tty.WriteStream.unref
```

#### ref()

```ts
ref(): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:239

Opposite of `unref()`, calling `ref()` on a previously `unref`ed socket will _not_ let the program exit if it's the only socket left (the default behavior).
If the socket is `ref`ed calling `ref` again will have no effect.

##### Returns

`this`

The socket itself.

##### Since

v0.9.1

##### Inherited from

```ts
tty.WriteStream.ref
```

#### end()

##### Call Signature

```ts
end(callback?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:356

Half-closes the socket. i.e., it sends a FIN packet. It is possible the
server will still send some data.

See `writable.end()` for further details.

###### Parameters

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

`callback?`

</td>
<td>

() => `void`

</td>
<td>

Optional callback for when the socket is finished.

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

The socket itself.

###### Since

v0.1.90

###### Inherited from

```ts
tty.WriteStream.end
```

##### Call Signature

```ts
end(buffer: string | Uint8Array<ArrayBufferLike>, callback?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:357

Half-closes the socket. i.e., it sends a FIN packet. It is possible the
server will still send some data.

See `writable.end()` for further details.

###### Parameters

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

`buffer`

</td>
<td>

`string` \| `Uint8Array`&lt;`ArrayBufferLike`&gt;

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`callback?`

</td>
<td>

() => `void`

</td>
<td>

Optional callback for when the socket is finished.

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

The socket itself.

###### Since

v0.1.90

###### Inherited from

```ts
tty.WriteStream.end
```

##### Call Signature

```ts
end(
   str: string | Uint8Array<ArrayBufferLike>, 
   encoding?: BufferEncoding, 
   callback?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/net.d.ts:358

Half-closes the socket. i.e., it sends a FIN packet. It is possible the
server will still send some data.

See `writable.end()` for further details.

###### Parameters

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

`str`

</td>
<td>

`string` \| `Uint8Array`&lt;`ArrayBufferLike`&gt;

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
<td>

Only used when data is `string`.

</td>
</tr>
<tr>
<td>

`callback?`

</td>
<td>

() => `void`

</td>
<td>

Optional callback for when the socket is finished.

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

The socket itself.

###### Since

v0.1.90

###### Inherited from

```ts
tty.WriteStream.end
```

#### removeListener()

##### Call Signature

```ts
removeListener(event: "close", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1195

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

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

`event`

</td>
<td>

`"close"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Since

v0.1.26

###### Inherited from

```ts
tty.WriteStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "data", listener: (chunk: any) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1196

###### Parameters

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

`event`

</td>
<td>

`"data"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`chunk`: `any`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "drain", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1197

###### Parameters

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

`event`

</td>
<td>

`"drain"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "end", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1198

###### Parameters

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

`event`

</td>
<td>

`"end"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "error", listener: (err: Error) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1199

###### Parameters

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

`event`

</td>
<td>

`"error"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`err`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "finish", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1200

###### Parameters

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

`event`

</td>
<td>

`"finish"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "pause", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1201

###### Parameters

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

`event`

</td>
<td>

`"pause"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "pipe", listener: (src: Readable) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1202

###### Parameters

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

`event`

</td>
<td>

`"pipe"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`src`: `Readable`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "readable", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1203

###### Parameters

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

`event`

</td>
<td>

`"readable"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "resume", listener: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1204

###### Parameters

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

`event`

</td>
<td>

`"resume"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.removeListener
```

##### Call Signature

```ts
removeListener(event: "unpipe", listener: (src: Readable) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1205

###### Parameters

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

`event`

</td>
<td>

`"unpipe"`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(`src`: `Readable`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.removeListener
```

##### Call Signature

```ts
removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:1206

###### Parameters

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

`event`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

```ts
tty.WriteStream.removeListener
```

#### pipe()

```ts
pipe<T>(destination: T, options?: object): T;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:29

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T` *extends* [`WritableStream`](#writablestream)

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`destination`

</td>
<td>

`T`

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `end`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.end?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

##### Returns

`T`

##### Inherited from

```ts
tty.WriteStream.pipe
```

#### compose()

```ts
compose<T>(stream: 
  | ComposeFnParam
  | T
  | Iterable<T, any, any>
  | AsyncIterable<T, any, any>, options?: object): T;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:35

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T` *extends* [`ReadableStream`](#readablestream)

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`stream`

</td>
<td>

 \| `ComposeFnParam` \| `T` \| `Iterable`&lt;`T`, `any`, `any`&gt; \| `AsyncIterable`&lt;`T`, `any`, `any`&gt;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `signal`: `AbortSignal`; \}

</td>
</tr>
<tr>
<td>

`options.signal?`

</td>
<td>

`AbortSignal`

</td>
</tr>
</tbody>
</table>

##### Returns

`T`

##### Inherited from

```ts
tty.WriteStream.compose
```

#### \[captureRejectionSymbol\]()?

```ts
optional [captureRejectionSymbol]<K>(
   error: Error, 
   event: string | symbol, ...
   args: AnyRest): void;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:136

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`error`

</td>
<td>

`Error`

</td>
</tr>
<tr>
<td>

`event`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`AnyRest`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

```ts
tty.WriteStream.[captureRejectionSymbol]
```

#### off()

```ts
off<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:747

Alias for `emitter.removeListener()`.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v10.0.0

##### Inherited from

```ts
tty.WriteStream.off
```

#### removeAllListeners()

```ts
removeAllListeners(eventName?: string | symbol): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:758

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

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

`eventName?`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

```ts
tty.WriteStream.removeAllListeners
```

#### setMaxListeners()

```ts
setMaxListeners(n: number): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:768

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

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

`n`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.3.5

##### Inherited from

```ts
tty.WriteStream.setMaxListeners
```

#### getMaxListeners()

```ts
getMaxListeners(): number;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:774

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to EventEmitter.defaultMaxListeners.

##### Returns

`number`

##### Since

v1.0.0

##### Inherited from

```ts
tty.WriteStream.getMaxListeners
```

#### listeners()

```ts
listeners<K>(eventName: string | symbol): Function[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:787

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`Function`[]

##### Since

v0.1.26

##### Inherited from

```ts
tty.WriteStream.listeners
```

#### rawListeners()

```ts
rawListeners<K>(eventName: string | symbol): Function[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:818

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`Function`[]

##### Since

v9.4.0

##### Inherited from

```ts
tty.WriteStream.rawListeners
```

#### listenerCount()

```ts
listenerCount<K>(eventName: string | symbol, listener?: Function): number;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:868

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event being listened for

</td>
</tr>
<tr>
<td>

`listener?`

</td>
<td>

`Function`

</td>
<td>

The event handler function

</td>
</tr>
</tbody>
</table>

##### Returns

`number`

##### Since

v3.2.0

##### Inherited from

```ts
tty.WriteStream.listenerCount
```

#### eventNames()

```ts
eventNames(): (string | symbol)[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:922

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

##### Returns

(`string` \| `symbol`)[]

##### Since

v6.0.0

##### Inherited from

```ts
tty.WriteStream.eventNames
```

#### \_construct()?

```ts
optional _construct(callback: (error?: Error) => void): void;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:168

##### Parameters

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

`callback`

</td>
<td>

(`error?`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

```ts
tty.WriteStream._construct
```

#### \_read()

```ts
_read(size: number): void;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:169

##### Parameters

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

`size`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

```ts
tty.WriteStream._read
```

#### read()

```ts
read(size?: number): any;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:247

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If
`size` bytes are not available to be read, `null` will be returned _unless_ the
stream has ended, in which case all of the data remaining in the internal buffer
will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the `size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](#read-4) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

##### Parameters

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

`size?`

</td>
<td>

`number`

</td>
<td>

Optional argument to specify how much data to read.

</td>
</tr>
</tbody>
</table>

##### Returns

`any`

##### Since

v0.9.4

##### Inherited from

```ts
tty.WriteStream.read
```

#### isPaused()

```ts
isPaused(): boolean;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:330

The `readable.isPaused()` method returns the current operating state of the `Readable`.
This is used primarily by the mechanism that underlies the `readable.pipe()` method.
In most typical cases, there will be no reason to use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

##### Returns

`boolean`

##### Since

v0.11.14

##### Inherited from

```ts
tty.WriteStream.isPaused
```

#### unpipe()

```ts
unpipe(destination?: WritableStream): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:357

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](#pipe-6) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
import fs from 'node:fs';
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt',
// but only for the first second.
readable.pipe(writable);
setTimeout(() => {
  console.log('Stop writing to file.txt.');
  readable.unpipe(writable);
  console.log('Manually close the file stream.');
  writable.end();
}, 1000);
```

##### Parameters

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

`destination?`

</td>
<td>

[`WritableStream`](#writablestream)

</td>
<td>

Optional specific stream to unpipe

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.9.4

##### Inherited from

```ts
tty.WriteStream.unpipe
```

#### unshift()

```ts
unshift(chunk: any, encoding?: BufferEncoding): void;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:423

Passing `chunk` as `null` signals the end of the stream (EOF) and behaves the
same as `readable.push(null)`, after which no more data can be written. The EOF
signal is put at the end of the buffer and any buffered data will still be
flushed.

The `readable.unshift()` method pushes a chunk of data back into the internal
buffer. This is useful in certain situations where a stream is being consumed by
code that needs to "un-consume" some amount of data that it has optimistically
pulled out of the source, so that the data can be passed on to some other party.

The `stream.unshift(chunk)` method cannot be called after the `'end'` event
has been emitted or a runtime error will be thrown.

Developers using `stream.unshift()` often should consider switching to
use of a `Transform` stream instead. See the `API for stream implementers` section for more information.

```js
// Pull off a header delimited by \n\n.
// Use unshift() if we get too much.
// Call the callback with (error, header, stream).
import { StringDecoder } from 'node:string_decoder';
function parseHeader(stream, callback) {
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      const str = decoder.write(chunk);
      if (str.includes('\n\n')) {
        // Found the header boundary.
        const split = str.split(/\n\n/);
        header += split.shift();
        const remaining = split.join('\n\n');
        const buf = Buffer.from(remaining, 'utf8');
        stream.removeListener('error', callback);
        // Remove the 'readable' listener before unshifting.
        stream.removeListener('readable', onReadable);
        if (buf.length)
          stream.unshift(buf);
        // Now the body of the message can be read from the stream.
        callback(null, header, stream);
        return;
      }
      // Still reading the header.
      header += str;
    }
  }
}
```

Unlike [push](#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [\_read](#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

##### Parameters

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

`chunk`

</td>
<td>

`any`

</td>
<td>

Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must
be a {string}, {Buffer}, {TypedArray}, {DataView} or `null`. For object mode streams, `chunk` may be any JavaScript value.

</td>
</tr>
<tr>
<td>

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
<td>

Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`.

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Since

v0.9.11

##### Inherited from

```ts
tty.WriteStream.unshift
```

#### wrap()

```ts
wrap(stream: ReadableStream): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:449

Prior to Node.js 0.10, streams did not implement the entire `node:stream` module API as it is currently defined. (See `Compatibility` for more
information.)

When using an older Node.js library that emits `'data'` events and has a [pause](#pause-6) method that is advisory only, the `readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
import { OldReader } from './old-api-module.js';
import { Readable } from 'node:stream';
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () => {
  myReader.read(); // etc.
});
```

##### Parameters

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

`stream`

</td>
<td>

[`ReadableStream`](#readablestream)

</td>
<td>

An "old style" readable stream

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.9.4

##### Inherited from

```ts
tty.WriteStream.wrap
```

#### push()

```ts
push(chunk: any, encoding?: BufferEncoding): boolean;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:450

##### Parameters

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

`chunk`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

##### Inherited from

```ts
tty.WriteStream.push
```

#### iterator()

```ts
iterator(options?: object): AsyncIterator<any>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:460

The iterator created by this method gives users the option to cancel the destruction
of the stream if the `for await...of` loop is exited by `return`, `break`, or `throw`,
or if the iterator should destroy the stream if the stream emitted an error during iteration.

##### Parameters

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

`options?`

</td>
<td>

\{ `destroyOnReturn`: `boolean`; \}

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`options.destroyOnReturn?`

</td>
<td>

`boolean`

</td>
<td>

When set to `false`, calling `return` on the async iterator,
or exiting a `for await...of` iteration using a `break`, `return`, or `throw` will not destroy the stream.
**Default: `true`**.

</td>
</tr>
</tbody>
</table>

##### Returns

[`AsyncIterator`](#asynciterator)&lt;`any`&gt;

##### Since

v16.3.0

##### Inherited from

```ts
tty.WriteStream.iterator
```

#### map()

```ts
map(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => any, options?: ArrayOptions): Readable;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:468

This method allows mapping over the stream. The *fn* function will be called for every chunk in the stream.
If the *fn* function returns a promise - that promise will be `await`ed before being passed to the result stream.

##### Parameters

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

`fn`

</td>
<td>

(`data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `any`

</td>
<td>

a function to map over every chunk in the stream. Async or not.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`ArrayOptions`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Readable`

a stream mapped with the function *fn*.

##### Since

v17.4.0, v16.14.0

##### Inherited from

```ts
tty.WriteStream.map
```

#### filter()

```ts
filter(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => boolean | Promise<boolean>, options?: ArrayOptions): Readable;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:477

This method allows filtering the stream. For each chunk in the stream the *fn* function will be called
and if it returns a truthy value, the chunk will be passed to the result stream.
If the *fn* function returns a promise - that promise will be `await`ed.

##### Parameters

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

`fn`

</td>
<td>

(`data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `boolean` \| `Promise`&lt;`boolean`&gt;

</td>
<td>

a function to filter chunks from the stream. Async or not.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`ArrayOptions`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Readable`

a stream filtered with the predicate *fn*.

##### Since

v17.4.0, v16.14.0

##### Inherited from

```ts
tty.WriteStream.filter
```

#### forEach()

```ts
forEach(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => void | Promise<void>, options?: ArrayOptions): Promise<void>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:496

This method allows iterating a stream. For each chunk in the stream the *fn* function will be called.
If the *fn* function returns a promise - that promise will be `await`ed.

This method is different from `for await...of` loops in that it can optionally process chunks concurrently.
In addition, a `forEach` iteration can only be stopped by having passed a `signal` option
and aborting the related AbortController while `for await...of` can be stopped with `break` or `return`.
In either case the stream will be destroyed.

This method is different from listening to the `'data'` event in that it uses the `readable` event
in the underlying machinary and can limit the number of concurrent *fn* calls.

##### Parameters

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

`fn`

</td>
<td>

(`data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `void` \| `Promise`&lt;`void`&gt;

</td>
<td>

a function to call on each chunk of the stream. Async or not.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`ArrayOptions`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Promise`&lt;`void`&gt;

a promise for when the stream has finished.

##### Since

v17.5.0

##### Inherited from

```ts
tty.WriteStream.forEach
```

#### toArray()

```ts
toArray(options?: Pick<ArrayOptions, "signal">): Promise<any[]>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:508

This method allows easily obtaining the contents of a stream.

As this method reads the entire stream into memory, it negates the benefits of streams. It's intended
for interoperability and convenience, not as the primary way to consume streams.

##### Parameters

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

`options?`

</td>
<td>

`Pick`&lt;`ArrayOptions`, `"signal"`&gt;

</td>
</tr>
</tbody>
</table>

##### Returns

`Promise`&lt;`any`[]&gt;

a promise containing an array with the contents of the stream.

##### Since

v17.5.0

##### Inherited from

```ts
tty.WriteStream.toArray
```

#### some()

```ts
some(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => boolean | Promise<boolean>, options?: ArrayOptions): Promise<boolean>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:518

This method is similar to `Array.prototype.some` and calls *fn* on each chunk in the stream
until the awaited return value is `true` (or any truthy value). Once an *fn* call on a chunk
`await`ed return value is truthy, the stream is destroyed and the promise is fulfilled with `true`.
If none of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `false`.

##### Parameters

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

`fn`

</td>
<td>

(`data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `boolean` \| `Promise`&lt;`boolean`&gt;

</td>
<td>

a function to call on each chunk of the stream. Async or not.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`ArrayOptions`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Promise`&lt;`boolean`&gt;

a promise evaluating to `true` if *fn* returned a truthy value for at least one of the chunks.

##### Since

v17.5.0

##### Inherited from

```ts
tty.WriteStream.some
```

#### find()

##### Call Signature

```ts
find<T>(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => data is T, options?: ArrayOptions): Promise<T>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:532

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

###### Type Parameters

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

###### Parameters

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

`fn`

</td>
<td>

(`data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `data is T`

</td>
<td>

a function to call on each chunk of the stream. Async or not.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`ArrayOptions`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`&lt;`T`&gt;

a promise evaluating to the first chunk for which *fn* evaluated with a truthy value,
or `undefined` if no element was found.

###### Since

v17.5.0

###### Inherited from

```ts
tty.WriteStream.find
```

##### Call Signature

```ts
find(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => boolean | Promise<boolean>, options?: ArrayOptions): Promise<any>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:536

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

###### Parameters

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

`fn`

</td>
<td>

(`data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `boolean` \| `Promise`&lt;`boolean`&gt;

</td>
<td>

a function to call on each chunk of the stream. Async or not.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`ArrayOptions`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`&lt;`any`&gt;

a promise evaluating to the first chunk for which *fn* evaluated with a truthy value,
or `undefined` if no element was found.

###### Since

v17.5.0

###### Inherited from

```ts
tty.WriteStream.find
```

#### every()

```ts
every(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => boolean | Promise<boolean>, options?: ArrayOptions): Promise<boolean>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:549

This method is similar to `Array.prototype.every` and calls *fn* on each chunk in the stream
to check if all awaited return values are truthy value for *fn*. Once an *fn* call on a chunk
`await`ed return value is falsy, the stream is destroyed and the promise is fulfilled with `false`.
If all of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `true`.

##### Parameters

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

`fn`

</td>
<td>

(`data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `boolean` \| `Promise`&lt;`boolean`&gt;

</td>
<td>

a function to call on each chunk of the stream. Async or not.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`ArrayOptions`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Promise`&lt;`boolean`&gt;

a promise evaluating to `true` if *fn* returned a truthy value for every one of the chunks.

##### Since

v17.5.0

##### Inherited from

```ts
tty.WriteStream.every
```

#### flatMap()

```ts
flatMap(fn: (data: any, options?: Pick<ArrayOptions, "signal">) => any, options?: ArrayOptions): Readable;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:563

This method returns a new stream by applying the given callback to each chunk of the stream
and then flattening the result.

It is possible to return a stream or another iterable or async iterable from *fn* and the result streams
will be merged (flattened) into the returned stream.

##### Parameters

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

`fn`

</td>
<td>

(`data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `any`

</td>
<td>

a function to map over every chunk in the stream. May be async. May be a stream or generator.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`ArrayOptions`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Readable`

a stream flat-mapped with the function *fn*.

##### Since

v17.5.0

##### Inherited from

```ts
tty.WriteStream.flatMap
```

#### drop()

```ts
drop(limit: number, options?: Pick<ArrayOptions, "signal">): Readable;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:570

This method returns a new stream with the first *limit* chunks dropped from the start.

##### Parameters

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

`limit`

</td>
<td>

`number`

</td>
<td>

the number of chunks to drop from the readable.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`Pick`&lt;`ArrayOptions`, `"signal"`&gt;

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Readable`

a stream with *limit* chunks dropped from the start.

##### Since

v17.5.0

##### Inherited from

```ts
tty.WriteStream.drop
```

#### take()

```ts
take(limit: number, options?: Pick<ArrayOptions, "signal">): Readable;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:577

This method returns a new stream with the first *limit* chunks.

##### Parameters

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

`limit`

</td>
<td>

`number`

</td>
<td>

the number of chunks to take from the readable.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`Pick`&lt;`ArrayOptions`, `"signal"`&gt;

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

##### Returns

`Readable`

a stream with *limit* chunks taken.

##### Since

v17.5.0

##### Inherited from

```ts
tty.WriteStream.take
```

#### asIndexedPairs()

```ts
asIndexedPairs(options?: Pick<ArrayOptions, "signal">): Readable;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:584

This method returns a new stream with chunks of the underlying stream paired with a counter
in the form `[index, chunk]`. The first index value is `0` and it increases by 1 for each chunk produced.

##### Parameters

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

`options?`

</td>
<td>

`Pick`&lt;`ArrayOptions`, `"signal"`&gt;

</td>
</tr>
</tbody>
</table>

##### Returns

`Readable`

a stream of indexed pairs.

##### Since

v17.5.0

##### Inherited from

```ts
tty.WriteStream.asIndexedPairs
```

#### reduce()

##### Call Signature

```ts
reduce<T>(
   fn: (previous: any, data: any, options?: Pick<ArrayOptions, "signal">) => T, 
   initial?: undefined, 
   options?: Pick<ArrayOptions, "signal">): Promise<T>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:599

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

###### Type Parameters

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

###### Parameters

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

`fn`

</td>
<td>

(`previous`: `any`, `data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `T`

</td>
<td>

a reducer function to call over every chunk in the stream. Async or not.

</td>
</tr>
<tr>
<td>

`initial?`

</td>
<td>

`undefined`

</td>
<td>

the initial value to use in the reduction.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`Pick`&lt;`ArrayOptions`, `"signal"`&gt;

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`&lt;`T`&gt;

a promise for the final value of the reduction.

###### Since

v17.5.0

###### Inherited from

```ts
tty.WriteStream.reduce
```

##### Call Signature

```ts
reduce<T>(
   fn: (previous: T, data: any, options?: Pick<ArrayOptions, "signal">) => T, 
   initial: T, 
   options?: Pick<ArrayOptions, "signal">): Promise<T>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:604

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

###### Type Parameters

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

###### Parameters

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

`fn`

</td>
<td>

(`previous`: `T`, `data`: `any`, `options?`: `Pick`&lt;`ArrayOptions`, `"signal"`&gt;) => `T`

</td>
<td>

a reducer function to call over every chunk in the stream. Async or not.

</td>
</tr>
<tr>
<td>

`initial`

</td>
<td>

`T`

</td>
<td>

the initial value to use in the reduction.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`Pick`&lt;`ArrayOptions`, `"signal"`&gt;

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`&lt;`T`&gt;

a promise for the final value of the reduction.

###### Since

v17.5.0

###### Inherited from

```ts
tty.WriteStream.reduce
```

#### \_destroy()

```ts
_destroy(error: Error, callback: (error?: Error) => void): void;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:609

##### Parameters

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

`error`

</td>
<td>

`Error`

</td>
</tr>
<tr>
<td>

`callback`

</td>
<td>

(`error?`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

```ts
tty.WriteStream._destroy
```

#### destroy()

```ts
destroy(error?: Error): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:621

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'` event (unless `emitClose` is set to `false`). After this call, the readable
stream will release any internal resources and subsequent calls to `push()` will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

##### Parameters

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

`error?`

</td>
<td>

`Error`

</td>
<td>

Error which will be passed as payload in `'error'` event

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v8.0.0

##### Inherited from

```ts
tty.WriteStream.destroy
```

#### \[asyncIterator\]()

```ts
asyncIterator: AsyncIterator<any>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:689

##### Returns

[`AsyncIterator`](#asynciterator)&lt;`any`&gt;

##### Inherited from

```ts
tty.WriteStream.[asyncIterator]
```

#### \[asyncDispose\]()

```ts
asyncDispose: Promise<void>;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:694

Calls `readable.destroy()` with an `AbortError` and returns a promise that fulfills when the stream is finished.

##### Returns

`Promise`&lt;`void`&gt;

##### Since

v20.4.0

##### Inherited from

```ts
tty.WriteStream.[asyncDispose]
```

#### \_write()

```ts
_write(
   chunk: any, 
   encoding: BufferEncoding, 
   callback: (error?: Error) => void): void;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:795

##### Parameters

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

`chunk`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`encoding`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
</tr>
<tr>
<td>

`callback`

</td>
<td>

(`error?`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

```ts
tty.WriteStream._write
```

#### \_writev()?

```ts
optional _writev(chunks: object[], callback: (error?: Error) => void): void;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:796

##### Parameters

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

`chunks`

</td>
<td>

`object`[]

</td>
</tr>
<tr>
<td>

`callback`

</td>
<td>

(`error?`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

```ts
tty.WriteStream._writev
```

#### \_final()

```ts
_final(callback: (error?: Error) => void): void;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:805

##### Parameters

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

`callback`

</td>
<td>

(`error?`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

```ts
tty.WriteStream._final
```

#### setDefaultEncoding()

```ts
setDefaultEncoding(encoding: BufferEncoding): this;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:869

The `writable.setDefaultEncoding()` method sets the default `encoding` for a `Writable` stream.

##### Parameters

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

`encoding`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
<td>

The new default encoding

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.11.15

##### Inherited from

```ts
tty.WriteStream.setDefaultEncoding
```

#### cork()

```ts
cork(): void;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:909

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the [uncork](#uncork) or [end](#end-12) methods are called.

The primary intent of `writable.cork()` is to accommodate a situation in which
several small chunks are written to the stream in rapid succession. Instead of
immediately forwarding them to the underlying destination, `writable.cork()` buffers all the chunks until `writable.uncork()` is called, which will pass them
all to `writable._writev()`, if present. This prevents a head-of-line blocking
situation where data is being buffered while waiting for the first small chunk
to be processed. However, use of `writable.cork()` without implementing `writable._writev()` may have an adverse effect on throughput.

See also: `writable.uncork()`, `writable._writev()`.

##### Returns

`void`

##### Since

v0.11.2

##### Inherited from

```ts
tty.WriteStream.cork
```

#### uncork()

```ts
uncork(): void;
```

Defined in: docs-config/node\_modules/@types/node/stream.d.ts:943

The `writable.uncork()` method flushes all data buffered since [cork](#cork) was called.

When using `writable.cork()` and `writable.uncork()` to manage the buffering
of writes to a stream, defer calls to `writable.uncork()` using `process.nextTick()`. Doing so allows batching of all `writable.write()` calls that occur within a given Node.js event
loop phase.

```js
stream.cork();
stream.write('some ');
stream.write('data ');
process.nextTick(() => stream.uncork());
```

If the `writable.cork()` method is called multiple times on a stream, the
same number of calls to `writable.uncork()` must be called to flush the buffered
data.

```js
stream.cork();
stream.write('some ');
stream.cork();
stream.write('data ');
process.nextTick(() => {
  stream.uncork();
  // The data will not be flushed until uncork() is called a second time.
  stream.uncork();
});
```

See also: `writable.cork()`.

##### Returns

`void`

##### Since

v0.11.2

##### Inherited from

```ts
tty.WriteStream.uncork
```

***

## MemoryUsageFn()

Defined in: docs-config/node\_modules/@types/node/process.d.ts:127

```ts
MemoryUsageFn(): MemoryUsage;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:132

The `process.memoryUsage()` method iterate over each page to gather informations about memory
usage which can be slow depending on the program memory allocations.

### Returns

[`MemoryUsage`](#memoryusage-1)

### Methods

#### rss()

```ts
rss(): number;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:136

method returns an integer representing the Resident Set Size (RSS) in bytes.

##### Returns

`number`

***

## MemoryUsage

Defined in: docs-config/node\_modules/@types/node/process.d.ts:138

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

<a id="rss-2"></a> `rss`

</td>
<td>

`number`

</td>
<td>

Resident Set Size, is the amount of space occupied in the main memory device (that is a subset of the total allocated memory) for the
process, including all C++ and JavaScript objects and code.

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:143

</td>
</tr>
<tr>
<td>

<a id="heaptotal"></a> `heapTotal`

</td>
<td>

`number`

</td>
<td>

Refers to V8's memory usage.

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:147

</td>
</tr>
<tr>
<td>

<a id="heapused"></a> `heapUsed`

</td>
<td>

`number`

</td>
<td>

Refers to V8's memory usage.

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:151

</td>
</tr>
<tr>
<td>

<a id="external"></a> `external`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:152

</td>
</tr>
<tr>
<td>

<a id="arraybuffers"></a> `arrayBuffers`

</td>
<td>

`number`

</td>
<td>

Refers to memory allocated for `ArrayBuffer`s and `SharedArrayBuffer`s, including all Node.js Buffers. This is also included
in the external value. When Node.js is used as an embedded library, this value may be `0` because allocations for `ArrayBuffer`s
may not be tracked in that case.

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:158

</td>
</tr>
</tbody>
</table>

***

## CpuUsage

Defined in: docs-config/node\_modules/@types/node/process.d.ts:160

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

<a id="user"></a> `user`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:161

</td>
</tr>
<tr>
<td>

<a id="system"></a> `system`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:162

</td>
</tr>
</tbody>
</table>

***

## ProcessRelease

Defined in: docs-config/node\_modules/@types/node/process.d.ts:164

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

<a id="name-1"></a> `name`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:165

</td>
</tr>
<tr>
<td>

<a id="sourceurl"></a> `sourceUrl?`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:166

</td>
</tr>
<tr>
<td>

<a id="headersurl"></a> `headersUrl?`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:167

</td>
</tr>
<tr>
<td>

<a id="liburl"></a> `libUrl?`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:168

</td>
</tr>
<tr>
<td>

<a id="lts"></a> `lts?`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:169

</td>
</tr>
</tbody>
</table>

***

## ProcessFeatures

Defined in: docs-config/node\_modules/@types/node/process.d.ts:171

### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="cached_builtins"></a> `cached_builtins`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

A boolean value that is `true` if the current Node.js build is caching builtin modules.

**Since**

v12.0.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:176

</td>
</tr>
<tr>
<td>

<a id="debug"></a> `debug`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

A boolean value that is `true` if the current Node.js build is a debug build.

**Since**

v0.5.5

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:181

</td>
</tr>
<tr>
<td>

<a id="inspector"></a> `inspector`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

A boolean value that is `true` if the current Node.js build includes the inspector.

**Since**

v11.10.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:186

</td>
</tr>
<tr>
<td>

<a id="ipv6"></a> ~~`ipv6`~~

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

A boolean value that is `true` if the current Node.js build includes support for IPv6.

Since all Node.js builds have IPv6 support, this value is always `true`.

**Since**

v0.5.3

**Deprecated**

This property is always true, and any checks based on it are redundant.

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:194

</td>
</tr>
<tr>
<td>

<a id="require_module"></a> `require_module`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

A boolean value that is `true` if the current Node.js build supports
[loading ECMAScript modules using `require()`](https://nodejs.org/docs/latest-v22.x/api/modules.md#loading-ecmascript-modules-using-require).

**Since**

v22.10.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:200

</td>
</tr>
<tr>
<td>

<a id="tls"></a> `tls`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

A boolean value that is `true` if the current Node.js build includes support for TLS.

**Since**

v0.5.3

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:205

</td>
</tr>
<tr>
<td>

<a id="tls_alpn"></a> ~~`tls_alpn`~~

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

A boolean value that is `true` if the current Node.js build includes support for ALPN in TLS.

In Node.js 11.0.0 and later versions, the OpenSSL dependencies feature unconditional ALPN support.
This value is therefore identical to that of `process.features.tls`.

**Since**

v4.8.0

**Deprecated**

Use `process.features.tls` instead.

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:214

</td>
</tr>
<tr>
<td>

<a id="tls_ocsp"></a> ~~`tls_ocsp`~~

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

A boolean value that is `true` if the current Node.js build includes support for OCSP in TLS.

In Node.js 11.0.0 and later versions, the OpenSSL dependencies feature unconditional OCSP support.
This value is therefore identical to that of `process.features.tls`.

**Since**

v0.11.13

**Deprecated**

Use `process.features.tls` instead.

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:223

</td>
</tr>
<tr>
<td>

<a id="tls_sni"></a> ~~`tls_sni`~~

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

A boolean value that is `true` if the current Node.js build includes support for SNI in TLS.

In Node.js 11.0.0 and later versions, the OpenSSL dependencies feature unconditional SNI support.
This value is therefore identical to that of `process.features.tls`.

**Since**

v0.5.3

**Deprecated**

Use `process.features.tls` instead.

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:232

</td>
</tr>
<tr>
<td>

<a id="typescript"></a> `typescript`

</td>
<td>

`readonly`

</td>
<td>

`false` \| `"strip"` \| `"transform"`

</td>
<td>

A value that is `"strip"` if Node.js is run with `--experimental-strip-types`,
`"transform"` if Node.js is run with `--experimental-transform-types`, and `false` otherwise.

**Since**

v22.10.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:238

</td>
</tr>
<tr>
<td>

<a id="uv"></a> ~~`uv`~~

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

A boolean value that is `true` if the current Node.js build includes support for libuv.

Since it's not possible to build Node.js without libuv, this value is always `true`.

**Since**

v0.5.3

**Deprecated**

This property is always true, and any checks based on it are redundant.

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:246

</td>
</tr>
</tbody>
</table>

***

## ProcessVersions

Defined in: docs-config/node\_modules/@types/node/process.d.ts:248

### Extends

- [`Dict`](#dict)&lt;`string`&gt;

### Indexable

```ts
[key: string]: string
```

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

<a id="http_parser"></a> `http_parser`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:249

</td>
</tr>
<tr>
<td>

<a id="node-1"></a> `node`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:250

</td>
</tr>
<tr>
<td>

<a id="v8"></a> `v8`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:251

</td>
</tr>
<tr>
<td>

<a id="ares"></a> `ares`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:252

</td>
</tr>
<tr>
<td>

<a id="uv-1"></a> `uv`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:253

</td>
</tr>
<tr>
<td>

<a id="zlib"></a> `zlib`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:254

</td>
</tr>
<tr>
<td>

<a id="modules"></a> `modules`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:255

</td>
</tr>
<tr>
<td>

<a id="openssl"></a> `openssl`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:256

</td>
</tr>
<tr>
<td>

<a id="bun"></a> `bun`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/bun-types/overrides.d.ts:151

</td>
</tr>
</tbody>
</table>

***

## Socket

Defined in: docs-config/node\_modules/@types/node/process.d.ts:342

### Extends

- [`ReadWriteStream`](#readwritestream)

### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Inherited from</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="istty-2"></a> `isTTY?`

</td>
<td>

`true`

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:343

</td>
</tr>
<tr>
<td>

<a id="readable-4"></a> `readable`

</td>
<td>

`boolean`

</td>
<td>

[`ReadWriteStream`](#readwritestream).[`readable`](#readable-1)

</td>
<td>

docs-config/node\_modules/@types/node/globals.d.ts:400

</td>
</tr>
<tr>
<td>

<a id="writable-4"></a> `writable`

</td>
<td>

`boolean`

</td>
<td>

[`ReadWriteStream`](#readwritestream).[`writable`](#writable-1)

</td>
<td>

docs-config/node\_modules/@types/node/globals.d.ts:414

</td>
</tr>
</tbody>
</table>

### Methods

#### read()

```ts
read(size?: number): string | Buffer<ArrayBufferLike>;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:401

##### Parameters

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

`size?`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

##### Returns

`string` \| `Buffer`&lt;`ArrayBufferLike`&gt;

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`read`](#read-2)

#### setEncoding()

```ts
setEncoding(encoding: BufferEncoding): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:402

##### Parameters

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

`encoding`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`setEncoding`](#setencoding-2)

#### pause()

```ts
pause(): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:403

##### Returns

`this`

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`pause`](#pause-2)

#### resume()

```ts
resume(): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:404

##### Returns

`this`

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`resume`](#resume-2)

#### isPaused()

```ts
isPaused(): boolean;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:405

##### Returns

`boolean`

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`isPaused`](#ispaused-2)

#### pipe()

```ts
pipe<T>(destination: T, options?: object): T;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:406

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T` *extends* [`WritableStream`](#writablestream)

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`destination`

</td>
<td>

`T`

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

\{ `end`: `boolean`; \}

</td>
</tr>
<tr>
<td>

`options.end?`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

##### Returns

`T`

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`pipe`](#pipe-2)

#### unpipe()

```ts
unpipe(destination?: WritableStream): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:407

##### Parameters

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

`destination?`

</td>
<td>

[`WritableStream`](#writablestream)

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`unpipe`](#unpipe-2)

#### unshift()

```ts
unshift(chunk: string | Uint8Array<ArrayBufferLike>, encoding?: BufferEncoding): void;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:408

##### Parameters

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

`chunk`

</td>
<td>

`string` \| `Uint8Array`&lt;`ArrayBufferLike`&gt;

</td>
</tr>
<tr>
<td>

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`unshift`](#unshift-2)

#### wrap()

```ts
wrap(oldStream: ReadableStream): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:409

##### Parameters

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

`oldStream`

</td>
<td>

[`ReadableStream`](#readablestream)

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`wrap`](#wrap-2)

#### \[asyncIterator\]()

```ts
asyncIterator: AsyncIterator<string | Buffer<ArrayBufferLike>>;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:410

##### Returns

[`AsyncIterator`](#asynciterator)&lt;`string` \| `Buffer`&lt;`ArrayBufferLike`&gt;&gt;

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`[asyncIterator]`](#asynciterator-5)

#### addListener()

```ts
addListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:597

Alias for `emitter.on(eventName, listener)`.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`addListener`](#addlistener-17)

#### on()

```ts
on<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:629

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.101

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`on`](#on-18)

#### once()

```ts
once<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:659

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.3.0

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`once`](#once-18)

#### removeListener()

```ts
removeListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:742

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`removeListener`](#removelistener-6)

#### off()

```ts
off<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:747

Alias for `emitter.removeListener()`.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v10.0.0

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`off`](#off-6)

#### removeAllListeners()

```ts
removeAllListeners(eventName?: string | symbol): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:758

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

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

`eventName?`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`removeAllListeners`](#removealllisteners-6)

#### setMaxListeners()

```ts
setMaxListeners(n: number): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:768

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

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

`n`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v0.3.5

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`setMaxListeners`](#setmaxlisteners-6)

#### getMaxListeners()

```ts
getMaxListeners(): number;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:774

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to EventEmitter.defaultMaxListeners.

##### Returns

`number`

##### Since

v1.0.0

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`getMaxListeners`](#getmaxlisteners-6)

#### listeners()

```ts
listeners<K>(eventName: string | symbol): Function[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:787

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`Function`[]

##### Since

v0.1.26

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`listeners`](#listeners-17)

#### rawListeners()

```ts
rawListeners<K>(eventName: string | symbol): Function[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:818

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
</tbody>
</table>

##### Returns

`Function`[]

##### Since

v9.4.0

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`rawListeners`](#rawlisteners-6)

#### emit()

```ts
emit<K>(eventName: string | symbol, ...args: AnyRest): boolean;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:859

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`AnyRest`

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

##### Since

v0.1.26

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`emit`](#emit-17)

#### listenerCount()

```ts
listenerCount<K>(eventName: string | symbol, listener?: Function): number;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:868

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event being listened for

</td>
</tr>
<tr>
<td>

`listener?`

</td>
<td>

`Function`

</td>
<td>

The event handler function

</td>
</tr>
</tbody>
</table>

##### Returns

`number`

##### Since

v3.2.0

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`listenerCount`](#listenercount-6)

#### prependListener()

```ts
prependListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:886

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`prependListener`](#prependlistener-17)

#### prependOnceListener()

```ts
prependOnceListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:902

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`eventName`

</td>
<td>

`string` \| `symbol`

</td>
<td>

The name of the event.

</td>
</tr>
<tr>
<td>

`listener`

</td>
<td>

(...`args`: `any`[]) => `void`

</td>
<td>

The callback function

</td>
</tr>
</tbody>
</table>

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`prependOnceListener`](#prependoncelistener-17)

#### eventNames()

```ts
eventNames(): (string | symbol)[];
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:922

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

##### Returns

(`string` \| `symbol`)[]

##### Since

v6.0.0

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`eventNames`](#eventnames-6)

#### \[captureRejectionSymbol\]()?

```ts
optional [captureRejectionSymbol]<K>(
   error: Error, 
   event: string | symbol, ...
   args: AnyRest): void;
```

Defined in: docs-config/node\_modules/@types/node/events.d.ts:592

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`K`

</td>
</tr>
</tbody>
</table>

##### Parameters

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

`error`

</td>
<td>

`Error`

</td>
</tr>
<tr>
<td>

`event`

</td>
<td>

`string` \| `symbol`

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`AnyRest`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

##### Inherited from

[`ReadWriteStream`](#readwritestream).[`[captureRejectionSymbol]`](#capturerejectionsymbol-6)

#### write()

##### Call Signature

```ts
write(buffer: string | Uint8Array<ArrayBufferLike>, cb?: (err?: Error) => void): boolean;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:415

###### Parameters

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

`buffer`

</td>
<td>

`string` \| `Uint8Array`&lt;`ArrayBufferLike`&gt;

</td>
</tr>
<tr>
<td>

`cb?`

</td>
<td>

(`err?`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

[`ReadWriteStream`](#readwritestream).[`write`](#write-3)

##### Call Signature

```ts
write(
   str: string, 
   encoding?: BufferEncoding, 
   cb?: (err?: Error) => void): boolean;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:416

###### Parameters

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

`str`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
</tr>
<tr>
<td>

`cb?`

</td>
<td>

(`err?`: `Error`) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

###### Inherited from

[`ReadWriteStream`](#readwritestream).[`write`](#write-3)

#### end()

##### Call Signature

```ts
end(cb?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:417

###### Parameters

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

`cb?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

[`ReadWriteStream`](#readwritestream).[`end`](#end-4)

##### Call Signature

```ts
end(data: string | Uint8Array<ArrayBufferLike>, cb?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:418

###### Parameters

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

`data`

</td>
<td>

`string` \| `Uint8Array`&lt;`ArrayBufferLike`&gt;

</td>
</tr>
<tr>
<td>

`cb?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

[`ReadWriteStream`](#readwritestream).[`end`](#end-4)

##### Call Signature

```ts
end(
   str: string, 
   encoding?: BufferEncoding, 
   cb?: () => void): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:419

###### Parameters

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

`str`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`encoding?`

</td>
<td>

[`BufferEncoding`](#bufferencoding)

</td>
</tr>
<tr>
<td>

`cb?`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`this`

###### Inherited from

[`ReadWriteStream`](#readwritestream).[`end`](#end-4)

***

## ProcessEnv

Defined in: docs-config/node\_modules/@types/node/process.d.ts:346

Alias for compatibility

### Extends

- [`Dict`](#dict)&lt;`string`&gt;.`Env`.`ImportMetaEnv`

### Indexable

```ts
[key: string]: string
```

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

<a id="tz"></a> `TZ?`

</td>
<td>

`string`

</td>
<td>

Can be used to change the default timezone at runtime

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:350

</td>
</tr>
<tr>
<td>

<a id="node_env"></a> `NODE_ENV?`

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
<td>

docs-config/node\_modules/bun-types/bun.d.ts:506

</td>
</tr>
</tbody>
</table>

***

## HRTime()

Defined in: docs-config/node\_modules/@types/node/process.d.ts:352

```ts
HRTime(time?: [number, number]): [number, number];
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:385

This is the legacy version of [()](#bigint)
before bigint was introduced in JavaScript.

The `process.hrtime()` method returns the current high-resolution real time in a `[seconds, nanoseconds]` tuple `Array`,
where `nanoseconds` is the remaining part of the real time that can't be represented in second precision.

`time` is an optional parameter that must be the result of a previous `process.hrtime()` call to diff with the current time.
If the parameter passed in is not a tuple `Array`, a TypeError will be thrown.
Passing in a user-defined array instead of the result of a previous call to `process.hrtime()` will lead to undefined behavior.

These times are relative to an arbitrary time in the past,
and not related to the time of day and therefore not subject to clock drift.
The primary use is for measuring performance between intervals:
```js
const { hrtime } = require('node:process');
const NS_PER_SEC = 1e9;
const time = hrtime();
// [ 1800216, 25 ]

setTimeout(() => {
  const diff = hrtime(time);
  // [ 1, 552 ]

  console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
  // Benchmark took 1000000552 nanoseconds
}, 1000);
```

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

`time?`

</td>
<td>

\[`number`, `number`\]

</td>
<td>

The result of a previous call to `process.hrtime()`

</td>
</tr>
</tbody>
</table>

### Returns

\[`number`, `number`\]

### Since

0.7.6

### Legacy

Use [()](#bigint) instead.

### Methods

#### bigint()

```ts
bigint(): bigint;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:406

The `bigint` version of the [()](#hrtime) method returning the current high-resolution real time in nanoseconds as a `bigint`.

Unlike [()](#hrtime), it does not support an additional time argument since the difference can just be computed directly by subtraction of the two `bigint`s.
```js
import { hrtime } from 'node:process';

const start = hrtime.bigint();
// 191051479007711n

setTimeout(() => {
  const end = hrtime.bigint();
  // 191052633396993n

  console.log(`Benchmark took ${end - start} nanoseconds`);
  // Benchmark took 1154389282 nanoseconds
}, 1000);
```

##### Returns

`bigint`

##### Since

v10.7.0

***

## ProcessPermission

Defined in: docs-config/node\_modules/@types/node/process.d.ts:408

### Methods

#### has()

```ts
has(scope: string, reference?: string): boolean;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:432

Verifies that the process is able to access the given scope and reference.
If no reference is provided, a global scope is assumed, for instance, `process.permission.has('fs.read')`
will check if the process has ALL file system read permissions.

The reference has a meaning based on the provided scope. For example, the reference when the scope is File System means files and folders.

The available scopes are:

* `fs` - All File System
* `fs.read` - File System read operations
* `fs.write` - File System write operations
* `child` - Child process spawning operations
* `worker` - Worker thread spawning operation

```js
// Check if the process has permission to read the README file
process.permission.has('fs.read', './README.md');
// Check if the process has read permission operations
process.permission.has('fs.read');
```

##### Parameters

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

`scope`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`reference?`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

##### Returns

`boolean`

##### Since

v20.0.0

***

## ProcessReport

Defined in: docs-config/node\_modules/@types/node/process.d.ts:434

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

<a id="compact"></a> `compact`

</td>
<td>

`boolean`

</td>
<td>

Write reports in a compact format, single-line JSON, more easily consumable by log processing systems
than the default multi-line format designed for human consumption.

**Since**

v13.12.0, v12.17.0

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:440

</td>
</tr>
<tr>
<td>

<a id="directory"></a> `directory`

</td>
<td>

`string`

</td>
<td>

Directory where the report is written.
The default value is the empty string, indicating that reports are written to the current
working directory of the Node.js process.

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:446

</td>
</tr>
<tr>
<td>

<a id="filename-1"></a> `filename`

</td>
<td>

`string`

</td>
<td>

Filename where the report is written. If set to the empty string, the output filename will be comprised
of a timestamp, PID, and sequence number. The default value is the empty string.

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:451

</td>
</tr>
<tr>
<td>

<a id="reportonfatalerror"></a> `reportOnFatalError`

</td>
<td>

`boolean`

</td>
<td>

If true, a diagnostic report is generated on fatal errors,
such as out of memory errors or failed C++ assertions.

**Default**

```ts
false
```

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:462

</td>
</tr>
<tr>
<td>

<a id="reportonsignal"></a> `reportOnSignal`

</td>
<td>

`boolean`

</td>
<td>

If true, a diagnostic report is generated when the process
receives the signal specified by process.report.signal.

**Default**

```ts
false
```

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:468

</td>
</tr>
<tr>
<td>

<a id="reportonuncaughtexception"></a> `reportOnUncaughtException`

</td>
<td>

`boolean`

</td>
<td>

If true, a diagnostic report is generated on uncaught exception.

**Default**

```ts
false
```

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:473

</td>
</tr>
<tr>
<td>

<a id="signal"></a> `signal`

</td>
<td>

[`Signals`](#signals)

</td>
<td>

The signal used to trigger the creation of a diagnostic report.

**Default**

```ts
'SIGUSR2'
```

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:478

</td>
</tr>
</tbody>
</table>

### Methods

#### getReport()

```ts
getReport(err?: Error): object;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:456

Returns a JavaScript Object representation of a diagnostic report for the running process.
The report's JavaScript stack trace is taken from `err`, if present.

##### Parameters

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

`err?`

</td>
<td>

`Error`

</td>
</tr>
</tbody>
</table>

##### Returns

`object`

#### writeReport()

##### Call Signature

```ts
writeReport(fileName?: string, err?: Error): string;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:493

Writes a diagnostic report to a file. If filename is not provided, the default filename
includes the date, time, PID, and a sequence number.
The report's JavaScript stack trace is taken from `err`, if present.

If the value of filename is set to `'stdout'` or `'stderr'`, the report is written
to the stdout or stderr of the process respectively.

###### Parameters

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

`fileName?`

</td>
<td>

`string`

</td>
<td>

Name of the file where the report is written.
This should be a relative path, that will be appended to the directory specified in
`process.report.directory`, or the current working directory of the Node.js process,
if unspecified.

</td>
</tr>
<tr>
<td>

`err?`

</td>
<td>

`Error`

</td>
<td>

A custom error used for reporting the JavaScript stack.

</td>
</tr>
</tbody>
</table>

###### Returns

`string`

Filename of the generated report.

##### Call Signature

```ts
writeReport(err?: Error): string;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:494

###### Parameters

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

`err?`

</td>
<td>

`Error`

</td>
</tr>
</tbody>
</table>

###### Returns

`string`

***

## ResourceUsage

Defined in: docs-config/node\_modules/@types/node/process.d.ts:496

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

<a id="fsread"></a> `fsRead`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:497

</td>
</tr>
<tr>
<td>

<a id="fswrite"></a> `fsWrite`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:498

</td>
</tr>
<tr>
<td>

<a id="involuntarycontextswitches"></a> `involuntaryContextSwitches`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:499

</td>
</tr>
<tr>
<td>

<a id="ipcreceived"></a> `ipcReceived`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:500

</td>
</tr>
<tr>
<td>

<a id="ipcsent"></a> `ipcSent`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:501

</td>
</tr>
<tr>
<td>

<a id="majorpagefault"></a> `majorPageFault`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:502

</td>
</tr>
<tr>
<td>

<a id="maxrss"></a> `maxRSS`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:503

</td>
</tr>
<tr>
<td>

<a id="minorpagefault"></a> `minorPageFault`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:504

</td>
</tr>
<tr>
<td>

<a id="sharedmemorysize"></a> `sharedMemorySize`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:505

</td>
</tr>
<tr>
<td>

<a id="signalscount"></a> `signalsCount`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:506

</td>
</tr>
<tr>
<td>

<a id="swappedout"></a> `swappedOut`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:507

</td>
</tr>
<tr>
<td>

<a id="systemcputime"></a> `systemCPUTime`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:508

</td>
</tr>
<tr>
<td>

<a id="unshareddatasize"></a> `unsharedDataSize`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:509

</td>
</tr>
<tr>
<td>

<a id="unsharedstacksize"></a> `unsharedStackSize`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:510

</td>
</tr>
<tr>
<td>

<a id="usercputime"></a> `userCPUTime`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:511

</td>
</tr>
<tr>
<td>

<a id="voluntarycontextswitches"></a> `voluntaryContextSwitches`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:512

</td>
</tr>
</tbody>
</table>

***

## EmitWarningOptions

Defined in: docs-config/node\_modules/@types/node/process.d.ts:514

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

<a id="type"></a> `type?`

</td>
<td>

`string`

</td>
<td>

When `warning` is a `string`, `type` is the name to use for the _type_ of warning being emitted.

**Default**

```ts
'Warning'
```

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:520

</td>
</tr>
<tr>
<td>

<a id="code-1"></a> `code?`

</td>
<td>

`string`

</td>
<td>

A unique identifier for the warning instance being emitted.

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:524

</td>
</tr>
<tr>
<td>

<a id="ctor"></a> `ctor?`

</td>
<td>

`Function`

</td>
<td>

When `warning` is a `string`, `ctor` is an optional function used to limit the generated stack trace.

**Default**

```ts
process.emitWarning
```

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:530

</td>
</tr>
<tr>
<td>

<a id="detail"></a> `detail?`

</td>
<td>

`string`

</td>
<td>

Additional text to include with the error.

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:534

</td>
</tr>
</tbody>
</table>

***

## ProcessConfig

Defined in: docs-config/node\_modules/@types/node/process.d.ts:536

### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="target_defaults"></a> `target_defaults`

</td>
<td>

`readonly`

</td>
<td>

`object`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:537

</td>
</tr>
<tr>
<td>

`target_defaults.cflags`

</td>
<td>

`readonly`

</td>
<td>

`any`[]

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:538

</td>
</tr>
<tr>
<td>

`target_defaults.default_configuration`

</td>
<td>

`readonly`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:539

</td>
</tr>
<tr>
<td>

`target_defaults.defines`

</td>
<td>

`readonly`

</td>
<td>

`string`[]

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:540

</td>
</tr>
<tr>
<td>

`target_defaults.include_dirs`

</td>
<td>

`readonly`

</td>
<td>

`string`[]

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:541

</td>
</tr>
<tr>
<td>

`target_defaults.libraries`

</td>
<td>

`readonly`

</td>
<td>

`string`[]

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:542

</td>
</tr>
<tr>
<td>

<a id="variables"></a> `variables`

</td>
<td>

`readonly`

</td>
<td>

`object`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:544

</td>
</tr>
<tr>
<td>

`variables.clang`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:545

</td>
</tr>
<tr>
<td>

`variables.host_arch`

</td>
<td>

`readonly`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:546

</td>
</tr>
<tr>
<td>

`variables.node_install_npm`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:547

</td>
</tr>
<tr>
<td>

`variables.node_install_waf`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:548

</td>
</tr>
<tr>
<td>

`variables.node_prefix`

</td>
<td>

`readonly`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:549

</td>
</tr>
<tr>
<td>

`variables.node_shared_openssl`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:550

</td>
</tr>
<tr>
<td>

`variables.node_shared_v8`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:551

</td>
</tr>
<tr>
<td>

`variables.node_shared_zlib`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:552

</td>
</tr>
<tr>
<td>

`variables.node_use_dtrace`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:553

</td>
</tr>
<tr>
<td>

`variables.node_use_etw`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:554

</td>
</tr>
<tr>
<td>

`variables.node_use_openssl`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:555

</td>
</tr>
<tr>
<td>

`variables.target_arch`

</td>
<td>

`readonly`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:556

</td>
</tr>
<tr>
<td>

`variables.v8_no_strict_aliasing`

</td>
<td>

`readonly`

</td>
<td>

`number`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:557

</td>
</tr>
<tr>
<td>

`variables.v8_use_snapshot`

</td>
<td>

`readonly`

</td>
<td>

`boolean`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:558

</td>
</tr>
<tr>
<td>

`variables.visibility`

</td>
<td>

`readonly`

</td>
<td>

`string`

</td>
<td>

docs-config/node\_modules/@types/node/process.d.ts:559

</td>
</tr>
</tbody>
</table>

***

## Immediate

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:34

This object is created internally and is returned from `setImmediate()`. It
can be passed to `clearImmediate()` in order to cancel the scheduled
actions.

By default, when an immediate is scheduled, the Node.js event loop will continue
running as long as the immediate is active. The `Immediate` object returned by
`setImmediate()` exports both `immediate.ref()` and `immediate.unref()`
functions that can be used to control this default behavior.

### Extends

- [`RefCounted`](#refcounted).`Disposable`

### Methods

#### hasRef()

```ts
hasRef(): boolean;
```

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:39

If true, the `Immediate` object will keep the Node.js event loop active.

##### Returns

`boolean`

##### Since

v11.0.0

#### ref()

```ts
ref(): this;
```

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:50

When called, requests that the Node.js event loop _not_ exit so long as the
`Immediate` is active. Calling `immediate.ref()` multiple times will have no
effect.

By default, all `Immediate` objects are "ref'ed", making it normally unnecessary
to call `immediate.ref()` unless `immediate.unref()` had been called previously.

##### Returns

`this`

a reference to `immediate`

##### Since

v9.7.0

##### Overrides

[`RefCounted`](#refcounted).[`ref`](#ref-2)

#### unref()

```ts
unref(): this;
```

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:59

When called, the active `Immediate` object will not require the Node.js event
loop to remain active. If there is no other activity keeping the event loop
running, the process may exit before the `Immediate` object's callback is
invoked. Calling `immediate.unref()` multiple times will have no effect.

##### Returns

`this`

a reference to `immediate`

##### Since

v9.7.0

##### Overrides

[`RefCounted`](#refcounted).[`unref`](#unref-2)

#### \_onImmediate()

```ts
_onImmediate(...args: any[]): void;
```

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:66

##### Parameters

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

...`args`

</td>
<td>

`any`[]

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

#### \[dispose\]()

```ts
dispose: void;
```

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:65

**`Experimental`**

Cancels the immediate. This is similar to calling `clearImmediate()`.

##### Returns

`void`

##### Since

v20.5.0, v18.18.0

##### Overrides

```ts
Disposable.[dispose]
```

***

## ~~Timer~~

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:71

### Deprecated

Use `NodeJS.Timeout` instead.

### Extends

- [`RefCounted`](#refcounted)

### Extended by

- [`Timeout`](#timeout-2)

### Methods

#### ~~hasRef()~~

```ts
hasRef(): boolean;
```

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:72

##### Returns

`boolean`

#### ~~refresh()~~

```ts
refresh(): this;
```

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:73

##### Returns

`this`

#### ~~\[toPrimitive\]()~~

```ts
toPrimitive: number;
```

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:74

##### Returns

`number`

#### ~~ref()~~

```ts
ref(): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:425

##### Returns

`this`

##### Inherited from

[`RefCounted`](#refcounted).[`ref`](#ref-2)

#### ~~unref()~~

```ts
unref(): this;
```

Defined in: docs-config/node\_modules/@types/node/globals.d.ts:426

##### Returns

`this`

##### Inherited from

[`RefCounted`](#refcounted).[`unref`](#unref-2)

***

## Timeout

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:87

This object is created internally and is returned from `setTimeout()` and
`setInterval()`. It can be passed to either `clearTimeout()` or
`clearInterval()` in order to cancel the scheduled actions.

By default, when a timer is scheduled using either `setTimeout()` or
`setInterval()`, the Node.js event loop will continue running as long as the
timer is active. Each of the `Timeout` objects returned by these functions
export both `timeout.ref()` and `timeout.unref()` functions that can be used to
control this default behavior.

### Extends

- [`RefCounted`](#refcounted).`Disposable`.[`Timer`](#timer)

### Methods

#### close()

```ts
close(): this;
```

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:94

Cancels the timeout.

##### Returns

`this`

a reference to `timeout`

##### Since

v0.9.1

##### Legacy

Use `clearTimeout()` instead.

#### hasRef()

```ts
hasRef(): boolean;
```

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:99

If true, the `Timeout` object will keep the Node.js event loop active.

##### Returns

`boolean`

##### Since

v11.0.0

##### Overrides

[`Timer`](#timer).[`hasRef`](#hasref-2)

#### ref()

```ts
ref(): this;
```

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:109

When called, requests that the Node.js event loop _not_ exit so long as the
`Timeout` is active. Calling `timeout.ref()` multiple times will have no effect.

By default, all `Timeout` objects are "ref'ed", making it normally unnecessary
to call `timeout.ref()` unless `timeout.unref()` had been called previously.

##### Returns

`this`

a reference to `timeout`

##### Since

v0.9.1

##### Overrides

[`Timer`](#timer).[`ref`](#ref-10)

#### refresh()

```ts
refresh(): this;
```

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:121

Sets the timer's start time to the current time, and reschedules the timer to
call its callback at the previously specified duration adjusted to the current
time. This is useful for refreshing a timer without allocating a new
JavaScript object.

Using this on a timer that has already called its callback will reactivate the
timer.

##### Returns

`this`

a reference to `timeout`

##### Since

v10.2.0

##### Overrides

[`Timer`](#timer).[`refresh`](#refresh)

#### unref()

```ts
unref(): this;
```

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:130

When called, the active `Timeout` object will not require the Node.js event loop
to remain active. If there is no other activity keeping the event loop running,
the process may exit before the `Timeout` object's callback is invoked. Calling
`timeout.unref()` multiple times will have no effect.

##### Returns

`this`

a reference to `timeout`

##### Since

v0.9.1

##### Overrides

[`Timer`](#timer).[`unref`](#unref-10)

#### \_onTimeout()

```ts
_onTimeout(...args: any[]): void;
```

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:147

##### Parameters

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

...`args`

</td>
<td>

`any`[]

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

#### \[toPrimitive\]()

```ts
toPrimitive: number;
```

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:140

Coerce a `Timeout` to a primitive. The primitive can be used to
clear the `Timeout`. The primitive can only be used in the
same thread where the timeout was created. Therefore, to use it
across `worker_threads` it must first be passed to the correct
thread. This allows enhanced compatibility with browser
`setTimeout()` and `setInterval()` implementations.

##### Returns

`number`

##### Since

v14.9.0, v12.19.0

##### Overrides

[`Timer`](#timer).[`[toPrimitive]`](#toprimitive)

#### \[dispose\]()

```ts
dispose: void;
```

Defined in: docs-config/node\_modules/@types/node/timers.d.ts:146

**`Experimental`**

Cancels the timeout.

##### Returns

`void`

##### Since

v20.5.0, v18.18.0

##### Overrides

```ts
Disposable.[dispose]
```

***

## BuiltinIteratorReturn

```ts
type BuiltinIteratorReturn = ReturnType<any[][typeof Symbol.iterator]> extends globalThis.Iterator<any, infer TReturn> ? TReturn : any;
```

Defined in: docs-config/node\_modules/@types/node/compatibility/iterators.d.ts:18

Polyfill for TS 5.6's instrinsic BuiltinIteratorReturn type, required for DOM-compatible iterators

***

## TypedArray&lt;TArrayBuffer&gt;

```ts
type TypedArray<TArrayBuffer> = 
  | Uint8Array<TArrayBuffer>
  | Uint8ClampedArray<TArrayBuffer>
  | Uint16Array<TArrayBuffer>
  | Uint32Array<TArrayBuffer>
  | Int8Array<TArrayBuffer>
  | Int16Array<TArrayBuffer>
  | Int32Array<TArrayBuffer>
  | BigUint64Array<TArrayBuffer>
  | BigInt64Array<TArrayBuffer>
  | Float32Array<TArrayBuffer>
  | Float64Array<TArrayBuffer>;
```

Defined in: docs-config/node\_modules/@types/node/globals.typedarray.d.ts:5

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

`TArrayBuffer` *extends* `ArrayBufferLike`

</td>
<td>

`ArrayBufferLike`

</td>
</tr>
</tbody>
</table>

***

## ArrayBufferView&lt;TArrayBuffer&gt;

```ts
type ArrayBufferView<TArrayBuffer> = 
  | TypedArray<TArrayBuffer>
  | DataView<TArrayBuffer>;
```

Defined in: docs-config/node\_modules/@types/node/globals.typedarray.d.ts:17

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

`TArrayBuffer` *extends* `ArrayBufferLike`

</td>
<td>

`ArrayBufferLike`

</td>
</tr>
</tbody>
</table>

***

## Platform

```ts
type Platform = 
  | "aix"
  | "android"
  | "darwin"
  | "freebsd"
  | "haiku"
  | "linux"
  | "openbsd"
  | "sunos"
  | "win32"
  | "cygwin"
  | "netbsd";
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:258

***

## Architecture

```ts
type Architecture = 
  | "arm"
  | "arm64"
  | "ia32"
  | "loong64"
  | "mips"
  | "mipsel"
  | "ppc"
  | "ppc64"
  | "riscv64"
  | "s390"
  | "s390x"
  | "x64";
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:270

***

## Signals

```ts
type Signals = 
  | "SIGABRT"
  | "SIGALRM"
  | "SIGBUS"
  | "SIGCHLD"
  | "SIGCONT"
  | "SIGFPE"
  | "SIGHUP"
  | "SIGILL"
  | "SIGINT"
  | "SIGIO"
  | "SIGIOT"
  | "SIGKILL"
  | "SIGPIPE"
  | "SIGPOLL"
  | "SIGPROF"
  | "SIGPWR"
  | "SIGQUIT"
  | "SIGSEGV"
  | "SIGSTKFLT"
  | "SIGSTOP"
  | "SIGSYS"
  | "SIGTERM"
  | "SIGTRAP"
  | "SIGTSTP"
  | "SIGTTIN"
  | "SIGTTOU"
  | "SIGUNUSED"
  | "SIGURG"
  | "SIGUSR1"
  | "SIGUSR2"
  | "SIGVTALRM"
  | "SIGWINCH"
  | "SIGXCPU"
  | "SIGXFSZ"
  | "SIGBREAK"
  | "SIGLOST"
  | "SIGINFO";
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:283

***

## UncaughtExceptionOrigin

```ts
type UncaughtExceptionOrigin = "uncaughtException" | "unhandledRejection";
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:321

***

## MultipleResolveType

```ts
type MultipleResolveType = "resolve" | "reject";
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:322

***

## BeforeExitListener()

```ts
type BeforeExitListener = (code: number) => void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:323

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

`code`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

### Returns

`void`

***

## DisconnectListener()

```ts
type DisconnectListener = () => void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:324

### Returns

`void`

***

## ExitListener()

```ts
type ExitListener = (code: number) => void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:325

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

`code`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

### Returns

`void`

***

## RejectionHandledListener()

```ts
type RejectionHandledListener = (promise: Promise<unknown>) => void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:326

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

`promise`

</td>
<td>

`Promise`&lt;`unknown`&gt;

</td>
</tr>
</tbody>
</table>

### Returns

`void`

***

## UncaughtExceptionListener()

```ts
type UncaughtExceptionListener = (error: Error, origin: UncaughtExceptionOrigin) => void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:327

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

`error`

</td>
<td>

`Error`

</td>
</tr>
<tr>
<td>

`origin`

</td>
<td>

[`UncaughtExceptionOrigin`](#uncaughtexceptionorigin)

</td>
</tr>
</tbody>
</table>

### Returns

`void`

***

## UnhandledRejectionListener()

```ts
type UnhandledRejectionListener = (reason: unknown, promise: Promise<unknown>) => void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:332

Most of the time the unhandledRejection will be an Error, but this should not be relied upon
as *anything* can be thrown/rejected, it is therefore unsafe to assume that the value is an Error.

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

`reason`

</td>
<td>

`unknown`

</td>
</tr>
<tr>
<td>

`promise`

</td>
<td>

`Promise`&lt;`unknown`&gt;

</td>
</tr>
</tbody>
</table>

### Returns

`void`

***

## WarningListener()

```ts
type WarningListener = (warning: Error) => void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:333

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

`warning`

</td>
<td>

`Error`

</td>
</tr>
</tbody>
</table>

### Returns

`void`

***

## MessageListener()

```ts
type MessageListener = (message: unknown, sendHandle: unknown) => void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:334

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

`message`

</td>
<td>

`unknown`

</td>
</tr>
<tr>
<td>

`sendHandle`

</td>
<td>

`unknown`

</td>
</tr>
</tbody>
</table>

### Returns

`void`

***

## SignalsListener()

```ts
type SignalsListener = (signal: Signals) => void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:335

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

`signal`

</td>
<td>

[`Signals`](#signals)

</td>
</tr>
</tbody>
</table>

### Returns

`void`

***

## MultipleResolveListener()

```ts
type MultipleResolveListener = (type: MultipleResolveType, promise: Promise<unknown>, value: unknown) => void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:336

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

`type`

</td>
<td>

[`MultipleResolveType`](#multipleresolvetype)

</td>
</tr>
<tr>
<td>

`promise`

</td>
<td>

`Promise`&lt;`unknown`&gt;

</td>
</tr>
<tr>
<td>

`value`

</td>
<td>

`unknown`

</td>
</tr>
</tbody>
</table>

### Returns

`void`

***

## WorkerListener()

```ts
type WorkerListener = (worker: Worker) => void;
```

Defined in: docs-config/node\_modules/@types/node/process.d.ts:341

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

`worker`

</td>
<td>

`Worker`

</td>
</tr>
</tbody>
</table>

### Returns

`void`

***

## BufferEncoding

```ts
type BufferEncoding = 
  | "ascii"
  | "utf8"
  | "utf-8"
  | "utf16le"
  | "utf-16le"
  | "ucs2"
  | "ucs-2"
  | "base64"
  | "base64url"
  | "latin1"
  | "binary"
  | "hex";
```

Defined in: docs-config/node\_modules/@types/node/buffer.d.ts:244

Buffer class
