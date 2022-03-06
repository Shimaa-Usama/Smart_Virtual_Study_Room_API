const app = require('express').Router();


//controller
const displayregistertioncourseController = require('../../../controller/user/registertionCourses/displayregistertioncourse.controller')

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');


//displayRegistertionCourse end point ..
app.get('/displayregistertioncourse', [authRegisteration, authRole('user')|| authRole('admin')], displayregistertioncourseController);


module.exports = app;