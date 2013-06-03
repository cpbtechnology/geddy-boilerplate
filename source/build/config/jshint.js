/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.JSLint
 * @static
 */

module.exports = function(config) {

	return {

		files: [ config.javascripts + '/app/**/*.js'],

		exclude: ['**/ignore-*.js'],

		options: {
			node: true,
			jquery: true,
			browser: true,
			es5: true,
			boss: true,
			curly: true,
			expr: true,
			globalstrict: true,
			immed: false,
			indent: 2,
			strict: false,
			supernew: true,
			white: false
		}

	};

}