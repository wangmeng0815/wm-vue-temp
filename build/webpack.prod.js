const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const baseConfig = require('./webpack.config');


const prodConfig = merge(baseConfig, {
    mode: 'production',     // 生产环境 会压缩输出
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
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '..', 'index.html'),
            minify: {
                // 折叠空白行
                collapseWhitespace: true,
                // 移除注释
                removeComments: true,
                // 移除属性多余的引号
                removeAttributeQuotes: true,
            }
        }),
    ]
})

export default prodConfig;