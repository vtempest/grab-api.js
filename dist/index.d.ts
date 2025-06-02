declare const grab_2: GrabFunction;
export default grab_2;
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
    <TResponse = any, TParams = Record<string, any>>(
    path: string,
    config: GrabRequestConfig<TResponse, TParams>
    ): Promise<GrabResponse<TResponse>>;

    /** Default options applied to all requests */
    defaults: Partial<GrabOptions>;

    /** Request history and debugging info for all requests */
    log: GrabLogEntry[];

    /** Mock server handlers for testing */
    mock: Record<string, GrabMockHandler>;

    /** Create a separate instance of grab with separate default options */
    instance: (defaultOptions?: Partial<GrabOptions>) => GrabFunction;
}

export declare interface GrabGlobal {
    /** Default options applied to all requests */
    defaults: Partial<GrabOptions>;
    /** Request history and debugging info */
    log: GrabLogEntry[];
    /** Mock server handlers for testing */
    mock: Record<string, GrabMockHandler>;
    /** Create a separate instance of grab with separate default options */
    instance: (defaultOptions?: Partial<GrabOptions>) => GrabFunction;
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
    /** HTTP method to use for the request. Defaults to "GET" if not specified */
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";

    /** Pre-initialized object which becomes response JSON, no need for .data. isLoading and error may also be set on this object. May omit and use return if load status is not needed */
    response?: GrabResponse<TResponse>;

    /** Additional HTTP headers to include with the request */
    headers?: Record<string, string>;

    /** Cancel previous requests to same path when making new request. Defaults to true */
    cancelOngoingIfNew?: boolean;

    /** Cancel new request if one to same path is already in progress. Defaults to false */
    cancelNewIfOngoing?: boolean;

    /** Whether to cache the request and retrieve from frontend cache. Defaults to false */
    cache?: boolean;

    /** The timeout for the request in seconds. Defaults to 20 */
    timeout?: number;

    /** Base url prefix for API requests, override with SERVER_API_URL env. Defaults to '/api/' */
    baseURL?: string;

    /** If set, how many seconds to wait between requests to prevent multi-click cascading responses. Defaults to 0 */
    rateLimit?: number;

    /** Whether to log the request and response. Auto-enabled on localhost. Defaults to false */
    debug?: boolean;

    /** Seconds to consider data stale and invalidate cache. Defaults to 60 */
    staleTime?: number;

    /** Pass this with options to set those options as defaults for all requests. Defaults to false */
    setDefaults?: boolean;

    /** Retry failed requests this many times. Defaults to 0 */
    retryAttempts?: boolean;

    /** Custom logger to override the built-in color JSON log() */
    logger?: LogFunction;

    /** Seconds to debounce request, wait to execute so that other requests may override. Defaults to 0 */
    debounce?: number;

    /** Refetch when cache is past staleTime. Defaults to false */
    regrabOnStale?: boolean;

    /** Refetch on window refocus. Defaults to false */
    regrabOnFocus?: boolean;

    /** Refetch on network change. Defaults to false */
    regrabOnNetwork?: boolean;

    /** Repeat request this many times sequentially. Defaults to 0 */
    repeat?: number;

    /** Repeat request every X seconds to poll for updates. Defaults to null */
    repeatEvery?: number;

    /** Built-in pagination for infinite scroll to auto-load and merge next result page. Array containing [page key, response field to concatenate, element with results]. Defaults to null */
    infiniteScroll?: [string, string, string];

    /** Hook function called before each request to modify request data */
    onBeforeRequest?: (
    path: string,
    response: GrabResponse<TResponse>,
    params: TParams,
    fetchParams: RequestInit
    ) => [string, GrabResponse<TResponse>, TParams, RequestInit];

    /** Hook function called after each request to modify request data */
    onAfterRequest?: (
    path: string,
    response: GrabResponse<TResponse>,
    params: TParams,
    fetchParams: RequestInit
    ) => [string, GrabResponse<TResponse>, TParams, RequestInit];

    /** shortcut for method="POST" */
    post?: boolean;

    /** shortcut for method="PUT" */
    put?: boolean;

    /** shortcut for method="PATCH" */
    patch?: boolean;

    /** shortcut for method="DELETE" */
    delete?: boolean;

    /** include headers and authorization in the request */
    headers?: object;

    /** Allow any additional options as GET params or POST/PUT/PATCH body */
    [key: string]: any;
}

export declare interface GrabRequestConfig<
TResponse = any,
TParams = Record<string, any>
> extends GrabOptions<TResponse, TParams>,
TParams {}

/**
 * TypeScript definitions for GRAB API
 * Generate Request to API from Browser
 */

// Core response object that gets populated with API response data
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

declare const log_2: LogFunction;
export { log_2 as log }

export declare interface LogFunction {
    /**
     * Log messages with custom styling
     * @param message - Message to log (string or object)
     * @param hideInProduction - Whether to hide in production (auto-detected if undefined)
     * @param style - CSS style string for console output
     */
    (message: string | object, hideInProduction?: boolean, style?: string): void;
}

export declare const printStructureJSON: PrintStructureJSONFunction;

export declare interface PrintStructureJSONFunction {
    /**
     * Generate TypeDoc-like description of JSON object structure
     * @param obj - The JSON object to describe
     * @returns String representation of object structure
     */
    (obj: any): string;
}

export declare type TypedGrabFunction = <
TResponse = any,
TParams = Record<string, any>
>(
path: string,
config?: GrabRequestConfig<TResponse, TParams>
) => Promise<GrabResponse<TResponse>>;

export { }
