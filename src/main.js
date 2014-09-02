define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var $ = require('jquery');
  require('modules/core/router');

  Backbone.history.start();

  // All navigation that is relative should be passed through the navigate
  // method, to be processed by the router. If the link has a `data-bypass`
  // attribute, bypass the delegation completely.
  $(document).on('click', 'a[href^="#"]:not([data-bypass])', function(evt) {
    // Prevent the default event (including page refresh).
    evt.preventDefault();

    // `Backbone.history.navigate` is sufficient for all Routers and will
    // trigger the correct events. The Router's internal `navigate` method
    // calls this anyways. The fragment is sliced from the root.
    var href = $(this).attr('href');
    Backbone.history.navigate(href, true);
  });

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
