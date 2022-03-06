const app = require('express').Router();


//controller
const updatelessonController = require('../../controller/lesson/updatelesson.controller');

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');



//updateLesson end point ..
app.put('/updatelesson', [authRegisteration, authRole('user')], updatelessonController);


module.exports = app;