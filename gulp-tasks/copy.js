var paths = require('./config.js').paths,
  gulp = require('gulp'),
  changed = require('gulp-changed'),
  traceur = require('gulp-traceur');

// 1. copy src files to debug directories
// 2. copy bower components to debug directory
// 3. copy traceur runtime to debug directory
gulp.task('copy', function() {
  var srcFilesToCopy = [
    paths.src.root + 'fonts/**/*',
    paths.src.root + '.htaccess',
    paths.src.root + 'favicon.ico',
    paths.src.root + 'robots.txt',
    paths.src.root + '**/.pgbomit',
    // paths.src.root + 'extension-register.js'
  ];

  var vendorFilesToCopy = [
    paths.src.vendor + '**/*.html',
    paths.src.vendor + '**/*.js',
    paths.src.vendor + '**/*.map',
    paths.src.vendor + '**/*.css',
    paths.src.vendor + '**/*.eot',
    paths.src.vendor + '**/*.woff',
    paths.src.vendor + '**/*.ttf',
    paths.src.vendor + '**/*.svg',
    paths.src.vendor + '**/*.png',
    paths.src.vendor + '**/*.gif'
  ];

  return gulp.src(traceur.RUNTIME_PATH)
    .pipe(gulp.dest(paths.debug.vendor + '/traceur'))

  //src
  .pipe(gulp.src(srcFilesToCopy, {
    base: paths.src.root
  }))
    .pipe(changed(paths.debug.root))
    .pipe(gulp.dest(paths.debug.root))

  //vendor
  .pipe(gulp.src(vendorFilesToCopy))
    .pipe(changed(paths.debug.vendor))
    .pipe(gulp.dest(paths.debug.vendor));
});