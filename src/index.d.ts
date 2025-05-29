/**
 * TypeScript definitions for GRAB API
 * Generate Request to API from Browser
 */

// Core response object that gets populated with API response data
export interface GrabResponse<T = any> {
  /** Indicates if request is currently in progress */
  isLoading?: boolean;
  /** Error message if request failed */
  error?: string;
  /** The actual response data - type depends on API endpoint */
  [key: string]: T | boolean | string | undefined;
}

// Options for configuring grab requests
export interface GrabOptions<TResponse = any, TParams = Record<string, any>> {
  /** HTTP method to use */
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";

  /** Pre-initialized response object that will be populated with results */
  response?: GrabResponse<TResponse>;

  /** Additional HTTP headers */
  headers?: Record<string, string>;

  /** Cancel previous requests to same path when making new request */
  cancelOngoingIfNew?: boolean;

  /** Cancel new request if one to same path is already in progress */
  cancelNewIfOngoing?: boolean;

  /** Enable frontend caching for repeat requests */
  cache?: boolean;

  /** Request timeout in seconds */
  timeout?: number;

  /** Base URL prefix for API requests */
  baseURL?: string;

  /** Minimum seconds to wait between requests to same endpoint */
  rateLimit?: number;

  /** Enable debug logging */
  debug?: boolean;

  /** Key in response object to paginate results by */
  paginateResult?: string;

  /** Request parameter key used for pagination */
  paginateKey?: string;

  /** Set these options as defaults for all future requests */
  setDefaults?: boolean;

  /** Retry failed requests once */
  retryAttempts?: boolean;

  /** Hook function called before each request to modify request data */
  onBeforeRequest?: (
    path: string,
    response: GrabResponse<TResponse>,
    params: TParams,
    fetchParams: RequestInit
  ) => [string, GrabResponse<TResponse>, TParams, RequestInit];

  /** Custom Logger function to use for logging */
  logger?: LogFunction;

  /** Hook function called after each request to modify request data */
  onAfterRequest?: (
    path: string,
    response: GrabResponse<TResponse>,
    params: TParams,
    fetchParams: RequestInit
  ) => [string, GrabResponse<TResponse>, TParams, RequestInit];
}

// Combined options and parameters interface
export interface GrabRequestConfig<
  TResponse = any,
  TParams = Record<string, any>
> extends GrabOptions<TResponse, TParams>,
    TParams {}

// Mock server configuration for testing
export interface GrabMockHandler<TParams = any, TResponse = any> {
  /** Mock response data or function that returns response */
  response: TResponse | ((params: TParams) => TResponse);
  /** HTTP method this mock should respond to */
  method?: string;
  /** Request parameters this mock should match */
  params?: TParams;
  /** Delay in seconds before returning mock response */
  delay?: number;
}

// Request log entry for debugging and history
export interface GrabLogEntry {
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

// Global grab configuration and state
export interface GrabGlobal {
  /** Default options applied to all requests */
  default: Partial<GrabOptions>;
  /** Request history and debugging info */
  log: GrabLogEntry[];
  /** Mock server handlers for testing */
  mock: Record<string, GrabMockHandler>;
}

// Main grab function signature with overloads for different use cases
export interface GrabFunction {
  /**
   * Make API request with just path
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

  /** Global configuration and state */
  default: Partial<GrabOptions>;
  log: GrabLogEntry[];
  mock: Record<string, GrabMockHandler>;
}

// Log function for debugging
export interface LogFunction {
  /**
   * Log messages with custom styling
   * @param message - Message to log (string or object)
   * @param hideInProduction - Whether to hide in production (auto-detected if undefined)
   * @param style - CSS style string for console output
   */
  (message: string | object, hideInProduction?: boolean, style?: string): void;
}

// Utility function to describe JSON structure
export interface PrintStructureJSONFunction {
  /**
   * Generate TypeDoc-like description of JSON object structure
   * @param obj - The JSON object to describe
   * @returns String representation of object structure
   */
  (obj: any): string;
}

// Window/Global extensions
declare global {
  interface Window {
    grab: GrabFunction;
    log: LogFunction;
  }

  var grab: GrabFunction;
  var log: LogFunction;
}

// Main export types
export declare const grab: GrabFunction;
export declare const log: LogFunction;
export declare const printStructureJSON: PrintStructureJSONFunction;

// Type helpers for common use cases
export type GrabResponseWithData<T> = GrabResponse<T> & {
  data?: T;
};

export type GrabResponseWithResults<T> = GrabResponse<T> & {
  results?: T[];
};

export type GrabResponseWithPagination<T> = GrabResponseWithResults<T> & {
  page?: number;
  totalPages?: number;
  hasMore?: boolean;
};

// Utility types for type-safe API calls
export type ApiEndpoint<TResponse, TParams = {}> = (
  params?: TParams & Partial<GrabOptions<TResponse, TParams>>
) => Promise<GrabResponse<TResponse>>;

// Example usage types for common patterns
export interface UserData {
  id: number;
  name: string;
  email: string;
}

export interface SearchResult {
  title: string;
  description: string;
  url: string;
}

export interface PaginatedResponse<T> {
  results: T[];
  page: number;
  totalPages: number;
  hasMore: boolean;
}

// Helper type for creating typed API clients
export type TypedGrabFunction = <
  TResponse = any,
  TParams = Record<string, any>
>(
  path: string,
  config?: GrabRequestConfig<TResponse, TParams>
) => Promise<GrabResponse<TResponse>>;

export default grab;
