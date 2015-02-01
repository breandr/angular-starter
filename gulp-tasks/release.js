var paths = require('./config.js').paths,
  gulp = require('gulp'),
  filter = require('gulp-filter'),
  plumber = require('gulp-plumber'),
  useref = require('gulp-useref'),
  minifyCss = require('gulp-minify-css'),
  minifyHtml = require('gulp-minify-html'),
  uglify = require('gulp-uglify'),
  ngAnnotate = require('gulp-ng-annotate'),
  rev = require('gulp-rev'),
  revReplace = require('gulp-rev-replace'),
  concat = require('gulp-concat'),
  replace = require("gulp-replace"),
  debug = require('gulp-debug'),
  argv = require('yargs').argv,
  changed = require('gulp-changed'),
  builder = require('systemjs-builder'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('release', ['useref', 'copy-src-release'], function() {
  var dateTimeNow = new Date();
  var cacheBuster = '' + dateTimeNow.getFullYear() + dateTimeNow.getMonth() + dateTimeNow.getDate() + dateTimeNow.getHours() + dateTimeNow.getMinutes();
  var appFileName = 'app/app-' + cacheBuster;

  return builder.build('app/app', paths.release.root + appFileName + '.js', {
      sourceMaps: true,
      minify: true,
      config: {
        baseURL: './',
        meta: {
          'angular': {
            build: false
          }
        },
        paths: {
          'app/*': 'builds/debug/app/*.js',
          'components/*': 'builds/debug/app/components/*.js',
          'states/*': 'builds/debug/app/states/*.js',
          'templates': 'builds/debug/app/templates.js',
          // 'underscore.string': 'bower_components/underscore.string/lib/underscore.string.js',
          // 'angular': 'bower_components/angular/angular.js'
        }
      }
    })
    .then(function() {
      gulp.src(paths.release.root + 'index.html')
        .pipe(replace("System.import('app/app')", "System.import('" + appFileName + "')"))
        .pipe(minifyHtml({
          empty: true,
          quotes: true,
          // comments: true
          // spare: true
        }))
        .pipe(gulp.dest(paths.release.root))
        .pipe(gulp.src(paths.release.root + appFileName + '.js'))
        .pipe(replace('System.register("app/app"', 'System.register("' + appFileName + '"'))
        .pipe(replace('var __moduleName = "app/app";', 'var __moduleName = "' + appFileName + '";'))
        .pipe(replace('$traceurRuntime.require("app/app"', '$traceurRuntime.require("' + appFileName + '"'))
        .pipe(gulp.dest(paths.release.appRoot));

      console.log('Build complete');
      builder.reset();
    })
    .catch(function(err) {
      console.log('Build error');
      console.log(err);
      builder.reset();
      throw err;
    });
});

gulp.task('copy-src-release', function() {
  // copy src for sourcemaps
  return gulp.src(paths.src.appRoot + '**', {
      base: paths.src.root
    })
    .pipe(changed(paths.release.appRoot))
    .pipe(gulp.dest(paths.release.root + 'src'));
});

gulp.task('copy-vendor-release', function() {
  var filesToCopy = [
    paths.debug.appRoot + 'languages/*',
    paths.debug.root + 'fonts/**/*',
    paths.debug.root + '.htaccess',
    paths.debug.root + 'favicon.ico',
    paths.debug.root + 'robots.txt',
    paths.debug.root + '**/.pgbomit',
    paths.debug.root + 'img/**/*',
    paths.debug.vendor + '**/*.eot',
    paths.debug.vendor + '**/*.woff',
    paths.debug.vendor + '**/*.ttf',
    paths.debug.vendor + '**/*.svg',
    paths.debug.vendor + '**/*.png',
    paths.debug.vendor + '**/*.gif'
    // paths.debug.root + 'extension-register.js',
    // paths.debug.vendor + '**',
    // paths.debug.appRoot + '**'
  ];

  return gulp.src(filesToCopy, {
      base: paths.debug.root,
      // read: false
    })
    .pipe(gulp.dest(paths.release.root));
});

gulp.task('useref', ['copy-vendor-release'], function() {
  var vendorJsFilter = filter('js/vendor.js'),
    appCssFilter = filter('css/app.css'),
    vendorCssFilter = filter('css/vendor.css');

  var assets = useref.assets({
    searchPath: paths.debug.root
  });

  return gulp.src(paths.debug.root + 'index.html')
    .pipe(plumber())
    .pipe(assets)

  // vendor.js
  .pipe(vendorJsFilter)
    // .pipe(ngAnnotate())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write({
      includeContent: false,
      sourceRoot: '/src'
    }))
    .pipe(vendorJsFilter.restore())

  // vendor.css
  .pipe(vendorCssFilter)
    .pipe(minifyCss())
    .pipe(vendorCssFilter.restore())

  // app.css
  .pipe(appCssFilter)
    .pipe(minifyCss())
    .pipe(appCssFilter.restore())

  // rev concatenated files and replace references in html
  .pipe(rev())
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(revReplace())

  .pipe(gulp.dest(paths.release.root));
});