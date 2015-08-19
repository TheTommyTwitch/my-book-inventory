var LocalStrategy = require('passport-local').Strategy;
var User = require('../app/models/user');

module.exports = function(passport) {

  //===========================================
  //serialize user=============================
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  //===========================================
  //serialize user=============================
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  //===========================================
  //signup the new user========================
  passport.use('local-signup', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    function(req, email, password, done) {
      process.nextTick(function() {
        User.findOne({
          'email': email
        }, function(err, user) {
          if (err)
            return done(err);
          if (user) {
            return done(null, false, req.flash('signupMessage',
              'That email is taken'));
          } else {
            var newUser = new User();

            newUser.email = email;
            newUser.password = newUser.generateHash(
              password);

            newUser.save(function(err) {
              if (err)
                throw err;
              return done(null, newUser);
            });
          }
        });
      });
    }));

  //===========================================
  //login returning user=======================
  passport.use('local-login', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    function(req, email, password, done) {
      User.fineOne({
        'email': email
      }, function(err, user) {
        if (err)
          return done(err);
        if (!user)
          return done(null, false, req.flash('loginMessage',
            'No user found.'));
        if (!user.validPassword(password))
          return done(null, false, req.flash('loginMessage',
            'Oops! Wrong password.'));
        return done(null, user);
      });
    }
  ));
};
