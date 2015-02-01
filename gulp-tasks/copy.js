var paths = require('./config.js').paths,
  gulp = require('gulp'),
  changed = require('gulp-changed'),
  debug = require('gulp-debug'),
  traceur = require('gulp-traceur');

gulp.task('copy', ['copy-src', 'copy-vendor', 'copy-traceur']);

gulp.task('copy-src', function() {
  var srcFilesToCopy = [
    paths.src.root + 'fonts/**/*',
    paths.src.root + '.htaccess',
    paths.src.root + 'favicon.ico',
    paths.src.root + 'robots.txt',
    paths.src.root + '**/.pgbomit'
  ];

  return gulp.src(srcFilesToCopy, {
      base: paths.src.root
    })
    .pipe(changed(paths.debug.root))
    .pipe(gulp.dest(paths.debug.root));
});

gulp.task('copy-vendor', function() {
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
  
  return gulp.src(vendorFilesToCopy)
    .pipe(changed(paths.debug.vendor))
    .pipe(gulp.dest(paths.debug.vendor));
});

gulp.task('copy-traceur', function() {
  return gulp.src(traceur.RUNTIME_PATH)
    .pipe(gulp.dest(paths.debug.vendor + 'traceur'));
});