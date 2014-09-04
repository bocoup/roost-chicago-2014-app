'use strict';

module.exports = function(grunt) {
  grunt.config.set('copy', {
    prod: {
      expand: true,
      cwd: 'src',
      src: 'img/**/*',
      dest: 'prod',
    },
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
