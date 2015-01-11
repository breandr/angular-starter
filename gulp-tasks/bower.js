var paths = require('./config.js').paths,
  gulp = require('gulp'),
  wiredep = require('wiredep').stream;

// 1. Write bower components to index.jade
gulp.task('bower', function() {
  return gulp.src(paths.src.root + 'index.jade')
    .pipe(wiredep({
      ignorePath: '../'
    }))
    .pipe(gulp.dest(paths.src.root));
});