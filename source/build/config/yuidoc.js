/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.Yuidoc
 * @static
 */

module.exports = function(config) {

	return {
		'compile': {
			'options': {
				'paths': config.javascripts + '/app/',
				'outdir': config.docsbin,
				'project': {
					'logo': '../templates/logo.png'
				}
			}
		}
	};

}