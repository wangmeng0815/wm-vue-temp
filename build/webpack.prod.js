const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

const prodConfig = merge(baseConfig, {
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
        })
    ]
})

export default prodConfig;