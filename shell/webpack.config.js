const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "shell",
        remotes: {
          mfe1: "mfe1@http://localhost:3001/remoteEntry.js",
          mfe2: "mfe2@http://localhost:3002/remoteEntry.js",
        },
        exposes: {
          "./store": "./src/store",
        },
        shared: ["react", "react-dom", "zustand"],
      }),
      
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};