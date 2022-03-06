const app = require('express').Router();


//controller
const displayaccountsettingsController = require('../../../controller/user/accountSettings/displayaccountsettings.controller')

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');


//displayAccountSettings end point ..
app.get('/displayaccountsettings', [authRegisteration, authRole('user')], displayaccountsettingsController);


module.exports = app;