[Documentation](modules.md) / log

## log()

```ts
function log(
   message: any, 
   hideInProduction?: any, 
   style?: string): void;
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

`any`

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

`"color: blue; font-size: 12pt;"`

</td>
<td>

default='color: blue; font-size: 15px' - CSS style string

</td>
</tr>
</tbody>
</table>

### Returns

`void`

***

## printStructureJSON()

```ts
function printStructureJSON(obj: any, indent: number): string;
```

Defined in: [log.ts:87](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L87)

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

Defined in: [log.ts:149](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L149)

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

Defined in: [log.ts:185](https://github.com/vtempest/grab-api/tree/master/src/log.ts#L185)

Sets up development tools for debugging API requests
Adds a keyboard shortcut (Ctrl+I) that shows a modal with request history
Each request entry shows:
- Request path
- Request details
- Response data
- Timestamp

### Returns

`void`
