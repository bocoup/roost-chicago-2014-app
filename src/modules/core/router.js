define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var $ = require('jquery');

  var Photo = require('modules/components/photo/model');
  var PhotoView = require('modules/components/photo/detail');
  var PhotoCollection = require('modules/components/photo/collection');
  var GalleryView = require('modules/components/photo/gallery');

  var Router = Backbone.Router.extend({

    routes: {
      '': 'index',
      'photos/:id': 'photo'
    },

    index: function() {
      var photos = new PhotoCollection();

      var gallery = new GalleryView({
        collection : photos,
        el: '#app'
      });

      photos.fetch().then(function() {
        gallery.render();
      });
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