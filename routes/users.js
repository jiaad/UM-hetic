var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.json({email: 'yasssine@mail.com' ,token: '15d4fsdf4ffsf'})
});

router.get('/create_account', function(req, res, next) {
  res.json({email: 'yasssine@mail.com' ,token: '15d4fsdf4ffsf'})
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
