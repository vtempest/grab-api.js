import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

## Basic Examples

### Basic Import

```bash npm2yarn
npm install grab-api.js
```

```bash npm2yarn
bun i grab-api.js
```

```javascript
import grab from 'grab-api.js';
```


### Import with TypeScript Types

This supports tooltips and autocomplete by adding types globally.

```javascript
import 'grab-api.js/global'
import grab from 'grab-api.js';
```



## Basic Examples

### Simple GET Request

```javascript
// Basic GET request
const user = await grab('user/123');
console.log(user); // { id: 123, name: "John Doe", ... }

// With query parameters
const searchResults = await grab('search', {
  query: 'javascript',
  page: 1,
  limit: 10
});
```

### POST Request with Body

```javascript
// Create a new user
const newUser = await grab('users', {
  method: 'POST',
  name: 'Jane Doe',
  email: 'jane@example.com',
  age: 25
});
```

### Reactive Loading Status


<Tabs>
<TabItem value="react" label="React">

```jsx
import React, { useState } from 'react';
import { grab } from 'grab-api.js';

function UserProfile() {
  const [userState, setUserState] = useState({
    data: null,
    isLoading: false,
    error: null
  });

  const loadUser = async (userId) => {
    await grab(`users/${userId}`, {
      response: userState,
      method: 'GET'
    });
    setUserState({...userState}); // Trigger re-render
  };

  return (
    <div>
      {userState.isLoading && <div>Loading...</div>}
      {userState.error && <div>Error: {userState.error}</div>}
      {userState.data && (
        <div>
          <h2>{userState.data.name}</h2>
          <p>{userState.data.email}</p>
        </div>
      )}
      <button onClick={() => loadUser(123)}>
        Load User
      </button>
    </div>
  );
}
```

---


</TabItem>

<TabItem value="svelte" label="Svelte">

```javascript 
<script>
  import { grab } from 'grab-api.js';
  
  let searchResults = $state({
    results: [],
    isLoading: false,
    error: null
  });

  async function searchProducts(query) {
    await grab('products/search', {
      response: searchResults,
      method: 'POST',
      query: query,
      category: 'electronics'
    });
  }
</script>

<input 
  type="text" 
  on:input={(e) => searchProducts(e.target.value)}
  placeholder="Search products..." 
/>

{#if searchResults.isLoading}
  <div class="loading">Searching...</div>
{:else if searchResults.error}
  <div class="error">{searchResults.error}</div>
{:else if searchResults.results}
  <div class="results">
    {#each searchResults.results as product}
      <div class="product-card">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
    {/each}
  </div>
{/if}
```

</TabItem>

<TabItem value="vue3" label="Vue 3">

```vue
<template>
  <div>
    <input 
      v-model="searchTerm" 
      @input="searchUsers"
      placeholder="Search users..."
    />
    
    <div v-if="userResults.isLoading" class="loading">
      Loading users...
    </div>
    
    <div v-else-if="userResults.error" class="error">
      {{ userResults.error }}
    </div>
    
    <div v-else class="user-list">
      <div 
        v-for="user in userResults.users" 
        :key="user.id"
        class="user-card"
      >
        {{ user.name }} - {{ user.email }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { grab } from 'grab-api.js';

const searchTerm = ref('');
const userResults = reactive({
  users: [],
  isLoading: false,
  error: null
});

const searchUsers = async () => {
  if (searchTerm.value.length < 2) return;
  
  await grab('users/search', {
    response: userResults,
    query: searchTerm.value,
    status: 'active'
  });
};
</script>
```

</TabItem>
</Tabs>

## Advanced Features

### Pagination with Infinite Scroll

```javascript
let productList = {
  products: [],
  isLoading: false,
};

// Load first page
async function loadResults(){
  await grab('products', {
    response: productList,
    paginateResult: 'products', // Key to append results to
    paginateKey: 'page',        // Parameter name for page number
    limit: 20
  });
}

// Infinite scroll implementation
const setupInfiniteScroll = (e) =>
  e.addEventListener('scroll', () => 
    e.innerHeight + e.scrollY >= e.offsetHeight - 1000 && loadResults() );

setupInfiniteScroll(document.getElementById("results"))


```


### Debounced Search

```javascript
// Utility function for debouncing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounced search implementation
const debouncedSearch = debounce(async (query) => {
  if (query.length < 2) return;
  
  await grab('search', {
    response: searchResults,
    query: query,
    cancelOngoingIfNew: true // Cancel previous searches
  });
}, 300); // Wait 300ms after user stops typing

// Usage in input handler
function handleSearchInput(event) {
  debouncedSearch(event.target.value);
}
```

### Request Caching

```javascript
// Enable caching for static data
const categories = await grab('categories', { 
  cache: true 
});

// Subsequent calls return cached data
const categoriesAgain = await grab('categories', { 
  cache: true 
}); // Instant response from cache
```

### Rate Limiting

```javascript
// Prevent spam requests
let searchResults = {};

async function searchWithRateLimit(query) {
  await grab('search', {
    response: searchResults,
    query: query,
    rateLimit: 2 // Wait 2 seconds between requests
  });
}

// Multiple rapid calls will be rate limited
searchWithRateLimit('python');     // Executes immediately  
searchWithRateLimit('golang');   // fails, needs to wait
```

### Instance with Separate Defaults 

```javascript
// separate defaults, headers, and interceptors for a third-party API
const grabGoogleAPI = grab.instance({
    headers: {'Authorization': 'Bearer token'},
    baseURL: 'https://api.google.com/v1/',
    debug: true
});
const data = await grabGoogleAPI('/api/endpoint');
```


### Request Cancellation

```javascript
let currentSearch = {};

async function searchProducts(query) {
  // Cancel previous search when new one starts
  await grab('products/search', {
    response: currentSearch,
    query: query,
    cancelOngoingIfNew: true // Default behavior
  });
}

// Prevent new requests if one is ongoing
async function preventDuplicateRequests(userId) {
  await grab(`users/${userId}`, {
    cancelNewIfOngoing: true // Prevents duplicate requests
  });
}
```

### Global Configuration

```javascript
// Set defaults for all requests
grab('', {
  setDefaults: true,
  baseURL: 'https://api.myapp.com/v1',
  timeout: 30, // 30 seconds
  debug: true,
  rateLimit: 1, // 1 second between requests
  cache: false,
  cancelOngoingIfNew: true,
  headers: {
    'Authorization': 'Bearer your-token-here',
    'X-API-Key': 'your-api-key'
  }
});

// Or set directly
grab.default.baseURL = 'https://api.myapp.com/v1';
grab.default.headers = {
  'Authorization': 'Bearer your-token-here'
};
```

### Error Handling and Retry

```javascript
let apiData = {};

// Automatic retry on failure
await grab('unreliable-endpoint', {
  response: apiData,
  retryAttempts: 3, // Retry 3 times on failure
  timeout: 10       // 10 second timeout
});

// Manual error handling
try {
  const result = await grab('api/data');
  console.log('Success:', result);
} catch (error) {
  if (error.message.includes('timeout')) {
    console.log('Request timed out');
  } else if (error.message.includes('rate limit')) {
    console.log('Too many requests');
  } else {
    console.log('Other error:', error.message);
  }
}
```

### Request Hooks and Interceptors

```javascript
// Global request interceptor
grab.default.onBeforeRequest = (path, response, params, fetchParams) => {
  // Add authentication header
  fetchParams.headers.Authorization = `Bearer ${getAuthToken()}`;
  
  // Log all requests
  console.log(`Making request to: ${path}`, params);
  
  // Modify request data
  if (params.userId) {
    params.user_id = params.userId;
    delete params.userId;
  }
  
  return [path, response, params, fetchParams];
};

function getAuthToken() {
  return localStorage.getItem('authToken') || '';
}
```

## Real-World Examples

### Authentication Flow

```javascript
// Login component
class AuthService {
  constructor() {
    this.user = { isLoading: false, data: null, error: null };
  }

  async login(email, password) {
    const result = await grab('auth/login', {
      method: 'POST',
      response: this.user,
      email,
      password
    });

    if (result.token) {
      localStorage.setItem('authToken', result.token);
      grab.default.headers = {
        ...grab.default.headers,
        'Authorization': `Bearer ${result.token}`
      };
    }

    return result;
  }

  async logout() {
    await grab('auth/logout', { method: 'POST' });
    localStorage.removeItem('authToken');
    delete grab.default.headers.Authorization;
    this.user.data = null;
  }
}

const auth = new AuthService();
```

### File Upload

```javascript
async function uploadFile(file, onProgress) {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await grab('/api/upload', {
    method: 'POST',
    body: formData,
    headers: {
      'Authorization': `Bearer ${getAuthToken()}`
    }
  });
  
}

// Alternative: Convert file to base64 for JSON API
async function uploadFileAsJSON(file) {
  const base64 = await fileToBase64(file);
  
  return await grab('files/upload', {
    method: 'POST',
    filename: file.name,
    content: base64,
    mimeType: file.type
  });
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = error => reject(error);
  });
}
```

### Proxy Agent

```javascript
import { HttpsProxyAgent } from 'https-proxy-agent';

const agent = new HttpsProxyAgent('http://username:password@proxyhost:port');
let res = await grab("/path", { agent })
```

### Real-time Data Updates

```javascript
// Polling for real-time updates
class LiveDataService {
  constructor() {
    this.data = { items: [], isLoading: false };
    this.pollInterval = null;
  }

  startPolling(intervalMs = 5000) {
    this.pollInterval = setInterval(async () => {
              await grab('live-data', {
        response: this.data,
        cache: false,
        timestamp: Date.now() // Prevent caching
      });
    }, intervalMs);
  }

  stopPolling() {
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
      this.pollInterval = null;
    }
  }
}

const liveData = new LiveDataService();
liveData.startPolling(3000); // Poll every 3 seconds
```

### E-commerce Cart Example

```javascript
class ShoppingCart {
  constructor() {
    this.cart = {
      items: [],
      total: 0,
      isLoading: false,
      error: null
    };
    this.loadCart();
  }

  async loadCart() {
    await grab('cart', {
      response: this.cart,
      cache: true
    });
  }

  async addItem(productId, quantity = 1) {
    await grab('cart/add', {
      method: 'POST',
      response: this.cart,
      productId,
      quantity
    });
  }

  async removeItem(itemId) {
    await grab(`cart/remove/${itemId}`, {
      method: 'DELETE',
      response: this.cart
    });
  }

  async updateQuantity(itemId, quantity) {
    await grab(`cart/update/${itemId}`, {
      method: 'PATCH',
      response: this.cart,
      quantity
    });
  }

  async checkout(paymentData) {
    const result = await grab('cart/checkout', {
      method: 'POST',
      ...paymentData,
      rateLimit: 5 // Prevent double-clicking checkout
    });
    
    if (result.success) {
      this.cart.items = [];
      this.cart.total = 0;
    }
    
    return result;
  }
}

// Usage in React component
function CartComponent() {
  const [cart] = useState(new ShoppingCart());
  const [cartState, setCartState] = useState(cart.cart);

  useEffect(() => {
    const interval = setInterval(() => {
      setCartState({...cart.cart}); // Update UI when cart changes
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {cartState.isLoading ? (
        <div>Loading cart...</div>
      ) : (
        <div>
          <h2>Shopping Cart ({cartState.items.length} items)</h2>
          {cartState.items.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button onClick={() => cart.removeItem(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            Total: ${cartState.total}
          </div>
          <button 
            onClick={() => cart.checkout({ method: 'credit_card' })}
            disabled={cartState.items.length === 0}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
```

