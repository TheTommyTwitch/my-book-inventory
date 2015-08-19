var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  passport = require('passport');

module.exports = function(app) {
  app.use('/', router);

  router.use(function(req, res, next) {
    console.log('Something is happening');
    next();
  });

  //===========================================
  //route for index page=======================
  router.get('/', function(req, res) {
    res.sendFile('../public/index.html');
  });

  //===========================================
  //route for login page=======================
  router.route('/login')
    .post(passport.authenticate('local-login', {
      successRedirect: '/home',
      failureRedirect: '/login',
      failureFlash: true
    }));

  //===========================================
  //route for logout page======================
  router.route('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  //===========================================
  //route for signup page======================
  router.route('/signup')
    .post(passport.authenticate('local-signup', {
      successRedirect: '/profile',
      failureRedirect: '/signup',
      failureFlash: true
    }));

  //===========================================
  //route for profiles=========================
  router.route('/profile', function(req, res) {
    res.json({
      user: test //req.user
    });
  });
};

//===========================================
//check if user is logged in=================
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}
