/**
 * @module main
 */
// TODO: refactor to use double quotes for valid JSON
+function () {

	'use strict';

	// Use Requirejs optimizer has() integration for custom builds.
	// Polyfill has() when not provided via Requirejs optimizer.
	var has;

	has = has ||
	function () {
		return true;
	};

	// debugMode property provided by requirejs build task.
	window.isDebugMode = (has('debugMode')) ? true : false;

	require.config({

		// Disable timeout for scripts.
		"waitSeconds": 0,

		"baseUrl": "javascripts",

		"paths": {

			// Core Libraries
			"modernizr": "lib/modernizr-2.6.2.min", //http://modernizr.com/docs
			"jquery": "lib/jquery-1.9.1.min",		//http://api.jquery.com/
			"underscore": "lib/lodash.min",			//http://lodash.com/
			"backbone": "lib/backbone-min",			//http://backbonejs.org/
			"swig": "lib/swig.min",					//http://paularmstrong.github.com/swig/docs/
			
			// Backbone Submodule Directories
			"router": "app/router",
			"model": "app/model",
			"collection": "app/collection",
			"view": "app/view",
			"template": "app/template",

			// Helper Modules
			"helpers": "app/helpers",

			// 3rd party
			"facebook": "//connect.facebook.net/en_US/all",
			"google-analytics": "//google-analytics.com/ga"
		},

		// Sets the configuration for your third party scripts that are not AMD compatible
		"shim": {

			"modernizr": {
				"exports": "Modernizr"
			},

			"underscore": {
				"exports": "_"
			},

			"backbone": {
				"deps": ["underscore", "jquery"],
				"exports": "Backbone"
			},

			"swig": {
				"deps": ["underscore"],
				"exports": "swig"
			},

			"facebook": {
				"exports": "FB"
			}

		}
	}); // end require.config

	require(['app/app'], function (App) {
		App.initialize();

		require(['google-analytics','helpers/analytics', 'facebook'], function (ga, Analytics, Facebook) {
			FB.init({
				"appId": App.config.get('fbAccountId'),
				"xfbml": true
			});
			Analytics.socialTrackFacebook();
		});
	});
	// end require['app']
}();