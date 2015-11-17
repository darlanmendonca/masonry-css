'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');

function errorHandler(err) {
  message = new gutil.PluginError('gulp-sass', err.messageFormatted).toString();
  process.stderr.write(message + '\n');

  gutil.beep();
}

gulp.task('sass', function() {
  let configSass = {
    outputStyle: 'compressed'
  };

  gulp
    .src('./src/mosaic.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(configSass).on('error', errorHandler))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
});
