define(function(require) {

  'use strict';

  var BaseLayout = require('modules/core/base-layout');
  var template = require('tmpl!modules/layouts/one-row');

  var OneRowLayout = BaseLayout.extend({
    template: template,

    // Normally when instantiating a view, we can specify a 'className' property
    // that be used as a class name on the newly created element. In this
    // case, we are actually using an existing element that is a part of our
    // parent layout and rendering this layout into it. In order to distinguish
    // it from our two row layout, we need to assign it the 'single' classname,
    // which we will now need to do manually after this layout is rendered.
    afterRender: function() {
      // add a class to our container to distinguish its layout as
      // a single row layout.
      this.$el.addClass('single');

      return this;
    },

    // Override the default implementation of `destroy` to remove the element's
    // class. Call the original implementation to preserve expected behavior.
    destroy: function() {
      // remove the container class name before we empty
      // the element.
      this.$el.removeClass('single');

      return BaseLayout.prototype.destroy.call(this, arguments);
    }
  });

  return OneRowLayout;

});
