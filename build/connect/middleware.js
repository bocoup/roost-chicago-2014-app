// If the request URL matches any of the "rewriteFrom" routes, rewrite
// to the "rewriteTo" URL. This middleware should be called before any
// other middleware is called.

// On the final production server, rewriting will most likely be done
// with Nginx or Apache, but a production connect-based Node server
// could also use the exported "rewrite" middleware directly.

'use strict';

var rewriteFrom = [
  '/webcam',
  '/upload',
  '/photos/\\d+',
];

var rewriteTo = '/index.html';

var rewriteRegex = new RegExp('^(?:' + rewriteFrom.join('|') + ')$');

// The pushState-redirect middleware.
exports.rewrite = function(req, res, next) {
  if (rewriteRegex.test(req.url)) {
    console.log('PUSHSTATE %s -> %s ', req.url, rewriteTo);
    req.url = rewriteTo;
  }
  next();
};

// All middlewares for the dev connect server.
exports.dev = function(connect, options) {
  var middleware = [];
  // Rewrite routes as-necessary.
  middleware.push(exports.rewrite);
  // Serve static files.
  options.base.forEach(function(base) {
    middleware.push(connect.static(base));
  });
  return middleware;
};
