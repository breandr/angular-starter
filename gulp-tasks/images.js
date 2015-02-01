var paths = require('./config.js').paths,
  gulp = require('gulp'),
  changed = require('gulp-changed'),
  imageMin = require('gulp-imagemin');

// 1. Optimize changed images
// 2. Write changed images to debug image directory
gulp.task('images', function() {
  return gulp.src(paths.src.img + '**/*')
    .pipe(imageMin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(paths.debug.img));
});