const app = require('express').Router();


//controller
const updatenotificationController = require('../../../controller/admin/notification/updatenotification.controller');

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');


//updateNotification end point ..
app.put('/updatenotification', [authRegisteration, authRole('admin')], updatenotificationController);


module.exports = app;