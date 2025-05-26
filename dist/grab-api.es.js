async function grab(path, response = {}, options = {}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  try {
    let {
      headers,
      method = "GET",
      cache = false,
      // Enable/disable frontend caching
      timeout = 20,
      // Request timeout in seconds
      baseURL = typeof process !== "undefined" && ((_a = process == null ? void 0 : process.env) == null ? void 0 : _a.SERVER_API_URL) || "/api/",
      // Use env var or default to /api/
      cancelPrevious = true,
      // Cancel previous request for same path
      cancelIfOngoing = false,
      // Don't make new request if one is ongoing
      rateLimit = 0,
      // Minimum seconds between requests
      debug = (_c = (_b = window == null ? void 0 : window.location) == null ? void 0 : _b.hostname) == null ? void 0 : _c.includes("localhost"),
      // Auto-enable debug on localhost
      paginateResult = null,
      // Key to paginate in response
      paginateKey = "page",
      // Request param for pagination
      setDefaults = false,
      // Set these options as defaults for future requests
      retryOnError = false,
      // Retry failed requests once
      ...body
      // All other params become request body/query
    } = { ...window.grabDefaults, ...options };
    if (options == null ? void 0 : options.setDefaults) {
      window.grabDefaults = { ...options, setDefaults: void 0 };
      return {};
    }
    if (!response) response = {};
    let logEntry = grabLog;
    if (!(path in grabLog)) {
      grabLog[path] = {
        requestData: body || {}
      };
    }
    if (grabLog[path].requestData)
      grabLog[path].requestData[paginateKey] = void 0;
    const isRepeatRequest = JSON.stringify(grabLog[path].requestData) == JSON.stringify(body);
    if (!paginateKey) {
      if (cache && isRepeatRequest) {
        for (let key of Object.keys(grabLog[path].responseData))
          response[key] = grabLog[path].responseData[key];
        return response;
      }
      for (let key of Object.keys(response)) response[key] = void 0;
    } else {
      var pageNumber = grabLog[path].currentPage || (body == null ? void 0 : body[paginateKey]) || 0;
      if (!isRepeatRequest) {
        response[paginateResult] = [];
        pageNumber = 0;
      }
      grabLog[path].currentPage = ++pageNumber;
      body[paginateKey] = pageNumber;
    }
    response.isLoading = true;
    if (rateLimit > 0 && ((_d = grabLog[path]) == null ? void 0 : _d.lastFetchTime) && ((_e = grabLog[path]) == null ? void 0 : _e.lastFetchTime) > Date.now() - 1e3 * rateLimit)
      throw new Error("Fetch rate limit exceeded");
    if (((_f = grabLog[path]) == null ? void 0 : _f.controller) && isRepeatRequest) {
      if (cancelPrevious) grabLog[path].controller.abort();
      else if (cancelIfOngoing) return { isLoading: true };
    }
    grabLog[path].lastFetchTime = Date.now();
    grabLog[path].controller = new AbortController();
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
      signal: cancelPrevious ? (_h = (_g = grabLog[path]) == null ? void 0 : _g.controller) == null ? void 0 : _h.signal : AbortSignal.timeout(timeout * 1e3)
    };
    let paramsGETRequest = "";
    if (["POST", "PUT", "PATCH"].includes(method))
      fetchParams.body = JSON.stringify(body);
    else paramsGETRequest = "?" + new URLSearchParams(body).toString();
    let responseData = null, startTime = /* @__PURE__ */ new Date(), mockHandler = grabMockServer == null ? void 0 : grabMockServer[path];
    if (mockHandler && mockHandler.method == method && (!mockHandler.params || JSON.stringify(body) == JSON.stringify(mockHandler.params))) {
      if (mockHandler.delay > 0)
        await new Promise((resolve) => setTimeout(resolve, mockHandler.delay));
      responseData = mockHandler.response;
      if (typeof responseData === "function") responseData = responseData(body);
    } else {
      responseData = await fetch(baseURL + path + paramsGETRequest, fetchParams).catch((e) => {
        throw new Error(e);
      }).then((res) => res.text());
      if (responseData.startsWith("{")) responseData = JSON.parse(responseData);
      else if (responseData.includes("error")) throw new Error(responseData);
      else return responseData;
    }
    if (response) response.isLoading = void 0;
    if (debug) {
      log(
        "Path:" + baseURL + path + paramsGETRequest + "\n" + JSON.stringify(options, null, 2) + "\nTime: " + ((Number(/* @__PURE__ */ new Date()) - Number(startTime)) / 1e3).toFixed(1) + "s\nResponse: " + printStructureJSON(responseData)
      );
      console.log(responseData);
    }
    for (let key of Object.keys(responseData))
      response[key] = paginateResult == key && ((_i = response[key]) == null ? void 0 : _i.length) ? [...response[key], ...responseData[key]] : responseData[key];
    grabLog[path].controller = void 0;
    grabLog[path].responseData = response;
    grabLog[path].requestData = body || {};
    return response;
  } catch (error) {
    if (options.retryOnError)
      return await grab(path, response, { ...options, retryOnError: false });
    if (response) {
      if (!error.message.includes("signal")) response.error = error.message;
      response.isLoading = false;
    }
    if (path in grabLog) grabLog[path].error = error.message;
    return { error: error.message };
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
const grabLog = [];
const grabMockServer = {};
const grabDefaults = {};
if (typeof window !== "undefined") {
  window.grabLog = grabLog;
  window.grabMockServer = grabMockServer;
  window.grabDefaults = grabDefaults;
} else if (typeof global !== "undefined") {
  global.grabLog = grabLog;
  global.grabMockServer = grabMockServer;
  global.grabDefaults = grabDefaults;
}
export {
  grab,
  log,
  printStructureJSON
};
//# sourceMappingURL=grab-api.es.js.map
