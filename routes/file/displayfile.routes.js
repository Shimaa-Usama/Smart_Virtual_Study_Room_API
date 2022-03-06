const app = require('express').Router();


//controller
const displayfileController = require('../../controller/file/displayfile.controller')

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');


//displayFile end point ..
app.get('/displayfile', [authRegisteration, authRole('user')|| authRole('admin')], displayfileController);


module.exports = app;