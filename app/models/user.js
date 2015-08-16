var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: String,
  password: String,
  books: Array
});

UserSchema.virtual('date')
  .get(function() {
    return this._id.getTimestamp();
  });


// methods ======================
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);
