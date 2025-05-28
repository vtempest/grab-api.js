
##  Comparison of HTTP Request Libraries


| Feature | GRAB | Axios | TanStack Query | SWR | Alova | SuperAgent | Apisauce |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Size | ✅ 2KB | ❌ 13KB | ❌ 39KB | ❌ 4.2KB | ⚠️ 4KB | ❌ 19KB | ❌ 15KB (with axios) |
| Zero Dependencies | ✅ Yes | ❌ No | ❌ No | ❌ No | ✅ Yes | ❌ No | ❌ Needs Axios |
| Framework Support | ✅ All frameworks | ✅ All frameworks | ⚠️ React-focused | ⚠️ React-focused | ✅ All frameworks | ✅ All frameworks | ✅ All frameworks |
| isLoading State Handling | ✅ Auto-managed | ❌ Manual | ✅ Yes | ✅ Yes | ✅ Yes | ❌ Manual | ❌ Manual |
| Auto JSON Handling | ✅ Automatic | ✅ Configurable | ❌ Manual | ❌ Manual | ✅ Automatic | ✅ Automatic | ✅ Automatic |
| Request Deduplication | ✅ Built-in | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No | ❌ No |
| Caching | ✅ Memory cache | ❌ No | ✅ Advanced | ✅ Advanced | ✅ Multi-level | ❌ No | ❌ No |
| Mock Testing | ✅ Easy setup | ❌ Needs MSW/etc | ❌ Needs MSW/etc | ❌ Needs MSW/etc | ⚠️ Basic | ❌ Needs separate lib | ❌ Needs separate lib |
| Rate Limiting | ✅ Built-in | ❌ Manual | ❌ Manual | ❌ Manual | ⚠️ Basic | ❌ Manual | ❌ Manual |
| Automatic Retry | ✅ Configurable | ⚠️ Via interceptors | ✅ Built-in | ✅ Built-in | ✅ Built-in | ✅ Built-in | ❌ Manual |
| Request Cancellation | ✅ Auto + manual | ✅ Manual | ✅ Automatic | ✅ Automatic | ✅ Manual | ✅ Manual | ✅ Manual |
| Pagination Support | ✅ Infinite scroll | ❌ Manual | ✅ Advanced | ⚠️ Basic | ✅ Built-in | ❌ Manual | ❌ Manual |
| TypeScript Support |  ✅ Excellent  | ✅ Excellent | ✅ Excellent | ✅ Excellent | ✅ Good | ✅ Good | ✅ Good |
| Interceptors | ✅ Advanced | ✅ Advanced | ⚠️ Limited | ⚠️ Limited | ✅ Advanced | ✅ Plugins | ✅ Transforms |
| Debug Logging | ✅ Colored output | ⚠️ Basic | ✅ DevTools | ✅ DevTools | ⚠️ Basic | ⚠️ Basic | ⚠️ Basic |
| Request History | ✅ Built-in | ❌ Manual | ✅ DevTools | ✅ DevTools | ❌ Manual | ❌ Manual | ❌ Manual |
| Easy Syntax | ✅ Minimal | ⚠️ Medium | ❌ High | ❌ High | ⚠️ Medium | ⚠️ Medium | ✅ Low |

### Key Strengths of GRAB

- **Simplicity**: One function covers all use cases, with no complex setup or configuration.
- **Lightweight**: At just 2KB, it's significantly smaller than most alternatives.
- **Instant Productivity**: Works seamlessly with any framework or plain JavaScript.
- **Testing Ready**: Built-in mocking removes the need for external tools like MSW or Nock.
- **Smart Defaults**: Automatically detects localhost for debugging and handles JSON out of the box.
- **Performance**: Features like deduplication, caching, and rate limiting are built in to reduce redundant requests.


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
const { data: users, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: () => fetch('/api/users').then(res => res.json()),
  staleTime: 5000,
  cacheTime: 10 * 60 * 1000, // 10 minutes
  retry: 3,
  onSuccess: (data) => {
    console.log('Users fetched:', data);
  },
  onError: (error) => {
    console.error('Failed to fetch users:', error);
  }
});

// With mutations
const mutation = useMutation({
  mutationFn: (newUser) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    }).then(res => res.json())
  },
  onSuccess: () => {
    queryClient.invalidateQueries(['users'])
  }
});

// GRAB
const [users, setUsers] = useState({});
useEffect(() => {
  grab('users', { response: users });
  setUsers({...users});
}, []);
```
