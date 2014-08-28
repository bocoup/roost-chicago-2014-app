# Roostagram!

Roostagram was created by engineers at Bocoup to demonstrate and teach the
software development process using modern tools and workflows. This application
is collaboratively built during [Roost](http://roost.bocoup.com) and [Bocoup's
training classes](http://training.bocoup.com/classes).

We want **everyone** to learn from this repository, though!

- **Code comments** document *how* the application works. These comments are
  distributed throughout the source code.
- The project's **git history** describes *why* the code is written the way it
  is. We've meticulously crafted the history to demonstrate an ideal
  application development process. If you need help reading the git history,
  check out these screencasts on [bocoup.com](http://bocoup.com):
  - [Navigating git using the
    CLI](http://bocoup.com/education/online/screencasts/navigating-git-via-cli/)
  - [Navigating git using
    GitHub.com](http://bocoup.com/education/online/screencasts/navigating-git-via-github/)

## Installation

Make sure you have all this stuff:

1. Install [nodejs](http://nodejs.org/). Make sure you install something on the
   v.0.10 release branch. Version 0.11 is a development branch and breaks some
   of the libraries in our application.
2. Install [Grunt](http://gruntjs.com/) globally by typing `npm install -g
   grunt-cli` into your terminal/command line.
3. Install [Bower](http://bower.io/) globally by typing `npm install -g bower`.
4. Install [git](http://git-scm.com/downloads).
5. Install [the Java Development
   Kit](http://www.oracle.com/technetwork/java/index.html)

Once you have all of these, you can download this repo, `cd` into this
directory, run `npm install` to install all of the dependencies, and `grunt` to
start the tasks to run the server and see the site.

## Troubleshooting

If npm shows errors (which can happen from time to time due to network issues)
re-try the command. If npm needs administrator access, Mac and Linux users
should run with the `sudo` command; Windows users should run their command
shell as the Administrator.

## Further Reading

The `docs/` directory contains additional documentation related to the project.

- `tools.md`: a partial listing of the tools used to make Roostagram
- `resources.md`: educational materials covering some of the core concepts for
  Roostagram

## License

Copyright (c) 2014 Bocoup  
Licensed under the MIT Expat license.
