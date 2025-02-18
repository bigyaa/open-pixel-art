const stringify = require('json-stringify-pretty-compact');

/**
 * Compares two pixel objects based on their vertical (y) position first,
 * then horizontal (x) position if the y coordinates are equal.
 *
 * @param {{ x: number, y: number }} a - The first pixel.
 * @param {{ x: number, y: number }} b - The second pixel.
 * @returns {number} A negative value if `a` comes before `b`, positive if after, or 0 if equal.
 */
const pixelSortFunction = (a, b) => (a.y - b.y) || (a.x - b.x);

/**
 * Sorts pixel data within a JSON object.
 *
 * @param {{ data: Array<{ x: number, y: number }> }} pixelJson - JSON object containing an array of pixels.
 * @returns {{ data: Array<{ x: number, y: number }> }} A new JSON object with the pixels sorted.
 */
const sortPixels = (pixelJson) => ({
  data: Array.isArray(pixelJson.data)
    ? [...pixelJson.data].sort(pixelSortFunction)
    : []
});

/**
 * Converts a pixel JSON object into a pretty-printed JSON string.
 *
 * @param {Object} pixelJson - The JSON object to convert.
 * @returns {string} A formatted string representation of the JSON.
 */
const pixelsToString = (pixelJson) =>
  stringify(pixelJson, { indent: 2, maxLength: 100 });

module.exports = {
  sortPixels,
  pixelSortFunction,
  pixelsToString,
};
