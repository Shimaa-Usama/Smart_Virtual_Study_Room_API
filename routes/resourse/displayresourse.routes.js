const app = require('express').Router();


//controller
const displayresourseController = require('../../controller/resourse/displayresourse.controller')

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');


//displayResourse end point ..
app.get('/displayresourse', [authRegisteration, authRole('user')|| authRole('admin')], displayresourseController);


module.exports = app;