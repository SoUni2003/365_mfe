const path = require('path');

module.exports = {
  entry: "./src/mfe2.js",
  mode: "development",
  output: {
    filename: "mfe2.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
  },
  // Module Federation 

    // plugins: [
    //   new ModuleFederationPlugin({
    //     name: "mfe2",
    //     filename: "remoteEntry.js",
    //     exposes: {
    //       "./CounterDisplay": "./src/CounterDisplay",
    //     },
    //     shared: ["react", "react-dom", "zustand"],
    //   }),
    //   new HtmlWebpackPlugin({
    //     template: "./public/index.html",
    //   }),
    // ],

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