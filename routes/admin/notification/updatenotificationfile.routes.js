const app = require('express').Router();


//controller
const updatenotificationfileController = require('../../../controller/admin/notification/updatenotificationfile.controller');

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');


//updateNotificationFile end point ..
app.put('/updatenotificationfile', [authRegisteration, authRole('admin')], updatenotificationfileController);


module.exports = app;