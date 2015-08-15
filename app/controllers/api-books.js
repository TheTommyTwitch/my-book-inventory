var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Book = mongoose.model('Book');

module.exports = function(app) {
  app.use('/api', router);
};

router.use(function(req, res, next) {
  console.log('Something is happening');
  next();
});

router.get('/', function(req, res) {
  res.json({
    message: 'Api Page!'
  });
});

router.route('/books')
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
  })
  .get(function(req, res) {
    Book.find(function(err, books) {
      if (err)
        res.send(err);
      res.json(books);
    });
  });

router.route('/books/:book_id')
  .get(function(req, res) {
    Book.findById(req.params.book_id, function(err, book) {
      if (err)
        res.send(err);
      res.json(book);
    });
  });
