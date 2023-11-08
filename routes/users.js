var express = require('express');
var router = express.Router();
const User = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.json({email: 'yasssine@mail.com' ,token: '15d4fsdf4ffsf'})
});

router.post('/create_account', async function(req, res, next) {
  const {firstname, lastname , email, password, birth_date, gender, number, adresse } = req.body

  if (email == undefined || password == undefined || firstname == undefined || lastname == undefined)
  return res.json({ err:true , msg: `renseigner tout les champs`})
  const doesExist = await User.findOne({email})
  if(doesExist)
  return res.json({success: true, msg: `${email} éxiste déja`})
  const user = await User.create(req.body)
});

router.get('/forget_password', function(req, res, next) {
  res.json({email: 'yasssine@mail.com' ,token: '15d4fsdf4ffsf'})
});

router.get('/reset_password', function(req, res, next) {
  res.json({email: 'yasssine@mail.com' ,token: '15d4fsdf4ffsf'})
});

router.get('/:id', function(req, res, next) {
  res.json({email: 'yasssine@mail.com' ,token: '15d4fsdf4ffsf'})
});
module.exports = router;
