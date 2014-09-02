define(function(require) {
  'use strict';

  var Backbone = require('backbone');

  var PhotoCollection = require('modules/components/photo/collection');

  var MainLayout = require('modules/layouts/main');
  var IndexPage = require('modules/pages/index-page');
  var PhotoPage = require('modules/pages/photo-page');

  var photos = new PhotoCollection();

  var Router = Backbone.Router.extend({

    initialize: function() {
      this.layout = new MainLayout({
        el: '#app'
      });
      this.layout.render();
    },

    routes: {
      '': 'index',
      'photos/:id': 'photo'
    },

    insertView: function(page) {
      var currentPage = this.layout.addSubView(page);

      // render our whole layout, which will render the child
      // page views.
      currentPage.render();

      return currentPage;
    },

    index: function() {

      this.insertView({
        name: 'IndexPage',
        viewType: IndexPage,
        container: '.main',
        options: {
          collection: photos
        }
      });
    },

    photo: function(id) {
      this.insertView({
        name: 'PhotoPage',
        viewType: PhotoPage,
        container: '.main',
        options: {
          collection: photos,
          modelId: id
        }
      });
    }
  });

  return new Router();

});
