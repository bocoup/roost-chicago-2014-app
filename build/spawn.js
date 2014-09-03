'use strict';
module.exports = function(grunt) {
  grunt.registerTask(
    'spawn',
    'Run a Grunt task in a child process',
    function() {
      var taskNameAndArgs = this.args.join(':');
      var done = this.async();
      grunt.log.writeln(
        'Running task ' + taskNameAndArgs + ' in child process...'
      );

      grunt.util.spawn({
        grunt: true,
        args: [taskNameAndArgs]
      }, function(error, result) {
        if (error) {
          grunt.log.error(result.stdout).writeln();
          done(error);
          return;
        }

        grunt.log.ok(result.stdout);
        done();
      });
    }
  );
};
