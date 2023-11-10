var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Company = require('../models/company');

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
