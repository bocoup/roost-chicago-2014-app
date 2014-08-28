module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jscs: {
      options: {
        config: '.jscsrc',
      },
      all: ['*.js', 'src/**/*.js'],
    },
  });

  grunt.loadNpmTasks('grunt-jscs');

  // Register alias tasks.
  grunt.registerTask('default', ['jscs']);

};