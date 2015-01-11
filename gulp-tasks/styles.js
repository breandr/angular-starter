var paths = require('./config.js').paths,
  gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  changed = require('gulp-changed'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  debug = require('gulp-debug'),
  gulpif = require('gulp-if');

// 1. Compile changed SASS to CSS
// 2. Autoprefix CSS
// 3. Write to debug CSS directory
function styles(rebuild) {
  return gulp.src([
      paths.src.root + '**/*.scss',
      '!' + paths.src.root + '**/_*.scss'
    ], {
      base: paths.src.root
    })
    .pipe(plumber())
    .pipe(gulpif(!rebuild, changed(paths.debug.root, {
      extension: '.css'
    })))
    .pipe(sass({
      style: 'expanded',
      includePaths: [
        paths.src.sass,
        paths.src.vendor
      ],
      // sourceComments: 'map'
    }))
    .pipe(plumber())
    .pipe(autoprefixer('last 1 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4', {
      cascade: true
    }))
    .pipe(gulp.dest(paths.debug.root));
}

gulp.task('styles', function() {
  return styles();
});

gulp.task('styles-rebuild', function() {
  return styles(true);
});