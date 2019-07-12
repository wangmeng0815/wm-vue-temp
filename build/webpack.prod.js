const path = require('path');
// const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const baseConfig = require('./webpack.config');
const config = require('../config');

const prodConfig = merge(baseConfig, {
    mode: 'production',     // 生产环境 会压缩输出
    output:{
        path: path.join(__dirname, '..', 'dist'),       // 资源文件打包的目录地址
        filename: `${config.assetsFile}/scripts/[name].[contenthash].js`,     // js文件生成的目录地址 注意！不要绝对路径
        publicPath: '/' // 当使用按需加载或加载外部资源（如图像，文件等）时，这是一个重要选项。如果指定的值不正确，则收到404错误
    },
    optimization: { 
        minimizer: [    //  压缩 javascript文件
            new UglifyJsPlugin({
                // cache: true,                // 开启缓存
                // test: /\.js(\?.*)?$/i,      // 正则匹配文件
                // include: /\/include/,       // 指定目录
                // exclude: /\/node_modules/,  // 排除目录
            })
        ],          
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: '../dist'
        }),
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, '..', `dist/index.html`),        // 模板文件生成的地址
            template: path.join(__dirname, '..', 'index.html'),             // 模板引用的地址
            inject: true,
            // minify: {
            //     collapseWhitespace: true,   // 折叠空白行
            //     removeComments: true,   // 移除注释
            //     removeAttributeQuotes: true,    // 移除属性多余的引号
            // }
        }),
    ]
})

module.exports = prodConfig;