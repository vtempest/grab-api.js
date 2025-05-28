/**
 * Dynamically imports an SVG icon from the same folder by name.
 * @param {string} name - The SVG file name (without .svg extension)
 * @returns {Promise<React.Component|Module>} - The imported SVG module/component
 */
export async function getLoadingIcon(name) {
    try {
      const icon = await import(`./${name}.svg`);
      return icon.default || icon;
    } catch (e) {
      console.error(`Icon "${name}" not found in this folder.`);
      return null;
    }
  }
  