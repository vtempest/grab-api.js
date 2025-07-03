---
title: Request Stategies
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

### Install & Import 

```bash npm2yarn
npm install grab-api.js
```

```bash npm2yarn
bun i grab-api.js
```

```javascript
import grab from "grab-api.js";
```


### Basic Request

```javascript
// Basic GET request
grab("user").then(log); // { id: 123, name: "John Doe", ... }

// GET with query parameters
const searchResults = await grab("search", {
  query: "javascript",
  page: 1,
  limit: 10,
});

// POST with body
await grab("users", {
  post: true, //shorthand for method: "POST"
  email: "jane@example.com",
  age: 25,
});
```

### Reactive Loading Status

<Tabs>
<TabItem value="react" label="React">

```jsx
import React, { useState } from "react";
import grab from "grab-api.js";

function UserProfile() {
  const [userState, setUserState] = useState<Partial<{ 
    name: string; 
    email: string;
    isLoading: boolean;
    error: string; 
  }>>({})

  await grab(`user`, {
    response: setUserState
  });

  return (
    <div>
      {userState.isLoading && <div>Loading...</div>}
      {userState.error && <div>Error: {userState.error}</div>}
      {userState && (
        <div>
          <h2>{userState.name}</h2>
          <p>{userState.email}</p>
        </div>
      )}
    </div>
  );
}
```

</TabItem>

<TabItem value="svelte" label="Svelte">

```javascript
<script>
  import grab from 'grab-api.js';


  let searchResults = $state({
    results: [],
    isLoading: false,
    error: null
  });

  async function searchProducts(query) {
    await grab('products/search', {
      response: searchResults,
      post: true,
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
```javascript
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
import grab from 'grab-api.js';
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
// set directly
grab.defaults.baseURL = "https://api.myapp.com/v1";
grab.defaults.headers = {
  Authorization: "Bearer your-token-here",
};

// method 2: Set defaults for all requests
grab("", {
  setDefaults: true,
  baseURL: "https://api.myapp.com/v1",
  timeout: 30, // 30 seconds
  debug: true,
  rateLimit: 1, // 1 second between requests
  cache: false,
  cancelOngoingIfNew: true,
  headers: {
    Authorization: "Bearer your-token-here",
  },
});

```

### Instance with Separate Defaults

```javascript
// separate defaults, headers, and interceptors for a third-party API
const grabGoogleAPI = grab.instance({
  headers: { Authorization: "Bearer 9e9wjeffkwf0sf" },
  baseURL: "https://api.google.com/v1/",
  debug: true,
});
const data = await grabGoogleAPI("/api/endpoint");

// Options Order of Precedence: Request Call > Instance > User Globals > Package Defaults
```

### TypeScript ToolTips & Error Check on Request & Response

```javascript
type User = { 
  /** Name of the user  */ 
  name: string;
  /** Age of the user  */ 
  age: number;
};

type RequestParams = { 
  /** Query String  to search for */ 
  q : string;
  /** Category of search  */
  category?: "news" | "general";

};

const result = await grab<User, RequestParams>('test-path', {
  q: " react",
  category: "general"
});

log(result.name)

// instant error highlight and description tooltips over "category" and "name"

```


### Pagination with Infinite Scroll

```javascript
let productList = $state({}) as {
  products: Array<{name:string}>,
  isLoading: boolean
}

await grab("products", {
  response: productList,
  infiniteScroll: ["page", "products", ".results-container"]
});

<div class="results-container">
  {productList.products.map(product => (
    <div className="product-item">
      <h3>{product.name}</h3>
    </div>
  ))}
  {productList.isLoading && <div className="loading">Loading more products...</div>}
</div>

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

  await grab("search", {
    response: searchResults,
    query: query,
    cancelOngoingIfNew: true, // Cancel previous searches
  });
}, 300); // Wait 300ms after user stops typing

// Usage in input handler
function handleSearchInput(event) {
  debouncedSearch(event.target.value);
}
```

### Client Cache in User Memory

```javascript
// Enable caching for static data
const categories = await grab("categories", {
  cache: true,
});

const categoriesAgain = await grab("categories", {
  cache: true,
}); 
// Instant response from frontend cache, no server call
```

### Rate Limiting

```javascript
// Prevent user's multi-click cascading requests
let searchResults = {};

async function searchWithRateLimit(query) {
  await grab("search", {
    response: searchResults,
    query: query,
    rateLimit: 2, // Wait 2 seconds between requests
  });
}
searchWithRateLimit("python"); // Executes immediately
searchWithRateLimit("golang"); // fails, needs to wait
```

### Duplicate Cancellation

```javascript
let currentSearch = {};

async function searchProducts(query) {
  // Cancel previous search when new one starts
  await grab("products/search", {
    response: currentSearch,
    query: query,
    cancelOngoingIfNew: true, // Default behavior
  });
}

// Prevent new requests if one is ongoing
async function preventDuplicateRequests(userId) {
  await grab(`users/${userId}`, {
    cancelNewIfOngoing: true, // Prevents duplicate requests
  });
}
```

### Error Handling and Retry

```javascript
let apiData = {};

// Automatic retry on failure
await grab("unreliable-endpoint", {
  response: apiData,
  retryAttempts: 3, // Retry 3 times on failure
  timeout: 10, // 10 second timeout
});

// Manual error handling
try {
  const result = await grab("api/data");
  console.log("Success:", result);
} catch (error) {
  if (error.message.includes("timeout")) {
    console.log("Request timed out");
  } else if (error.message.includes("rate limit")) {
    console.log("Too many requests");
  } else {
    console.log("Other error:", error.message);
  }
}
```

### Request Hooks and Interceptors

```javascript
// Global request interceptor
grab.defaults.onRequest = (path, response, params, fetchParams) => {
  // Add authentication header
  fetchParams.headers.Authorization = `Bearer ervv0sf9vs0v0sv`;

  // Modify request data
  if (params.userId) {
    params.user_id = '2525';
  }

  return [path, response, params, fetchParams];
};

```

### Proxy

```javascript
//polyfill fetch with node-fetch
import fetch, { Headers, Request, Response } from 'node-fetch';

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
  globalThis.Headers = Headers;
  globalThis.Request = Request;
  globalThis.Response = Response;
}

//get proxy
import { HttpsProxyAgent } from "https-proxy-agent";
const agent = new HttpsProxyAgent("http://username:password@proxyhost:port");

let res = await grab("/path", { agent });
```

### File Upload

```javascript
const formData = new FormData();
formData.append("file", file);

const response = await grab("/api/upload", {
  post: true,
  body: formData,
  headers: {
    Authorization: `Bearer ${getAuthToken()}`,
  },
});

// Alternative: Convert file to base64 for JSON API
async function uploadFileAsJSON(file) {
  const base64 = await fileToBase64(file);

  return await grab("files/upload", {
    post: true,
    filename: file.name,
    content: base64,
    mimeType: file.type,
  });
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = (error) => reject(error);
  });
}
```

## Command Line Usage Examples

```bash
## install for CLi testing of your APIs
npm i -g grab.api.js

# use "grab" if installed or "npx grab-api.js" if not
grab https://api.example.com/download

# Basic request, no flag
npx grab-api.js https://api.example.com/download

# Request with params
npx grab-api.js https://api.example.com/download id=123 name=John

# Request with JSON payload
npx grab-api.js https://api.example.com/download '{"id":123,"name":"John"}'

# Request with --x flag (just executes once, no watching)
# - **`--x` or `-x` flag**: Simply executes the request/download once and exits—no file watching.
npx grab-api.js https://api.example.com/download --x

# Request with params and --x flag
npx grab-api.js https://api.example.com/download id=123 name=John --x
```



### Mock Server for Testing

```javascript
// Setup mock responses for testing
grab.mock.users = {
  response: [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ],
  delay: 1, // 1 second delay to simulate network
};

grab.mock["products/search"] = {
  response: (params) => ({
    results: [
      { id: 1, name: `Product matching "${params.query}"`, price: 29.99 },
      { id: 2, name: `Another product for "${params.query}"`, price: 19.99 },
    ],
    total: 2,
  }),
  post: true,
  delay: 0.5,
};

// Now your API calls will use mock data
const users = await grab("users"); // Returns mock user data

// Mock with conditional responses
grab.mock["auth/login"] = {
  response: (params) => {
    if (
      params.email === "admin@example.com" &&
      params.password === "admin123"
    ) {
      return {
        success: true,
        token: "mock-jwt-token-12345",
        user: { id: 1, name: "Admin User", role: "admin" },
      };
    } else {
      return {
        success: false,
        error: "Invalid credentials",
      };
    }
  },
  post: true,
  delay: 1,
};

// Error simulation
grab.mock["users/create"] = {
  response: (params) => {
    if (!params.email) {
      throw new Error("Email is required");
    }
    return { id: Date.now(), ...params, created: true };
  },
  post: true,
};
```

### Unit Tests with Jest

```javascript
// setup-tests.js
import grab from "grab-api.js";

// Setup global mocks for testing
beforeEach(() => {
  // Clear previous mocks
  grab.mock = {};
  grab.log = [];
});

// user.test.js
import grab from "grab-api.js";

describe("User API", () => {
  test("should fetch user data", async () => {
    // Setup mock
    grab.mock.users = {
      response: { id: 1, name: "Test User", email: "test@example.com" },
    };

    const result = await grab("users");

    expect(result.id).toBe(1);
    expect(result.name).toBe("Test User");
  });

  test("should handle user creation", async () => {
    grab.mock.users = {
      response: (params) => ({
        id: 123,
        ...params,
        created: true,
      }),
      post: true,
    };

    const newUser = await grab("users", {
      post: true,
      name: "John Doe",
      email: "john@example.com",
    });

    expect(newUser.name).toBe("John Doe");
    expect(newUser.created).toBe(true);
  });

  test("should handle errors", async () => {
    grab.mock.users = {
      response: () => {
        throw new Error("User not found");
      },
    };

    const result = await grab("users");
    expect(result.error).toBe("User not found");
  });
});
```
