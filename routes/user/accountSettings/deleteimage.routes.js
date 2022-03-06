const app = require('express').Router();


//controller
const deleteimageaccountsettingsController = require('../../../controller/user/accountSettings/deleteimage.controller')

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');


//deleteimageAccountSettings end point ..
app.delete('/deleteimageaccountsettings', [authRegisteration, authRole('user')], deleteimageaccountsettingsController);


module.exports = app;