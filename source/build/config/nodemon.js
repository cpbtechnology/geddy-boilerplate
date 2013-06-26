module.exports = function(config) {

	return {
		development: {
			options: {
				file: 'server.js',
				args: ['development'],
				watched_folders: ['app'],
				debug: true,
				delayTime: 1
			}
		}
	};
}
