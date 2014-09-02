'use strict';

var middleware = require('./connect/middleware').dev;

module.exports = function(grunt) {
  grunt.config.set('connect', {
    dev: {
      options: {
        base: ['prod', 'src', '.'],
        port: '8000',
        hostname: '*',
        middleware: middleware,
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
};
