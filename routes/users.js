var express = require('express');
var router = express.Router();
const crypto = require("crypto");
const algorithm = "aes-256-cbc"; 
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
  const errors = validationResult(req);
  const { email } = req.body;

  User.findOne({ email }, (err, user) => {
    if (!errors.isEmpty()) {
      return res.status(422).json({
        error: errors.array()[0].msg,
      });
    }

    if (err || !user) {
      return res.status(400).json({
        error: "User with this email was not found in DB",
      });
    }

    const token = crypto.randomBytes(64).toString('hex'); 
    var currentDate = new Date();
    const url = `http://localhost:3000/resetpassword/${token}`;
    console.log({ url });
    const data = {
      from: "me@samples.mailgun.org",
      to: email,
      subject: "password reset",
      html: ` <p>Hey we have received request for reset your account password </p>
        <h3> <a href="http://localhost:3000/resetpassword/${token}">click here</a></h3>
        ${url}
        `,
    };

    return user.updateOne({ resetLink: token }, (err, success) => {
      if (err) {
        return res.status(400).json({
          error: "reset password link error",
        });
      } else {
        mg.messages().send(data, function (error, body) {
          console.log("mail send to user successfully");
          if (error) {
            res.json({
              error: error.message,
            });
          }
          return res.json({
            message:
              "Email has been send successfully kindly follow the instructions",
            url: { url },
          });
        });
      }
    });
  });
  // res.json({email: 'yasssine@mail.com' ,token: '15d4fsdf4ffsf'})
});

router.get('/reset_password', function(req, res, next) {
  res.json({email: 'yasssine@mail.com' ,token: '15d4fsdf4ffsf'})
});

router.get('/:id', function(req, res, next) {
  res.json({email: 'yasssine@mail.com' ,token: '15d4fsdf4ffsf'})
});
module.exports = router;
