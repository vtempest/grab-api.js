/**
 * ### GRAB: Generate Request to API from Browser
 * ![grabAPILogo](https://i.imgur.com/qrQWkeb.png)
 * 
 * 1. **Data Retrieval**: Fetches data from server APIs using JSON parameters and returns JSON responses or error objects
 * 2. **Minimalist One Function**: 2Kb min.js less boilerplate complexity than axios, SuperAgent, Tanstack, Alova, SWR, TanStack, apisauce
 * 3. **Automatic Loading States**: Sets `isLoading` to `true` during data fetching operations and `false` upon completion
 * 4. **Mock Server Support**: Configure `window.grab.server` for development and testing environments
 * 5. **Concurrency Handling**: Cancel ongoing or new request automatically
 * 7. **Rate Limiting**: Built-in rate limiting to prevent API abuse
 * 6. **Timeout**: Customizable request timeout settings
 * 8. **Debug Logging**: Detailed colored log of JSON structure, response, request, timing
 * 9. **Request History**: Stores all request and response data in global `grabLog` object
 * 10. **Pagination Support**: Built-in pagination handling for large datasets
 * 11. **Environment Configuration**: Configurable base URLs for development and production environments
 * 12. **Frontend Caching**: Intelligent caching system that prevents redundant API calls for repeat requests
 * 13. **Modular Design**: Single, flexible function that can be called from any part of your application.
 * 14. **Framework Agnostic**: No dependency on React hooks or component lifecycle - works with any JavaScript framework
 * 15. **Universal Usage**:  More flexible than TanStack Query - works outside component initialization, 
 * 
 * @param {string} path The path in the API after base url
 * @param {object} response Pre-initialized object to store the response in,
 *  isLoading and error are also set on this object.
 * @param {object} [options={}] Request params for GET or POST and more options
 * @param {string} [options.method] default="GET" The HTTP method to use
 * @param {boolean} [options.cancelOngoingIfNew]  default=true Cancel previous requests to same path
 * @param {boolean} [options.cancelNewIfOngoing] default=false Cancel if a request to path is in progress
 * @param {boolean}[options.cache] default=false Whether to cache the request and from frontend cache
 * @param {boolean} [options.debug] default=false Whether to log the request and response
 * @param {number} [options.timeout] default=20 The timeout for the request in seconds
 * @param {number} [options.rateLimit] default=0 If set, how many seconds to wait between requests
 * @param {string} [options.paginateResult] default=null The key to paginate result data by
 * @param {string} [options.paginateKey] default="" The key to paginate the request by
 * @param {string} [options.baseURL] default='/api/' base url prefix, override with SERVER_API_URL env
 * @param {boolean} [options.setDefaults] default=false Pass this with options to set
 *  those options as defaults for all requests.
 * @param {any} *
 * @returns {Promise<Object>} The response from the server API
 * @author [vtempest (2025)](https://github.com/vtempest/grab-api)
 * @example 
  import { grab } from "grab-api.js";
  let res = $state({}) as {
      results: Array<{title:string}>,
      isLoading: boolean,
      error: string,
  };
   
  await grab('search', res, {
    query: "search words",
    method: 'POST'
  })
  //in svelte component
  {#if res.results}
      {res.results}
  {:else if res.isLoading}
      ...
  {:else if res.error}
      {res.error}
  {/if}

  //Setup Mock testing server, response is object or function
  window.grab.server["search"] = {
    response: (params) => {
      return { results: [{title:`Result about ${params.query}`}] };
    },
    method: "POST",
    params: {
      query: "search words"
    },
    delay : 1,
  };

  //set defaults for all requests
  grab("", {}, { 
    setDefaults: true,
    baseURL: "http://localhost:8080",
    timeout: 30,
    debug: true,
    rateLimit: 1,
    cache: true,
    cancelOngoingIfNew: true,
    cancelNewIfOngoing: true,
  });
 */
export async function grab(path, response = {}, options = {}) {
    let {
      headers,
      method = "GET",
      cache = false, // Enable/disable frontend caching
      timeout = 20, // Request timeout in seconds
      baseURL = (typeof process !== "undefined" && process?.env?.SERVER_API_URL) || "/api/", // Use env var or default to /api/
      cancelOngoingIfNew = true, // Cancel previous request for same path
      cancelNewIfOngoing = false, // Don't make new request if one is ongoing
      rateLimit = 0, // Minimum seconds between requests
      debug = window?.location?.hostname?.includes("localhost"), // Auto-enable debug on localhost
      paginateResult = null, // Key to paginate in response
      paginateKey = null, // Request param for pagination
      setDefaults = false, // Set these options as defaults for future requests
      retryOnError = false, // Retry failed requests once
      ...params // All other params become request params/query
    } = {
      // Destructure options with defaults, merging with any globally set defaults
      ...(window?.grab?.defaults || global?.grab?.defaults || {}),
      ...options,
    };

  try {
  
    // Store options as defaults if setDefaults flag is true
    if (options?.setDefaults) {
      window.grab.defaults = { ...options, setDefaults: undefined };
      return {};
    }

    // Initialize response object if not provided
    if (!response) response = {};

    let paramsAsText = JSON.stringify({...params, paginateKey: undefined});

    // Initialize tracking for this request path
    let priorRequest = grabLog?.find(
      e => e.request == paramsAsText && e.path == path
    );
    
    // Check if this is a repeat request by comparing params
    // if (priorRequest?.request)
    //   priorRequest.request[paginateKey] = undefined;
    const isRepeatRequest = priorRequest?.request == paramsAsText;

    // Handle response clearing/caching based on pagination
    if (!paginateKey) {
      // Return cached response if enabled and request is identical
      if (cache && isRepeatRequest) {
        for (let key of Object.keys(priorRequest.res))
          response[key] = priorRequest.res[key];
        return response;
      }

      // Clear previous response data
      for (let key of Object.keys(response)) response[key] = undefined;
    } else {
      // Handle pagination - track current page and append results
      let pageNumber = priorRequest?.currentPage + 1|| params?.[paginateKey] || 1;

      //clear response if not repeat request, new params
      if (!isRepeatRequest) {
        response[paginateResult] = [];
        pageNumber = 1;
      }

      //update current page on prior request
      if (priorRequest) 
        priorRequest.currentPage = pageNumber;
      params[paginateKey] = pageNumber;
    }

    // Set loading state
    response.isLoading = true;

    // Enforce rate limiting if enabled
    if (
      rateLimit > 0 &&
      priorRequest?.lastFetchTime &&
      priorRequest.lastFetchTime > Date.now() - 1000 * rateLimit
    )
      throw new Error("Fetch rate limit exceeded");

    // Handle request cancellation logic
    if (priorRequest?.controller && isRepeatRequest)
      if (cancelOngoingIfNew) priorRequest.controller.abort();
      else if (cancelNewIfOngoing) return { isLoading: true };

    // Setup new request tracking
    grabLog.unshift({
      path,
      request: paramsAsText,
      lastFetchTime: Date.now(),
      controller: new AbortController(),
    });

    // Configure fetch parameters
    const fetchParams = {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
      },
      body: null,
      redirect: "follow",
      cache: cache ? "force-cache" : "no-store",
      signal: cancelOngoingIfNew
        ? grabLog[0]?.controller?.signal
        : AbortSignal.timeout(timeout * 1000),
    };

    // Format request params/query params based on method
    let paramsGETRequest = "";
    if (["POST", "PUT", "PATCH"].includes(method))
      fetchParams.body = JSON.stringify(params);
    else paramsGETRequest = "?" + new URLSearchParams(params).toString();

    // Handle mock server responses if configured
    let res = null,
      startTime = new Date(),
      mockHandler = grab.server?.[path];

    if (
      mockHandler &&
      (!mockHandler.params || mockHandler.method == method) &&
      (!mockHandler.params ||
        paramsAsText == JSON.stringify(mockHandler.params))
    ) {
      await new Promise((resolve) =>
        setTimeout(resolve, mockHandler.delay * 1000 || 0)
      );

      res =
        typeof mockHandler.response === "function"
          ? mockHandler.response(params)
          : mockHandler.response;
    } else {
      // Make actual API request 
      res = await fetch(
        (!path.startsWith("http") && baseURL) + path + paramsGETRequest,
        fetchParams
      ).catch((e) => {
        throw new Error(e);
      });

      //get response type
      let type = res.headers.get("content-type");
      res = await (type ? type.includes("application/json")
        ? res.json()
        : type.includes("application/pdf") ||
          type.includes("application/octet-stream")
        ? res.blob()
        : res.text() : res.json() ).catch(e => {
          throw new Error("Error parsing response: " + e);
        });

      if (res?.startsWith && res?.startsWith("{")) res = JSON.parse(res);
    }

    // Clear loading state
    delete response.isLoading;
    const elapsedTime = (
      (Number(new Date()) - Number(startTime)) /
      1000
    ).toFixed(1);

    // Log debug information if enabled
    if (debug) {
      log(
        "Path:" +
          baseURL +
          path +
          paramsGETRequest +
          "\n" +
          JSON.stringify(options, null, 2) +
          "\nTime: " +
          elapsedTime +
          "s\nResponse: " +
          printStructureJSON(res)
      );
      // allows user to expand and collapse the object in console
      console.log(res);
    }

    //if not object, return 
    if (typeof res === "undefined") return;

    // Update response object with results, handling pagination
    for (let key of Object.keys(res))
      response[key] =
        paginateResult == key && response[key]?.length
          ? [...response[key], ...res[key]]
          : res[key];

    // Store request/response data for future reference
    grabLog.unshift({
      path,
      request: JSON.stringify({...params, paginateKey: undefined}),
      response,
      lastFetchTime: Date.now(),
    });

    return response;
  } catch (error) {
    log(
      "Error: " + error.message + "\nPath:" + baseURL + path + JSON.stringify(params),
      true,
      "color: red;"
    );

    // Handle errors, with optional retry
    if (options.retryOnError)
      return await grab(path, response, { ...options, retryOnError: false });
    // update error in response
    if (!error.message.includes("signal")) 
        response.error = error.message;
    delete response.isLoading;
    // update error in log
    grabLog?.unshift({
      path,
      request: JSON.stringify(params),
      error: error.message,
    });
    return response;
  }
}

/**
 * Logs messages to the console with custom styling,
 * showing debug output in development and standard logs in production.
 * Pretty print JSON with description of structure layout.
 * @param {string|object} message - The message to log. If an object is provided, it will be stringified.
 * @param {boolean} [hideInProduction] -  default = auto-detects based on hostname.
 *  If true, uses `console.debug` (hidden in production). If false, uses `console.log`.
 * @param {string} [style] default="color: blue; font-size: 15px;"] - CSS style string for the console output.
 */
export function log(
  message,
  hideInProduction = undefined,
  style = "color: blue; font-size: 14px;"
) {
  if (typeof hideInProduction === "undefined")
    hideInProduction = window?.location.hostname.includes("localhost");
  // pretty print JSON with description of structure layout
  if (typeof message === "object")
    message =
      printStructureJSON(message) + "\n\n" + JSON.stringify(message, null, 2);

  if (hideInProduction) console.debug((style ? "%c" : "") + message, style);
  else console.log((style ? "%c" : "") + message, style);
}

/**
 * Generates TypeDoc-like string of layout of nested JSON object.
 * @param {Object} obj - The JSON object to describe.
 * @returns {string} A string of the object's structure.
 * @example { name: string, age: number, pets: Array<string>}
 */
export function printStructureJSON(obj) {
  function getType(value) {
    if (Array.isArray(value)) {
      return '['+getType(value[0]) + ']';
    } else if (value === null) {
      return "null";
    } else if (typeof value === "object") {
      return printStructureJSON(value);
    } else if (typeof value === "string") {
      return `""`;
    } else if (typeof value === "boolean") {
      return `bool`;
    } else {
      return typeof value;
    }
  }

  if (typeof obj !== "object" || obj === null) {
    return getType(obj);
  }

  let result = "{";
  const keys = Object.keys(obj);
  keys.forEach((key, index) => {
    result += `${key}: ${getType(obj[key])}`;
    if (index < keys.length - 1) {
      result += ", ";
    }
  });
  result += "}";
  return result;
}

const grabLog = [];
const grabServer = {};
const grabDefaults = {};

// Add globals to window in browser, or global in Node.js
if (typeof window !== "undefined") {
  window.grab = grab;
  window.log = log;
  window.grabLog = grabLog;
  window.grab.server = grabServer;
  window.grab.defaults = grabDefaults;
} else if (typeof global !== "undefined") {
  global.grabLog = grabLog;
  global.grab.server = grab.server;
  global.grab.defaults = grab.defaults;
  global.grab = grab;
  global.log = log;
}

export default grab;
