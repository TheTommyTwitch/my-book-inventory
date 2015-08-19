var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function(app) {
  app.use('/api', router);
};

router.use(function(req, res, next) {
  console.log('Something is happening');
  next();
});

//===========================================
//routes for users api=======================
router.route('/users')
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err)
        res.send(err);
      res.json(users);
    });
  });

//===========================================
//routes for individual users api============
router.route('/users/:user_id')
  .get(function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  });
