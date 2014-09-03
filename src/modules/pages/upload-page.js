define(function(require) {
  'use strict';

  var OneRowLayout = require('modules/layouts/one-row');
  var UploadView = require('modules/components/photo/upload');

  var UploadPage = OneRowLayout.extend({
    afterRender: function() {
      var self = this;

      var uploadView = self.addSubView({
        name: 'UploadView',
        viewType: UploadView,
        container: '.content',
        options: {
          collection: self.collection
        }
      });

      // when a done event is recieved, just pass it back
      // up to the router.
      self.listenTo(uploadView, 'uploaded', function(ev, model) {
        self.trigger('uploaded');
      });

    }
  });

  return UploadPage;
});
