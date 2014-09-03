define(['modules/core/base-view'], function(BaseView) {
  'use strict';

  suite('BaseView', function() {

    suite('#render', function() {
      test('invokes custom `afterRender` hook', function() {
        var callCount = 0;
        var view = new BaseView();
        view.afterRender = function() {
          callCount++;
        };
        view.template = function() {};

        view.render();

        assert.equal(callCount, 1);
      });

      test('correctly sets the markup according to the template', function() {
        var view = new BaseView();
        view.template = function() {
          return '<h1>test!</h1>';
        };

        view.render();

        assert.equal(view.$el.html(), '<h1>test!</h1>');
      });

      test(
        'expands the template with the data returned by `serializeData`',
        function() {
          var view = new BaseView();
          var expectedData = {};
          var actualData;
          view.serializeData = function() {
            return expectedData;
          };
          view.template = function(data) {
            actualData = data;
          };
          view.render();

          assert.equal(actualData, expectedData);
        }
      );
    });

    suite('#destroy', function() {
      test('all event listeners are unbound', function() {
        var view = new BaseView();
        var callCount = 0;
        var handler = function() {
          callCount++;
        };
        var view2 = new BaseView();
        view.listenTo(view2, 'sample-event', handler);

        view.destroy();
        view2.trigger('sample-event');

        assert.equal(callCount, 0);
      });

      test('container element is emptied', function() {
        var view = new BaseView();
        view.template = function() {
          return '<span>';
        };
        view.render();

        view.destroy();

        assert.equal(view.$el.contents().length, 0);
      });
    });
  });
});
