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
  webpackConfig: require('./webpack.dev.config.js'),
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({ propFilter: { skipPropsWithoutDoc: true } }).parse
};