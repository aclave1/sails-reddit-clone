module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'webpack:dev',
		'less:dev',
		'copy:dev',
		'copy:js',
	]);
};
