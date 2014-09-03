'use strict';

module.exports = function(grunt) {
  grunt.config.set('jscs', {
    options: {
      config: '.jscsrc',
    },
    all: [
      '<%= jshint.build.src %>',
      '<%= jshint.app.src %>',
      '<%= jshint["test-unit"].src %>',
      '<%= jshint["test-integration"].src %>',
    ],
  });

  grunt.loadNpmTasks('grunt-jscs');
};
