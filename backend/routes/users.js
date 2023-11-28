var express = require('express');
var bcrypt = require('bcryptjs');
var router = express.Router();
const crypto = require("crypto");
const algorithm = "aes-256-cbc"; 
const User = require('../models/user');
const Token = require('../models/token');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', async function(req, res, next) {
  const { email, password } = req.body

  if(email == undefined || password == undefined) {
    return res.json({ success:false, msg: `renseigner tout les champs`})
}

  const user = await User.findOne({email})
  if(user == undefined) {
    return res.json({success: false, msg: `${email} n'existe pas`}) 
  }
  
  const check_password = await compareAsync(password, user.password)
  if(check_password == true) {
    return res.json({success: true, data: user})
  } 

  return res.json({success: false, msg: `erreur indentfiant ou mot de passe invalide`})
});

router.post('/create_account', async function(req, res, next) {
  const {firstname, lastname , email, password, birth_date, gender, number, adresse } = req.body

  if (email == undefined || password == undefined || firstname == undefined || lastname == undefined)
  return res.json({ success:false , msg: `renseigner tout les champs`})
  const doesExist = await User.findOne({email})
  if(doesExist)
  return res.json({success: false, msg: `${email} existe déja`})

  const hash_password = await hashPassword(password, 10)

  const user = await User.create({...req.body, password: hash_password})
  return res.json({ success: true, data: user})
});

router.post('/forget_password', async function(req, res, next) {
  // const errors = validationResult(req);
  const { email } = req.body;

  const user = await User.findOne({ email }) 
    if (!user) {
      return res.status(400).json({
        success : false,
        msg: "Aucun utilisateur avec cet E-mail n'a été trouvé dans la BDD",
      });
    }

    const token = crypto.randomBytes(64).toString('hex'); 
    const original_token = await Token.create({token, user})
    var currentDate = new Date();
    const url = `http://fglindayi-um-hetic-code-redirect-3.apps.sandbox-m3.1530.p1.openshiftapps.com/users/resetpassword/${original_token._id}`;
    console.log({ url });
    const data = {
      from: "me@samples.mailgun.org",
      to: email,
      subject: "Réinitialisation de mot de passe",
      html: ` <p>Bonjour, nous avions reçu une demande de réinitialisation de mot de passe de votre part. </p>
        <h3> <a href="${url}">Cliquez ici</a></h3>
        `,
    };
    res.json({success:true,token, data})
});

router.post('/reset_password/:token',async function(req, res, next) {
  const { password } = req.body
  if(!password){
    return res.json({success: false, msg: `Remplir tout les champs`})
  }
  const hash_new_password = await hashPassword(password, 10)
  const token = await Token.findById (req.params.token)
  if (token == undefined) {
    return res.json({success: false, msg: `token invalide`})
  }

  const user = await User.findById (token.user)
  user.password = hash_new_password
  await user.save()
  
  res.json({success: true, data: token})
});

router.get('/:id', async function(req, res, next) {
  return res.json({success: true, msg: ` existe déja`, params: req.params})
});
module.exports = router;

const hashPassword = async (password, saltRounds) => {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(saltRounds)

    // Hash password
    return await bcrypt.hash(password, salt)
  } catch (error) {
    console.log(error)
  }

  return null
}

function compareAsync(password, hash_password) {
  return new Promise(function(resolve, reject) {
      bcrypt.compare(password, hash_password, function(err, res) {
          if (err) {
               reject(err);
          } else {
               resolve(res);
          }
      });
  });
}
