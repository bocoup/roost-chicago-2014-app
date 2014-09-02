define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var API = require('modules/services/api');

  var Photo = Backbone.Model.extend({
    urlRoot : function() {
      return API.photos;
    }
  });

  return Photo;
});
