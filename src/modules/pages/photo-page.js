define(function(require) {
  'use strict';

  var OneRowLayout = require('modules/layouts/one-row');
  var PhotoDetailView = require('modules/components/photo/detail');

  var PhotoPage = OneRowLayout.extend({
    initialize: function(options) {
      this.modelId = options.modelId;
    },

    afterRender: function() {
      var self = this;

      OneRowLayout.prototype.afterRender.apply(this);

      self.collection.fetch({
        success: function() {

          // add subView
          var detailView = self.addSubView({
            name: 'PhotoDetailView',
            viewType: PhotoDetailView,
            container: '.content',
            options : {
              model: self.collection.get(self.modelId)
            }
          });

          detailView.update();

          self.listenTo(detailView, 'deleted', function() {
            self.trigger('deleted');
          });
        }
      });
    }
  });

  return PhotoPage;

});
