const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.base.config');

config.plugins.push(
  // 官方文档推荐使用下面的插件确保 NODE_ENV
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    minimize : true,
    compress: {
      warnings: false
    },
    sourceMap: false
  }),
  new webpack.HashedModuleIdsPlugin(),
  // split vendor js into its own file
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function (module, count) {
      // any required modules inside node_modules are extracted to vendor
      return (
        module.resource &&
        /\.js$/.test(module.resource) &&
        module.resource.indexOf(
          path.join(__dirname, '../node_modules')
        ) === 0
      );
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'runtime'
  }),
  // 启动 minify
  new webpack.LoaderOptionsPlugin({ minimize: true }),
  // 抽取 CSS 文件
);

module.exports = config;
