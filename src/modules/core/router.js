define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var $ = require('jquery');

  var Photo = require('modules/components/photo/model');
  var PhotoView = require('modules/components/photo/detail');

  var Router = Backbone.Router.extend({

    routes: {
      '': 'hello',
      'photos/:id': 'photo'
    },

    hello: function() {
      alert('hello Roost!');
    },

    photo: function(id) {
      var me = new Photo({
        id : id
      });

      var view = new PhotoView({
        model : me
      });

      $('#app').html(view.$el);

      me.fetch({
        success: function() {
          view.render();
        }
      });
    }
  });

  return new Router();

});