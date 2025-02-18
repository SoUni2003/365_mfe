const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
    plugins: [
      // Module Federation 
      // new ModuleFederationPlugin({
      //   name: "mfe1",
      //   filename: "remoteEntry.js",
      //   exposes: {
      //     "./CounterButton": "./src/CounterButton",
      //   },
      //   shared: ["react", "react-dom", "zustand"],
      // }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],

    // ifream

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
  };