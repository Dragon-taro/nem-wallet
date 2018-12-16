const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.tsx"],
  output: {
    path: path.join(__dirname, "static/js"),
    filename: "bundle.js"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "awesome-typescript-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  }
};
