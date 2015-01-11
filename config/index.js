var path        	= require('path'),
    srcRoot       	= path.join('.', 'src') + path.sep,
    debugRoot     	= path.join('.', 'builds', 'debug') + path.sep,
    releaseRoot   	= path.join('.', 'builds', 'release') + path.sep,
    pgDebugRoot   	= path.join('.', 'builds', 'phonegap-debug') + path.sep,
    pgReleaseRoot 	= path.join('.', 'builds', 'phonegap-release') + path.sep,
    os              = require('os'),
    isWin           = /^win32/.test(os.platform()),
    isLinux         = /^linux/.test(os.platform()),
    isMac           = (/^darwin/.test(os.platform()) || /^freebsd/.test(os.platform())),
    envOverride 	= process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : null,
    configFiles 	= [ __dirname + '/global.js' ],
    merge       	= require('deepmerge'),
    config      	= {};

if ( envOverride === null ) {
  envOverride = 'local';
}

configFiles.push( [ __dirname, envOverride ].join( path.sep ) + '.js' );

configFiles.forEach(function(path) {
  config = merge(config, require(path)( srcRoot, debugRoot, releaseRoot, pgDebugRoot, pgReleaseRoot, isWin, isLinux, isMac ));
});

module.exports = config;