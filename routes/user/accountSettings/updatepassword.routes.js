const app = require('express').Router();


//controller
const updatepasswordController = require('../../../controller/user/accountSettings/updatepassword.controller');

//validation
const validation = require('../../../middleware/validation/accountSettings/password.valid');

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');



//updatePassword end point ..
app.put('/updatepassword', [authRegisteration, authRole('user'), validation], updatepasswordController);


module.exports = app;