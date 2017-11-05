const config = require('./webpack.base.config');
const webpack = require('webpack');

config.devServer = {
  port: 3000,
  open: true,
  historyApiFallback: true // get page through url
};
config.devtool = 'eval-source-map';
config.plugins.push(
  // 官方文档推荐使用下面的插件确保 NODE_ENV
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  })
);

module.exports = config;
