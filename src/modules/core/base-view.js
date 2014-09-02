
define(function(require) {

  'use strict';

  var Backbone = require('backbone');

  var BaseView = Backbone.View.extend({

    destroy: function() {
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