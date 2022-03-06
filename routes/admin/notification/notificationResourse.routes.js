const app = require('express').Router();


//controller
const notificationresourseController = require('../../../controller/admin/notification/notificationResourse.controller');

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');


//notificationResourse end point ..
app.get('/notificationresourse', [authRegisteration, authRole('admin')], notificationresourseController);


module.exports = app;