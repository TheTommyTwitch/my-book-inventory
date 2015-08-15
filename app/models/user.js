// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: String,
  books: Array
});

UserSchema.virtual('date')
  .get(function() {
    return this._id.getTimestamp();
  });

mongoose.model('User', UserSchema);
