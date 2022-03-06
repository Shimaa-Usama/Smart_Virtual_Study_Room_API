const app = require('express').Router();


//controller
const insertnotificationlessonController = require('../../../controller/admin/notification/inertnotificationlesson.controller');

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');



//insertNotificationCourse end point ..
app.post('/insertnotificationlesson', [authRegisteration], insertnotificationlessonController);


module.exports = app;