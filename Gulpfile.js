/**
 * Created by perceval on 03/12/2016.
 */

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const glob = require('glob');
const exec = require('child_process').exec;
const path = require('path');

const config = {
    sourcesJS: 'src/**/*.js',
    finalNameJS: 'all.js',
    sourcesG4: 'src/Grammar.g4',
    finalDirJS: 'dist',
    generatedG4: 'gen/',
    antlr4Cmd: 'java -Xmx500M -cp "/usr/local/lib/antlr-4.5.3-complete.jar:$CLASSPATH" org.antlr.v4.Tool'

};

gulp.task('buildJS', [], () => {
    return gulp.src(config.sourcesJS)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat(config.finalNameJS))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.finalDirJS));
});

gulp.task('buildG4', (cb) => {
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

gulp.task('runBuildJS', ['buildJS'], () => {
    const filePathJS = './' + config.finalDirJS + '/' + config.finalNameJS;
    delete require.cache[require.resolve(filePathJS)]
    //require(filePathJS);
});

gulp.task('runBuildJS_G4', ['buildG4'], () => {
    gulp.run(['runBuildJS']);
});

gulp.task('watchJS',['buildJS', 'runBuildJS'], function () {
    gulp.watch(config.sourcesJS , ['buildJS', 'runBuildJS']);
});

gulp.task('watchAll', function () {
    gulp.watch([config.sourcesG4], ['runBuildJS_G4']);
    gulp.watch([config.sourcesJS], ['runBuildJS']);
});