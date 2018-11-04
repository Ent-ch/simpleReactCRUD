const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom', '@blueprintjs/core', 'axios', 'react-redux', 'redux'],
    client: './src/App.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
        {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader?url=false",
            "sass-loader"
          ]
      }        
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
      new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
      }),
      new HtmlWebpackPlugin({
        title: 'App',
        template: './src/index.html'
      })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
        },
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]    
  },
  devServer: {
    // contentBase: path.join(__dirname, 'docs'),
    open: true,
  }  
};