const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    birth_date: String, 
    gender: String,
    number: String,
    adresse: String
  });
  const User = mongoose.model('User', userSchema);

  module.exports = User