function log(message, hideInProduction = void 0, style = "color: blue; font-size: 13pt;") {
  if (typeof hideInProduction === "undefined")
    hideInProduction = window == null ? void 0 : window.location.hostname.includes("localhost");
  if (typeof message === "object")
    message = printStructureJSON(message) + "\n\n" + JSON.stringify(message, null, 2);
  if (hideInProduction) console.debug((style ? "%c" : "") + message, style);
  else console.log((style ? "%c" : "") + message, style);
}
const colors = {
  reset: "\x1B[0m",
  // Reset to default color
  yellow: "\x1B[33m",
  // Used for strings
  cyan: "\x1B[36m",
  // Used for numbers
  magenta: "\x1B[35m",
  // Used for booleans
  gray: "\x1B[90m",
  // Used for null values
  green: "\x1B[32m",
  // Used for object braces
  blue: "\x1B[34m",
  // Used for array brackets
  red: "\x1B[31m",
  // Used for functions
  white: "\x1B[37m"
  // Default color
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
    o.innerHTML = `<div id="alert-box" style="background:#fff;padding:1.5em 2em;border-radius:8px;box-shadow:0 2px 16px #0003;min-width:220px;max-height:80vh;position:relative;display:flex;flex-direction:column;">
      <button id="close-alert" style="position:absolute;top:12px;right:20px;font-size:1.5em;background:none;border:none;cursor:pointer;color:black;">&times;</button>
      <div id="alert-list" style="overflow:auto;flex:1;"></div>
    </div>`;
    o.addEventListener("click", () => o.remove());
    o.querySelector("#close-alert").onclick = () => o.remove();
    list = o.querySelector("#alert-list");
  } else {
    list = o.querySelector("#alert-list");
  }
  list.innerHTML += `<div style="border-bottom:1px solid #333; font-size:1.2em;margin:0.5em 0;">${msg}</div>`;
}
async function grab(path, options = {}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  let {
    headers,
    response = {},
    // Pre-initialized object to set the response in. isLoading and error are also set on this object.
    method = options.post ? "POST" : options.put ? "PUT" : options.patch ? "PATCH" : options.delete ? "DELETE" : "GET",
    cache = false,
    // Enable/disable frontend caching
    staleTime = 60,
    // Seconds to consider data stale and invalidate cache
    timeout = 20,
    // Request timeout in seconds
    baseURL = typeof process !== "undefined" && process.env.SERVER_API_URL || "/api/",
    // Use env var or default to /api/
    cancelOngoingIfNew = true,
    // Cancel previous request for same path
    cancelNewIfOngoing = false,
    // Don't make new request if one is ongoing
    rateLimit = 0,
    // Minimum seconds between requests
    debug = typeof window !== "undefined" && ((_b = (_a = window == null ? void 0 : window.location) == null ? void 0 : _a.hostname) == null ? void 0 : _b.includes("localhost")),
    // Auto-enable debug on localhost
    infiniteScroll = null,
    // page key, response field to concatenate, element with results
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
    debounce = 0,
    // Seconds to debounce request, wait to execute so that other requests may override
    regrabOnStale = false,
    // Refetch when cache is past staleTime
    regrabOnFocus = false,
    // Refetch on window refocus
    regrabOnNetwork = false,
    // Refetch on network change
    ...params
    // All other params become request params/query
  } = {
    // Destructure options with defaults, merging with any globally set defaults
    ...((_c = window == null ? void 0 : window.grab) == null ? void 0 : _c.defaults) || ((_d = global == null ? void 0 : global.grab) == null ? void 0 : _d.defaults) || {},
    ...options
  };
  try {
    if (debounce > 0) {
      return await debouncer(async () => {
        await grab(path, { ...options, debounce: 0 });
      }, debounce * 1e3);
    }
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
    if (regrabOnStale)
      setTimeout(async () => {
        await grab(path, { ...options, cache: false });
      }, 1e3 * staleTime);
    if (regrabOnFocus) {
      window.addEventListener("focus", async () => {
        await grab(path, { ...options, cache: false });
      });
      document.addEventListener("visibilitychange", async () => {
        if (document.visibilityState === "visible") {
          await grab(path, { ...options, cache: false });
        }
      });
    }
    if (regrabOnNetwork)
      window.addEventListener("online", async () => {
        if (document.visibilityState === "visible") {
          await grab(path, { ...options, cache: false });
        }
      });
    let resFunction = typeof response === "function" ? response : null;
    if (!response || resFunction) response = {};
    var [paginateKey, paginateResult, paginateElement] = infiniteScroll || [];
    if ((infiniteScroll == null ? void 0 : infiniteScroll.length) && typeof window == "undefined") {
      let paginateDOM = typeof paginateElement === "string" ? document.querySelector(paginateElement) : paginateElement;
      paginateDOM.removeEventListener("scroll", window == null ? void 0 : window.scrollListener);
      window.scrollListener = paginateDOM.addEventListener(
        "scroll",
        async ({ target: t }) => {
          localStorage.setItem(
            "scroll",
            JSON.stringify([t.scrollTop, t.scrollLeft, paginateElement])
          );
          if (t.scrollHeight - t.scrollTop <= t.clientHeight + 200) {
            await grab(path, {
              ...options,
              cache: false,
              [paginateKey]: (priorRequest == null ? void 0 : priorRequest.currentPage) + 1
            });
          }
        }
      );
    }
    let paramsAsText = JSON.stringify(
      paginateKey ? { ...params, [paginateKey]: void 0 } : params
    );
    let priorRequest = (_e = grab.log) == null ? void 0 : _e.find(
      (e) => e.request == paramsAsText && e.path == path
    );
    if (!paginateKey) {
      if (cache && priorRequest && priorRequest.lastFetchTime > Date.now() - 1e3 * staleTime) {
        for (let key of Object.keys(priorRequest.res))
          response[key] = priorRequest.res[key];
        if (resFunction) response = resFunction(response);
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
    if (resFunction) response = resFunction(response);
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
      signal: cancelOngoingIfNew ? (_g = (_f = grab.log[0]) == null ? void 0 : _f.controller) == null ? void 0 : _g.signal : AbortSignal.timeout(timeout * 1e3)
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
    let res = null, startTime = /* @__PURE__ */ new Date(), mockHandler = (_h = grab.mock) == null ? void 0 : _h[path];
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
      res = await (type ? type.includes("application/json") ? res && res.json() : type.includes("application/pdf") || type.includes("application/octet-stream") ? res.blob() : res.text() : res.json()).catch((e) => {
        throw new Error("Error parsing response: " + e);
      });
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
      response[key] = paginateResult == key && ((_i = response[key]) == null ? void 0 : _i.length) ? [...response[key], ...res[key]] : res[key];
    grab.log.unshift({
      path,
      request: JSON.stringify({ ...params, paginateKey: void 0 }),
      response,
      lastFetchTime: Date.now()
    });
    if (resFunction) response = resFunction(response);
    return response;
  } catch (error) {
    let errorMessage = "Error: " + error.message + "\nPath:" + baseURL + path + "\n";
    JSON.stringify(params);
    if (options.retryAttempts > 0)
      return await grab(path, response, {
        ...options,
        retryAttempts: --options.retryAttempts
      });
    if (!error.message.includes("signal")) {
      log(errorMessage, true, "color: red;");
      if (debug) showAlert(errorMessage);
      response.error = error.message;
    }
    delete response.isLoading;
    (_j = grab.log) == null ? void 0 : _j.unshift({
      path,
      request: JSON.stringify(params),
      error: error.message
    });
    if (typeof options.response === "function")
      response = options.response(response);
    return response;
  }
}
const debouncer = async (func, wait) => {
  let timeout;
  return async function executedFunction(...args) {
    const later = async () => {
      clearTimeout(timeout);
      await func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
if (typeof window !== "undefined") {
  window.grab = grab;
  window.log = log;
  window.grab.log = [];
  window.grab.mock = {};
  window.grab.defaults = {};
  document.addEventListener("DOMContentLoaded", () => {
    let [scrollTop, scrollLeft, paginateElement] = JSON.parse(localStorage.getItem("scroll")) || [];
    if (!scrollTop) return;
    document.querySelector(paginateElement).scrollTop = scrollTop;
    document.querySelector(paginateElement).scrollLeft = scrollLeft;
  });
} else if (typeof global !== "undefined") {
  global.grab = grab;
  global.log = log;
  global.grab.log = [];
  global.grab.mock = {};
  global.grab.defaults = {};
}
export {
  grab
};
//# sourceMappingURL=grab-api.es.js.map
