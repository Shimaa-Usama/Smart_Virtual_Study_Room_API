const app = require('express').Router();


//controller
const deletelessonController = require('../../controller/lesson/deletelesson.controller');

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');



//deleteLesson end point ..
app.delete('/deleteLesson', [authRegisteration, authRole('user')], deletelessonController);


module.exports = app;