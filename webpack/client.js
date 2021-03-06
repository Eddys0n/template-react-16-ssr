const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./common');
const join = require('path').join;

module.exports = merge(common, {
    mode: 'development',
    name: 'client',
    target: 'web',
    entry: [
        'webpack-hot-middleware/client',
        join(__dirname, '../src/client/index')
    ],
    devtool: 'inline-source-map',
    output: {
        filename: 'app.client.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [{
            test: /\.styl$/,
            exclude: /node_modules/,
            use:  ['style-loader', {
                loader: 'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]'
                }
            }, 'stylus-loader']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
