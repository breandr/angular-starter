var paths = require('./config.js').paths,
  gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  changed = require('gulp-changed'),
  // jscs = require('gulp-jscs'),
  // jshint = require('gulp-jshint'),
  // jsdoc = require('gulp-jsdoc'),
  traceur = require('gulp-traceur'),
  // debug = require('gulp-debug'),
  ngAnnotate = require('gulp-ng-annotate'),
  // uglify = require('gulp-uglify'),
  // concat = require('gulp-concat'),
  // shell = require('gulp-shell'),
  // builder = require('systemjs-builder'),
  path = require('path');
  // argv = require('yargs').argv,
  // gulpIf = require('gulp-if');

// 1. Lint changed JS files
// 2. Write changed JS files to debug js directory
gulp.task('scripts', function() {
  return gulp.src([paths.src.appRoot + '**/*.js', '!' + paths.src.appRoot + '**/*_pageObject.js', '!' + paths.src.appRoot + '**/*_e2etest.js', '!' + paths.src.appRoot + '**/*_test.js'])
    .pipe(plumber())
    // .pipe(jscs())
    // .pipe(jshint('.jshintrc'))
    // .pipe(jshint.reporter('jshint-stylish'))
    .pipe(changed(paths.debug.appRoot))
    .pipe(traceur({
      modules: 'instantiate',//argv.release ? 'instantiate' : 'instantiate',
      types: true,
      annotations: true,
      memberVariables: true
    }))
    .pipe(ngAnnotate())
    // .pipe(uglify())
    // .pipe(gulpIf(argv.release, concat('app.js'), ngAnnotate(), uglify()))
    .pipe(gulp.dest(paths.debug.appRoot));

  // .pipe(shell('traceur --out builds/debug/app.js src/app/app.js --modules=instantiate --source-maps=file'))
  // .pipe(jsdoc('./docs'));
});