var _ = require('lodash'),
  requireDir = require('require-dir'),
  gracefulFs = require('graceful-fs'),
  gulp = require('gulp'),
  runSequence = require('run-sequence'),
  argv = require('yargs').argv;

requireDir('./gulp-tasks');

gulp.task('default', ['serve']);

gulp.task('serve', function(){
  return runSequence('build', 'connect', ['watch', 'reload']);
});

gulp.task('rebuild', ['clean'], function() {
  gulp.start('build');
});

gulp.task('null', function() {
  return;
})

gulp.task('test', ['connect', 'unit', 'e2e']);
gulp.task('test:unit', ['connect', 'unit']);
gulp.task('test:e2e', ['connect', 'e2e']);

gulp.task('build', function() {
  var cleanTask = argv.release ? 'clean' : 'null';
  var releaseTask = argv.release ? 'release' : 'null';

  return runSequence(cleanTask, ['styles', 'languages', 'ng-template-cache'], ['scripts'], ['copy', 'bower'], ['html', 'images'], releaseTask);
});