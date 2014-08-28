'use strict';

module.exports = function(grunt) {
  grunt.config.set('watch', {
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
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
