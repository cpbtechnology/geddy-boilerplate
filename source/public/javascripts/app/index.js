/**
 * @module index
 */

define(function (require) {

	'use strict';

	return {

		'routers': {
			'AppRouter': require('router/AppRouter')
		},

		'models': {
			'AppConfig': require('model/AppConfig'),
			'ExampleModel': require('model/ExampleModel')
		},

		'collections': {
			'ExampleCollection': require('collection/ExampleCollection')
		},

		'views': {
			'ExampleView': require('view/ExampleView'),
			'SubView': require('view/SubView')
		},

		'templates': {
			'ExampleTemplate': require('plugins/text!template/ExampleTemplate.html')
		}

	};

});