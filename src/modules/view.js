(function() {
  'use strict';

  var PhotoView = Backbone.View.extend({

    render: function(){

      //add to the DOM
      $('<img>', {
        src: this.model.get('dataUri')
      }).appendTo(this.$el);

      return this;
    }
  });

  window.PhotoView = PhotoView;

}());
