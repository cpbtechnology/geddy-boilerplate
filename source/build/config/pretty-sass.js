/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.PrettySass
 * @static
 */

module.exports = function(config) {

	return {

		'app': {
			'files': [ config.stylesheets + '/scss/**/*.scss' ],
			'options': {
				'alphabetize': true
			}
		}

	};

}