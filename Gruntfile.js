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
    watch: {
      livereload: {
        options: {
          livereload: true,
        },
        files: ['src/**/*.{js,css,html}'],
      },
      jshintrc: {
        files: ['**/.jshintrc'],
        tasks: ['jshint'],
      },
      build: {
        files: ['<%= jshint.build.src %>'],
        tasks: ['jscs', 'jshint:build'],
      },
      scripts: {
        files: ['<%= jshint.app.src %>'],
        tasks: ['jscs', 'jshint:app'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register alias tasks.
  grunt.registerTask('lint',
    'Statically analyze the project JavaScript for errors and code style',
    ['jscs', 'jshint']);
  grunt.registerTask('default', ['lint', 'watch']);

};