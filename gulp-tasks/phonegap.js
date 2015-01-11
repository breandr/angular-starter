var paths = require('./config.js').paths,
  gulp = require('gulp');

gulp.task('phonegap-serve', function() {
  var serve = exec('phonegap serve', {
      cwd: paths.debug.root
    },
    function(error, stdout, stderr) {
      gutil.log('stdout: ' + stdout);
      gutil.log('stderr: ' + stderr);

      if (error !== null) {
        gutil.log('exec error: ' + error);
      }
    });
});