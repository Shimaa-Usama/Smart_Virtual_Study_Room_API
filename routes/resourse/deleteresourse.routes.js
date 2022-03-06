const app = require('express').Router();


//controller
const deleteresourseController = require('../../controller/resourse/deleteresourse.controller');

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');



//deleteResourse end point ..
app.delete('/deleteresourse', [authRegisteration, authRole('user')], deleteresourseController);


module.exports = app;