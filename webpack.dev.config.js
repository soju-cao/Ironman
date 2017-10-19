const config = require('./webpack.base.config');

config.devServer = {
  port: 3000,
  open: true,
  historyApiFallback: true // get page through url
};
config.devtool = 'eval-source-map';
// config.plugins.push(
//   添加 Sourcemap 支持
//   new webpack.SourceMapDevToolPlugin({
//     filename: '[file].map'
//   }),
//   new webpack.HotModuleReplacementPlugin()
// );

module.exports = config;
