[Documentation](modules.md) / log

## LogOptions

Defined in: [log.ts:75](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L75)

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

<a id="style"></a> `style?`

</td>
<td>

`string` \| `string`[]

</td>
<td>

CSS style string or array of CSS strings for browser console styling

</td>
<td>

[log.ts:77](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L77)

</td>
</tr>
<tr>
<td>

<a id="color"></a> `color?`

</td>
<td>

 \| `"reset"` \| `"black"` \| `"red"` \| `"green"` \| `"yellow"` \| `"blue"` \| `"magenta"` \| `"cyan"` \| `"white"` \| `"gray"` \| `"brightRed"` \| `"brightGreen"` \| `"brightYellow"` \| `"brightBlue"` \| `"brightMagenta"` \| `"brightCyan"` \| `"brightWhite"` \| `"bgRed"` \| `"bgGreen"` \| `"bgYellow"` \| `"bgBlue"` \| `"bgMagenta"` \| `"bgCyan"` \| `"bgWhite"` \| `"bgGray"`

</td>
<td>

Optional color name or code for terminal environments

</td>
<td>

[log.ts:79](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L79)

</td>
</tr>
<tr>
<td>

<a id="hideinproduction"></a> `hideInProduction?`

</td>
<td>

`boolean`

</td>
<td>

If true, hides log in production (auto-detects by hostname if undefined)

</td>
<td>

[log.ts:81](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L81)

</td>
</tr>
<tr>
<td>

<a id="startspinner"></a> `startSpinner?`

</td>
<td>

`boolean`

</td>
<td>

Start a spinner (for CLI tools, optional)

</td>
<td>

[log.ts:83](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L83)

</td>
</tr>
<tr>
<td>

<a id="stopspinner"></a> `stopSpinner?`

</td>
<td>

`boolean`

</td>
<td>

Stop a spinner (for CLI tools, optional)

</td>
<td>

[log.ts:85](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L85)

</td>
</tr>
</tbody>
</table>

***

## colors

```ts
const colors: object;
```

Defined in: [log.ts:89](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L89)

ANSI escape codes for terminal colors when running in Node.js

### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="reset"></a> `reset`

</td>
<td>

`string`

</td>
<td>

"\x1b\[0m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:90](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L90)

</td>
</tr>
<tr>
<td>

<a id="black"></a> `black`

</td>
<td>

`string`

</td>
<td>

"\x1b\[30m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:91](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L91)

</td>
</tr>
<tr>
<td>

<a id="red"></a> `red`

</td>
<td>

`string`

</td>
<td>

"\x1b\[31m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:92](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L92)

</td>
</tr>
<tr>
<td>

<a id="green"></a> `green`

</td>
<td>

`string`

</td>
<td>

"\x1b\[32m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:93](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L93)

</td>
</tr>
<tr>
<td>

<a id="yellow"></a> `yellow`

</td>
<td>

`string`

</td>
<td>

"\x1b\[33m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:94](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L94)

</td>
</tr>
<tr>
<td>

<a id="blue"></a> `blue`

</td>
<td>

`string`

</td>
<td>

"\x1b\[34m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:95](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L95)

</td>
</tr>
<tr>
<td>

<a id="magenta"></a> `magenta`

</td>
<td>

`string`

</td>
<td>

"\x1b\[35m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:96](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L96)

</td>
</tr>
<tr>
<td>

<a id="cyan"></a> `cyan`

</td>
<td>

`string`

</td>
<td>

"\x1b\[36m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:97](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L97)

</td>
</tr>
<tr>
<td>

<a id="white"></a> `white`

</td>
<td>

`string`

</td>
<td>

"\x1b\[37m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:98](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L98)

</td>
</tr>
<tr>
<td>

<a id="gray"></a> `gray`

</td>
<td>

`string`

</td>
<td>

"\x1b\[90m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:99](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L99)

</td>
</tr>
<tr>
<td>

<a id="brightred"></a> `brightRed`

</td>
<td>

`string`

</td>
<td>

"\x1b\[91m"

</td>
<td>

Bright variants

</td>
<td>

[log.ts:101](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L101)

</td>
</tr>
<tr>
<td>

<a id="brightgreen"></a> `brightGreen`

</td>
<td>

`string`

</td>
<td>

"\x1b\[92m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:102](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L102)

</td>
</tr>
<tr>
<td>

<a id="brightyellow"></a> `brightYellow`

</td>
<td>

`string`

</td>
<td>

"\x1b\[93m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:103](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L103)

</td>
</tr>
<tr>
<td>

<a id="brightblue"></a> `brightBlue`

</td>
<td>

`string`

</td>
<td>

"\x1b\[94m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:104](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L104)

</td>
</tr>
<tr>
<td>

<a id="brightmagenta"></a> `brightMagenta`

</td>
<td>

`string`

</td>
<td>

"\x1b\[95m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:105](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L105)

</td>
</tr>
<tr>
<td>

<a id="brightcyan"></a> `brightCyan`

</td>
<td>

`string`

</td>
<td>

"\x1b\[96m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:106](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L106)

</td>
</tr>
<tr>
<td>

<a id="brightwhite"></a> `brightWhite`

</td>
<td>

`string`

</td>
<td>

"\x1b\[97m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:107](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L107)

</td>
</tr>
<tr>
<td>

<a id="bgred"></a> `bgRed`

</td>
<td>

`string`

</td>
<td>

"\x1b\[41m"

</td>
<td>

Background colors (optional)

</td>
<td>

[log.ts:109](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L109)

</td>
</tr>
<tr>
<td>

<a id="bggreen"></a> `bgGreen`

</td>
<td>

`string`

</td>
<td>

"\x1b\[42m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:110](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L110)

</td>
</tr>
<tr>
<td>

<a id="bgyellow"></a> `bgYellow`

</td>
<td>

`string`

</td>
<td>

"\x1b\[43m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:111](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L111)

</td>
</tr>
<tr>
<td>

<a id="bgblue"></a> `bgBlue`

</td>
<td>

`string`

</td>
<td>

"\x1b\[44m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:112](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L112)

</td>
</tr>
<tr>
<td>

<a id="bgmagenta"></a> `bgMagenta`

</td>
<td>

`string`

</td>
<td>

"\x1b\[45m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:113](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L113)

</td>
</tr>
<tr>
<td>

<a id="bgcyan"></a> `bgCyan`

</td>
<td>

`string`

</td>
<td>

"\x1b\[46m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:114](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L114)

</td>
</tr>
<tr>
<td>

<a id="bgwhite"></a> `bgWhite`

</td>
<td>

`string`

</td>
<td>

"\x1b\[47m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:115](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L115)

</td>
</tr>
<tr>
<td>

<a id="bggray"></a> `bgGray`

</td>
<td>

`string`

</td>
<td>

"\x1b\[100m"

</td>
<td>

&hyphen;

</td>
<td>

[log.ts:116](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L116)

</td>
</tr>
</tbody>
</table>

***

## log()

```ts
function log(message: string, options: LogOptions): boolean;
```

Defined in: [log.ts:13](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L13)

### Colorized Log With JSON Structure
![Debug log](https://i.imgur.com/R8Qp6Vg.png)
Logs messages to the console with custom styling,
prints JSON with description of structure layout,
and showing debug output in development only.

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

`string`

</td>
<td>

`""`

</td>
<td>

The message to log. If an object is provided, it will be stringified.

</td>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`LogOptions`](#logoptions)

</td>
<td>

`{}`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

### Returns

`boolean`

***

## printJSONStructure()

```ts
function printJSONStructure(obj: any, indent: number): string;
```

Defined in: [log.ts:157](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L157)

Creates a colored visualization of a JSON object's structure
Shows the shape and types of the data rather than actual values
Recursively processes nested objects and arrays

### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
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

`undefined`

</td>
</tr>
<tr>
<td>

`indent`

</td>
<td>

`number`

</td>
<td>

`0`

</td>
</tr>
</tbody>
</table>

### Returns

`string`

***

## showAlert()

```ts
function showAlert(msg: any): void;
```

Defined in: [log.ts:228](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L228)

Shows message in a modal overlay with scrollable message stack
and is easier to dismiss unlike alert() which blocks window.
Creates a semi-transparent overlay with a white box containing the message.

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

`msg`

</td>
<td>

`any`

</td>
<td>

The message to display

</td>
</tr>
</tbody>
</table>

### Returns

`void`

***

## setupDevTools()

```ts
function setupDevTools(): void;
```

Defined in: [log.ts:266](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L266)

Sets up development tools for debugging API requests
Adds a keyboard shortcut (Ctrl+I) that shows a modal with request history
Each request entry shows:
- Request path
- Request details
- Response data
- Timestamp

### Returns

`void`

***

## showSpinnerInTerminal()

```ts
function showSpinnerInTerminal(text: any): (success: string) => void;
```

Defined in: [log.ts:297](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L297)

Displays an animated spinner in the terminal with the provided text.
The spinner animates in-place until the returned function is called,
which stops the spinner and prints a success message.

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

`text`

</td>
<td>

`any`

</td>
<td>

The text to display next to the spinner animation.

</td>
</tr>
</tbody>
</table>

### Returns

Stop function with optional message.

```ts
(success: string): void;
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`success`

</td>
<td>

`string`

</td>
<td>

`"✔ Done!"`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

### Example

```ts
const stopSpinner = showSpinnerInTerminal('Downloading...');
setTimeout(() => {
   stopSpinner('Success!');
}, 2000);
```
