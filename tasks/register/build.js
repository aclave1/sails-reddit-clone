module.exports = function (grunt) {
	grunt.registerTask('build', [
		'compileAssets',
		'clean:build',
		'copy:build'
	]);
};
