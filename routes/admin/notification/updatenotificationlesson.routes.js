const app = require('express').Router();


//controller
const updatenotificationlessonController = require('../../../controller/admin/notification/updatenotificationlesson.controller');

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');


//updateNotificationLesson end point ..
app.put('/updatenotificationlesson', [authRegisteration, authRole('admin')], updatenotificationlessonController);


module.exports = app;