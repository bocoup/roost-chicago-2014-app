define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var $ = require('jquery');
  var _ = require('underscore');

  var PhotoView = Backbone.View.extend({

    template: _.template($('#photo-detail').text()),

    render: function(){

      this.$el.html(
        this.template(
          this.model.toJSON()
        )
      );

      return this;
    }
  });

  return PhotoView;
});
