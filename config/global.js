var path = require('path');

module.exports = function(srcRoot, debugRoot, releaseRoot, pgDebugRoot, pgReleaseRoot, isWin, isLinux, isMac) {
  return {
    moduleName: '__APP_NAME_CAMEL_CASED__',
    debugBuildPort: 3000,
    releaseBuildPort: 3001,
    paths: {
      src: {
        root: srcRoot,
        appRoot: srcRoot + 'app/',
        jade: srcRoot,
        components: srcRoot + 'app/components/',
        views: srcRoot + 'views/',
        img: srcRoot + 'img/',
        sass: srcRoot + 'css/',
        // vendor: srcRoot + 'vendor/',
        vendor: 'bower_components/',
        js: srcRoot + 'js/',
        fonts: srcRoot + 'fonts/',
        languages: srcRoot + 'app/**/_languages/'
      },
      debug: {
        root: debugRoot,
        appRoot: debugRoot + 'app/',
        html: debugRoot,
        components: debugRoot + 'app/components/',
        views: debugRoot + 'views/',
        img: debugRoot + 'img/',
        css: debugRoot + 'css/',
        vendor: debugRoot + 'bower_components/',
        js: debugRoot + 'js/',
        fonts: debugRoot + 'fonts/',
        languages: debugRoot + 'app/languages/'
      },
      release: {
        root: releaseRoot,
        appRoot: releaseRoot + 'app/',
        html: releaseRoot,
        components: releaseRoot + 'app/components/',
        views: releaseRoot + 'views/',
        img: releaseRoot + 'img/',
        css: releaseRoot + 'css/',
        js: releaseRoot + 'js/',
        fonts: releaseRoot + 'fonts/',
        languages: releaseRoot + 'app/languages/'
      },
      'phonegap-debug': {
        root: pgDebugRoot,
        appRoot: pgDebugRoot + 'app/',
        html: pgDebugRoot,
        components: pgDebugRoot + 'app/components/',
        views: pgDebugRoot + 'views/',
        img: pgDebugRoot + 'img/',
        css: pgDebugRoot + 'css/',
        vendor: pgDebugRoot + 'bower_components/',
        js: pgDebugRoot + 'js/',
        fonts: pgDebugRoot + 'fonts/',
        languages: pgDebugRoot + 'app/languages/'
      },
      'phonegap-release': {
        root: pgReleaseRoot,
        appRoot: pgReleaseRoot + 'app/',
        html: pgReleaseRoot,
        components: pgReleaseRoot + 'app/components/',
        views: pgReleaseRoot + 'views/',
        img: pgReleaseRoot + 'img/',
        css: pgReleaseRoot + 'css/',
        js: pgReleaseRoot + 'js/',
        fonts: pgReleaseRoot + 'fonts/',
        languages: pgReleaseRoot + 'app/languages/'
      }
    },
    e2e: {
      // ----- How to setup Selenium -----
      //
      // There are three ways to specify how to use Selenium. Specify one of the
      // following:
      //
      // 1. seleniumServerJar - to start Selenium Standalone locally.
      // 2. seleniumAddress - to connect to a Selenium server which is already
      //    running.
      // 3. sauceUser/sauceKey - to use remote Selenium servers via SauceLabs.

      // The location of the selenium standalone server .jar file.
      // http://docs.seleniumhq.org/download/
      seleniumServerJar: './scripts/selenium-server-standalone-2.39.0.jar',

      // The port to start the selenium server on, or null if the server should
      // find its own unused port.
      seleniumPort: 4444,
      // https://npmjs.org/package/protractor
      // seleniumAddress: 'http://localhost:4444/wd/hub',

      // Chromedriver location is used to help the selenium standalone server
      // find chromedriver. This will be passed to the selenium jar as
      // the system property webdriver.chrome.driver. If null, selenium will
      // attempt to find chromedriver using PATH.
      chromeDriver: path.resolve(path.join(__dirname, '..', 'scripts', isWin ? 'Chromedriver.exe' : 'Chromedriver')),
      // Additional command line options to pass to selenium. For example,
      // if you need to change the browser timeout, use
      // seleniumArgs: ['-browserTimeout=60'],
      seleniumArgs: [],

      // If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
      // The tests will be run remotely using SauceLabs.
      sauceUser: null,
      sauceKey: null,

      // ----- What tests to run -----
      //
      // Spec patterns are relative to the location of this config.
      specs: [
        '**/*_e2etest.js'
      ],

      // ----- Capabilities to be passed to the webdriver instance ----
      //
      // For a full list of available capabilities, see
      // https://code.google.com/p/selenium/wiki/DesiredCapabilities
      // and
      // https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js

      capabilities: {
        browserName: 'chrome'
      },

      /*
         Example config for PhantomJS

         1. You need to download manually PhantomJS just put in test dir.
            http://phantomjs.org/download.html

         2. You also need to apply this patch to fix a known bug.
            https://github.com/vrtdev/protractor/commit/2f18b01378e4f054331df23ce536e4081ee1ccf0
      */
      // capabilities: {
      //   'browserName': 'phantomjs',
      //   'phantomjs.binary.path': './scripts/phantomjs.exe'
      // },

      // A base URL for your application under test. Calls to protractor.get()
      // with relative paths will be prepended with this.
      // If you change your dev server port this will need to match. - default 'http://127.0.0.1:9000'
      baseUrl: 'http://localhost:3000',

      // Selector for the element housing the angular app - this defaults to
      // body, but is necessary if ng-app is on a descendant of <body>
      rootElement: 'body',

      // ----- Options to be passed to minijasminenode -----
      jasmineNodeOpts: {
        // onComplete will be called just before the driver quits.
        onComplete: null,
        // If true, display spec names.
        isVerbose: false,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 20000
      }
    },
    unit: {
      // list of files / patterns to load in the browser

      // **/*.js: All files with a "js" extension in all subdirectories
      // **/!(jquery).js: Same as previous, but excludes "jquery.js"
      // **/(foo|bar).js: In all subdirectories, all "foo.js" or "bar.js" files

      files: [
        'src/app/*.js',
        'src/app/**/*.js'
      ],

      // list of files / patterns to exclude
      exclude: [
        '**/*_e2etest.js',
        '**/*_test.js'
      ],

      /* Start these browsers, currently available:
        Chrome
        ChromeCanary
        PhantomJS
        Firefox
        Opera
        Internet Explorer
        Safari
      */
      browsers: [
        'Chrome',
        'PhantomJS'
      ],

      // http://karma-runner.github.io/0.8/config/preprocessors.html
      preprocessors: {
        // 'src/app/**/*.html': ['ng-html2js']
      },

      //https://github.com/karma-runner/karma-ng-html2js-preprocessor
      ngHtml2JsPreprocessor: {
        // strip this from the file path
        // stripPrefix: 'app/',
        // prepend this to the
        // prependPrefix: '',
        // setting this option will create only a single module that contains templates
        // from all the files, so you can load them all with module('foo')
        // moduleName: 'templates'
      },

      // level of logging: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
      logLevel: 'LOG_INFO',

      // base path, that will be used to resolve files and exclude
      basePath: './',

      // web server port
      port: 9090,

      // testing framework to use (jasmine/mocha/qunit/...)
      frameworks: ['jasmine'],

      // Additional reporters, such as growl, junit, teamcity or coverage
      reporters: ['dots','progress'],

      // Continuous Integration mode, if true, it capture browsers, run tests and exit
      singleRun: true, // (set it grunt file)

      // enable / disable watching file and executing tests whenever any file changes
      // autoWatch: true, // (set it grunt file)

      // Enable or disable colors in the output (reporters and logs).
      colors: true
    }
  };
};