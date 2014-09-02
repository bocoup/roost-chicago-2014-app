define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var BaseView = require('modules/core/base-view');

  return BaseView.extend({
    constructor: function() {

      // Create a per instance subViews property.
      // It is a map of unique child ids to child views.
      // The child id can be a number or string, e.g. the id of the associated
      // model
      this.subViews = {};

      // Call super to invoke the default constructor functionality
      Backbone.View.apply( this, arguments );

    },

    destroy: function() {

      // Call destroy on all of the subViews we may have added
      this.destroySubViews();

      BaseView.prototype.destroy.call(this);

      return this;
    },

    addSubView: function( subViewSpec ) {
      var existingSubView = this.subViews[ subViewSpec.name ];

      // If we didn't pass an options object, create one.
      subViewSpec.options = subViewSpec.options || {};

      // Add the `el` property to our options for creating a View instance
      subViewSpec.options.el = this.$el.find(subViewSpec.container).get(0);

      // Create our subView instance, render, and place it in the document
      var subView = new subViewSpec.viewType( subViewSpec.options );

      // If this operation is replacing an existing subView, ensure that view
      // is properly destroy before over-writing its entry in this layout's
      // lookup table.
      if (existingSubView) {
        existingSubView.destroy();
      }

      // Add it to the subViews map
      this.subViews[ subViewSpec.name ] = subView;

      return subView;
    },

    getSubView: function( name ) {
      return this.subViews[ name ];
    },

    destroySubViews: function() {

      // Cache local to this function
      var subViews = this.subViews;

      for ( var id in subViews ) {

        // Only delete own properties
        if ( subViews.hasOwnProperty(id) ) {
          subViews[ id ].destroy();

          // Destroy removes the events and DOM element
          // Call delete to remove the object from memory
          delete subViews[ id ];
        }
      }

      return this;
    },

    update: function() {

      BaseView.prototype.update.apply(this);

      for ( var id in this.subViews ) {
        this.subViews[id].update();
      }
    },

    render: function() {
      BaseView.prototype.render.apply(this);

      // render all subviews
      for ( var id in this.subViews ) {

        this.subViews[id].render();
      }

      return this;
    }

  });

});