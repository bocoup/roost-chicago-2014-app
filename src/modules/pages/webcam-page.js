define(function(require) {
  'use strict';
  var TwoRowLayout = require('modules/layouts/two-row');
  var ToolsCaptureView = require('modules/components/tools/capture');
  var WebcamView = require('modules/components/photo/webcam');

  var WebcamPage = TwoRowLayout.extend({
    afterRender: function() {
      var captureView = this.addSubView({
        name: 'ToolsCaptureView',
        viewType: ToolsCaptureView,
        container: '.top-row'
      });

      var webcamView = this.addSubView({
        name: 'WebcamView',
        viewType: WebcamView,
        container: '.content',
        options: {
          collection: this.collection
        }
      });

      TwoRowLayout.prototype.afterRender.call(this);

      captureView.on('requestCapture', webcamView.filterAndSave, webcamView);
      webcamView.on('uploaded', function() {
        this.trigger('uploaded');
      }, this);
    }
  });

  return WebcamPage;
});
