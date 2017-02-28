/**
 * Created by scottbaron on 10/10/16.
 */
module.exports = {
    entry: [
        "./public/js/app.js"
    ],
    output: {
        path: __dirname + "/public/js",
        filename: "bundle.js",
        publicPath: "/js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css!sass" },
            {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/public/img/[name].[ext]"}
        ]
    }
};
