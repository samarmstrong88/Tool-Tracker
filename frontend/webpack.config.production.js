const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('@babel/polyfill');

module.exports = {
  entry: ['@babel/polyfill', './App.js'],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  context: path.resolve(__dirname, 'src'),
  plugins: [
    new CleanWebpackPlugin(['dist']), //removes old dist folder
    new HtmlWebpackPlugin({
      template: '../public/index.html', //uses index.html as a template for output html
    }),
    new MiniCssExtractPlugin(), //extracts scss/csss
    new webpack.DefinePlugin({
      API_URL: JSON.stringify('https://tooltrackerapi.herokuapp.com'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64]',
            },
          },
          { loader: 'sass-loader' },
        ],
      },

      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              {
                plugins: ['@babel/plugin-proposal-class-properties'],
              },
            ],
          },
        },
      },
    ],
  },
};
