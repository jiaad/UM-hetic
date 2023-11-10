const mongoose = require('mongoose');
const tokenSchema = new mongoose.Schema({
  token: String,
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  },
  company: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Company'
  }

});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;