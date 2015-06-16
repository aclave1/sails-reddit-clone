module.exports = function(grunt) {

	grunt.config.set('cssmin', {
		dist: {
			src: ['.tmp/public/styles/main.css'],
			dest: '.tmp/public/styles/main.min.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};