'use strict';

module.exports = function(grunt) {
  grunt.config.set('jade', {
    dev: {
      src: 'src/index.jade',
      dest: 'prod/index.html',
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
};
