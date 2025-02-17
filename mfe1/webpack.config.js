const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
    mode: "development",
    devServer: {
      port: 3001,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "mfe1",
        filename: "remoteEntry.js",
        exposes: {
          "./CounterButton": "./src/CounterButton",
        },
        shared: ["react", "react-dom", "zustand"],
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };