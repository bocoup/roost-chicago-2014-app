define(function(require) {
  'use strict';

  var Backbone = require('backbone');

  var Photo = require('modules/components/photo/model');
  var PhotoCollection = require('modules/components/photo/collection');

  var PhotoView = require('modules/components/photo/detail');

  var MainLayout = require('modules/layouts/main');
  var IndexPage = require('modules/pages/index-page');

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
      var self = this;

      var me = new Photo({
        id : id
      });

      me.fetch({
        success: function() {
          self.insertView({
            name: 'PhotoView',
            viewType: PhotoView,
            container: '.main',
            options: {
              model : me
            }
          });
        }
      });
    }
  });

  return new Router();

});
