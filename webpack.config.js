const webpack = require("webpack");

module.exports = {

  devtool: "source-map",
  entry: "./src/main.ts",
  output: {
    filename: "main.js"
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ],
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};