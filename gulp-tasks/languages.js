var paths = require('./config.js').paths,
  gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  changed = require('gulp-changed'),
  extend = require('gulp-extend');

function makeMergeLanguageTask(language) {
  var taskName = 'languages-' + language,
    jsonFileName = language + '.json';

  gulp.task(taskName, function() {
    gulp.src(paths.src.languages + jsonFileName)
      .pipe(plumber())
      .pipe(extend(jsonFileName))
      .pipe(gulp.dest(paths.debug.languages));
  });

  return taskName;
};

// 1. Merge and write language JSON files to debug directory
gulp.task('languages', [
  makeMergeLanguageTask('en'),
  makeMergeLanguageTask('zh-cn')
]);