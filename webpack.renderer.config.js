const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const rules = require('./webpack.rules');

module.exports = {
  module: {
    rules: rules,
  },
  plugins: [
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    }),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm-bundler.js',
    },
  },
};
