(function() {
  'use strict';

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

}());
