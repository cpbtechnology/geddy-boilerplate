/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.QUnit
 * @static
 */

module.exports = function(config) {

	return {
		'local': ['http://boilerplate/javascripts/test/index.html'],
		'dev': ['http://dev.foo.com/javascripts/test/index.html'],
		'stage': ['http://stage.foo.com/javascripts/test/index.html']
	};

}