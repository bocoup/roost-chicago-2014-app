define(function(require) {
  'use strict';
  var TwoRowLayout = require('modules/layouts/two-row');
  var ToolsCaptureView = require('modules/components/tools/capture');
  var WebcamView = require('modules/components/photo/webcam');

  var WebcamPage = TwoRowLayout.extend({
    afterRender: function() {
      this.addSubView({
        name: 'ToolsCaptureView',
        viewType: ToolsCaptureView,
        container: '.top-row'
      });

      this.addSubView({
        name: 'WebcamView',
        viewType: WebcamView,
        container: '.content',
        options: {
          collection: this.collection
        }
      });

      TwoRowLayout.prototype.afterRender.call(this);
    }
  });

  return WebcamPage;
});
