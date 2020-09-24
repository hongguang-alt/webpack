const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const ssrConfig = {
  output: {
    filename: '[name]-server.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: 'ignore-loader',
    }, {
      test: /\.less$/,
      use: 'ignore-loader',
    }],
  },
};

module.exports = merge(baseConfig, ssrConfig);
