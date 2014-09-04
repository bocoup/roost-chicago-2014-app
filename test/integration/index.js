'use strict';

var assert = require('assert');
var path = require('path');
var webdriver = require('webdriver-sync');

var expectedConditions = webdriver.ExpectedConditions;
var css = webdriver.By.cssSelector;

var driver, wait;

suite('Roostagram', function() {
  this.timeout(15000);

  setup(function() {
    driver = this.driver;
    wait = this.wait;

    wait.until(
      expectedConditions.elementToBeClickable(css('.thumbnail'))
    );

    this.initThumbCount = driver.findElements(css('.thumbnail')).length;
  });

  test('home page contains is initialized with thumbnails', function() {
    assert.ok(this.initThumbCount > 0);
  });

  test('upload file', function() {
    var thumbnails;

    driver.findElement(css('[href="#upload"]')).click();
    driver.findElement(css('input[type="file"]'))
      .sendKeys(path.join(__dirname, 'fixture', 'matilda.png'));

    wait.until(
      expectedConditions.elementToBeClickable(css('.thumbnail'))
    );

    thumbnails = driver.findElements(css('.thumbnail'));
    assert.equal(
      thumbnails.length,
      this.initThumbCount + 1,
      'A thumbnail for the new image is present'
    );
  });

  // TODO: Implement this test when Selenium implements an API for interacting
  // with the getUserMedia permissions dialog. Note that this will also require
  // a fair amount of infrastructure so the test environment has the proper
  // hardware.
  test('upload from webcam');

  suite('photo interation', function() {
    setup(function() {
      driver.findElement(css('[href="#upload"]')).click();
      driver.findElement(css('input[type="file"]'))
        .sendKeys(path.join(__dirname, 'fixture', 'matilda.png'));

      wait.until(
        expectedConditions.elementToBeClickable(css('.thumbnail'))
      );
    });

    test('view photo', function() {
      var photos, thumbnails;

      driver.findElement(css('.thumbnail')).click();
      wait.until(
        expectedConditions.elementToBeClickable(css('.photo'))
      );
      photos = driver.findElements(css('.photo img'));
      assert.equal(photos.length, 1);
      driver.findElement(css('.logo a')).click();
      wait.until(
        expectedConditions.elementToBeClickable(css('.thumbnail'))
      );

      thumbnails = driver.findElements(css('.thumbnail'));
      assert.equal(
        thumbnails.length,
        this.initThumbCount + 1,
        'Thumbnails for previously-created images persist.'
      );
    });

    test('delete photo', function() {
      var thumbnails;

      driver.findElement(css('.thumbnail')).click();
      wait.until(
        expectedConditions.elementToBeClickable(css('.photo'))
      );
      driver.findElement(css('.delete button')).click();
      wait.until(
        expectedConditions.elementToBeClickable(css('.thumbnail'))
      );
      thumbnails = driver.findElements(css('.thumbnail'));
      assert.equal(
        thumbnails.length,
        this.initThumbCount,
        'Thumnails for deleted images are removed.'
      );
    });
  });
});
