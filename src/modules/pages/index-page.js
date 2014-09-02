define(function(require) {
  'use strict';

  var TwoRowLayout = require('modules/layouts/two-row');
  var PhotoGalleryView = require('modules/components/photo/gallery');
  var ToolsStandardView = require('modules/components/tools/standard');

  var IndexPage = TwoRowLayout.extend({
    initialize: function() {
    },

    afterRender: function() {
      var self = this;

      TwoRowLayout.prototype.afterRender.apply(this);

      // create a gallery view with our collection. This will be empty until
      // our photos have been fetched
      var photoGalleryView = self.addSubView({
        name: 'PhotoGalleryView',
        viewType: PhotoGalleryView,
        container: '.content',
        options: {
          collection: self.collection
        }
      });

      // add a standard toolbar
      self.addSubView({
        name: 'ToolsStandardView',
        viewType: ToolsStandardView,
        container: '.top-row'
      });

      // once our photos have been fetched, update the photo gallery collection
      self.collection.fetch().then(function() {
        photoGalleryView.update();
      });
    }
  });

  return IndexPage;
});
