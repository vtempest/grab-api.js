
/**
 * Logs messages to the console with custom styling,
 * showing debug output in development and standard logs in production.
 * Pretty print JSON with description of structure layout.
 * @param {string|object} message - The message to log. If an object is provided, it will be stringified.
 * @param {boolean} [hideInProduction] -  default = auto-detects based on hostname.
 *  If true, uses `console.debug` (hidden in production). If false, uses `console.log`.
 * @param {string} [style] default='color: blue; font-size: 15px' - CSS style string for the console output.
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





// ANSI color codes (for Node.js)
const colors = {
  reset: "\x1b[0m",
  yellow: "\x1b[33m",    // string
  cyan: "\x1b[36m",      // number
  magenta: "\x1b[35m",   // boolean
  gray: "\x1b[90m",      // null
  green: "\x1b[32m",     // object braces
  blue: "\x1b[34m",      // array brackets
  red: "\x1b[31m",       // function
  white: "\x1b[37m",     // default
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

export function printStructureJSON(obj, indent = 0) {
  const pad = "  ".repeat(indent);

  // Handle primitives and null
  if (typeof obj !== "object" || obj === null) {
    const color = getColorForType(obj);
    return color + getTypeString(obj) + colors.reset;
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    let result = colors.blue + "[" + colors.reset;
    if (obj.length) result += "\n";
    obj.forEach((item, idx) => {
      result += pad + "  " + printStructureJSON(item, indent + 1);
      if (idx < obj.length - 1) result += ",";
      result += "\n";
    });
    result += pad + colors.blue + "]" + colors.reset;
    return result;
  }

  // Handle objects
  let result = colors.green + "{" + colors.reset;
  const keys = Object.keys(obj);
  if (keys.length) result += "\n";
  keys.forEach((key, index) => {
    const value = obj[key];
    const color = getColorForType(value);
    result += pad + "  ";
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      // For nested objects, colorize key, then recurse for value
      result += color + key + colors.reset + ": " + printStructureJSON(value, indent + 1);
    } else if (Array.isArray(value)) {
      // For arrays, colorize key, then recurse for value
      result += color + key + colors.reset + ": " + printStructureJSON(value, indent + 1);
    } else {
      // For primitives
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

