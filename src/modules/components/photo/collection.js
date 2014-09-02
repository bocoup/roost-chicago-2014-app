define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var Photo = require('modules/components/photo/model');
  var API = require('modules/services/api');

  var PhotoCollection = Backbone.Collection.extend({
    model: Photo,
    comparator: function(model) {
      return (1 / model.id);
    },
    url : function() {
      return API.photos;
    }
  });

  return PhotoCollection;
});