const app = require('express').Router();


//controller
const addregistertionresourseController = require('../../../controller/user/registertionResourses/addregistertionresourse.controller');

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');



//addRegistertionRrsourse end point ..
app.post('/addregistertionresourse', [authRegisteration, authRole('user')], addregistertionresourseController);


module.exports = app;