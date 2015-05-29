module.exports = function(grunt) {

	grunt.config.set('watch', {
		api: {

			// API files to watch:
			files: ['api/**/*', '!**/node_modules/**']
		},
		styles:{
			files:['assets/styles/**/*'],
			tasks:['less:dev','copy:styles']
		},
		js:{
			files:['assets/js/*','assets/js/modules/**/*','!assets/js/*-bundle.js'],
			tasks:['webpack:dev','copy:js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
