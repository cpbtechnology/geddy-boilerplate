/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.Compass
 * @static
 */

module.exports = function(config) {

	return {

		'app': {
			'src': config.stylesheets + '/scss',
			'dest': config.stylesheets + '/generated',
			'images': config.images,
			'outputstyle': 'expanded',
			'forcecompile': true,
			'linecomments': false,
			'relativeassets': true
		},

		'watch': {
			'src': config.stylesheets + '/scss',
			'dest': config.stylesheets + '/generated',
			'images': config.images,
			'outputstyle': 'expanded',
			'forcecompile': false,
			'linecomments': false,
			'relativeassets': true
		},

		'debug': {
			'src': config.stylesheets + '/scss',
			'dest': config.stylesheets + '/generated',
			'images': config.images,
			'outputstyle': 'expanded',
			'linecomments': false,
			'relativeassets': true,
			'debugsass': true
		}
	};

}