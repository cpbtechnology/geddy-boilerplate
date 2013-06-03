/**
 * @module router/AppRouter
 */

define(['backbone'], function (Backbone) {

	'use strict';

	return Backbone.Router.extend({

		"initialize": function () {
			log('Backbone : Global : AppRouter : Initialized');
		},

		"routes": {
			"": "index"
		},

		"index": function () {}
	});
});