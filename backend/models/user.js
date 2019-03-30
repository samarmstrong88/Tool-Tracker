const mongoose = require('mongoose');
const uniqueValidator =  require('mongoose-unique-validator')

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {type: String, required: true, index: true, unique: true},
    username: {type: String, required: true, index: true, unique: true},
    hash: {type: String, required: true},
  }
)

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);