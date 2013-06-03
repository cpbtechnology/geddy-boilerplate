/**
 * @module collection/ExampleCollection
 */

define(['backbone', 'model/ExampleModel'], function (Backbone) {

	'use strict';

	return Backbone.Collection.extend({

		"initialize": function () {

			this.model = ExampleModel;

			log('Backbone : ExampleCollection : Initialized');

		}

	});

});