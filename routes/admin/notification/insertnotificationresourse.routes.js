const app = require('express').Router();


//controller
const insertnotificationresourseController = require('../../../controller/admin/notification/insertnotificationresourse.controller');

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');



//insertNotificationResourse end point ..
app.post('/insertnotificationresourse', [authRegisteration], insertnotificationresourseController);


module.exports = app;