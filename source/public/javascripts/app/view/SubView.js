/**
 * @module view/SubView
 */

define(function (require) {

	'use strict';

	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		App = require('global'),
		Swig = require('swig');

	return Backbone.View.extend({

		'events': {},

		'initialize': function (options) {
			var view = this;

			_.bindAll(this);

			view.render();

			log('Backbone : Global : SubView : Initialized');
		},

		'render': function () {
			var view = this;

			view.exampleTemplate = swig.compile(App.templates.ExampleTemplate);
			view.$el.append(view.exampleTemplate({
				'url': 'https://github.com/cpbtechnology/US-boilerplate-backbonejs'
			}));
		}

	});

});