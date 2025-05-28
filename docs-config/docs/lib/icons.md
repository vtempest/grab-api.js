[Documentation](modules.md) / icons

## getLoadingIcon()

```ts
function getLoadingIcon(name: string): Promise<any>;
```

Defined in: icons/index.js:6

Dynamically imports an SVG icon from the same folder by name.

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

`name`

</td>
<td>

`string`

</td>
<td>

The SVG file name (without .svg extension)

</td>
</tr>
</tbody>
</table>

### Returns

`Promise`&lt;`any`&gt;

- The imported SVG module/component
