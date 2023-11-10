const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, 'klzczczcHHH&&ééz222221#');
       const companyId = decodedToken.companyId;
       req.auth = {
           companyId: companyId
       };
   } catch(error) {
       res.json({ error });
   }
};