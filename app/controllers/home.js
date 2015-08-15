var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Book = mongoose.model('Book');

module.exports = function(app) {
  app.use('/', router);
};

router.use(function(req, res, next) {
  console.log('Something is happening');
  next();
});

router.get('/', function(req, res) {
  res.json({
    message: 'Home Page!'
  });
});
