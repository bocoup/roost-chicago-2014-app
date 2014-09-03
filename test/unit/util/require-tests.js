define(function() {
  'use strict';

  /**
   * Load test files and execute the provided callback when all files have
   * successfully loaded.
   *
   * @param {Array<string>} testFiles Paths to the JavaScript test files that
   *                                  should be loaded (the `.js` extension
   *                                  should be omitted)
   * @param {Function} done Callback function to invoke when all test files
   *                        have successfully loaded
   */
  return function(testFiles, done) {
    var deps = ['../../src/requirejs-config'];

    if (navigator.userAgent.indexOf('PhantomJS') >= 0) {
      deps.push('../../node_modules/grunt-mocha/phantomjs/bridge');
    }

    // Stub out the application entry point so the entire application does not
    // attempt to run in the test environment.
    define('main', {});

    require(deps, function() {

      // The application modules have been authored to load first-party modules
      // from a top-level directory named "modules/" and third-party modules
      // from a top-level directory named "bower_components/".
      //
      // In order to mimic this setup in the test environment:
      //
      // 1. Set the `baseUrl` to be the root of the project (this allows module
      //    references beginning with "bower_components/" to resolve correctly)
      // 2. Define a `paths` configuration for "modules", essentually
      //    "forwarding" it to the "src/modules/" directory.
      //
      // In addition, define a path for the test environment that accounts for
      // this detail so test files can be loaded with more intuitive IDs.
      require.config({
        baseUrl: '../..',
        paths: {
          tests: 'test/unit/tests',

          modules: 'src/modules'
        }
      });

      require(testFiles, done);
    });
  };
 });
