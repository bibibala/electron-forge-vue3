const rules = require('./webpack.rules');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    module: {
        rules: rules,
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm-bundler.js'
        }
    }
};
