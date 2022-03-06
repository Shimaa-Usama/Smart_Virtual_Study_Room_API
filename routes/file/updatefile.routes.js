const app = require('express').Router();


//controller
const updatefileController = require('../../controller/file/updatefile.controller');

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');



//updateFile end point ..
app.put('/updatefile', [authRegisteration, authRole('user')], updatefileController);


module.exports = app;