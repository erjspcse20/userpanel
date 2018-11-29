const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const WebpackS3Plugin = require('webpack-s3-plugin');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || '8888';

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: '[name]-[hash].min.js',
    publicPath: 'https://static.fabhotels.com/hotelier/js/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders,
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new WebpackS3Plugin({
      include: /.*\.js/,
      s3Options: {
        region: 'us-east-1',
        accessKeyId: 'key',
        secretAccessKey: 'key',
      },
      s3UploadOptions: {
        Bucket: 'casa2inns.assets',
      },
      basePath: 'hotelier/js',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      inject: 'body',
    }),
  ],
};
