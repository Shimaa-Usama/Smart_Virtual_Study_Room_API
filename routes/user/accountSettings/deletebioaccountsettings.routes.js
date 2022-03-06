const app = require('express').Router();


//controller
const deletebioaccountsettingsController = require('../../../controller/user/accountSettings/deletebioaccountsettings.controller')

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');


//deletebioAccountSettings end point ..
app.delete('/deletebioaccountsettings', [authRegisteration, authRole('user')], deletebioaccountsettingsController);


module.exports = app;