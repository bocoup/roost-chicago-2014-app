
define(function(require) {

  'use strict';

  var Backbone = require('backbone');

  var BaseView = Backbone.View.extend({

    preDestroy: function() {},

    destroy: function() {
      // In case an instance has specialized logic for cleaning itself up,
      // invoke the `preDestroy` hook before any actual destruction occurs.
      this.preDestroy();

      this.stopListening();
      this.$el.empty();

      return this;
    },

    update: function() {
      var data = this.serializeData();
      var renderedTemplate = this.template(data);

      this.$el.html(renderedTemplate);
    },

    render: function() {
      this.update();
      this.afterRender();

      return this;
    },

    afterRender: function() {},

    serializeData: function() {}

  });

  return BaseView;

});