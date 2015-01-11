var gulp = require('gulp'),
  protractor = require('gulp-protractor').protractor,
  path = require('path');

gulp.task('e2e', function() {
  return gulp
    .src(['**/*_e2etest.js'])
    .pipe(protractor({
      configFile: path.resolve(path.join(__dirname, '..', 'test-e2e.conf.js')),
      autoWatch: false,
      singleRun: true,
      args: []
    }))
    .on('error', function(e) {
      throw e;
    });
});