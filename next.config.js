const withCSS = require('@zeit/next-css');

const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = withCSS({
  generateEtags: false,
  cssModules: true,
  exportPathMap: async () => ({
    '/': { page: '/' },
  }),
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  },
});
