function log(message, hideInProduction = void 0, style = "color: blue; font-size: 14px;") {
  if (typeof hideInProduction === "undefined")
    hideInProduction = window == null ? void 0 : window.location.hostname.includes("localhost");
  if (typeof message === "object")
    message = printStructureJSON(message) + "\n\n" + JSON.stringify(message, null, 2);
  if (hideInProduction) console.debug((style ? "%c" : "") + message, style);
  else console.log((style ? "%c" : "") + message, style);
}
const colors = {
  reset: "\x1B[0m",
  yellow: "\x1B[33m",
  // string
  cyan: "\x1B[36m",
  // number
  magenta: "\x1B[35m",
  // boolean
  gray: "\x1B[90m",
  // null
  green: "\x1B[32m",
  // object braces
  blue: "\x1B[34m",
  // array brackets
  red: "\x1B[31m",
  // function
  white: "\x1B[37m"
  // default
};
function getColorForType(value) {
  if (typeof value === "string") return colors.yellow;
  if (typeof value === "number") return colors.cyan;
  if (typeof value === "boolean") return colors.magenta;
  if (typeof value === "function") return colors.red;
  if (value === null) return colors.gray;
  if (Array.isArray(value)) return colors.blue;
  if (typeof value === "object") return colors.green;
  return colors.white;
}
function getTypeString(value) {
  if (typeof value === "string") return '""';
  if (typeof value === "number") return "number";
  if (typeof value === "boolean") return "bool";
  if (typeof value === "function") return "function";
  if (value === null) return "null";
  if (Array.isArray(value)) {
    if (value.length)
      return "[" + getTypeString(value[0]) + "]";
    else
      return "[]";
  }
  if (typeof value === "object") return "{...}";
  return typeof value;
}
function printStructureJSON(obj, indent = 0) {
  const pad = "  ".repeat(indent);
  if (typeof obj !== "object" || obj === null) {
    const color = getColorForType(obj);
    return color + getTypeString(obj) + colors.reset;
  }
  if (Array.isArray(obj)) {
    let result2 = colors.blue + "[" + colors.reset;
    if (obj.length) result2 += "\n";
    obj.forEach((item, idx) => {
      result2 += pad + "  " + printStructureJSON(item, indent + 1);
      if (idx < obj.length - 1) result2 += ",";
      result2 += "\n";
    });
    result2 += pad + colors.blue + "]" + colors.reset;
    return result2;
  }
  let result = colors.green + "{" + colors.reset;
  const keys = Object.keys(obj);
  if (keys.length) result += "\n";
  keys.forEach((key, index) => {
    const value = obj[key];
    const color = getColorForType(value);
    result += pad + "  ";
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      result += color + key + colors.reset + ": " + printStructureJSON(value, indent + 1);
    } else if (Array.isArray(value)) {
      result += color + key + colors.reset + ": " + printStructureJSON(value, indent + 1);
    } else {
      result += color + key + ": " + getTypeString(value) + colors.reset;
    }
    if (index < keys.length - 1) result += ",";
    result += "\n";
  });
  result += pad + colors.green + "}" + colors.reset;
  if (indent === 0) {
    console.log(result);
  }
  return result;
}
function showAlert(msg) {
  let o = document.getElementById("alert-overlay"), list;
  if (!o) {
    o = document.body.appendChild(document.createElement("div"));
    o.id = "alert-overlay";
    o.style = "position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center";
    o.innerHTML = `<div id="alert-box" style="background:#fff;padding:1.5em 2em;border-radius:8px;box-shadow:0 2px 16px #0003;min-width:220px;max-width:90vw;max-height:80vh;position:relative;display:flex;flex-direction:column;">
      <button id="close-alert" style="position:absolute;top:12px;right:20px;font-size:1.5em;background:none;border:none;cursor:pointer;color:black;">&times;</button>
      <div id="alert-list" style="overflow:auto;flex:1;"></div>
    </div>`;
    o.addEventListener("click", (e) => {
      if (e.target === o) o.remove();
    });
    o.querySelector("#close-alert").onclick = () => o.remove();
    list = o.querySelector("#alert-list");
  } else {
    list = o.querySelector("#alert-list");
  }
  list.innerHTML += `<div style="color:#c00;margin:0.5em 0;">${msg}</div>`;
}
async function grab(path, options = {}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  let {
    headers,
    response = {},
    // Pre-initialized object to set the response in. isLoading and error are also set on this object.
    method = options.post ? "POST" : options.put ? "PUT" : options.patch ? "PATCH" : options.delete ? "DELETE" : "GET",
    // set post: true for POST, omit for GET
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
    logger = log,
    // Custom logger to override the built-in color JSON log()
    onBeforeRequest = null,
    // Hook to modify request data before request is made
    onAfterRequest = null,
    // Hook to modify request data after request is made
    repeatEvery = null,
    // Repeat request every seconds
    repeat = 0,
    // Repeat request this many times
    debounce = null,
    // Debounce request this many milliseconds
    errorAlert = true,
    // Show error alert in browser
    ...params
    // All other params become request params/query
  } = {
    // Destructure options with defaults, merging with any globally set defaults
    ...((_d = window == null ? void 0 : window.grab) == null ? void 0 : _d.defaults) || ((_e = global == null ? void 0 : global.grab) == null ? void 0 : _e.defaults) || {},
    ...options
  };
  try {
    if (repeat > 1) {
      for (let i = 0; i < repeat; i++) {
        await grab(path, { ...options, repeat: 0 });
      }
      return response;
    }
    if (repeatEvery) {
      setInterval(async () => {
        await grab(path, { ...options, repeat: 0, repeatEvery: null });
      }, repeatEvery * 1e3);
      return response;
    }
    if (options == null ? void 0 : options.setDefaults) {
      if (typeof window !== "undefined")
        window.grab.defaults = { ...options, setDefaults: void 0 };
      else global.grab.defaults = { ...options, setDefaults: void 0 };
      return {};
    }
    let resFunction2 = typeof response === "function" ? response : null;
    if (!response || resFunction2) response = {};
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
        if (resFunction2) response = resFunction2(response);
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
    if (resFunction2) response = resFunction2(response);
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
    let fetchParams = {
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
      fetchParams.body = params.body || JSON.stringify(params);
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
    let wait = (s) => new Promise((res2) => setTimeout(res2, s * 1e3 || 0));
    if (mockHandler && (!mockHandler.params || mockHandler.method == method) && (!mockHandler.params || paramsAsText == JSON.stringify(mockHandler.params))) {
      await wait(mockHandler.delay);
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
    if (typeof afterRequest === "function")
      [path, response, params, fetchParams] = onAfterRequest(
        path,
        response,
        params,
        fetchParams
      );
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
    if (resFunction2) response = resFunction2(response);
    return response;
  } catch (error) {
    let errorMessage = "Error: " + error.message + "\nPath:" + baseURL + path + JSON.stringify(params);
    showAlert(errorMessage);
    log(errorMessage, true, "color: red;");
    if (options.retryAttempts > 0)
      return await grab(path, response, {
        ...options,
        retryAttempts: --options.retryAttempts
      });
    if (!error.message.includes("signal")) response.error = error.message;
    delete response.isLoading;
    (_k = grab.log) == null ? void 0 : _k.unshift({
      path,
      request: JSON.stringify(params),
      error: error.message
    });
    if (resFunction) response = resFunction(response);
    return response;
  }
}
grab.instance = (defaultOptions = {}) => (path, options = {}) => grab(path, { ...defaultOptions, ...options });
if (typeof window !== "undefined") {
  window.grab = grab;
  window.log = log;
  window.grab.log = [];
  window.grab.mock = {};
  window.grab.defaults = {};
} else if (typeof global !== "undefined") {
  global.grab = grab;
  global.log = log;
  global.grab.log = [];
  global.grab.mock = {};
  global.grab.defaults = {};
}
export {
  grab as default,
  grab
};
//# sourceMappingURL=grab-api.es.js.map
