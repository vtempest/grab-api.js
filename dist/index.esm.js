var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
async function grab(path, options = {}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  let {
    headers,
    response = {},
    // Pre-initialized object to set the response in. isLoading and error are also set on this object.
    method = "GET",
    cache = false,
    // Enable/disable frontend caching
    timeout = 20,
    // Request timeout in seconds
    baseURL = typeof process !== "undefined" && ((_a = process == null ? void 0 : process.env) == null ? void 0 : _a.SERVER_API_URL) || "/api/",
    // Use env var or default to /api/
    cancelOngoingIfNew = true,
    // Cancel previous request for same path
    cancelNewIfOngoing = false,
    // Don't make new request if one is ongoing
    rateLimit = 0,
    // Minimum seconds between requests
    debug = (_c = (_b = window == null ? void 0 : window.location) == null ? void 0 : _b.hostname) == null ? void 0 : _c.includes("localhost"),
    // Auto-enable debug on localhost
    paginateResult = null,
    // Key to paginate in response
    paginateKey = null,
    // Request param for pagination
    setDefaults = false,
    // Set these options as defaults for future requests
    retryAttempts = 0,
    // Retry failed requests once
    onBeforeRequest = null,
    // Hook to modify request data before request is made
    ...params
    // All other params become request params/query
  } = {
    // Destructure options with defaults, merging with any globally set defaults
    ...((_d = window == null ? void 0 : window.grab) == null ? void 0 : _d.defaults) || ((_e = global == null ? void 0 : global.grab) == null ? void 0 : _e.defaults) || {},
    ...options
  };
  try {
    if (options == null ? void 0 : options.setDefaults) {
      if (typeof window !== "undefined") window.grab.default = { ...options, setDefaults: void 0 };
      else global.grab.default = { ...options, setDefaults: void 0 };
      return {};
    }
    if (!response) response = {};
    let paramsAsText = JSON.stringify(
      paginateKey ? { ...params, [paginateKey]: void 0 } : params
    );
    let priorRequest = (_f = grab.log) == null ? void 0 : _f.find(
      (e) => e.request == paramsAsText && e.path == path
    );
    if (!paginateKey) {
      if (cache && priorRequest) {
        for (let key of Object.keys(priorRequest.res))
          response[key] = priorRequest.res[key];
        return response;
      }
      for (let key of Object.keys(response)) response[key] = void 0;
    } else {
      let pageNumber = (priorRequest == null ? void 0 : priorRequest.currentPage) + 1 || (params == null ? void 0 : params[paginateKey]) || 1;
      if (!priorRequest) {
        response[paginateResult] = [];
        pageNumber = 1;
      }
      if (priorRequest) priorRequest.currentPage = pageNumber;
      params[paginateKey] = pageNumber;
    }
    response.isLoading = true;
    if (rateLimit > 0 && (priorRequest == null ? void 0 : priorRequest.lastFetchTime) && priorRequest.lastFetchTime > Date.now() - 1e3 * rateLimit)
      throw new Error(
        "Fetch rate limit exceeded for " + path + ". Wait " + rateLimit + "s between requests."
      );
    if (priorRequest == null ? void 0 : priorRequest.controller) {
      if (cancelOngoingIfNew) priorRequest.controller.abort();
      else if (cancelNewIfOngoing) return { isLoading: true };
    }
    grab.log.unshift({
      path,
      request: paramsAsText,
      lastFetchTime: Date.now(),
      controller: new AbortController()
    });
    const fetchParams = {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers
      },
      redirect: "follow",
      cache: cache ? "force-cache" : "no-store",
      signal: cancelOngoingIfNew ? (_h = (_g = grab.log[0]) == null ? void 0 : _g.controller) == null ? void 0 : _h.signal : AbortSignal.timeout(timeout * 1e3)
    };
    let paramsGETRequest = "";
    if (["POST", "PUT", "PATCH"].includes(method))
      fetchParams.body = JSON.stringify(params);
    else paramsGETRequest = "?" + new URLSearchParams(params).toString();
    if (typeof beforeRequest === "function")
      [path, response, params, fetchParams] = onBeforeRequest(
        path,
        response,
        params,
        fetchParams
      );
    if (!path.startsWith("/") && !baseURL.endsWith("/")) path = "/" + path;
    if (path.startsWith("http:") || path.startsWith("https:")) baseURL = "";
    let res = null, startTime = /* @__PURE__ */ new Date(), mockHandler = (_i = grab.mock) == null ? void 0 : _i[path];
    if (mockHandler && (!mockHandler.params || mockHandler.method == method) && (!mockHandler.params || paramsAsText == JSON.stringify(mockHandler.params))) {
      await new Promise(
        (resolve) => setTimeout(resolve, mockHandler.delay * 1e3 || 0)
      );
      res = typeof mockHandler.response === "function" ? mockHandler.response(params) : mockHandler.response;
    } else {
      res = await fetch(baseURL + path + paramsGETRequest, fetchParams).catch(
        (e) => {
          throw new Error(e);
        }
      );
      let type = res.headers.get("content-type");
      res = await (type ? type.includes("application/json") ? res.json() : type.includes("application/pdf") || type.includes("application/octet-stream") ? res.blob() : res.text() : res.json()).catch((e) => {
        throw new Error("Error parsing response: " + e);
      });
      if ((res == null ? void 0 : res.startsWith) && (res == null ? void 0 : res.startsWith("{"))) res = JSON.parse(res);
    }
    delete response.isLoading;
    priorRequest == null ? true : delete priorRequest.controller;
    const elapsedTime = ((Number(/* @__PURE__ */ new Date()) - Number(startTime)) / 1e3).toFixed(1);
    if (debug) {
      log(
        "Path:" + baseURL + path + paramsGETRequest + "\n" + JSON.stringify(options, null, 2) + "\nTime: " + elapsedTime + "s\nResponse: " + printStructureJSON(res)
      );
      console.log(res);
    }
    if (typeof res === "undefined") return;
    for (let key of Object.keys(res))
      response[key] = paginateResult == key && ((_j = response[key]) == null ? void 0 : _j.length) ? [...response[key], ...res[key]] : res[key];
    grab.log.unshift({
      path,
      request: JSON.stringify({ ...params, paginateKey: void 0 }),
      response,
      lastFetchTime: Date.now()
    });
    return response;
  } catch (error) {
    log(
      "Error: " + error.message + "\nPath:" + baseURL + path + JSON.stringify(params),
      true,
      "color: red;"
    );
    if (options.retryAttempts > 0)
      return await grab(path, response, { ...options, retryAttempts: --options.retryAttempts });
    if (!error.message.includes("signal")) response.error = error.message;
    delete response.isLoading;
    (_k = grab.log) == null ? void 0 : _k.unshift({
      path,
      request: JSON.stringify(params),
      error: error.message
    });
    return response;
  }
}
__name(grab, "grab");
function log(message, hideInProduction = void 0, style = "color: blue; font-size: 14px;") {
  if (typeof hideInProduction === "undefined")
    hideInProduction = window == null ? void 0 : window.location.hostname.includes("localhost");
  if (typeof message === "object")
    message = printStructureJSON(message) + "\n\n" + JSON.stringify(message, null, 2);
  if (hideInProduction) console.debug((style ? "%c" : "") + message, style);
  else console.log((style ? "%c" : "") + message, style);
}
__name(log, "log");
function printStructureJSON(obj) {
  function getType(value) {
    if (Array.isArray(value)) {
      return "[" + getType(value[0]) + "]";
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
  __name(getType, "getType");
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
__name(printStructureJSON, "printStructureJSON");
if (typeof window !== "undefined") {
  window.grab = grab;
  window.log = log;
  window.grab.log = [];
  window.grab.mock = {};
  window.grab.default = {};
} else if (typeof global !== "undefined") {
  global.grab.log = [];
  global.grab.mock = {};
  global.grab.default = {};
  global.grab = grab;
  global.log = log;
}
export {
  grab as default,
  grab,
  log,
  printStructureJSON
};
//# sourceMappingURL=index.esm.js.map
