const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.config');

const devConfig = merge(baseConfig, {
    mode: 'development',                // 开发环境
    devtool: 'inline-source-map',
    output: {
        filename: '[name].[hash].js',
    },
    module: {
        rules: [{
            test: /\.(sc|le|c)ss$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: { importLoaders: 1 }
                }, 
                'postcss-loader',
                {
                    loader: 'sass-loader',
                    options: {}
                }, {
                    loader: 'less-loader',
                }
            ]
        }]
    },
    devServer: {
        host: '0.0.0.0',
        port: '8015',           
        // contentBase: './dist', //默认会以根文件夹提供本地服务器，这里指定文件夹
        hot: true,
        open: true,
        quiet: true,
        inline: true,
        compress: true,         // 启用gzip压缩
        /**
         * 单页应用的前端路由使用history模式时，这个配置很重要
         * webpack-dev-server服务器接受的请求路径没有匹配资源时
         * 会返回index.html 而不是404页面
         */
        historyApiFallback: true,
        // historyApiFallback: {
        //     rewrites: [{
        //         from: '', to:''
        //     }]
        // },
        overlay: { // 当出现编译器错误或者警告时，在浏览器中显示全屏叠加。 默认情况下禁用。 boolean object
            warnings: true,
            errors: true
        },
        // headers: {},
        // before: function(app, server){

        // },
        proxy: {                // 把当前客户端的api请求，代理转发到指定服务器上
            '/api': {
                target: 'http://localhost:4000',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '..', 'index.html'),
            inject: true
        }),
    ]
});

module.exports = devConfig;