'use strict';

/**
 * Created by perceval on 03/12/2016.
 */

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

var config = {
    sourcesJS: 'src/**/*.js'
};

gulp.task('default', function () {
    return gulp.src(config.sourcesJS).pipe(sourcemaps.init()).pipe(babel({
        presets: ['es2015']
    })).pipe(concat('all.js')).pipe(sourcemaps.write('.')).pipe(gulp.dest('dist'));
});

gulp.task('watch', ['default'], function () {
    gulp.watch(config.sourcesJS, ['default']);
});

//# sourceMappingURL=Gulpfile-compiled.js.map