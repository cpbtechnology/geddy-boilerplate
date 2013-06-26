module.exports = function(config) {

	return {
		development: {
			tasks: ['nodemon:development', 'watch'],
			options: {
				logConcurrentOutput: true
			}
		}
	};
}
