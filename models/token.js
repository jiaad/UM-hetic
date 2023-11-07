const mongoose = require('mongoose');
const tokenSchema = new mongoose.Schema({
    token: String,
    // user : //;

  });

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;