define(function(require) {
  'use strict';

  var BaseView = require('modules/core/base-view');
  var template = require('tmpl!modules/components/photo/gallery');

  var GalleryView = BaseView.extend({
    template: template,
    serializeData: function() {
      return {
        gallery: this.collection.toJSON()
      };
    }
  });

  return GalleryView;
});
