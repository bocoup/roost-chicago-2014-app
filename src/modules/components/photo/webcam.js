define(function(require) {
  'use strict';
  var BaseView = require('modules/core/base-view');
  var template = require('tmpl!modules/components/photo/webcam');

  return BaseView.extend({
    template: template
  });
});
