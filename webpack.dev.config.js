const path = require('path')
const webpack = require('webpack')

const BUILD_DIR = path.resolve(__dirname, 'build')

module.exports = {
  devtool: 'eval',
  entry: {
    bundle: ['./src/index.tsx']
  },
  context: path.resolve(__dirname),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
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
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.styleguidist.json"
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ["file-loader"]
      }
    ]
  }
}
