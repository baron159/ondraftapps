/**
 * Created by scottbaron on 10/10/16.
 */

var webpack = require('webpack');

module.exports = {
    entry: [
        "./public/js/app.js"
    ],
    output: {
        path: __dirname + "/public/js",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css!sass" }
        ]
    }
};