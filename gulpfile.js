'use strict';

require('./tasks/sass');
require('./tasks/browser-sync');
require('./tasks/watch');

let gulp = require('gulp');

gulp.task('default', [
  'sass',
  'browser-sync',
  'watch'
]);
