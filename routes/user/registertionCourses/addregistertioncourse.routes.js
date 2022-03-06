const app = require('express').Router();


//controller
const addregistertioncourseController = require('../../../controller/user/registertionCourses/addregistertioncourse.controller');

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');



//addRegistertionCourse end point ..
app.post('/addregistertioncourse', [authRegisteration, authRole('user')], addregistertioncourseController);


module.exports = app;