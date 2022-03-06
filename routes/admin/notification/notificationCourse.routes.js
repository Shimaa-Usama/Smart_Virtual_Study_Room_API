const app = require('express').Router();


//controller
const notificationcourseController = require('../../../controller/admin/notification/notificationCourse.controller');

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');


//notificationCourse end point ..
app.get('/notificationcourse', [authRegisteration, authRole('admin')], notificationcourseController);


module.exports = app;