const app = require('express').Router();


//controller
const insertnotificationcourseController = require('../../../controller/admin/notification/inertnotificationcourse.controller');

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');



//insertNotificationCourse end point ..
app.post('/insertnotificationcourse', [authRegisteration], insertnotificationcourseController);


module.exports = app;