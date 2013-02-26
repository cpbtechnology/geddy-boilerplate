/**
 * @module view/ExampleView
 */

define(function (require) {

	'use strict';

	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		App = require('global');

	return Backbone.View.extend({

		'events': {},

		'initialize': function (options) {
			var view = this;

			_.bindAll(this);

			view.render();

			log('Backbone : Global : ExampleView : Initialized');
		},

		'render': function () {
			var view = this;

			view.subview = new App.views.SubView({
				'el': '#content'
			});

		}

	});

});