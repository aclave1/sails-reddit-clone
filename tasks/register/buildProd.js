module.exports = function (grunt) {
	grunt.registerTask('buildProd', [
		'compileAssets',
		'cssmin:dist',
		'clean:build',
		'copy:build'
	]);
};
