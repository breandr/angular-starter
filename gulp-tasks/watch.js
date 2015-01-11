var paths = require('./config.js').paths,
  gulp = require('gulp'),
  watch = require('gulp-watch'),
  argv = require('yargs').argv,
  runSequence = require('run-sequence');

gulp.task('watch', function() {
  watch({
    glob: [
      paths.src.root + '**/*.scss',
      '!' + paths.src.root + '**/_*.scss'
    ],
    emitOnGlob: false
  }, function() {
    console.log('styles changed');

    runSequence('styles', 'reload');
  });

  watch({
    glob: [
      paths.src.root + '**/_*.scss'
    ],
    emitOnGlob: false
  }, function() {
    console.log('style variables changed');
    runSequence('styles-rebuild', 'reload');
  });

  watch({
    glob: paths.src.appRoot + '**/*.js',
    emitOnGlob: false
  }, function() {
    console.log('scripts changed');

    if (argv.release) {
      runSequence('scripts', 'release', 'reload');
    } else {
      runSequence('scripts', 'reload');
    }
  });

  watch({
    glob: paths.src.appRoot + '**/_languages/*.json',
    emitOnGlob: false
  }, function() {
    console.log('language files changed');
    runSequence('languages', 'reload');
  });

  watch({
    glob: [paths.src.appRoot + '/**/*.jade'],
    emitOnGlob: false
  }, function() {
    console.log('templates changed');
    runSequence('ng-template-cache', 'reload');
  });

  watch({
    glob: [paths.src.root + 'index.jade'],
    emitOnGlob: false
  }, function() {
    console.log('index changed');
    runSequence('html', 'reload');
  });

});