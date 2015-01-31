var gulp = require('gulp');
var paths = require('./config.js').paths;
var awspublish = require('gulp-awspublish');
var awspublishRouter = require('gulp-awspublish-router');
var parallelize = require("concurrent-transform")
var argv = require('yargs').argv;
var debug = require('gulp-debug');

var buildPath = argv.release ? paths.release : paths.debug;

gulp.task('deploy', function() {
  var publisher = awspublish.create({ bucket: 'rpg-com' });

  return gulp.src(buildPath.root + '/**/*')
  .pipe(awspublishRouter({
    cache: {
      cacheTime: 300,
      public: true
    },
    routes: {
      "\\.(?:html|js|css|svg|ttf|eot|woff)$": {
        gzip: true,
        // cache static assets for 2 years
        cacheTime: 630720000,
        public: true
      },
      "^.+$": "$&"
    }
  }))
    // .pipe(awspublish.gzip())
    .pipe(parallelize(publisher.publish({'Cache-Control': 'max-age=315360000, no-transform, public'}, {force: true}), 50))
    // .pipe(publisher.cache())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter())
});
