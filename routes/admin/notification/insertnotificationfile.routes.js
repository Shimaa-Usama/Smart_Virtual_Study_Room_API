const app = require('express').Router();


//controller
const insertnotificationfileController = require('../../../controller/admin/notification/insertnotificationfile.controller');

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');



//insertNotificationCourse end point ..
app.post('/insertnotificationfile', [authRegisteration], insertnotificationfileController);


module.exports = app;