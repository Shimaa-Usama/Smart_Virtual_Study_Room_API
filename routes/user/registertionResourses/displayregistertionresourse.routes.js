const app = require('express').Router();


//controller
const displayregistertionresourseController = require('../../../controller/user/registertionResourses/displayregistertionresourse.controller')

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');


//displayRegistertionResourse end point ..
app.get('/displayregistertionresourse', [authRegisteration, authRole('user')|| authRole('admin')], displayregistertionresourseController);


module.exports = app;