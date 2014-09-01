define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var template = require('tmpl!modules/components/photo/detail');

  var PhotoView = Backbone.View.extend({

    render: function(){

      this.$el.html(template(this.model.toJSON()));

      return this;
    }
  });

  return PhotoView;
});
