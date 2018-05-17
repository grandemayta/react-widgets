const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const packageInfo = require('./package.json');
const src = path.resolve(__dirname, './src');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    port: 3002,
    open: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: packageInfo.name,
      template: `${src}/demo/index.pug`,
      filename: 'index.html',
      inject: 'head'
    })
  ]
});
