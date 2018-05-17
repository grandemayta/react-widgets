const Webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const env = process.env.NODE_ENV;
const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');

module.exports = {
  entry: {
    title: `${src}/widgets/title.js`,
    paragraph: `${src}/widgets/paragraph.js`,
    vendor: ['react', 'react-dom']
  },
  output: {
    path: dist,
    publicPath: '/',
    filename: env === 'prod' ? '[name].min.js' : '[name].js',
    library: ['[name]'],
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'src'],
    alias: {
      src: `${src}`
    }
  },
  plugins: [
    new CleanWebpackPlugin([dist]),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: env === 'prod' ? 'widgets.[name].min.js' : 'widgets.[name].js'
    })
  ]
};
