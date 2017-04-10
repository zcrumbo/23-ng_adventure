'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLPlugin({
      template: `${__dirname}/app/index.html`
    }),
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    rules: [
      {
        test: /\js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader',

      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.(eot|woff|ttf|svg|otf).*/,
        loader: 'url?limit=10000&name=fonts/[hash].[ext]'
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader'
      }
    ]
  }
};
