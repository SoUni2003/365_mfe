const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    // Module Federation

    // new ModuleFederationPlugin({
    //     name: "shell",
    //     remotes: {
    //       mfe1: "mfe1@http://localhost:3001/remoteEntry.js",
    //       mfe2: "mfe2@http://localhost:3002/remoteEntry.js",
    //     },
    //     exposes: {
    //       "./store": "./src/store",
    //     },
    //     shared: ["react", "react-dom", "zustand"],
    //   }),

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
