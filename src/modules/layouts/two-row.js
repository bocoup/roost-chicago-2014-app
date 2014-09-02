define(function(require) {
  'use strict';

  var BaseLayout = require('modules/core/base-layout');
  var template = require('tmpl!modules/layouts/two-row');
  var $ = require('jquery');

  var doc = $(document);

  var TwoRowLayout = BaseLayout.extend({
    template: template,

    afterRender: function() {
      var topRow = this.$el.find('.top-row');

      var topRowTop = topRow.offset().top;

      function bound(value, min, max) {
        return Math.min(Math.max(value, min), max);
      }

      $(window).off('scroll').on('scroll', function() {
        topRow.css('top', bound(topRowTop - doc.scrollTop(), 0, topRowTop));
      });
    }
  });

  return TwoRowLayout;

});
