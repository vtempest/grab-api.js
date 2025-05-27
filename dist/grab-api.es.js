async function grab(path, response = {}, options = {}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  let {
    headers,
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
    retryOnError = false,
    // Retry failed requests once
    ...params
    // All other params become request params/query
  } = {
    // Destructure options with defaults, merging with any globally set defaults
    ...((_d = window == null ? void 0 : window.grab) == null ? void 0 : _d.defaults) || ((_e = global == null ? void 0 : global.grab) == null ? void 0 : _e.defaults) || {},
    ...options
  };
  try {
    if (options == null ? void 0 : options.setDefaults) {
      window.grab.defaults = { ...options, setDefaults: void 0 };
      return {};
    }
    if (!response) response = {};
    let paramsAsText = JSON.stringify({ ...params, paginateKey: void 0 });
    let priorRequest = grabLog == null ? void 0 : grabLog.find(
      (e) => e.request == paramsAsText && e.path == path
    );
    const isRepeatRequest = (priorRequest == null ? void 0 : priorRequest.request) == paramsAsText;
    if (!paginateKey) {
      if (cache && isRepeatRequest) {
        for (let key of Object.keys(priorRequest.res))
          response[key] = priorRequest.res[key];
        return response;
      }
      for (let key of Object.keys(response)) response[key] = void 0;
    } else {
      let pageNumber = (priorRequest == null ? void 0 : priorRequest.currentPage) + 1 || (params == null ? void 0 : params[paginateKey]) || 1;
      if (!isRepeatRequest) {
        response[paginateResult] = [];
        pageNumber = 1;
      }
      if (priorRequest)
        priorRequest.currentPage = pageNumber;
      params[paginateKey] = pageNumber;
    }
    response.isLoading = true;
    if (rateLimit > 0 && (priorRequest == null ? void 0 : priorRequest.lastFetchTime) && priorRequest.lastFetchTime > Date.now() - 1e3 * rateLimit)
      throw new Error("Fetch rate limit exceeded");
    if ((priorRequest == null ? void 0 : priorRequest.controller) && isRepeatRequest) {
      if (cancelOngoingIfNew) priorRequest.controller.abort();
      else if (cancelNewIfOngoing) return { isLoading: true };
    }
    grabLog.unshift({
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
      body: null,
      redirect: "follow",
      cache: cache ? "force-cache" : "no-store",
      signal: cancelOngoingIfNew ? (_g = (_f = grabLog[0]) == null ? void 0 : _f.controller) == null ? void 0 : _g.signal : AbortSignal.timeout(timeout * 1e3)
    };
    let paramsGETRequest = "";
    if (["POST", "PUT", "PATCH"].includes(method))
      fetchParams.body = JSON.stringify(params);
    else paramsGETRequest = "?" + new URLSearchParams(params).toString();
    let res = null, startTime = /* @__PURE__ */ new Date(), mockHandler = (_h = grab.server) == null ? void 0 : _h[path];
    if (mockHandler && (!mockHandler.params || mockHandler.method == method) && (!mockHandler.params || paramsAsText == JSON.stringify(mockHandler.params))) {
      await new Promise(
        (resolve) => setTimeout(resolve, mockHandler.delay * 1e3 || 0)
      );
      res = typeof mockHandler.response === "function" ? mockHandler.response(params) : mockHandler.response;
    } else {
      res = await fetch(
        (!path.startsWith("http") && baseURL) + path + paramsGETRequest,
        fetchParams
      ).catch((e) => {
        throw new Error(e);
      });
      let type = res.headers.get("content-type");
      res = await (type ? type.includes("application/json") ? res.json() : type.includes("application/pdf") || type.includes("application/octet-stream") ? res.blob() : res.text() : res.json()).catch((e) => {
        throw new Error("Error parsing response: " + e);
      });
      if ((res == null ? void 0 : res.startsWith) && (res == null ? void 0 : res.startsWith("{"))) res = JSON.parse(res);
    }
    delete response.isLoading;
    const elapsedTime = ((Number(/* @__PURE__ */ new Date()) - Number(startTime)) / 1e3).toFixed(1);
    if (debug) {
      log(
        "Path:" + baseURL + path + paramsGETRequest + "\n" + JSON.stringify(options, null, 2) + "\nTime: " + elapsedTime + "s\nResponse: " + printStructureJSON(res)
      );
      console.log(res);
    }
    if (typeof res === "undefined") return;
    for (let key of Object.keys(res))
      response[key] = paginateResult == key && ((_i = response[key]) == null ? void 0 : _i.length) ? [...response[key], ...res[key]] : res[key];
    grabLog.unshift({
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
    if (options.retryOnError)
      return await grab(path, response, { ...options, retryOnError: false });
    if (!error.message.includes("signal"))
      response.error = error.message;
    delete response.isLoading;
    grabLog == null ? void 0 : grabLog.unshift({
      path,
      request: JSON.stringify(params),
      error: error.message
    });
    return response;
  }
}
function log(message, hideInProduction = void 0, style = "color: blue; font-size: 14px;") {
  if (typeof hideInProduction === "undefined")
    hideInProduction = window == null ? void 0 : window.location.hostname.includes("localhost");
  if (typeof message === "object")
    message = printStructureJSON(message) + "\n\n" + JSON.stringify(message, null, 2);
  if (hideInProduction) console.debug((style ? "%c" : "") + message, style);
  else console.log((style ? "%c" : "") + message, style);
}
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
export {
  grab as default,
  grab,
  log,
  printStructureJSON
};
//# sourceMappingURL=grab-api.es.js.map
