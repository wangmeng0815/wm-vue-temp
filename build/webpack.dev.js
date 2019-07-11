const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.config');

const devConfig = merge(baseConfig, {
    output: {
        filename: '[name].[hash].js',
    },
    devServer: {
        host: '0.0.0.0',
        port: '8015',           
        hot: true,
        open: true,
        quiet: true,
        inline: true,
        overlay: { // 当出现编译器错误或者警告时，在浏览器中显示全屏叠加。 默认情况下禁用。 boolean object
            warnings: true,
            errors: true
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '..', 'index.html'),
            inject: true
        })
    ]
});

module.exports = devConfig;