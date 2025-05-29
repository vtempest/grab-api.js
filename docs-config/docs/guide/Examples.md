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


### Global Defaults Configuration

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
grab.defaults.baseURL = 'https://api.myapp.com/v1';
grab.defaults.headers = {
  'Authorization': 'Bearer your-token-here'
};
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
grab.defaults.onBeforeRequest = (path, response, params, fetchParams) => {
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

### Proxy Agent

```javascript
import { HttpsProxyAgent } from 'https-proxy-agent';

const agent = new HttpsProxyAgent('http://username:password@proxyhost:port');
let res = await grab("/path", { agent })
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


### Mock Server for Testing


```javascript
// Setup mock responses for testing
grab.mock.users = {
  response: [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ],
  delay: 1 // 1 second delay to simulate network
};

grab.mock['products/search'] = {
  response: (params) => ({
    results: [
      { id: 1, name: `Product matching "${params.query}"`, price: 29.99 },
      { id: 2, name: `Another product for "${params.query}"`, price: 19.99 }
    ],
    total: 2
  }),
  method: 'POST',
  delay: 0.5
};

// Now your API calls will use mock data
const users = await grab('users'); // Returns mock user data



// Mock with conditional responses
grab.mock['auth/login'] = {
  response: (params) => {
    if (params.email === 'admin@example.com' && params.password === 'admin123') {
      return {
        success: true,
        token: 'mock-jwt-token-12345',
        user: { id: 1, name: 'Admin User', role: 'admin' }
      };
    } else {
      return {
        success: false,
        error: 'Invalid credentials'
      };
    }
  },
  method: 'POST',
  delay: 1
};

// Error simulation
grab.mock['users/create'] = {
  response: (params) => {
    if (!params.email) {
      throw new Error('Email is required');
    }
    return { id: Date.now(), ...params, created: true };
  },
  method: 'POST'
};
```


### Unit Tests with Jest

```javascript
// setup-tests.js
import { grab } from 'grab-api.js';

// Setup global mocks for testing
beforeEach(() => {
  // Clear previous mocks
  grab.mock = {};
  grab.log = [];
});

// user.test.js
import { grab } from 'grab-api.js';

describe('User API', () => {
  test('should fetch user data', async () => {
    // Setup mock
    grab.mock.users = {
      response: { id: 1, name: 'Test User', email: 'test@example.com' }
    };

    const result = await grab('users');
    
    expect(result.id).toBe(1);
    expect(result.name).toBe('Test User');
  });

  test('should handle user creation', async () => {
    grab.mock.users = {
      response: (params) => ({
        id: 123,
        ...params,
        created: true
      }),
      method: 'POST'
    };

    const newUser = await grab('users', {
      method: 'POST',
      name: 'John Doe',
      email: 'john@example.com'
    });

    expect(newUser.name).toBe('John Doe');
    expect(newUser.created).toBe(true);
  });

  test('should handle errors', async () => {
    grab.mock.users = {
      response: () => {
        throw new Error('User not found');
      }
    };

    const result = await grab('users');
    expect(result.error).toBe('User not found');
  });
});
```

