var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');
var passport = require('passport');

module.exports = function(app) {
  app.use('/', router);


  router.use(function(req, res, next) {
    console.log('Something is happening');
    next();
  });

  router.get('/', function(req, res) {
    res.json({
      message: 'Home Page!'
    });
  });

  router.route('/login')
    .post(passport.authenticate('local-login', {
      successRedirect: '/profile',
      failureRedirect: '/login',
      failureFlash: true
    }));

  router.route('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  router.route('/signup')
    .post(passport.authenticate('local-signup', {
      successRedirect: '/profile',
      failureRedirect: '/signup',
      failureFlash: true
    }));

  router.route('/profile', function(req, res) {
    res.json({
      user: req.user
    });
  });
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}
