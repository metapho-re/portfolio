/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const htmlSrcFiles = require('./webpack.html');

const minifyOptions = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
};

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../..',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/main.[contentHash].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/main.[contentHash].css',
    }),
    ...htmlSrcFiles.map(
      file =>
        new HtmlWebpackPlugin({
          favicon: './assets/favicon.ico',
          filename: `${file}.html`,
          template: `./src/html/${file}.html`,
          minify: minifyOptions,
        })
    ),
  ],
});
