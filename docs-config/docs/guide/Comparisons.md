
##  Comparison of HTTP Request Libraries


| Library | Size | Zero Dependencies | Framework Support | isLoading State Handling | Auto JSON Handling | Request Deduplication | Caching | Mock Testing | Rate Limiting | Automatic Retry | Request Cancellation | Pagination Support | TypeScript Support | Interceptors | Debug Logging | Request History | Easy Syntax |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| **GRAB** | ✅ 2KB | ✅ Yes | ✅ All frameworks | ✅ Auto-managed | ✅ Automatic | ✅ Built-in | ✅ Memory cache | ✅ Easy setup | ✅ Built-in | ✅ Configurable | ✅ Auto + manual | ✅ Infinite scroll | ⚠️ Basic | ✅ onBeforeRequest | ✅ Colored output | ✅ Built-in | ✅ Minimal |
| **Axios** | ❌ 13KB | ❌ No | ✅ All frameworks | ❌ Manual | ✅ Configurable | ❌ No | ❌ No | ❌ Needs MSW/etc | ❌ Manual | ⚠️ Via interceptors | ✅ Manual | ❌ Manual | ✅ Excellent | ✅ Advanced | ⚠️ Basic | ❌ Manual | ⚠️ Medium |
| **TanStack Query** | ❌ 39KB | ❌ No | ⚠️ React-focused | ✅ Yes | ❌ Manual | ✅ Yes | ✅ Advanced | ❌ Needs MSW/etc | ❌ Manual | ✅ Built-in | ✅ Automatic | ✅ Advanced | ✅ Excellent | ⚠️ Limited | ✅ DevTools | ✅ DevTools | ❌ High |
| **SWR** | ❌ 4.2KB | ❌ No | ⚠️ React-focused | ✅ Yes | ❌ Manual | ✅ Yes | ✅ Advanced | ❌ Needs MSW/etc | ❌ Manual | ✅ Built-in | ✅ Automatic | ⚠️ Basic | ✅ Excellent | ⚠️ Limited | ✅ DevTools | ✅ DevTools | ❌ High |
| **Alova** | ⚠️ 4KB | ✅ Yes | ✅ All frameworks | ✅ Yes | ✅ Automatic | ✅ Yes | ✅ Multi-level | ⚠️ Basic | ⚠️ Basic | ✅ Built-in | ✅ Manual | ✅ Built-in | ✅ Good | ✅ Advanced | ⚠️ Basic | ❌ Manual | ⚠️ Medium |
| **SuperAgent** | ❌ 19KB | ❌ No | ✅ All frameworks | ❌ Manual | ✅ Automatic | ❌ No | ❌ No | ❌ Needs separate lib | ❌ Manual | ✅ Built-in | ✅ Manual | ❌ Manual | ✅ Good | ✅ Plugins | ⚠️ Basic | ❌ Manual | ⚠️ Medium |
| **Apisauce** | ❌ 15KB (with axios) | ❌ Needs Axios | ✅ All frameworks | ❌ Manual | ✅ Automatic | ❌ No | ❌ No | ❌ Needs separate lib | ❌ Manual | ❌ Manual | ✅ Manual | ❌ Manual | ✅ Good | ✅ Transforms | ⚠️ Basic | ❌ Manual | ✅ Low |

### Key Strengths of GRAB

- **Simplicity**: One function covers all use cases, with no complex setup or configuration.
- **Lightweight**: At just 2KB, it's significantly smaller than most alternatives.
- **Instant Productivity**: Works seamlessly with any framework or plain JavaScript.
- **Testing Ready**: Built-in mocking removes the need for external tools like MSW or Nock.
- **Smart Defaults**: Automatically detects localhost for debugging and handles JSON out of the box.
- **Performance**: Features like deduplication, caching, and rate limiting are built in to reduce redundant requests.


### When to Use Each Library

**GRAB is ideal if:**

- You need to build prototypes or MVPs rapidly.
- Bundle size is a top priority (e.g., mobile or embedded apps).
- You want straightforward HTTP requests without extra complexity.
- You work across multiple frameworks or with vanilla JavaScript.
- You require built-in mocking for development or testing.
- The team includes junior developers and a low learning curve is important.

**TanStack Query / SWR are better suited if:**

- You're developing complex React applications.
- Advanced caching and background data updates are needed.
- Sophisticated data synchronization is a requirement.
- You have a dedicated React development team.

**Axios is preferable if:**

- You need broad HTTP compatibility, including support for older browsers.
- You require advanced interceptor or middleware capabilities.
- Your app involves complex authentication flows.
- Bundle size is not a major concern.

**Alova is a good choice if:**

- You need offline-first features.
- You're building applications for multiple platforms.
- Advanced state management integration is required.


## Migration Guide

### From Axios

```javascript
// Axios
const response = await axios.get('/users', { params: { page: 1 } });
const users = response.data;

// GRAB
const users = await grab('users', { page: 1 });
```

### From Fetch

```javascript
// Fetch
const response = await fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John' })
});
const user = await response.json();

// GRAB
const user = await grab('users', {
  method: 'POST',
  name: 'John'
});
```

### From TanStack Query

```javascript
// TanStack Query
const { data, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: () => fetch('/api/users').then(res => res.json())
});

// GRAB
const [users, setUsers] = useState({ data: null, isLoading: false, error: null });
useEffect(() => {
  grab('users', { response: users });
  setUsers({...users});
}, []);
```
