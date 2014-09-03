define(function(require) {
  'use strict';

  var Backbone = require('backbone');

  var PhotoCollection = require('modules/components/photo/collection');

  var MainLayout = require('modules/layouts/main');
  var IndexPage = require('modules/pages/index-page');
  var PhotoPage = require('modules/pages/photo-page');
  var UploadPage = require('modules/pages/upload-page');
  var WebcamPage = require('modules/pages/webcam-page');

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
      'photos/:id': 'photo',
      'upload': 'upload',
      'webcam': 'webcam'
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
    },

    upload: function() {
      var self = this;
      var uploadView = this.insertView({
        name: 'UploadPage',
        viewType: UploadPage,
        container: '.main',
        options: {
          collection: photos
        }
      });

      // when the upload is done, navigate back to our
      // gallery view
      this.listenTo(uploadView, 'uploaded', function(ev) {
        self.navigate('', { trigger: true });
      });
    },

    webcam: function() {
      this.insertView({
        name: 'WebcamPage',
        viewType: WebcamPage,
        container: '.main',
        options: {
          collection: photos
        }
      });
    }
  });

  return new Router();

});
