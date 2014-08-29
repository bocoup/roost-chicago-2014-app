(function() {
  'use strict';

  var Photo = Backbone.Model.extend({
    urlRoot : function() {
      return 'http://localhost:8001/photos';
    }
  });

  window.Photo = Photo;
}());