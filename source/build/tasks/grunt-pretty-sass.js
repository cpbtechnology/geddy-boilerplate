/*
 * grunt-pretty-sass
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 Brandon Minch
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

	'use strict';

	var _ = grunt.utils._,
		fs = require('fs'),
		exec = require('child_process').exec,
		filesLength = 0,
		filesComplete = 0,
		purple = '\u001b[35m',
		cyan = '\u001b[36m',
		reset = '\u001b[0m';

	grunt.registerMultiTask('pretty-sass', 'Format SASS source files', function() {
		var options = grunt.config('pretty-sass.' + this.target + '.options') || {},
			filesSrc = grunt.config('pretty-sass.' + this.target + '.files'),
			files = grunt.file.expandFiles(filesSrc),
			done = this.async();

		filesLength = files.length;

		_.each(files, function(filepath, i) {
			var dirtySass = grunt.file.read(filepath),
					command = 'sass-convert --from scss --to scss --indent t --in-place ' + filepath;

			grunt.log.writeln(cyan + 'prettifying: ' + reset + filepath);

			exec(command, function ( error, stdout, stderr ) {
				if ( error !== null ) {
					grunt.log.error( filepath + ': ' + error );
					done( false );
				} else {
					if (options.alphabetize) {
						alphabetize(filepath);
					}
				}
			});
		});

		function alphabetize(filepath) {
			grunt.log.writeln(purple + 'alphabetizing: ' + reset + filepath);
			fs.readFile(filepath, function(err, data) {
				if (err) throw err;

				var lines = data.toString().split("\n"),
					output = [],
					outputIndex = 0,
					isSelector = false,
					nestDepth = 0,
					selectorIndex = 0,
					selectors = [],
					selectorsMap = [],
					outputString = '',
					flattened;

				_.each(lines, function (line) {
					var selectorStart = /\{/g.test(line),
						selectorEnd = /\}/g.test(line);

					if (selectorStart) {
						if (!isSelector) {
							isSelector = true;
						} else {
							nestDepth++;
						}
					
						selectorIndex = selectors.length;
						selectors[selectorIndex] = [];
						selectorsMap.push(selectorIndex);

						output[outputIndex] = line;
						outputIndex++;
						output[outputIndex] = selectors[selectorIndex];
						outputIndex++;
					} else if (selectorEnd) {
						if (nestDepth > 0) {
							nestDepth--;
						} else {
							isSelector = false;
						}
						selectorsMap.pop();
						output[outputIndex] = line;
						outputIndex++;
					} else if (isSelector) {
						selectors[_.last(selectorsMap)].push(line);
					} else {
						output[outputIndex] = line;
						outputIndex++;
					}

				});
				_.each(selectors, function(selector) {
					if (_.isArray(selector)) {
						selector.sort();
					}
				});
				
				flattened = _.flatten(output);

				_.each(flattened, function (section) {
					outputString += section + '\n';
				});

				fs.writeFile(filepath, outputString, 'utf8', function() {
					if (filesComplete ===  filesLength - 1) {
						done( true );
					} else {
						filesComplete++;
					}
				});

			});
		}

	});
};
