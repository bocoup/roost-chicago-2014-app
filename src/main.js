define(function(require) {
  'use strict';

  var Photo = require('modules/components/photo/model');
  var PhotoView = require('modules/components/photo/detail');

  var me = new Photo({
    id : 19
  });

  var view = new PhotoView({
    model : me
  });

  view.$el.appendTo('body');

  me.fetch({
    success: function() {
      view.render();
    }
  });

});
