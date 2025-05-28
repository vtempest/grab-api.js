[Documentation](modules.md) / log

## log()

```ts
function log(
   message: any, 
   hideInProduction?: boolean, 
   style?: string): void;
```

Defined in: [log.js:11](https://github.com/vtempest/grab-api/tree/master/src/log.js#L11)

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

default='color: blue; font-size: 15px' - CSS style string for the console output.

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

Defined in: [log.js:71](https://github.com/vtempest/grab-api/tree/master/src/log.js#L71)

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
