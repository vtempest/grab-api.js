/**
 * Script to process SVG files from input folder and generates JS export index,
 * Barrel Roll for the icons js files, enabling tree shaking to only the icons the
 * user imports, enables customizing colors and size, and shows tooltip preview.
 * usage: node convert-svg-to-js.js -i ./src/icons-svg -o ./dist/icons
 * @param inputFolder - Path to folder containing SVG files
 * @param outputFolder - Path to folder where JS files will be generated
 */
declare function convertSVGFolderToExportIndex(inputFolder: string, outputFolder: string): void;

/**
 * Convert string to camelCase
 */
declare function toCamelCase(str: string): string;

/**
 * ### Colorized Log With JSON Structure
 * ![Debug log](https://i.imgur.com/R8Qp6Vg.png)
 * Logs messages to the console with custom styling,
 * prints JSON with description of structure layout,
 * and showing debug output in development only.
 * @param message - The message to log. If an object is provided, it will be stringified.
 * @param [hideInProduction] - default = auto-detects based on hostname.
 *  If true, uses `console.debug` (hidden in production). If false, uses `console.log`.
 * @param [style] - default='color: blue; font-size: 15px' - CSS style string
 */
declare function log(message: string | any, hideInProduction?: boolean, style?: string): void;

/**
 * Determines the appropriate color code for a given value type
 * Used for consistent color coding in the structure visualization
 */
declare function getColorForType(): void;

/**
 * Returns a string representation of the value's type
 * Used to show simplified type information in the structure visualization
 */
declare function getTypeString(): void;

/**
 * Creates a colored visualization of a JSON object's structure
 * Shows the shape and types of the data rather than actual values
 * Recursively processes nested objects and arrays
 */
declare function printStructureJSON(): void;

/**
 * Shows message in a modal overlay with scrollable message stack
 * and is easier to dismiss unlike alert() which blocks window.
 * Creates a semi-transparent overlay with a white box containing the message.
 * @param msg - The message to display
 */
declare function showAlert(msg: string): void;

