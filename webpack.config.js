const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
  //stats: 'errors-only',

  entry: {
    bundle: './src/index.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.[name].js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { 
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use:  [{
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        }]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'main.[name].css'
    })
  ],

  /*optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: /node_modules/
      }),
    ],
  },*/

  devServer: {
    port: 9000,
  }
};