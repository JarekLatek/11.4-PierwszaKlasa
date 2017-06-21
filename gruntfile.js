module.exports = function(grunt) {
	
	// Project confiuration

	grunt.initConfig({
        jshint: {
        	all: ['js/*.js']
        },

		browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        'index.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
	});

	// Load the plugins tasks

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-browser-sync');

	// Default tasx(s).

	grunt.registerTask('default', ['jshint', 'browserSync']);
};