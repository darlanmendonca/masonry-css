'use strict';

let gulp = require('gulp');
let config = require('./config.js');
let browserSync = require('browser-sync').create();

gulp.task('browser-sync', browserSyncTask);

function browserSyncTask() {
  browserSync.init(config.browserSync);
}
