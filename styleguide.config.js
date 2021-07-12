const path = require('path');

module.exports = {
  title: 'CryptoCurrency documentation',
  pagePerSection: true,
  sections: [
    {
      name: 'Components',
      description: 'Documentation',
      components: 'src/components/**/*.tsx',
    },
    {
      name: 'Containers',
      description: 'Documentation',
      components: 'src/containers/**/*.tsx',
    }
  ],
  webpackConfig: {
    entry: {
      bundle: ['./src/index.tsx'],
    },
    context: path.resolve(__dirname),
    output: {
      path: path.resolve(__dirname, 'temp'),
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
          use: [{
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.styleguidist.json"
            }
          }]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: ["file-loader"]
        }
      ]
    }
  },
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({ propFilter: { skipPropsWithoutDoc: true } }).parse
};