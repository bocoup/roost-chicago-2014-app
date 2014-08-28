'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jscs: {
      options: {
        config: '.jscsrc',
      },
      all: [
        '<%= jshint.build.src %>',
        '<%= jshint.app.src %>',
      ],
    },
    jshint: {
      build: {
        options: {
          jshintrc: '.jshintrc',
        },
        src: '*.js',
      },
      app: {
        options: {
          jshintrc: 'src/.jshintrc',
        },
        src: 'src/**/*.js',
      },
    },
  });

  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Register alias tasks.
  grunt.registerTask('lint',
    'Statically analyze the project JavaScript for errors and code style',
    ['jscs', 'jshint']);
  grunt.registerTask('default', ['lint']);

};