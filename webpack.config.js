const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([ {from: 'src/assets',
                            to: 'assets'}]),
    new HtmlWebPackPlugin({
      template: "./src/examples/playground.html",
      filename: "./playground.html"
    })
  ]
};