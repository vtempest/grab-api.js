/**
 * TODO
 *  - pagination working
 *  - react tests
 *  - progress
 *  - grab error popup and dev tool
 *  - tests in stackblitz
 *  - loading icons
 *  - repeat every
 *  - show net log in alert
 *  - refetch on stale, on window refocus, on network
 *  - scroll position recovery
 */
/**
 * ### GRAB: Generate Request to API from Browser
 * ![GrabAPILogo](https://i.imgur.com/qrQWkeb.png)
 * **GRAB is the FBEST Request Manager: Functionally Brilliant, Elegantly Simple Tool**
 * 1. **One Function**: 3Kb min, 0 dependencies, minimalist syntax, [more features than top alternatives](https://grab.js.org/guide/Comparisons)
 * 2. **Auto-JSON Convert**: Pass parameters and get response or error in JSON, handling other data types as is.
 * 3. **isLoading Status**: Sets `.isLoading=true` on the pre-initialized response object so you can show a "Loading..." in any framework
 * 4. **Debug Logging**: Adds global `log()` and prints colored JSON structure, response, timing for requests in test.
 * 5. **Mock Server Support**: Configure `window.grab.mock` for development and testing environments
 * 6. **Cancel Duplicates**: Prevent this request if one is ongoing to same path & params, or cancel the ongoing request.
 * 7. **Timeout & Retry**: Customizable request timeout, default 20s, and auto-retry on error
 * 8. **DevTools**: `Ctrl+I` overlays webpage with devtools showing all requests and responses, timing, and JSON structure.
 * 9. **Request History**: Stores all request and response data in global `grab.log` object
 * 10. **Pagination Infinite Scroll**: Built-in pagination for infinite scroll to auto-load and merge next result page, with scroll position recovery.
 * 11. **Base URL Based on Environment**: Configure `grab.defaults.baseURL` once at the top, overide with `SERVER_API_URL` in `.env`.
 * 12. **Frontend Cache**: Set cache headers and retrieve from frontend memory for repeat requests to static data.
 * 13. **Regrab On Error**: Regrab on timeout error, or on window refocus, or on network change, or on stale data.
 * 14. **Framework Agnostic**: Alternatives like TanStack work only in component initialization and depend on React & others.
 * 15. **Globals**: Adds to window in browser or global in Node.js so you only import once: `grab()`, `log()`, `grab.log`, `grab.mock`, `grab.defaults`
 * 16. **TypeScript Tooltips**: Developers can hover over option names and autocomplete TypeScript.
 * 17. **Request Stategies**: [🎯 Examples](https://grab.js.org/guide/Examples) show common stategies like debounce, repeat, proxy, unit tests, interceptors, file upload, etc
 * 18. **Rate Limiting**: Built-in rate limiting to prevent multi-click cascading responses, require to wait seconds between requests.
 * 19. **Repeat**: Repeat request this many times, or repeat every X seconds to poll for updates.
 * 20. **Loading Icons**: Import from `grab-api.js/icons` to get enhanced animated loading icons.
 *
 * @param {string} path The full URL path OR relative path on this server after `grab.defaults.baseURL`
 * @param {object} [options={}] Request params for GET or body for POST/PUT/PATCH and utility options
 * @param {string} [options.method] default="GET" The HTTP method to use
 * @param {object} [options.response] Pre-initialized object which becomes response JSON, no need for `.data`.
 *  isLoading and error may also be set on this object. May omit and use return if load status is not needed.
 * @param {boolean} [options.cancelOngoingIfNew]  default=true Cancel previous requests to same path
 * @param {boolean} [options.cancelNewIfOngoing] default=false Cancel if a request to path is in progress
 * @param {boolean} [options.cache] default=false Whether to cache the request and from frontend cache
 * @param {boolean} [options.debug] default=false Whether to log the request and response
 * @param {number} [options.timeout] default=20 The timeout for the request in seconds
 * @param {number} [options.staleTime] default=60 Seconds to consider data stale and invalidate cache
 * @param {number} [options.rateLimit] default=0 If set, how many seconds to wait between requests
 * @param {string} [options.baseURL] default='/api/' base url prefix, override with SERVER_API_URL env
 * @param {boolean} [options.setDefaults] default=false Pass this with options to set
 *  those options as defaults for all requests.
 * @param {number} [options.retryAttempts] default=0 Retry failed requests this many times
 * @param {array} [options.infiniteScroll] default=null [page key, response field to concatenate, element with results]
 * @param {number} [options.repeat] default=0 Repeat request this many times
 * @param {number} [options.repeatEvery] default=null Repeat request every seconds
 * @param {function} [options.logger] default=log Custom logger to override the built-in color JSON log()
 * @param {function} [options.onBeforeRequest] Set with defaults to modify each request data.
 *  Takes and returns in order: path, response, params, fetchParams
 * @param {function} [options.onAfterRequest] Set with defaults to modify each request data.
 *  Takes and returns in order: path, response, params, fetchParams
 * @param {number} [options.debounce] default=0 Seconds to debounce request, wait to execute so that other requests may override
 * @param {boolean} [options.regrabOnStale] default=false Refetch when cache is past staleTime
 * @param {boolean} [options.regrabOnFocus] default=false Refetch on window refocus
 * @param {boolean} [options.regrabOnNetwork] default=false Refetch on network change
 * @param {any} [...params] All other params become GET params, POST body, and other methods.
 * @returns {Promise<Object>} The response object with resulting data or .error if error.
 * @author [vtempest (2025)](https://github.com/vtempest/grab-api)
 * @see  [🎯 Examples](https://grab.js.org/guide/Examples) [📑 Docs](https://grab.js.org)
 * @example import grab from 'grab-api.js';
 * let res = {};
 * await grab('search', {
 *   response: res,
 *   query: "search words"
 * })
 */
declare function grab_2(path: string, options: GrabOptions): Promise<Record<string, any> | ((...args: any[]) => Promise<void>)>;

declare namespace grab_2 {
    var instance: (defaultOptions?: {}) => (path: any, options?: {}) => Promise<Record<string, any> | ((...args: any[]) => Promise<void>)>;
    var log: any[];
    var mock: {};
    var defaults: {};
}
export { grab_2 as grab }

export declare interface GrabFunction {
    /**
     * ### GRAB: Generate Request to API from Browser
     * ![grabAPILogo](https://i.imgur.com/qrQWkeb.png)
     * Make API request with path
     * @returns {Promise<Object>} The response object with resulting data or .error if error.
     * @author [vtempest (2025)](https://github.com/vtempest/grab-api)
     * @see  [🎯 Examples](https://grab.js.org/guide/Examples) [📑 Docs](https://grab.js.org/lib)
     */
    <TResponse = any>(path: string): Promise<GrabResponse<TResponse>>;
    /**
     * ### GRAB: Generate Request to API from Browser
     * ![grabAPILogo](https://i.imgur.com/qrQWkeb.png)
     * Make API request with path and options/parameters
     * @returns {Promise<Object>} The response object with resulting data or .error if error.
     * @author [vtempest (2025)](https://github.com/vtempest/grab-api)
     * @see  [🎯 Examples](https://grab.js.org/guide/Examples) [📑 Docs](https://grab.js.org/lib)
     */
    <TResponse = any, TParams = Record<string, any>>(path: string, config: GrabRequestConfig<TResponse, TParams>): Promise<GrabResponse<TResponse>>;
    /** Default options applied to all requests */
    defaults?: Partial<GrabOptions>;
    /** Request history and debugging info for all requests */
    log?: GrabLogEntry[];
    /** Mock server handlers for testing */
    mock?: Record<string, GrabMockHandler>;
    /** Create a separate instance of grab with separate default options */
    instance?: (defaultOptions?: Partial<GrabOptions>) => GrabFunction;
}

export declare interface GrabGlobal {
    /** Default options applied to all requests */
    defaults?: Partial<GrabOptions>;
    /** Request history and debugging info */
    log?: GrabLogEntry[];
    /** Mock server handlers for testing */
    mock?: Record<string, GrabMockHandler>;
    /** Create a separate instance of grab with separate default options */
    instance?: (defaultOptions?: Partial<GrabOptions>) => GrabFunction;
}

export declare interface GrabLogEntry {
    /** API path that was requested */
    path: string;
    /** Stringified request parameters */
    request: string;
    /** Response data (only present for successful requests) */
    response?: any;
    /** Error message (only present for failed requests) */
    error?: string;
    /** Timestamp when request was made */
    lastFetchTime: number;
    /** Abort controller for request cancellation */
    controller?: AbortController;
    /** Current page number for paginated requests */
    currentPage?: number;
}

export declare interface GrabMockHandler<TParams = any, TResponse = any> {
    /** Mock response data or function that returns response */
    response: TResponse | ((params: TParams) => TResponse);
    /** HTTP method this mock should respond to */
    method?: string;
    /** Request parameters this mock should match */
    params?: TParams;
    /** Delay in seconds before returning mock response */
    delay?: number;
}

export declare interface GrabOptions<TResponse = any, TParams = Record<string, any>> {
    /** include headers and authorization in the request */
    headers?: Record<string, string>;
    /** Pre-initialized object which becomes response JSON, no need for .data */
    response?: Record<string, any>;
    /** default="GET" The HTTP method to use */
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    /** default=false Whether to cache the request and from frontend cache */
    cache?: boolean;
    /** default=60 Seconds to consider data stale and invalidate cache */
    staleTime?: number;
    /** default=20 The timeout for the request in seconds */
    timeout?: number;
    /** default='/api/' base url prefix, override with SERVER_API_URL env */
    baseURL?: string;
    /** default=true Cancel previous requests to same path */
    cancelOngoingIfNew?: boolean;
    /** default=false Cancel if a request to path is in progress */
    cancelNewIfOngoing?: boolean;
    /** default=0 If set, how many seconds to wait between requests */
    rateLimit?: number;
    /** default=false Whether to log the request and response */
    debug?: boolean;
    /** default=null [page key, response field to concatenate, element with results] */
    infiniteScroll?: [string, string, string];
    /** default=false Pass this with options to set those options as defaults for all requests */
    setDefaults?: boolean;
    /** default=0 Retry failed requests this many times */
    retryAttempts?: number;
    /** default=log Custom logger to override the built-in color JSON log() */
    logger?: (...args: any[]) => void;
    /** Set with defaults to modify each request data. Takes and returns in order: path, response, params, fetchParams */
    onBeforeRequest?: (...args: any[]) => any;
    /** Set with defaults to modify each request data. Takes and returns in order: path, response, params, fetchParams */
    onAfterRequest?: (...args: any[]) => any;
    /** default=0 Repeat request this many times */
    repeat?: number;
    /** default=null Repeat request every seconds */
    repeatEvery?: number;
    /** default=0 Seconds to debounce request, wait to execute so that other requests may override */
    debounce?: number;
    /** default=false Refetch when cache is past staleTime */
    regrabOnStale?: boolean;
    /** default=false Refetch on window refocus */
    regrabOnFocus?: boolean;
    /** default=false Refetch on network change */
    regrabOnNetwork?: boolean;
    /** All other params become GET params, POST body, and other methods */
    post?: boolean;
    put?: boolean;
    patch?: boolean;
    body?: any;
    [key: string]: any;
}

export declare interface GrabRequestConfig<TResponse = any, TParams = Record<string, any>> extends GrabOptions<TResponse, TParams> {
}

export declare interface GrabResponse<T = any> {
    /** Indicates if request is currently in progress */
    isLoading?: boolean;
    /** Error message if request failed */
    error?: string;
    /** The actual response data - type depends on API endpoint */
    [key: string]: T | boolean | string | undefined;
}

export declare type GrabResponseWithData<T> = GrabResponse<T> & {
    data?: T;
};

export declare interface LogFunction {
    /**
     * Log messages with custom styling
     * @param message - Message to log (string or object)
     * @param hideInProduction - Whether to hide in production (auto-detected if undefined)
     * @param style - CSS style string for console output
     */
    (message: string | object, hideInProduction?: boolean, style?: string): void;
}

export declare interface PrintStructureJSONFunction {
    /**
     * Generate TypeDoc-like description of JSON object structure
     * @param obj - The JSON object to describe
     * @returns String representation of object structure
     */
    (obj: any): string;
}

export declare type TypedGrabFunction = <TResponse = any, TParams = Record<string, any>>(path: string, config?: GrabRequestConfig<TResponse, TParams>) => Promise<GrabResponse<TResponse>>;

export { }
