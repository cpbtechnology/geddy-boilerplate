/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.CSSMin
 * @static
 */

module.exports = function(config) {

	return {

		'app': {
			'src': [
				config.cssbin + '/app.css'
			],
			'dest': config.cssbin + '/app.min.css'
		}

	};

}