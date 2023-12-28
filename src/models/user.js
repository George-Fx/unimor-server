const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  phoneVerified: {
    type: Boolean,
    default: false,
  },
  location: {
    type: String,
    default: null,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
