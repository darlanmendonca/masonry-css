'use strict';

require('./gulp-tasks/sass');

let gulp = require('gulp');

gulp.task('default', [
  'sass'
]);
