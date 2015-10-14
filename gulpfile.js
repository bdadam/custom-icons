var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require("webpack");
var argv = require('yargs').argv;
var watch = argv.w;

var config = Object.create(require('./webpack.config.js')(watch));

gulp.task('js', function(callback) {
    webpack(config, function(err, stats) {
        gutil.log("[webpack]", stats.toString({ chunks: false, version: false, hash: false }));
    });
});

gulp.task('default', ['js']);