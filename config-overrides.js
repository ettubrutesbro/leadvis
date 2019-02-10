const { override, addDecoratorsLegacy, disableEsLint, addBundleVisualizer, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint(),
  config => (process.env.BUNDLE_VISUALIZE == 1 ? addBundleVisualizer()(config) : config),
  // addWebpackAlias({ ["ag-grid-react$"]: path.resolve(__dirname, "src/shared/agGridWrapper.js") })
);