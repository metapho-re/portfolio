/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const htmlSrcFiles = require('./webpack.html');

module.exports = merge(common, {
  devServer: {
    contentBase: './build',
  },
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/main.js',
  },
  plugins: htmlSrcFiles.map(
    file =>
      new HtmlWebpackPlugin({
        favicon: './assets/favicon.ico',
        filename: `${file}.html`,
        template: `./src/html/${file}.html`,
      })
  ),
});
