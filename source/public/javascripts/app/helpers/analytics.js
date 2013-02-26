/**
 * @module helpers/analytics
 */

define(function (require) {

	'use strict';

	var $ = require('jquery'),
		_ = require('underscore'),
		App = require('global'),
		_$body = $(document.body),
		self;

	self = {

		/**
		 * Initializes analytics with the specified GA account.
		 * @method Analytics.init
		 * @param account {String} Account ID
		 * @param pageName {String} Page Name
		 */
		'initialize': function (options) {
			if (options.gaAccountId === undefined) {
				return;
			}

			window._gaq = window._gaq || [];
			window._gaq.push(['_setAccount', options.gaAccountId]);

			self.delegateEvents(options.trackingMap);
			log('Analytics : Initialized');
			return this;
		},

		/**
		 * Fires a pageview to the page specified.
		 * @method Analytics.pageTrack
		 * @param pageName {String} Name of page to be tracked
		 */
		'pageTrack': function (pageName) {
			if (pageName === undefined) {
				return;
			}
			window._gaq.push(['_trackPageview', pageName]);
			return this;
		},

		/**
		 * Fires a custom GA event.
		 * @method Analytics.customEventTrack
		 * @param args {Array} Array of arguments for custom GA Event
		 */
		'customEventTrack': function (args) {
			window._gaq.push(['_trackEvent', args[0], args[1], args[2]]);
			return this;
		},

		/**
		 * Tracks Likes/Unlikes via the FB API's events.
		 * @method Analytics.socialTrackFacebook
		 */
		'socialTrackFacebook': function () {
			FB.Event.subscribe('edge.create', function (targetUrl) {
				if (_gaq === 'undefined') {
					return;
				}
				window._gaq.push(['_trackSocial', 'facebook', 'like', targetUrl]);
			});
			FB.Event.subscribe('edge.remove', function (targetUrl) {
				if (_gaq === 'undefined') {
					return;
				}
				window._gaq.push(['_trackSocial', 'facebook', 'unlike', targetUrl]);
			});
			return this;
		},

		/**
		 * Tracks Tweets via the twitter API.
		 * @method Analytics.socialTrackTwitter
		 */
		'socialTrackTwitter': function () {
			function extractParamFromUri(uri, paramName) {

				var query, parts, params, i;

				if (!uri) {
					return;
				}

				uri = uri.split('#')[0]; // Remove anchor.
				parts = uri.split('?'); // Check for query params.
				if (parts.length === 1) {
					return;
				}

				query = decodeURI(parts[1]);

				// Find url param.
				paramName += '=';
				params = query.split('&');
				for (i = 0; i < params.length; i++) {
					if (params[i].indexOf(paramName) === 0) {
						return window.unescape(params[i].split('=')[1]);
					}
				}
			}

			window.twttr.events.bind('tweet', function (event) {
				if (event) {
					var targetUrl;
					if (event.target && event.target.nodeName === 'IFRAME') {
						targetUrl = extractParamFromUri(event.target.src, 'url');
					}
					window._gaq.push(['_trackSocial', 'twitter', 'tweet', targetUrl]);
				}
			});
			return this;
		},

		/**
		 * Creates a delegated event listener on the &lt;body&gt;
		 * and can listen to any type of event on any type of element.
		 * The event handler is responsible for determining if the event
		 * and element exist in a data dictionary (_trackingMap) and
		 * invokes the respective function (usually Omniture tracking).
		 * @method Analytics.delegateEvents
		 * @param map {Object} Delegate object
		 */
		'delegateEvents': function (map) {

			var events = [],
				event;

			for (event in map) {
				if (map.hasOwnProperty(event)) {
					events.push(event);
				}
			}

			_$body.on(events.join(' ').toString(), 'div, object, span, p, a, form, input, li, img', function (e, altID) {
				var event = (e.namespace) ? e.type + '.' + e.namespace : e.type,
					link = e.currentTarget,
					selector = altID || link.getAttribute('data-track') || link.id,
					trackElem, trackFn;

				if (map === undefined || map[event] === undefined || map[event][selector] === undefined) {
					return;
				} else {
					map[event][selector].apply(window, [e]);
				}
			});
			return this;
		}
	};

	return self;

});