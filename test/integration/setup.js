'use strict';
var fs = require('fs');

var path = require('path');
var webdriver = require('webdriver-sync');

var createDriver = require('./create-driver');
var db = {
  dir: path.join(__dirname, '..', '..', 'server')
};
db.file = path.join(db.dir, 'images.db');
db.backup = path.join(db.dir, 'images-backup.db');

// Save the current state of the photos database to a temporary file
suiteSetup(function() {
  fs.renameSync(db.file, db.backup);
});

// Restore the original photos database when the tests are complete.
// Windows sometimes maintains a lingering reference to the database file
// after the tests complete, preventing backup restoration. Retry for a
// limited amount of time.
suiteTeardown(function(done) {
  var start = Date.now();
  function tryCleanup() {
    if (Date.now() - start > 5000) {
      done(new Error('Unable to restore backup database file.'));
      return;
    }
    try {
      fs.renameSync(db.backup, db.file);
      done();
    } catch (err) {
      setTimeout(tryCleanup, 200);
    }
  }

  tryCleanup();
});

setup(function(done) {
  // Initialize the state of the photos database before every test.
  var origDb = fs.createReadStream(db.backup);
  var tempDb = fs.createWriteStream(db.file);
  var testContext = this;

  origDb.pipe(tempDb);

  origDb.on('end', function() {
    var driver = testContext.driver = createDriver();
    testContext.wait = new webdriver.WebDriverWait(driver, 2000, 100);
    driver.get('http://localhost:8000');

    done();
  }.bind(this));
});

teardown(function() {
  this.driver.quit();
});
