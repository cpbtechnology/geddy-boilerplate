/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.Stylus
 * @static
 */

var fs = require('fs');

module.exports = function(config) {
	var stylus = {

		"prod": {
			"options": {
				"compress":true,
				"urlfunc": 'url', 		 //	Data inlining via data URIs
				"paths": [config.root],
				"import": ['nib'] // advanced mixins and other useful things https://github.com/visionmedia/nib
			},
			"files": {}
		},
		"dev":{
			"options":{
				"compress":false
			}
		}
	};

	var dirs = fs.readdirSync(config.stylesheets+'/stylus');

	dirs.forEach(function (dir) {
		if (fs.statSync(config.stylesheets+'/stylus/'+dir).isDirectory()) {
			stylus.prod.files[config.cssbin+'/'+dir+'.css'] = [];
		
			var files = fs.readdirSync(config.stylesheets+'/stylus/'+dir);
			files.forEach(function (file) {
				if (fs.statSync(config.stylesheets+'/stylus/'+dir+'/'+file).isFile()) {
					stylus.prod.files[config.cssbin+'/'+dir+'.css'].push(config.stylesheets+'/stylus/'+dir+'/'+file);
				}
			});
		}
	});

	stylus.dev.files = stylus.prod.files;
	stylus.dev.options.import = stylus.prod.options.import;
	return stylus;
}