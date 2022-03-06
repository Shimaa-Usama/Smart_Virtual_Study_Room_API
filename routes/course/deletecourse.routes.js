const app = require('express').Router();


//controller
const deletecourseController = require('../../controller/course/deletecourse.controller');

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');



//deleteCourse end point ..
app.delete('/deletecourse', [authRegisteration, authRole('user')], deletecourseController);


module.exports = app;