const webpack = require("webpack");

module.exports = {

  devtool: "source-map",
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx']
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: null, // if no value is provided the sourcemap is inlined
      test: /\.(ts|js)x?$/i // process .js, .tsx and .ts files only
    })
  ],
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/i, loader: 'ts-loader' }
    ],
    postLoaders: [
      {
          test: /\.tsx?$/i,
          include: /(src)/,
          exclude: /(node_modules|resources\/js\/vendor)/,
          loader: 'istanbul-instrumenter-loader'
      }
    ]
  },
  externals: {
    "jquery": "jQuery"
  }

};