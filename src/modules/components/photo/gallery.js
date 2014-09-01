define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var template = require('tmpl!modules/components/photo/gallery');

  var GalleryView = Backbone.View.extend({
    render: function() {
      this.$el.html(template({
        gallery: this.collection.toJSON()
      }));
      return this;
    }
  });

  return GalleryView;
});