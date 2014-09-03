define(function(require) {
  'use strict';

  var BaseView = require('modules/core/base-view');
  var gum = require('modules/services/gum-compat');
  var template = require('tmpl!modules/components/tools/standard');

  return BaseView.extend({
    template: template,

    afterRender: function() {
      if (!gum.getUserMedia) {
        this.$('.btn').eq(0).remove();
      }
    }
  });

});
