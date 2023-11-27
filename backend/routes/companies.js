var express = require('express');
const asyncHandler = require('express-async-handler');
var router = express.Router();
const companyCntrl = require('../controllers/company')
const company_auth = require('../middleware/company.auth')
/* GET Companies listing. */
router.post('/', asyncHandler(companyCntrl.create));
router.post('/login', asyncHandler(companyCntrl.login));
router.get('/logout/:id', asyncHandler(companyCntrl.logout));
router.put('/:id', asyncHandler(companyCntrl.update));
router.delete('/:id', asyncHandler(companyCntrl.delete));
router.post('/forget_password', asyncHandler(companyCntrl.forget_password));
router.post('/reset_password/:token', asyncHandler(companyCntrl.reset_password));

module.exports = router;