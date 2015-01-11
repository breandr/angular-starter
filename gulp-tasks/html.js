var pkg = require('../package.json'),
  paths = require('./config.js').paths,
  gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  jade = require('gulp-jade');

// 1. Compile index.jade to HTML and write to debug root directory
gulp.task('html', function() {
  return gulp.src(paths.src.root + 'index.jade')
    .pipe(plumber())
    .pipe(jade({
      data: pkg,
      pretty: true
    }))
    .pipe(gulp.dest(paths.debug.root));
});