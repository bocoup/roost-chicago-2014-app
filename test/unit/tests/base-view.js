define(['modules/core/base-view'], function(BaseView) {
  'use strict';

  suite('BaseView', function() {

    setup(function() {
      this.view = new BaseView();
    });

    suite('#render', function() {
      test('invokes custom `afterRender` hook', function() {
        var callCount = 0;
        this.view.afterRender = function() {
          callCount++;
        };
        this.view.template = function() {};

        this.view.render();

        assert.equal(callCount, 1);
      });

      test('correctly sets the markup according to the template', function() {
        this.view.template = function() {
          return '<h1>test!</h1>';
        };

        this.view.render();

        assert.equal(this.view.$el.html(), '<h1>test!</h1>');
      });

      test(
        'expands the template with the data returned by `serializeData`',
        function() {
          var expectedData = {};
          var actualData;
          this.view.serializeData = function() {
            return expectedData;
          };
          this.view.template = function(data) {
            actualData = data;
          };
          this.view.render();

          assert.equal(actualData, expectedData);
        }
      );
    });

    suite('#destroy', function() {
      test('all event listeners are unbound', function() {
        var callCount = 0;
        var handler = function() {
          callCount++;
        };
        var view2 = new BaseView();
        this.view.listenTo(view2, 'sample-event', handler);

        this.view.destroy();
        view2.trigger('sample-event');

        assert.equal(callCount, 0);
      });

      test('container element is emptied', function() {
        this.view.template = function() {
          return '<span>';
        };
        this.view.render();

        this.view.destroy();

        assert.equal(this.view.$el.contents().length, 0);
      });
    });
  });
});
