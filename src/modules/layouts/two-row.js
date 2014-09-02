define(function(require) {
  'use strict';

  var BaseLayout = require('modules/core/base-layout');
  var template = require('tmpl!modules/layouts/two-row');

  var TwoRowLayout = BaseLayout.extend({
    template: template
  });

  return TwoRowLayout;

});
