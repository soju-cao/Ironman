const config = require('./webpack.base.config');
const webpack = require('webpack');

config.devServer = {
  port: 3000,
  open: true,
  historyApiFallback: true // get page through url
};
config.devtool = 'eval-source-map';

module.exports = config;
