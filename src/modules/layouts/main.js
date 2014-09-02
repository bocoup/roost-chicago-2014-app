define(function(require) {
  'use strict';

  var BaseLayout = require('modules/core/base-layout');
  var template = require('tmpl!modules/layouts/main');

  var MainLayout = BaseLayout.extend({
    template: template
  });

  return MainLayout;

});
