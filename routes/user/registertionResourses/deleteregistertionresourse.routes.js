const app = require('express').Router();


//controller
const deleteregistertionresourseController = require('../../../controller/user/registertionResourses/deleteregistertionresourse.controller');

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');



//deleteRegistertionResourse end point ..
app.delete('/deleteregistertionresourse', [authRegisteration, authRole('user')], deleteregistertionresourseController);


module.exports = app;