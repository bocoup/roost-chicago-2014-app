(function() {
  'use strict';

  require.config({
    baseUrl: '/',
    paths: {
      backbone: 'bower_components/backbone/backbone',
      jquery: 'bower_components/jquery/dist/jquery',
      underscore: 'bower_components/lodash/dist/lodash.underscore'
    },

    deps: ['main']
  });
}());
