module.exports = {
    loader: 'postcss-loader',
    plugins:{ 
        'postcss-preset-env': { 
            "stage": 3,
            'browsers': 'last 2 versions',
        },
    }
};