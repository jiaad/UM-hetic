var express = require('express');
var router = express.Router();
const companyCntrl = require('../controllers/company')
const company_auth = require('../middleware/company.auth')
/* GET Companies listing. */
router.post('/', companyCntrl.create);
router.post('/login', companyCntrl.login);
router.get('/logout/:id', companyCntrl.logout);
router.put('/:id', companyCntrl.update);
router.delete('/:id', companyCntrl.delete);
router.get('/token',(req,res,next)=>{
    res.json(
        {token:req.headers.authorization}
    )
})


module.exports = router;