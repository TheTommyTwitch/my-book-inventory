// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  isbn: String,
  author: String
});

BookSchema.virtual('date')
  .get(function() {
    return this._id.getTimestamp();
  });

mongoose.model('Book', BookSchema);
