var buildConfig = require('./config.js'),
  paths = buildConfig.paths,
  gulp = require('gulp'),
  connect = require('gulp-connect'),
  pushState = require('connect-pushstate/lib/pushstate').pushState,
  serveStatic = require('serve-static'),
  argv = require('yargs').argv;

gulp.task('connect', function() {
  connect.server({
    root: [paths.debug.root],
    port: buildConfig.debugBuildPort,
    livereload: {
      port: 4085
    },
    middleware: function(connect, options) {
      return [
        // serveStatic(paths.debug.root),
        pushState()
      ];
    }
  });

  if (argv.release) {
    connect.server({
      root: [paths.release.root],
      port: buildConfig.releaseBuildPort,
      livereload: {
        port: 4086
      },
      middleware: function(connect, options) {
        return [
          // serveStatic(paths.release.root),
          pushState()
        ];
      }
    });
  }
});

gulp.task('reload', function(){
  return gulp.src(paths.src.root + '**/*')
  .pipe(connect.reload());
});
