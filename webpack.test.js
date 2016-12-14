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
    new webpack.SourceMapDevToolPlugin({
      filename: null, // if no value is provided the sourcemap is inlined
      test: /\.(tsx?|js)($|\?)/i // process .js, .tsx and .ts files only
    })
  ],
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};