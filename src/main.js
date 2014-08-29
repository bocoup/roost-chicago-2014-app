(function() {
  'use strict';

  var me = new Photo({
    id : 19
  });

  me.fetch({
    success: function(photo) {
      console.log(photo);

      // add the photo to the body of our
      // document

      $('<img>', {
        src: photo.get('dataUri')
      }).appendTo('body');
    }
  });

}());
