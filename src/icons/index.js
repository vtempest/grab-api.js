/**
 * Dynamically imports an SVG icon from the same folder by name.
 *
 * Available icons:
 * loading-eclipse
 * loading-ellipsis
 * loading-floatingsearch
 * loading-infinity
 * loading-redblueball
 * loading-ripple

 * @param {string} name - filename without .svg extension
 * @returns {Promise<Module>} - The imported SVG module/component
 */
export async function getLoadingIcon(name) {
  try {
    const icon = await import("./" + name + (name.includes(".") ? "" : ".svg"));
    return icon.default || icon;
  } catch (e) {
    console.error(`Icon "${name}" not found in this folder.`);
    return null;
  }
}
