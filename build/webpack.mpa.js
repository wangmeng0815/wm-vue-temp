const path = require('path');
// const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = require('./webpack.config');
const config = require('../config');
const entryConfig = require('../src/utils/get_entry_config');

delete baseConfig.entry;
const prodConfig = merge(baseConfig, {
    entry: entryConfig.Entries,
    mode: 'production',     // 生产环境 会压缩输出
    devtool: 'nosources-source-map',
    output:{
        path: path.join(__dirname, '..', 'dist'),       // 资源文件打包的目录地址
        filename: `assets/scripts/[name].[contenthash].js`,     // js文件生成的目录地址 注意！不要绝对路径
        publicPath: '/' // 当使用按需加载或加载外部资源（如图像，文件等）时，这是一个重要选项。如果指定的值不正确，则收到404错误
    },
    module: {
        // 对于某些库，例如lodash和jquery，其中没有使用require或者import引用模块，不需要使用webpack进行解析分析依赖
        // noParse: /jquery|lodash/,
        rules: [{
            test: /\.(sc|le|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { importLoaders: 1 }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: path.resolve(__dirname, '../postcss.config.js')
                        },
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {}
                }, {
                    loader: 'less-loader',
                }
            ]
        }]
    },
    optimization: {
        minimizer: [
            //  压缩 javascript文件
            new UglifyJsPlugin({
                // cache: true,                // 开启缓存
                // test: /\.js(\?.*)?$/i,      // 正则匹配文件
                // extractComments: 'all',     // 提取注释
                // include: /\/include/,       // 指定目录
                // exclude: /\/node_modules/,  // 排除目录
                // parallel: true,             // 开启并行压缩，充分利用cpu，可指定数字几核心处理
                // uglifyOptions: {
                //     compress: {
                //       drop_console: true
                //     },
                //     output: {
                //       comments: false
                //     }
                //   }
            })
        ],
        splitChunks:{
            // 有效值为all、async、initial
            chunks: 'all',
            maxInitialRequests: 5,          // 最大初始请求数(入口点处的最大并行请求数)
            maxAsyncRequests: 5,            // 按需加载时的最大并行请求数
            /**
             * 80kb以上的chunk抽离为单独的js文件
             * 配合上面的maxInitialRequests
             * 小于80kb的所有chunk会被打包在一起
             * 减少初始请求数
             */
            minSize: 1024 * 80,
            minChunks: 2,                   // 分割前 几个模块以上同时引用的模块 才会抽离出来
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: "all",
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: '../dist'
        }),
        new MiniCssExtractPlugin({           // 打包生成css
            filename: `${config.assetsFile}/styles/[name].css`,
            chunkFilename: `${config.assetsFile}/styles/[id].css`
        }),
        ...entryConfig.HTMLPlugins
    ]
})

module.exports = prodConfig;
