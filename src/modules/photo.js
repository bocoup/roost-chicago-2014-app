define(['backbone'], function(Backbone) {
  'use strict';

  var Photo = Backbone.Model.extend({
    urlRoot : function() {
      return 'http://localhost:8001/photos';
    }
  });

  return Photo;
});
