var webpack = require('webpack');

module.exports = {
    entry: './app/index.js',

    output: {
        path: './dist',
        filename: 'bundle.js'
    },

    plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(), // only webpac 1.0
        new (webpack.optimize.OccurenceOrderPlugin || webpack.optimize.OccurrenceOrderPlugin)(), // for webpack 2.0
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react']
                }
            }
        ]
    }
};
