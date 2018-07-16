const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve("build"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [htmlPlugin]
};
