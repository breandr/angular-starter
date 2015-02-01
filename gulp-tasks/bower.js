var paths = require('./config.js').paths,
  gulp = require('gulp'),
  bower = require('gulp-bower'),
  wiredep = require('wiredep').stream;

gulp.task('bower-install', function() {
  return bower();
});

gulp.task('bower-update', function() {
  return bower({ cmd: 'update'});
});

// 1. Write bower components to index.jade
gulp.task('bower', function() {
  return gulp.src(paths.src.root + 'index.jade')
    .pipe(wiredep({
      ignorePath: '../'
    }))
    .pipe(gulp.dest(paths.src.root));
});