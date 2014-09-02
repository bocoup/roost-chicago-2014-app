define(function(require) {
  'use strict';

  var BaseView = require('modules/core/base-view');
  var template = require('tmpl!modules/components/photo/detail');

  var PhotoView = BaseView.extend({
    template: template,

    serializeData: function() {
      return this.model.toJSON();
    }
  });

  return PhotoView;
});
