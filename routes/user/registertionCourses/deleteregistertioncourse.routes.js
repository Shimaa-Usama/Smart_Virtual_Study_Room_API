const app = require('express').Router();


//controller
const deleteregistertioncourseController = require('../../../controller/user/registertionCourses/deleteregistertioncourse.controller');

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');



//deleteRegistertionCourse end point ..
app.delete('/deleteregistertioncourse', [authRegisteration, authRole('user')], deleteregistertioncourseController);


module.exports = app;