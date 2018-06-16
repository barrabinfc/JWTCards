const path = require("path");
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  output: {
    filename: './dist/jwtcards.js',
    library: 'JWTCards'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              attrs: false
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx','.ts','.js']
  },
  plugins: [
    new CopyPlugin([ {from: 'src/assets',
                            to: 'assets'}]),
    new HtmlPlugin({
      template: "./src/examples/playground.html",
      filename: "./playground.html"
    })
  ]
};