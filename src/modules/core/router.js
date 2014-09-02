define(function(require) {
  'use strict';
  var Backbone = require('backbone');

  var Router = Backbone.Router.extend({

    routes: {
      '': 'hello'
    },

    hello: function() {
      alert('hello Roost!');
    }
  });

  return new Router();

});