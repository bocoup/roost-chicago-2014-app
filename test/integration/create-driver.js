'use strict';
/**
 * Because this application is meant as a demonstration to support a live
 * training, we take certain steps to lower barriers to development that we
 * might not take in a production application.
 *
 * In this case, we allow the integration tests to run with either Mozilla
 * Firefox *or* Google Chrome, depending on the capabilities of the local
 * environment.
 *
 * In a production application, we would prefer consistency over ease-of-setup:
 * we would choose a single web browser and specify that as a hard requirement.
 */

var webdriver = require('webdriver-sync');
var ChromeDriver = webdriver.ChromeDriver;
var FirefoxDriver = webdriver.FirefoxDriver;

module.exports = function() {
  try {
    return new FirefoxDriver();
  } catch (err) {}

  try {
    return new ChromeDriver();
  } catch (err) {}

  throw new Error(
    'This project\'s integration tests require either Mozilla Firefox ' +
    'or Google Chrome. Please install either of those web browsers.'
  );
};
