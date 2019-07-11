const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
function resolve(_dir){
    return path.join(__dirname, '..', _dir);
}

const config = {
    entry: resolve('src/main.js'),
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('src')
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: { importLoaders: 1 }
                },
            ]
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: [{
                loader: 'url-loader', // url-loader依赖file-loader 当超过图片限制时 调用file-loader处理 否则会将文件处理成DataURL
                options: {
                    limit: '9999',
                    // name: 'img/[name].[hash:7].[ext]'
                }
            }]
        }]
    },
    plugins:[
        new VueLoaderPlugin(),               // vueLoader官方插件
    ]
}

module.exports = config;