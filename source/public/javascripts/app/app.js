/**
 * @module app
 */

define([
		'jquery',
		'underscore',
		'modernizr',
		'backbone',
		'swig',
		'helpers/events',
		'helpers/analytics',
		'helpers/utilities',
		'settings',
		'model/AppConfig',
		'router/AppRouter',
		'view/ExampleView'
	], // end dependencies
	function ($, _, Modernizr, Backbone, Swig, Events, Analytics, Utilities, settings, AppConfig, AppRouter, ExampleView) {

	'use strict';

	var App = {

		"config": new AppConfig(settings),

		"cache": {
			"routers": {},
			"models": {},
			"collections": {},
			"views": {}
		},

		/**
		 * Initialize Application. Responsible for instantiating Backbone router and starting Backbone history.
		 * @method App.initialize
		 */
		"initialize": function () {
			Utilities.initialize();
			Analytics.initialize({
				"gaAccountId": App.config.get('gaAccountId'),
				"trackingMap": App.trackingMap
			}).pageTrack('/index');

			App.bindCustomEvents();

			App.cache.routers.appRouter = new AppRouter();
			Backbone.history.start();

			App.cache.views.exampleView = new ExampleView();

			log('App : Initialized');
			
			return App; // do not use "this" in a static context
		},

		/**
		 * Use this function to bind tracking against any custom event triggered against the app.events dispatch.
		 * @method App.bindCustomEvents
		 */
		"bindCustomEvents": function () {
			

			Events.bind('trackPage', function (pageName) {
				Analytics.pageTrack(pageName);
			});

			log('App : Custom Events Binding Complete');
			return App;
		},

		"trackingMap": {
			"click": {
				"section-main": function (e) {
					Analytics.customEventTrack(['param1', 'param2', 'param3']);
				}
			}
		}
	};
	return App;
});