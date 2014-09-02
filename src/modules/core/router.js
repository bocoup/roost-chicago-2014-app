define(function(require) {
  'use strict';
  var Backbone = require('backbone');

  var Router = Backbone.Router.extend({

    routes: {
      '': 'hello',
      'photos/:id': 'photo'
    },

    hello: function() {
      alert('hello Roost!');
    },

    photo: function(id) {
      alert('photo id #' + id);
    }
  });

  return new Router();

});