const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // Store the hashed password
});

module.exports = mongoose.model('User', userSchema);