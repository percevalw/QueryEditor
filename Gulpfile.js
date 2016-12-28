/**
 * Created by perceval on 03/12/2016.
 */

const gulp = require('gulp');

const config = {
    sourcesWatch: 'src/**/*.js',
    sourcesDevJS: 'src/dev.js',
    sourcesClientJS: 'src/**/*.js',
    finalNameDevJS: 'dev.js',
    finalNameClientJS: 'client.js',
    sourcesG4: 'src/Grammar.g4',
    finalDir: 'dist/',
    generatedG4: 'gen/',
    antlr4Cmd: 'java -Xmx500M -cp "/usr/local/lib/antlr-4.5.3-complete.jar:$CLASSPATH" org.antlr.v4.Tool',
    copy_assets_files: [
        "node_modules/angular/angular.min.js",
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ]
};



gulp.task('buildJS', [], () => {
    const sourcemaps = require('gulp-sourcemaps');
    const babel = require('gulp-babel');
    const gutil = require('gulp-util');
    const concat = require('gulp-concat');

    return gulp.src(config.sourcesDevJS)
        .on('error', function(error) {gutil.log(gutil.colors.red(error)); this.emit('end')})
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat(config.finalNameDevJS))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.finalDir));
});

gulp.task('buildClientJS', [], () => {
    const babelify = require('babelify');
    const browserify = require('browserify');
    const source = require("vinyl-source-stream");
    const glob = require('glob');

    return browserify({
        entries: glob.sync(config.sourcesClientJS),
        insertGlobalVars: {
            angular: function(file, dir) {
                return 'window.angular';
            }
        }
    })
        .transform(babelify.configure({
            presets : ["es2015"]
        }))
        .bundle()
        .on('error', function(error) {gutil.log(gutil.colors.red(error)); this.emit('end')})
        .pipe(source(config.finalNameClientJS))
        .pipe(gulp.dest(config.finalDir))
});

gulp.task('buildG4', (cb) => {
    const path = require('path');
    const exec = require('child_process').exec;

    const cmd =
        config.antlr4Cmd + ' -o ' +
        path.resolve(config.generatedG4) +
        ' -visitor -listener -Dlanguage=JavaScript -lib ' +
        path.resolve(config.sourcesG4 + '/..') + ' ' +
        path.resolve(config.sourcesG4);
    console.log(cmd);
    exec(cmd, function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('server', (cb) => {
    var port = process.env.PORT || 8080;
    var express = require('express');
    var app = express();

    app.get('/', function(req, res){
        res.sendfile('client/index.html');
    });
    app.use(express.static('dist'));

    app.listen(port, function () {
        console.log('Listening on port ' + port);
        cb();
    });

});


gulp.task('buildJS_G4', ['buildG4'], () => {
    gulp.run(['buildClientJS']);
});

gulp.task('watchJS',['buildJS', 'runBuildJS'], function () {
    gulp.watch(config.sourcesWatch , ['buildJS', 'runBuildJS']);
});

gulp.task('watchAll', function () {
    gulp.run(['buildJS_G4']);
    gulp.watch([config.sourcesG4], ['buildJS_G4']);
    gulp.watch([config.sourcesWatch], ['buildClientJS']);
});

gulp.task('copyAssets', function() {
    return gulp
        .src(config.copy_assets_files)
        .pipe(gulp.dest(config.finalDir));
});

gulp.task('build', ['buildJS_G4', 'copyAssets']);

gulp.task('default', ['server']);
