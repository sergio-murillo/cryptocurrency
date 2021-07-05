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
      "@src": path.join(__dirname, 'src'),
      "@components": path.join(__dirname, 'src/components'),
      "@constants": path.join(__dirname, 'src/constants'),
      "@containers": path.join(__dirname, 'src/containers'),
      "@helpers": path.join(__dirname, 'src/helpers'),
      "@services": path.join(__dirname, 'src/services'),
      "@models": path.join(__dirname, 'src/models'),
      "@store": path.join(__dirname, 'src/store'),
      "@utils": path.join(__dirname, 'src/utils'),
      "@styles": path.join(__dirname, 'src/styles')
    },
    extensions: ['', '.js', '.ts', '.tsx', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.s[ac]ss$/i,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.tsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
        exclude: [/\.spec\.ts/]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  }
}
