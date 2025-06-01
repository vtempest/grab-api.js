[Documentation](modules.md) / icons

## getLoadingIcon()

```ts
function getLoadingIcon(name: string): Promise<Module>;
```

Defined in: [icons/index.js:15](https://github.com/vtempest/grab-api/tree/master/src/icons/index.js#L15)

Dynamically imports an SVG icon from the same folder by name.

Available icons:
loading-eclipse
loading-ellipsis
loading-floatingsearch
loading-infinity
loading-redblueball
loading-ripple

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

filename without .svg extension

</td>
</tr>
</tbody>
</table>

### Returns

`Promise`&lt;`Module`&gt;

- The imported SVG module/component
