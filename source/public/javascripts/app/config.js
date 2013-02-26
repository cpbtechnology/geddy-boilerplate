/**
 * @module config
 */

(function () {

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
		'waitSeconds': 0,

		'baseUrl': 'javascripts',

		'paths': {

			'config': 'app/config',

			// Core Libraries
			'modernizr': 'lib/modernizr-2.6.2.min',
			//http://modernizr.com/docs
			'jquery': 'lib/jquery-1.9.1.min',
			//http://api.jquery.com/
			'underscore': 'lib/underscore-min',
			//http://underscorejs.org/
			'backbone': 'lib/backbone-min',
			//http://backbonejs.org/
			'swig': 'lib/swig.min',
			//http://paularmstrong.github.com/swig/docs/
			// Backbone Submodule Directories
			'router': 'app/router',
			'model': 'app/model',
			'collection': 'app/collection',
			'view': 'app/view',
			'template': 'app/template',

			// Helper Modules
			'helpers': 'app/helpers',

			// Application
			'global': 'app/global',

			// 3rd party
			'facebook': '//connect.facebook.net/en_US/all',
			'google-analytics': '//google-analytics.com/ga'
		},

		// Sets the configuration for your third party scripts that are not AMD compatible
		'shim': {

			'modernizr': {
				'exports': 'Modernizr'
			},

			'underscore': {
				'exports': '_'
			},

			'backbone': {
				'deps': ['underscore', 'jquery'],
				'exports': 'Backbone'
			},

			'swig': {
				'deps': ['underscore'],
				'exports': 'swig'
			},

			'facebook': {
				'exports': 'FB'
			}

		}

	});

	// Require global here for optimizer build.
	require(['global']);

}());