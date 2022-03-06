const app = require('express').Router();


//controller
const deletefileController = require('../../controller/file/deletefile.controller');

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');



//deleteFile end point ..
app.delete('/deleteFile', [authRegisteration, authRole('user')], deletefileController);


module.exports = app;