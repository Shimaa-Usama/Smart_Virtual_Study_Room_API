const app = require('express').Router();


//controller
const notificationfileController = require('../../../controller/admin/notification/notificationfile.controller');

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');


//notificationFile end point ..
app.get('/notificationfile', [authRegisteration, authRole('admin')], notificationfileController);


module.exports = app;