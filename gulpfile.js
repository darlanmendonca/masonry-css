'use strict';

require('./gulp-tasks/sass');
require('./gulp-tasks/browser-sync');
require('./gulp-tasks/watch');

let gulp = require('gulp');

gulp.task('default', [
  'sass',
  'browser-sync',
  'watch'
]);
