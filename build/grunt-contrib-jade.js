'use strict';

module.exports = function(grunt) {
  grunt.config.set('jade', {
    options: {
      data: {
        target: '<%= grunt.task.current.target %>',
      },
    },
    dev: {
      src: 'src/index.jade',
      dest: 'prod/index.html',
    },
    prod: '<%= jade.dev %>',
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
};
