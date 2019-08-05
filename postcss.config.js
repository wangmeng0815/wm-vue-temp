module.exports = {
    // parser: 'sugarss',
    loader: 'postcss-loader',
    plugins:{ 
        'postcss-import': {},
        'postcss-preset-env': { 
            'browsers': 'last 2 versions',
        },
        'cssnano':{},
    }
    // plugins: [
    //     // require("postcss-import")(),
    //     require("postcss-preset-env")({
    //         'browsers': ['> %1', 'last 2 versions'],
    //     }),
    // ],
};