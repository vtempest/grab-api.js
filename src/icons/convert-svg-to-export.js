import fs from "fs";
import path from "path";

/**
 * Script to process SVG files from input folder and generates JS export index,
 * Barrel Roll for the icons js files, enabling tree shaking to only the icons the
 * user imports, enables customizing colors and size, and shows tooltip preview.
 * usage: node convert-svg-to-js.js -i ./src/icons-svg -o ./dist/icons
 * @param {string} inputFolder - Path to folder containing SVG files
 * @param {string} outputFolder - Path to folder where JS files will be generated
 */
export function convertSVGFolderToExportIndex(inputFolder, indexPath) {
  // Read all files from input folder
  const files = fs.readdirSync(inputFolder);
  const svgFiles = files.filter(
    (file) => path.extname(file).toLowerCase() === ".svg"
  );

  // Generate index file

  let indexContent = `// Do a Barrel Roll index of SVG icons as JS exports, enabling tree shaking to only the icons you import.\n\n`;
  const exportData = [];

  svgFiles.forEach((svgFile) => {
    const inputPath = path.join(inputFolder, svgFile);
    const baseName = path.basename(svgFile, ".svg");

    // Read SVG content
    const svgContent = fs.readFileSync(inputPath, "utf8");

    // Extract original dimensions from SVG
    const widthMatch = svgContent.match(/width="(\d+)"/);
    const heightMatch = svgContent.match(/height="(\d+)"/);
    const defaultWidth = widthMatch ? widthMatch[1] : "100";
    const defaultHeight = heightMatch ? heightMatch[1] : "100";

    // Convert SVG string to Base64
    const svgBase64 = `data:image/svg+xml;base64,${btoa(
      unescape(encodeURIComponent(svgContent))
    )}`;

    const jsContent = `export const ${toCamelCase(
      baseName
    )} = (options = {}) => customSVG(options, 
\`${svgContent
      .replace(/`/g, "\\`")
      .replace(' xmlns:xlink="http://www.w3.org/1999/xlink"', "")
      .replace(/\n/g, "")
      .replace(/\$/g, "\\$")
      .replace(/  +/g, " ")
      .replace(/> </g, "><")}\`);\n\n`;

    // Generate imports
    indexContent += jsContent;

    // Store export data for index file
    exportData.push({
      fileName: svgFile,
      baseName: baseName,
      functionName: toCamelCase(baseName),
      content: jsContent,
      svgBase64: svgBase64,
      defaultWidth: defaultWidth,
      defaultHeight: defaultHeight,
    });
  });

  indexContent += `/**
 * Shared utility function for processing SVG icons
 * @param {Object} options - Configuration options
 * @param {string[]} [options.colors] - Array of hex colors to replace existing colors
 * @param {number|string} [options.width] - Width of the SVG
 * @param {number|string} [options.height] - Height of the SVG
 * @param {number|string} [options.size] - Size for both width and height (overrides width/height)
 * @param {string} svgString - The original SVG content
 * @returns {string} SVG string with applied customizations
 */
function customSVG( options: LoadingOptions, svgString: string) {
    const { colors = [], width, height, size } = options;

    const widthMatch = svgString.match(/width="(d+)"/);
    const heightMatch = svgString.match(/height="(d+)"/);
    const finalWidth = size || width || widthMatch[1] || '100';
    const finalHeight = size || height || heightMatch[1] || '100';
    
    svgString = svgString.replace(/width="[^"]*"/g, \`width="\${finalWidth}"\`);
    svgString = svgString.replace(/height="[^"]*"/g, \`height="\${finalHeight}"\`);

    // If colors array is provided, replace hex colors in order of appearance
    if (colors && colors.length > 0) {
        const hexColorRegex = /#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/g;
        let colorIndex = 0;
        
        svgString = svgString.replace(hexColorRegex, (match) => {
            if (colorIndex < colors.length) {
                const replacement = colors[colorIndex];
                colorIndex++;
                return replacement.startsWith('#') ? replacement : \`#\${replacement}\`;
            }
            return match; // Keep original color if no replacement available
        });
    }

    return svgString;
}

interface LoadingOptions {
  colors?: string[];
  width?: number;
  height?: number;
  size?: number;
}
`;

  fs.writeFileSync(indexPath, indexContent);

  let typesContent = `interface LoadingOptions {
  /** Array of hex colors to replace existing colors, in order of appearance in SVG*/
  colors?: string[];
  /** Width of the SVG */
  width?: number;
  /** Height of the SVG */
  height?: number;
  /** Size for both width and height (overrides width/height) */
  size?: number;
}
  
// Handles wildcard imports like "grab-api.js/icons/foo.svg"
declare module 'grab-api.js/icons/*' {
  const icon: any;
  export default icon;
}

declare module 'grab-api.js/icons' {
`;

  exportData.forEach(
    ({
      baseName,
      functionName,
      content,
      svgBase64,
      defaultWidth,
      defaultHeight,
    }) => {
      typesContent += `
/**
* Returns a customized SVG string for loading icon ${baseName.replace(
        /loading-/g,
        ""
      )}
* 
* ![${baseName}](${svgBase64})
* @param {Object} options - Configuration options
* @param {string[]} [options.colors] - Array of hex colors to replace existing colors
* @param {number} [options.width] - Width of the SVG (default: ${defaultWidth})
* @param {number} [options.height] - Height of the SVG (default: ${defaultHeight})
* @param {number} [options.size] - Size for both width and height
* @example ${toCamelCase(
        baseName
      )}({ colors: ['#0099e5', '#ff4c4c'], size: 100 });
* @returns {string} SVG string with applied customizations
*/
export const ${functionName}: (options?: LoadingOptions) => string;`;
    }
  );

  fs.writeFileSync(indexPath.replace(".ts", ".d.ts"), typesContent + "\n}");

  console.log(
    `✨ Converted ${svgFiles.length} SVG files to customizable JS export files`
  );
}

/**
 * Convert string to camelCase
 * @param {string} str
 * @returns {string}
 */
function toCamelCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]/g, " ")
    .replace(/\s+/g, " ")
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

// Get input/output folders from command line args
const args = process.argv.slice(2);
const inputIndex = args.indexOf("-i");
const outputIndex = args.indexOf("-o");

const inputFolder = inputIndex >= 0 ? args[inputIndex + 1] : "./svg"; // Folder containing SVG files
const outputPath = outputIndex >= 0 ? args[outputIndex + 1] : "./index.ts"; // Folder for generated JS files

// Run the converter
convertSVGFolderToExportIndex(inputFolder, outputPath);
