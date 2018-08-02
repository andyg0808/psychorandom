const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname),
  entry: { index: "./src/index.js", tests: "./test/tests.js" }
};
