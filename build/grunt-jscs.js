'use strict';

module.exports = function(grunt) {
  grunt.config.set('jscs', {
    options: {
      config: '.jscsrc',
    },
    all: [
      '<%= jshint.build.src %>',
      '<%= jshint.app.src %>',
    ],
  });

  grunt.loadNpmTasks('grunt-jscs');
};
