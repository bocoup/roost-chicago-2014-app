define(function(require) {
  'use strict';

  var BaseView = require('modules/core/base-view');
  var template = require('tmpl!modules/components/tools/capture');

  return BaseView.extend({
    template: template,

    events: {
      'click button': 'requestCapture'
    },

    requestCapture: function() {
      this.trigger('requestCapture');
    }
  });
});
