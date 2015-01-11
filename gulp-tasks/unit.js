var gulp = require('gulp'),
  karma = require('gulp-karma'),
  path = require('path');

gulp.task('unit', function() {
  return gulp
    .src(['**/*_test.js'])
    .pipe(karma({
      configFile: path.resolve(path.join(__dirname, '..', 'test-unit.conf.js')),
      action: 'run',
      singleRun: true,
      watch: false
    }))
    .on('error', function(e) {
      throw e;
    });
});