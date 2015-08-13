var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function(app) {
  app.use('/', router);
  app.use('/api', router);
};

router.use(function(req, res, next) {
  console.log('Something is happening');
  next();
});

router.get('/', function(req, res) {
  res.json({
    message: 'asdf!'
  });
});

router.route('/api')
  .get(function(req, res) {
    res.json({
      message: 'api plz!'
    });
  });
