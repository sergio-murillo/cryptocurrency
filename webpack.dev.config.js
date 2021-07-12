const path = require('path')
const webpack = require('webpack')

const BUILD_DIR = path.resolve(__dirname, 'dist')

module.exports = {
  devtool: 'eval',
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.tsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      "src": path.resolve(__dirname, 'src/')
    },
    extensions: ['*', '.js', '.ts', '.tsx', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ["file-loader"]
      }
    ]
  }
}
