define(function(require) {
  'use strict';

  var BaseView = require('modules/core/base-view');
  var template = require('tmpl!modules/components/tools/standard');

  return BaseView.extend({
    template: template
  });

});
