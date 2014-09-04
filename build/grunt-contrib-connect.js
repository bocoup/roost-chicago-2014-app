'use strict';

var middleware = require('./connect/middleware').dev;

module.exports = function(grunt) {
  grunt.config.set('connect', {
    options: {
      port: '8000',
      hostname: '*',
      middleware: middleware,
    },
    dev: {
      options: {
        base: ['prod', 'src', '.'],
      },
    },
    prod: {
      options: {
        base: ['prod'],
        keepalive: true,
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
};
