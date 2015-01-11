var pkg = require('../package.json'),
  buildConfig = require('./config.js'),
  paths = buildConfig.paths,
  moduleName = buildConfig.moduleName,
  gulp = require('gulp'),
  jade = require('gulp-jade'),
  plumber = require('gulp-plumber'),
  minifyHtml = require('gulp-minify-html'),
  templateCache = require('gulp-angular-templatecache');

// 1. Compiles jade views to HTML and minifies
// 2. Compiles minified HTML views to $templateCache
// 3. Concats and writes to debug js directory
gulp.task('ng-template-cache', function() {
  return gulp.src(paths.src.appRoot + '**/*.jade')
    .pipe(plumber())
    .pipe(jade({
      data: pkg,
      pretty: true,
      doctype: 'html'
    }))
    .pipe(minifyHtml({
      empty: true,
      quotes: true
      // spare: true
    }))
    .pipe(templateCache('templates.js', {
      module: moduleName + '.templates',
      standalone: true
    }))
    .pipe(gulp.dest(paths.debug.appRoot));
});