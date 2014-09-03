define(['modules/core/base-view'], function(BaseView) {
  'use strict';

  suite('BaseView', function() {

    setup(function() {
      this.view = new BaseView();
    });

    suite('#render', function() {
      test('invokes custom `afterRender` hook', function() {
        this.view.afterRender = sinon.spy();
        this.view.template = function() {};

        this.view.render();

        assert.equal(this.view.afterRender.callCount, 1);
      });

      test('correctly sets the markup according to the template', function() {
        this.view.template = sinon.stub().returns('<h1>test!</h1>');

        this.view.render();

        assert.equal(this.view.$el.html(), '<h1>test!</h1>');
      });

      test(
        'expands the template with the data returned by `serializeData`',
        function() {
          var expectedData = {};
          this.view.serializeData = sinon.stub().returns(expectedData);
          this.view.template = sinon.spy();

          this.view.render();

          assert.equal(this.view.template.args[0][0], expectedData);
        }
      );
    });

    suite('#destroy', function() {
      test('all event listeners are unbound', function() {
        var handler = sinon.spy();
        var view2 = new BaseView();
        this.view.listenTo(view2, 'sample-event', handler);

        this.view.destroy();
        view2.trigger('sample-event');

        assert.equal(handler.callCount, 0);
      });

      test('container element is emptied', function() {
        this.view.template = sinon.stub().returns('<span>');
        this.view.render();

        this.view.destroy();

        assert.equal(this.view.$el.contents().length, 0);
      });
    });
  });
});
