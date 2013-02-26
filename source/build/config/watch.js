/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.Watch
 * @static
 */

module.exports = function(config) {

	return {

		'app': {
			'files': [
				config.stylesheets + '/scss/**/*.scss'
			],
			'tasks': ['compass:watch']
		},
		'debug': {
			'files': [
				config.stylesheets + '/scss/**/*.scss',
				config.javascripts + '/app/**/*.js'
			],
			'tasks': ['compass:debug']
		}

	};

}

