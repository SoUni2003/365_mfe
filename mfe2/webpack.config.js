
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
      port: 3002,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "mfe2",
        filename: "remoteEntry.js",
        exposes: {
          "./CounterDisplay": "./src/CounterDisplay",
        },
        shared: ["react", "react-dom", "zustand"],
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };