/**
 * @module Build
 * @class Build.Config
 * @static
 */

module.exports = function(grunt) {

	var config = {};

	config.root = 'public';
	config.stylesheets = config.root + '/stylesheets';
	config.javascripts = config.root + '/javascripts';
	config.jsbin = config.javascripts + '/generated';
	config.cssbin = config.stylesheets + '/generated';
	config.images = config.root + '/images';
	config.docsbin = 'docs';

	// Project configuration.
	grunt.initConfig({

		'beautifier': {
			'options': {
				'indentSize': 1,
				'indentChar': '\t',
				'spaceAfterAnonFunction': true
			}
		},

		'beautify': {
			'files': [ config.javascripts + '/app/**/*.js' ]
		},

		'stylus': require('./build/config/stylus.js')(config),

		'qunit': require('./build/config/qunit.js')(config),

		'yuidoc': require('./build/config/yuidoc.js')(config),

		'requirejs': require('./build/config/requirejs.js')(config),

		'jshint': require('./build/config/jshint.js')(config),

		'nodemon': require('./build/config/nodemon.js')(config),

		'watch': require('./build/config/watch.js')(config),

		'concurrent': require('./build/config/concurrent.js')(config)

	});

	// Default task.
	grunt.registerTask('default', ['stylus:prod', 'requirejs']);
	grunt.registerTask('css', ['stylus:dev']);
	grunt.registerTask('cssmin', ['stylus:prod']);
	grunt.registerTask('docs', 'yuidoc');
	grunt.registerTask('pretty-js', 'beautify');

	// Compile and Start the development environment
	grunt.registerTask('development', ['stylus:dev', 'concurrent:development'])

	// load local tasks.
	grunt.loadTasks('./build/tasks');

	// load grunt plugins
	grunt.loadNpmTasks('grunt-beautify');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-nodemon');

};
