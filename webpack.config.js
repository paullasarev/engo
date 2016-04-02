var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var postcssModules = require('postcss-modules');
var postcssSimpleVars = require('postcss-simple-vars');
var postcssImport = require("postcss-import");
var postcssImageSizes = require('postcss-image-sizes')
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3003', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './src/js/app.jsx', // Your appʼs entry point
  ],
  devtool: 'source-map', //process.env.WEBPACK_DEVTOOL || 
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'js/app.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.html']
  },
  postcss: [
    postcssImport,
    postcssSimpleVars,
    autoprefixer,
    // postcssImageSizes,
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel'],
      },
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract('style-loader', 
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
      {
        test: /\.(woff|woff2)$/,
        loader: "url?prefix=font/&limit=5000"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.gif/,
        loader: "url-loader?limit=10000&mimetype=image/gif"
      },
      {
        test: /\.jpg/,
        loader: "url-loader?limit=10000&mimetype=image/jpg"
      },
      {
        test: /\.png/,
        loader: "url-loader?limit=10000&mimetype=image/png"
      }
    ]
  },
  devServer: {
    port: 3003,
    contentBase: "./build",
    noInfo: true,
    hot: true,
    inline: true,
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new CleanWebpackPlugin(['build']),
    new ExtractTextPlugin('style/app.css', { allChunks: true }), 
    new CopyWebpackPlugin([
      { from: 'src/index.html' },
      { from: 'src/img/mind-map-lila-16.png', to:'favicon.png' },
      { from: 'src/img', to: './img' },
    ]),
  ]
};


