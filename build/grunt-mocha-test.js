'use strict';
module.exports = function(grunt) {
  grunt.config('mochaTest', {
    options: {
      // Select a Mocha reporter
      // http://visionmedia.github.com/mocha/#reporters
      reporter: 'spec',
      ui: 'tdd',
    },
    src: ['test/integration/setup.js', 'test/integration/index.js'],
  });

  grunt.loadNpmTasks('grunt-mocha-test');
};
