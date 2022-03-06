const app = require('express').Router();


//controller
const displayuploadcourseController = require('../../../controller/user/displayUploadCoursesUserID/displayuploadcourse.controller')

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');


//displayUploadCourse end point ..
app.get('/displayuploadcourse', [authRegisteration, authRole('user')], displayuploadcourseController);


module.exports = app;