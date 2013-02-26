/**
 * @module router/AppRouter
 */

define(function (require) {

	'use strict';

	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		App = require('global');

	return Backbone.Router.extend({

		initialize: function () {
			log('Backbone : Global : AppRouter : Initialized');
		},

		'routes': {
			'': 'index'
		},

		'index': function () {}

	});

});