/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.JSLint
 * @static
 */

module.exports = function(config) {

	return {

		'files': [ config.javascripts + '/app/**/*.js'],

		'exclude': ['**/ignore-*.js'],

		'directives': {
			'browser': true,
			'nomen': true, // Tolerate dangling _ (underscore).
			'plusplus': true, // Tolerate ++/--.
			'unparam': true,
			'todo': true,
			'predef': ['jQuery', 'require', 'define', 'log', 'App', 'FB', '_gaq'] // array of pre-defined globals
		},

		'options': {
			'junit': config.docsbin + '/jslint/junit.xml',
			'log': config.docsbin + '/jslint/lint.log',
			'jslintXml': config.docsbin + '/jslint/jslint_xml.xml',
			'errorsOnly': true,
			'failOnError': false
		}

	};

}