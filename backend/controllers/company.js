var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Company = require('../models/company');
const crypto = require('crypto');
const Token = require('../models/token');
const { error } = require('console');

const validateEmail = function(email) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

exports.create = (req, res, next) => {
    if (validateEmail(req.body.email) & !(req.body.password=='') & !(req.body.siret=='') & !(req.body.name=='') & !(req.body.type=='') & !(req.body.date_of_creation=='')) {
        bcrypt.hash(req.body.password, 10).then(hash => {
      const company = new Company({
        siret:req.body.siret,
        date_of_creation: req.body.date_of_creation,
        type: req.body.type,
        name: req.body.name,
        email: req.body.email,
        password: hash
      });
      company.save().then(
        () => res.json({ success:true,
            message: 'Companie créé !'})
        ).catch(error => res.json({ success:false,error ,status:400}));
    }).catch(error => res.json({ success:false,error ,status:500}));
    } else {
        res.json({
            success:false,message:"Champs mal remplis ou Un ou plusieurs champs manquants"
        })
    }

}
exports.login = (req, res, next) => {
    if (validateEmail(req.body.email) & !(req.body.password=='')) {
    Company.findOne({ email: req.body.email }).then(company => {
        if (!company) {
            return res.json({ success:false,message: 'Paire login/mot de passe incorrecte'});
        }
        bcrypt.compare(req.body.password, company.password)
            .then(valid => {
                if (!valid) {
                    return res.json({success:false, message: 'Paire login/mot de passe incorrecte' });
                }
                res.json({
                    success:true,
                    company:{
                        id : company._id ,
                        siret:company.siret,
                        date_of_creation: company.date_of_creation,
                        type: company.type,
                        name: company.name,
                        email: company.email
                    },
                    token: jwt.sign(
                        { companyId: company._id },
                        'klzczczcHHH&&ééz222221#',
                        { expiresIn: '24h' }
                    )
                });
            }).catch(error=>res.json({
                error, success:false
            }))}).catch(error => res.json({ error }));

    } else {
        res.json({
            success:false,message:"Champs mal remplis ou Un ou plusieurs champs manquants"
        })
}
}


exports.logout = (req, res, next) => {
    if (!(req.params.id=='')) {
        Company.findOne({_id:req.params.id}).then(company => {
            if (!company) {
                return res.json({ success:false,message: 'Compagnie inexistante'});
            }
            // Si le token était stocké dans la BD, on pourait le supprimer mais là; apparemment aucune action puisque tout sera géré sur le front.


            // A revoir.........

        })
    } else {
        res.json({
            success:false,message:"Champs mal remplis ou Un ou plusieurs champs manquants"
        })
    }
}

exports.update = (req, res, next) => {
    if (!(req.body.siret=='') & !(req.body.name=='') & !(req.body.type=='') & !(req.body.date_of_creation=='')) {
        Company.findOne({_id:req.params.id}).then(company => {
            if (!company) {
                return res.json({ success:false,message: 'Compagnie inexistante'});
            }
            company.updateOne({
                name : req.body.name,
                siret:req.body.siret,
                date_of_creation: req.body.date_of_creation,
                type: req.body.type
            }).then(
                ()=>res.json({
                    success:true,
                    company:{
                        id : company._id ,
                        siret:company.siret,
                        date_of_creation: company.date_of_creation,
                        type: company.type,
                        name: company.name,
                        email: company.email
                    },
                    message:"Compagnie modifiée"})
            ).catch(error => res.json({ success:false,error ,status:500, message:'Modification échouée'}));
        })
    } else {
        res.json({
            success:false,message:"Champs mal remplis ou Un ou plusieurs champs manquants"
        })
    }
}

exports.delete = (req, res, next) => {
    if (!(req.params.id=='')) {
        Company.findOne({_id:req.params.id}).then(company => {
            if (!company) {
                return res.json({ success:false,message: 'Compagnie inexistante'});
            }
            
            company.deleteOne().then(()=>res.json({success:true, message:'Compagnie supprimée'})).catch(error=>res.json({success:false,error}))
        })
    } else {
        res.json({
            success:false,message:"Identifiant invalide"
        })
    }
}

exports.forget_password = async function(req, res, next) {
    // const errors = validationResult(req);
    const { email } = req.body;
  
    const company = await Company.findOne({ email }) 
      if (!company) {
        return res.status(400).json({
          success : false,
          msg: "Aucune compagnie avec cet E-mail n'a été trouvé dans la BDD",
        });
      }
  
      const token = crypto.randomBytes(64).toString('hex'); 
      const original_token = await Token.create({token, company})
      const url = `http://fglindayi-um-hetic-code-redirect-3.apps.sandbox-m3.1530.p1.openshiftapps.com/company/reset_password/${original_token.token}`;
      const data = {
        from: "me@samples.mailgun.org",
        to: email,
        subject: "Réinitialisation de mot de passe",
        html: ` <p>Bonjour, nous avions reçu une demande de réinitialisation de mot de passe de votre part. </p>
          <h3> <a href="${url}">Cliquez ici</a></h3>
          `,
      };
      res.json({success:true,token, data})
  };
  

exports.reset_password = (req, res, next) => {
    const { password } = req.body
    if(!password){
      return res.json({success: false, msg: `Remplir tout les champs`})
    }
    bcrypt.hash(password,10).then(hash => {
    Token.findOne ({token : req.params.token}).then(token=>{
        Company.findById (token.company._id).then(company=>{
            company.password = hash
        company.save().then(
            () => {
                token.deleteOne().then(()=>res.json({ success:true,
                    message: 'Mot de passe changé!'})).catch(error => res.json({success:false,error, message:'Suppression token échoué'}));
                
            }).catch(error => res.json({success:false,error, message:'Enregistrement échoué'}))
        }).catch(error=>res.json({ success:false,error ,message:'Compagnie innexistante'}))
    }).catch(error=>res.json({ success:false,error ,message:'Token invalid'}))
      }).catch(error => res.json({ success:false,error ,message:"bcrypt en panne, Error:500"}));
  };