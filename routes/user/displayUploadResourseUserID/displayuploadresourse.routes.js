const app = require('express').Router();


//controller
const displayuploadresourseController = require('../../../controller/user/displayUploadResourseUserID/displayuploadresourse.controller')

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');


//displayUploadResourse end point ..
app.get('/displayuploadresourse', [authRegisteration, authRole('user')], displayuploadresourseController);


module.exports = app;