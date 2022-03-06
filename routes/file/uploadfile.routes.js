const app = require('express').Router();


//controller
const uploadfileController = require('../../controller/file/uploadfile.controller');

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');



//uploadFile end point ..
app.post('/uploadfile', [authRegisteration, authRole('user')], uploadfileController);


module.exports = app;