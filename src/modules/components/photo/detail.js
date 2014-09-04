define(function(require) {
  'use strict';

  var BaseView = require('modules/core/base-view');
  var template = require('tmpl!modules/components/photo/detail');

  var PhotoView = BaseView.extend({
    template: template,
    events: {
      'click .delete': 'handleDelete'
    },

    handleDelete: function() {
      var self = this;

      self.model.destroy({
        wait: true,
        success: function() {
          self.trigger('deleted');
        },
        failure: function() {
          self.$('.photo').append(
            '<p class="error">There was an error deleting this photo</p>'
          );
        }
      });
    },

    serializeData: function() {
      return this.model.toJSON();
    }
  });

  return PhotoView;
});
