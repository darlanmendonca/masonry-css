'use strict';

let gulp = require('gulp');
let browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    notify: false,
    open: false
  });
});
