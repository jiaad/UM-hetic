const mongoose = require('mongoose')
const companySchema = new mongoose.Schema({
    name:String,
    siret: String,
    date_of_creation: String,
    type: String,
    email: String,
    password: String
  });
  const Company = mongoose.model('Company', companySchema);

  module.exports = Company