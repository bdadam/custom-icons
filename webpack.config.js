var path = require("path");
var webpack = require("webpack");

var svgoConfig = {
    plugins: [
        { removeTitle: true },
        // { convertColors: { shorthex: false } },
        // { convertPathData: false },
        { removeDimensions: true }
    ]
};

module.exports = function(watch) {
    return {
        cache: true,
        stats: {
            colors: true,
            reasons: false,
            modules: false
        },
        watch: watch,
        progress: false,
        failOnError: true,
        entry: './src/icons.js',
        output: {
            path: path.join(__dirname, "dist/"),
            filename: "icons.min.js",
            sourceMapFilename: "icons.min.js.map"
        },
        devtool: 'source-map',
        module: {
            loaders: [
                {
                    test: /.*\.svg$/,
                    loaders: [
                        'raw-loader',
                        'svgo-loader?' + JSON.stringify(svgoConfig)
                    ]
                }
            ]
        },
        plugins: [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin()
        ]
    };
};
