define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  require('modules/core/router');

  Backbone.history.start();


  //photo detail view
  //var Photo = require('modules/components/photo/model');
  //var PhotoView = require('modules/components/photo/detail');
  //
  //var me = new Photo({
  //  id : 19
  //});
  //
  //var view = new PhotoView({
  //  model : me
  //});
  //
  //view.$el.appendTo('body');
  //
  //me.fetch({
  //  success: function() {
  //    view.render();
  //  }
  //});

  //photo collection view
  var PhotoCollection = require('modules/components/photo/collection');
  var GalleryView = require('modules/components/photo/gallery');

  var photos = new PhotoCollection();

  var gallery = new GalleryView({
    collection : photos,
    el: '#app'
  });

  photos.fetch().then(function() {
    gallery.render();
  });

});
