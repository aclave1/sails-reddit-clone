/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [{
				expand: true,
				cwd: './assets',
				src: ['**/*.!(coffee|less|js)'],
				dest: '.tmp/public'
			}]
		},
		styles:{
			files: [{
				expand: true,
				cwd: './assets',
				src: ['styles/**/*.css'],
				dest: '.tmp/public/styles'
			}]
		},
		build: {
			files: [{
				expand: true,
				cwd: '.tmp/public',
				src: ['**/*'],
				dest: 'www'
			}]
		},
		js:{
			files:[{
				expand:true,
				cwd:'./assets/js',
				src:['app-bundle.js'],
				dest:'.tmp/public/js'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
