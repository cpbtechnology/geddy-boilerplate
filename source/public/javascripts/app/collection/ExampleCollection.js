/**
 * @module collection/ExampleCollection
 */

define(function (require) {

	'use strict';

	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		App = require('global');

	return Backbone.Collection.extend({

		'initialize': function () {

			this.model = App.models.ExampleModel;

			log('Backbone : ExampleCollection : Initialized');

		}

	});

});