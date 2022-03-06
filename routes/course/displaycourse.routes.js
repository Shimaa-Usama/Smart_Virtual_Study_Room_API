const app = require('express').Router();


//controller
const displaycourseController = require('../../controller/course/displaycourse.controller')

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');


//displayCourse end point ..
app.get('/displaycourse', [authRegisteration, authRole('user')|| authRole('admin')], displaycourseController);


module.exports = app;