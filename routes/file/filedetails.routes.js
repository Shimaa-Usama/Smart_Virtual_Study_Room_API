const app = require('express').Router();


//controller
const filedetailsController = require('../../controller/file/filedetails.controller');

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');


//fileDetails end point ..
app.get('/filedetails/:id', [authRegisteration, authRole('user')|| authRole('admin')], filedetailsController);


module.exports = app;