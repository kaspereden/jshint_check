module.exports = function(grunt) {


	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				jshintrc: true
			},
			develop: {
				src: 'code/**/*.js' /* the files that will be checked */
			}
		},
		files_check: {
			console: {
				// check for remainders of developer options
				options: {
					pattern: /console\.(log|debug|warn|error)|debugger/,
					/* your regex */
					verbose: true
				},
				src: [ 'code/**/*.js' ] /* the files that will be checked */
			},
		}
	});

	// Load the plugins that provide the tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-files-check');

	// Register tasks
	grunt.registerTask('develop', ['jshint']);
	grunt.registerTask('deploy', ['jshint', 'files_check']);

	grunt.registerTask('default', ['develop']);
};
