var del = require('del');
var gulp = require('gulp');
var gutil = require('gutil');
var path = require('path');
var runSequence = require('run-sequence');
var template = require('gulp-template');
var webpack = require('webpack');

gulp.task('webpack', function(callback) {
    // run webpack
    webpack({
        entry: './src/client.js',
        output: {
            filename: './dist/bundle.js'
        },
        module: {
            context: path.join(__dirname, 'node_modules'),
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel',
                    query: {
                        presets: ['react', 'es2015']
                    }
                }
            ]
        }
    }, function(err) {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }

        callback();
    });
});

gulp.task('build', function(callback) {
    runSequence('clean', ['webpack', 'copy-alloyeditor', 'render-on-server'], callback);
});

gulp.task('clean', function(callback) {
    del('./dist')
        .then(function() {
            callback();
        });
});

gulp.task('copy-alloyeditor', function() {
    return gulp.src(['./node_modules/alloyeditor/dist/alloy-editor/**/*'])
        .pipe(gulp.dest('./dist/alloyeditor'));
});

gulp.task('default', function(callback) {
    runSequence(['build'], callback);
});

gulp.task('render-on-server', function () {
    return gulp.src('src/index.html')
        .pipe(template({
            content: require('./src/server')()
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function(callback) {
    gulp.watch('src/**/*', ['build'], callback);
});