/**
 * @module helpers/utilities
 */

define(['jquery','helpers/events'], function ($, Events) {

	'use strict';

	var App;

	var Utilities = {

		"initialize": function () {
			Utilities.normalizeLogs();
		},

		/**
		 * Use placeholder text when INPUT tag is empty.
		 * @method Utilities.setInputPlaceholder
		 * @param input {String} ID of INPUT tag
		 * @param placeholderTxt {String}
		 */
		"setInputPlaceholder": function (input, placeholderTxt) {
			var $input = $('#' + input),
				placeholder = placeholderTxt;

			$input.val(placeholder).addClass('placeholder').focus(function () {
				if ($input.val() === placeholder) {
					$input.val('').removeClass('placeholder');
				}
			}).blur(function () {
				if ($input.val() === '') {
					$input.val(placeholder).addClass('placeholder');
				}
			});
		},

		/**
		 * Test to see if device is an iPad.
		 * @method Utilities.isIpad
		 */
		"isIpad": function () {
			return (navigator.userAgent.match(/iPad/i) === null) ? false : true;
		},

		"polyFillMatchMedia": function () {
			window.matchMedia = window.matchMedia || (function (doc, undefined) {

				var bool, docElem = doc.documentElement,
					refNode = docElem.firstElementChild || docElem.firstChild,
					// fakeBody required for <FF4 when executed in <head>
					fakeBody = doc.createElement("body"),
					div = doc.createElement("div");

				div.id = "mq-test-1";
				div.style.cssText = "position:absolute;top:-100em";
				fakeBody.style.background = "none";
				fakeBody.appendChild(div);

				return function (q) {

					div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";

					docElem.insertBefore(fakeBody, refNode);
					bool = div.offsetWidth === 42;
					docElem.removeChild(fakeBody);

					return {
						matches: bool,
						media: q
					};

				};

			}(document));
		},

		/**
		 * Strip characters from string that may be used in an XSS attack.
		 * @method Utilities.preventXSS
		 * @param value {String} Property to clean.
		 */
		"preventXSS": function (value) {
			return value.toString().replace(/<|>/g, '');
		},

		"setupCustomSelect": function () {
			$('.input-select.custom').each(function () {

				var $this = $(this),
					polyfill = '<span class="selected" /><span class="cap-right"><span class="arrow">&nbsp;</span></span>';

				$this.find('select').wrap('<span />').before(polyfill).bind('change', function () {
					$this.find('.selected').text($.text($this.find(':selected')));
				});

				$this.find('.selected').text($.text($this.find(':selected')));

				$this.find('select').focus(function () {
					$this.addClass('active');
				}).blur(function () {
					$this.removeClass('active');
				});
			});
		},

		/**
		 * Normalizes the console.log method.
		 * http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
		 * @method Utilities.normalizeLogs
		 */
		'normalizeLogs': function () {
			window.log = function () {
/*@cc_on
					return;
				@*/
				if (window.isDebugMode) {
					log.history = log.history || []; // store logs to an array for reference
					log.history.push(arguments);
					if (window.console) {
						window.console.log(Array.prototype.slice.call(arguments));
					}

					Events.trigger('log', arguments);
				} else {
					log.history = log.history || []; // store logs to an array for reference
					log.history.push(arguments);
				}
			};

/*@cc_on
				return;
			@*/
			if (!window.isDebugMode) {
				$(document).keyup(function (e) {

					var i, len;

					if (e.keyCode === 192 || e.keyCode === 19) {
						if (window.console) {
							log.history = log.history || []; // store logs to an array for reference
							for (i = 0, len = log.history.length; i < len; i++) {
								window.console.log(Array.prototype.slice.call(log.history[i]));
							}
						}
					}
					log.history = [];
				});
			}
		}

	};

	return Utilities;
});