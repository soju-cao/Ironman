const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

// 源代码的根目录
const BUILD_PATH = path.resolve('../hello/www');
const DEBUG = process.env.NODE_ENV !== 'production' ? true : false;

const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),
  path.resolve(__dirname, 'src/asserts')
];

module.exports = {
  // devtool: 'eval-source-map',
  entry: {
    index: './src/Root.js',
    vendor: ["react", "react-dom"]
  },
  output: {
    path: BUILD_PATH,
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].js'
  },
  plugins: [
    // 每次打包前，先清空原来目录中的内容
    new CleanWebpackPlugin([BUILD_PATH], { verbose: false }),
    // 生成一个html文件，并用script标签引用所有的webpack包
    new HtmlWebpackPlugin({
      template: './src/index.html', // 根据指定的模板文件生成特定的html文件
      inject: 'body', // script标签位于html文件的body底部
      filename: 'index.html'
    }),
    new ExtractTextPlugin({filename: 'css/[name].css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize : true,
      compress: {
        warnings: false
      },
      sourceMap: false
    })
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), path.join(__dirname, 'src')],
    extensions: ['.web.js', '.jsx', '.js', '.json'],
    alias: {
      'src': path.resolve(__dirname, './src'),
      'asserts': path.resolve(__dirname, './src/asserts'),
      'utils': path.resolve(__dirname, './src/utils'),
      'styles': path.resolve(__dirname, './src/styles')
    }
  },
  module: {
    loaders: [{
      test: /\.(js)$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      exclude: /node_modules/,
      loader: ['babel-loader', 'eslint-loader'],
    }, {
      test: /\.(svg)$/i,
      loader: 'svg-sprite-loader',
      include: svgDirs
    }, {
      test: /\.json?$/,
      loader: 'json-loader'
    }, {
      test: /\.scss$/, // 加上modules启用css modules
      loader: DEBUG
        ? 'style-loader!css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass-loader'
        : ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass-loader' })
    }, {
      test: /\.(css|less|sass)$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'
    }]
  }
};
