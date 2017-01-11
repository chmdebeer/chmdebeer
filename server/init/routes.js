'use strict';

var base = require('../controllers/base');
var assets = require('../controllers/assets');
var chmdebeer = require('../controllers/chmdebeer');
var cdo1 = require('../controllers/cdo1');

var registerRoutes = function (server) {
  var routes = [
    { method: 'GET', path: '/', config: chmdebeer.index },
    { method: 'GET', path: '/career/', config: chmdebeer.career },
    { method: 'GET', path: '/cdo1', config: cdo1.index },
    { method: 'GET', path: '/welcome', config: chmdebeer.welcome },

    { method: 'GET', path: '/client/', config: chmdebeer.client },
    { method: 'GET', path: '/notes/{socketId}', config: chmdebeer.notes },

    { method: 'GET', path: '/img/{path*}', config: assets.img },
    { method: 'GET', path: '/css/{path*}', config: assets.css },
    { method: 'GET', path: '/fonts/{path*}', config: assets.fonts },
    { method: 'GET', path: '/js/{path*}', config: assets.js},
    { method: 'GET', path: '/lib/{path*}', config: assets.lib},
    { method: 'GET', path: '/plugin/{path*}', config: assets.plugin},
    { method: 'GET', path: '/resources/{path*}', config: assets.resources}
  ];

  server.route(routes);
};

module.exports = registerRoutes;
