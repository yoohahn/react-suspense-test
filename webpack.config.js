const HtmlWebPackPlugin = require("html-webpack-plugin");
const { join } = require("path");
module.exports = () => {
  const config = {
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
      jsonpFunction: "__myJSONP__",
      filename: "[name].js",
      chunkFilename: "[name].js",
      path: join(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        title: "WebApp Demo",
        template: "./src/index.ejs",
        filename: "./index.html",
        inject: "body",
        chunksSortMode: "dependency",
        baseHref: "/"
      })
    ],
    resolve: {
      extensions: [".js", ".jsx"]
    }
  };

  return config;
};
