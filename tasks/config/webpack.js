//a simple grunt webpack config
 
module.exports = function (grunt) {
 
  grunt.config.set('webpack', {
    options: require('../../webpack.config'),
    dev: {
      progress: true
    }
  });
 
  grunt.loadNpmTasks('grunt-webpack');
};