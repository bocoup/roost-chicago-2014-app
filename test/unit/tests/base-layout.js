define(function(require) {
  'use strict';
  var BaseLayout = require('modules/core/base-layout');

  var TestLayout = BaseLayout.extend({ template: function() {} });

  suite('BaseLayout', function() {
    setup(function() {
      this.layout = new BaseLayout();
      this.layout.template = sinon.stub()
        .returns('<div class="a"></div><div class="b"></div>');
    });

    suite('#addSubView', function() {
      setup(function() {
        this.layout.render();
      });

      test('returns the created view', function() {
        var subView = this.layout.addSubView({
          viewType: TestLayout
        });

        assert.instanceOf(subView, TestLayout);
      });

      test(
        'inserts subview into element specified by `container` selector',
        function() {
          var subView = this.layout.addSubView({
            viewType: TestLayout,
            container: '.b'
          });

          assert.equal(this.layout.$('.b')[0], subView.el);
        }
      );

      test('passes `options` along to subview constructor', function() {
        var options = { sample: 'value' };
        var initSpy = sinon.spy(TestLayout.prototype, 'initialize');
        this.layout.addSubView({
          viewType: TestLayout,
          options: options
        });

        initSpy.restore();

        sinon.assert.callCount(initSpy, 1);
        sinon.assert.calledWith(initSpy, options);
      });

      test('destroys existing subview on replacement', function() {
        var oldSubView = this.layout.addSubView({
          name: 'any name',
          viewType: TestLayout
        });
        oldSubView.destroy = sinon.spy();

        this.layout.addSubView({
          name: 'any name',
          viewType: TestLayout
        });

        sinon.assert.callCount(oldSubView.destroy, 1);
      });
    });

    suite('#destroy', function() {
      setup(function() {
        this.subView = this.layout.addSubView({
          name: 'test',
          container: '.a',
          viewType: TestLayout
        });
      });

      test('Invokes `destroy` method of subviews', function() {
        this.subView.destroy = sinon.spy();

        this.layout.destroy();

        sinon.assert.callCount(this.subView.destroy, 1);
      });

      test('Does not maintain a reference to destroyed subviews', function() {
        this.subView.destroy = sinon.spy();

        this.layout.destroy();
        this.layout.destroy();

        sinon.assert.callCount(this.subView.destroy, 1);
      });
    });
  });
});
