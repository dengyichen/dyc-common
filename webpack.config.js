const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'js/main.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        use:{
          loader: "babel-loader",
          options:{
            presets:['env','stage-0']
          }
        }
      }
    ]
  }
};