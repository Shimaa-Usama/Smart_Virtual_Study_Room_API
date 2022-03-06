const app = require('express').Router();


//controller
const notificationlessonController = require('../../../controller/admin/notification/notificationlesson.controller');

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');


//notificationLesson end point ..
app.get('/notificationlesson', [authRegisteration, authRole('admin')], notificationlessonController);


module.exports = app;