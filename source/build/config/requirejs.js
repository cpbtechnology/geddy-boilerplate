/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.RequireJS
 * @static
 */

module.exports = function(config) {

	return {

		'global': {
			'options': {
				'name': 'app/main',
				'baseUrl': config.javascripts,
				'mainConfigFile': config.javascripts + '/app/main.js',
				// Exclusions from minconcat use empty:
				'paths': {
					'facebook': 'empty:',
					'google-analytics': 'empty:',
					'settings': 'empty:'
				},
				'has': {
					'debugMode': false
				},
				'out': config.jsbin + '/app.min.js'
			}
		}
	};

};