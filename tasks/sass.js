'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let config = require('./config.js');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');
// let browserSync = require('browser-sync').create();

gulp.task('sass', sassTask);

function sassTask() {
  return gulp
    .src('./src/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass).on('error', errorHandler))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'))
    // .pipe(browserSync.stream());
}

function errorHandler(err) {
  let message = new gutil.PluginError('gulp-sass', err.messageFormatted).toString();
  process.stderr.write(message + '\n');

  gutil.beep();
}
