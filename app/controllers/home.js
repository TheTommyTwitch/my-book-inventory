var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function(app) {
  app.use('/', router);
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

router.route('/api/books')
  .post(function(req, res) {
    var book = new Book();
    book.title = req.body.title;
    book.isbn = req.body.isbn;
    book.author = req.body.author;

    book.save(function(err) {
      if (err)
        res.send(err);
      res.json({
        message: 'Book created!'
      });
    });
  });
