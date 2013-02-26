/**
 * @module main
 */

(function () {

	'use strict';

	require(['config'], function () {

		require(['global'], function (App) {
			App.initialize();

			require(['google-analytics']);

			require(['helpers/analytics', 'facebook'], function (Analytics, Facebook) {
				FB.init({
					'appId': App.config.get('fbAccountId'),
					'xfbml': true
				});
				Analytics.socialTrackFacebook();
			});
		});
		// end require['global']
	});
	// end require['config']
}());