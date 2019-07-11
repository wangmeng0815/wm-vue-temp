const path = require('path');

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
        }]
    }
}