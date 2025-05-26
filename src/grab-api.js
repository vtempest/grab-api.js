/**
 * ### GRAB: General Request APIs from Browser
 * ![grabAPILogo](https://i.imgur.com/TE7jBZm.png)
 * 
 * 1. **Data Retrieval**: Fetches data from server APIs using JSON parameters and returns JSON responses or error objects
 * 2. **Request/Response Format**: Standardized JSON communication for both input parameters and output data
 * 3. **Automatic Loading States**: Sets `isLoading` to `true` during data fetching operations and `false` upon completion
 * 4. **Mock Server Support**: Configure `window.grabMockServer` for development and testing environments
 * 5. **Concurrent Request Handling**: Cancels duplicate or overlapping requests automatically
 * 6. **Timeout Configuration**: Customizable request timeout settings
 * 7. **Rate Limiting**: Built-in rate limiting to prevent API abuse
 * 8. **Debug Logging**: Comprehensive logging system for request monitoring
 * 9. **Request History**: Stores all request and response data in global `grabLog` object
 * 10. **Pagination Support**: Built-in pagination handling for large datasets
 * 11. **Environment Configuration**: Configurable base URLs for development and production environments
 * 12. **Frontend Caching**: Intelligent caching system that prevents redundant API calls for repeat requests
 * 13. **Modular Design**: Single, flexible function that can be called from any part of your application.
 * 14. **Framework Agnostic**: No dependency on React hooks or component lifecycle - works with any JavaScript framework
 * 15. **Universal Usage**:  More flexible than TanStack Query - works outside component initialization, 
 * 16. **Minimalist Single Function**: Less boilerplate and complexity than axios, SuperAgent, Got, Alova
 * 
 * @param {string} path The path in the API after base url
 * @param {object} response Pre-initialized object to store the response in,
 *  isLoading and error are also set on this object.
 * @param {object} [options={}] Request params for GET or POST and more options
 * @param {string} [options.method] default="GET" The HTTP method to use
 * @param {boolean} [options.cancelPrevious]  default=true Cancel previous requests to same path
 * @param {boolean} [options.cancelIfOngoing] default=false Cancel if a request to path is in progress
 * @param {boolean}[options.cache] default=false Whether to cache the request and from frontend cache
 * @param {boolean} [options.debug] default=false Whether to log the request and response
 * @param {number} [options.timeout] default=20 The timeout for the request in seconds
 * @param {number} [options.rateLimit] default=0 If set, how many seconds to wait between requests
 * @param {string} [options.paginateResult] default=null The key to paginate result data by
 * @param {string} [options.paginateKey] default="page" The key to paginate the request by
 * @param {string} [options.baseURL] default='/api/' base url prefix, override with SERVER_API_URL env
 * @param {boolean} [options.setDefaults] default=false Pass this with options to set
 *  those options as defaults for all requests.
 * @param {any} *
 * @returns {Promise<Object>} The response from the server API
 * @author [vtempest (2025)](https://github.com/vtempest/grab-api)
 * @example 
  import { grab } from "grab-api.js";
  let responseData = $state({}) as {
      results: Array<{title:string}>,
      isLoading: boolean,
      error: string,
  };
   
  await grab('search', responseData, {
    query: "search words",
    method: 'POST'
  })
  //in svelte component
  {#if responseData.results}
      {responseData.results}
  {:else if responseData.isLoading}
      ...
  {:else if responseData.error}
      {responseData.error}
  {/if}

  //Setup Mock testing server, response is object or function
  window.grabMockServer["search"] = {
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
    cancelPrevious: true,
    cancelIfOngoing: true,
  });
 */
export async function grab(path, response = {}, options = {}) {
  try {
    // Destructure options with defaults, merging with any globally set defaults
    let {
      headers,
      method = "GET",
      cache = false, // Enable/disable frontend caching
      timeout = 20, // Request timeout in seconds
      baseURL = (typeof process !== "undefined" &&
        process?.env?.SERVER_API_URL) ||
        "/api/", // Use env var or default to /api/
      cancelPrevious = true, // Cancel previous request for same path
      cancelIfOngoing = false, // Don't make new request if one is ongoing
      rateLimit = 0, // Minimum seconds between requests
      debug = window?.location?.hostname?.includes("localhost"), // Auto-enable debug on localhost
      paginateResult = null, // Key to paginate in response
      paginateKey = "page", // Request param for pagination
      setDefaults = false, // Set these options as defaults for future requests
      retryOnError = false, // Retry failed requests once
      ...body // All other params become request body/query
    } = { ...window.grabDefaults, ...options };

    // Store options as defaults if setDefaults flag is true
    if (options?.setDefaults) {
      window.grabDefaults = { ...options, setDefaults: undefined };
      return {};
    }

    // Initialize response object if not provided
    if (!response) response = {};

    // Initialize tracking for this request path
    let logEntry = grabLog;
    if (!(path in grabLog)) {
      grabLog[path] = {
        requestData: body || {},
      };
    }

    // Check if this is a repeat request by comparing params
    if (grabLog[path].requestData)
      grabLog[path].requestData[paginateKey] = undefined;
    const isRepeatRequest =
      JSON.stringify(grabLog[path].requestData) == JSON.stringify(body);

    // Handle response clearing/caching based on pagination
    if (!paginateKey) {
      // Return cached response if enabled and request is identical
      if (cache && isRepeatRequest) {
        for (let key of Object.keys(grabLog[path].responseData))
          response[key] = grabLog[path].responseData[key];
        return response;
      }

      // Clear previous response data
      for (let key of Object.keys(response)) response[key] = undefined;
    } else {
      // Handle pagination - track current page and append results
      var pageNumber = grabLog[path].currentPage || body?.[paginateKey] || 0;

      if (!isRepeatRequest) {
        response[paginateResult] = [];
        pageNumber = 0;
      }
      grabLog[path].currentPage = ++pageNumber;
      body[paginateKey] = pageNumber;
    }

    // Set loading state
    response.isLoading = true;

    // Enforce rate limiting if enabled
    if (
      rateLimit > 0 &&
      grabLog[path]?.lastFetchTime &&
      grabLog[path]?.lastFetchTime > Date.now() - 1000 * rateLimit
    )
      throw new Error("Fetch rate limit exceeded");

    // Handle request cancellation logic
    if (grabLog[path]?.controller && isRepeatRequest)
      if (cancelPrevious) grabLog[path].controller.abort();
      else if (cancelIfOngoing) return { isLoading: true };

    // Setup new request tracking
    grabLog[path].lastFetchTime = Date.now();
    grabLog[path].controller = new AbortController();

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
      signal: cancelPrevious
        ? grabLog[path]?.controller?.signal
        : AbortSignal.timeout(timeout * 1000),
    };

    // Format request body/query params based on method
    let paramsGETRequest = "";
    if (["POST", "PUT", "PATCH"].includes(method))
      fetchParams.body = JSON.stringify(body);
    else paramsGETRequest = "?" + new URLSearchParams(body).toString();

    // Handle mock server responses if configured
    let responseData = null,
      startTime = new Date(),
      mockHandler = grabMockServer?.[path];

    if (
      mockHandler &&
      mockHandler.method == method &&
      (!mockHandler.params ||
        JSON.stringify(body) == JSON.stringify(mockHandler.params))
    ) {
      if (mockHandler.delay > 0)
        await new Promise((resolve) => setTimeout(resolve, mockHandler.delay));

      responseData = mockHandler.response;
      if (typeof responseData === "function") responseData = responseData(body);
    } else {
      // Make actual API request if no mock
      responseData = await fetch(baseURL + path + paramsGETRequest, fetchParams)
        .catch((e) => {
          throw new Error(e);
        })
        .then((res) => res.text());

        // Parse response based on content type
        if (responseData.startsWith("{")) responseData = JSON.parse(responseData);
        else if (responseData.includes("error")) throw new Error(responseData);
        else return responseData;
      }


    // Clear loading state
    if (response) response.isLoading = false;

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
          ((Number(new Date()) - Number(startTime)) / 1000).toFixed(1) +
          "s\nResponse: " +
          printStructureJSON(responseData)
      );
      // allows user to expand and collapse the object in console
      console.log(responseData);
    }

    // Update response object with results, handling pagination
    for (let key of Object.keys(responseData))
      response[key] =
        paginateResult == key && response[key]?.length
          ? [...response[key], ...responseData[key]]
          : responseData[key];

    // Store request/response data for future reference
    grabLog[path].controller = undefined;
    grabLog[path].responseData = response;
    grabLog[path].requestData = body || {};

    return response;
  } catch (error) {
    // Handle errors, with optional retry
    if (options.retryOnError)
      return await grab(path, response, { ...options, retryOnError: false });

    if (response) {
      if (!error.message.includes("signal")) response.error = error.message;
      response.isLoading = false;
    }
    if (path in grabLog) grabLog[path].error = error.message;
    return { error: error.message, isLoading: false };
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
      if (value.length === 0) return "Array<unknown>";
      return `Array<${getType(value[0])}>`;
    } else if (value === null) {
      return "null";
    } else if (typeof value === "object") {
      return printStructureJSON(value);
    } else {
      return typeof value;
    }
  }

  if (typeof obj !== "object" || obj === null) {
    return getType(obj);
  }

  let result = "{ ";
  const keys = Object.keys(obj);
  keys.forEach((key, index) => {
    result += `${key}: ${getType(obj[key])}`;
    if (index < keys.length - 1) {
      result += ", ";
    }
  });
  result += " }";
  return result;
}

//add globals to window
if (typeof window !== "undefined") {
  const grabLog = (window.grabLog = []);
  const grabMockServer = (window.grabMockServer = {});
  window.grabDefaults = {};
}
