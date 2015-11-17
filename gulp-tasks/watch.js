'use strict';

let gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('./src/*.scss', ['sass']);
});
