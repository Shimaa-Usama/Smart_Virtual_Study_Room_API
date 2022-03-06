const app = require('express').Router();

//controller
const homeController = require('../../controller/home/home.controller');

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');


//home end point ..
app.get('/home', [authRegisteration, authRole('user')|| authRole('admin')], homeController);



module.exports=app;