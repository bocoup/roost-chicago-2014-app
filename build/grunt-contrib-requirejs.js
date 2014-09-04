'use strict';

module.exports = function(grunt) {
  grunt.config.set('requirejs', {
    prod: {
      options: {
        baseUrl: '.',
        mainConfigFile: 'src/requirejs-config.js',
        insertRequire: ['main'],
        name: 'bower_components/almond/almond',
        out: 'prod/app.js',
        optimize: 'uglify2',
        generateSourceMaps: true,
        preserveLicenseComments: false,
        // Because we override the application `baseUrl` to be the root of the
        // projuct during the build (see above), the paths to the `main` script
        // and the `modules` directory has to be modified to include `src/`.
        paths: {
          main: 'src/main',
          modules: 'src/modules',
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
};
