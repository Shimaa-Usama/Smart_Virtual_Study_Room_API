const app = require('express').Router();


//controller
const displaylessonController = require('../../controller/lesson/displaylesson.controller')

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');


//displayLesson end point ..
app.get('/displaylesson', [authRegisteration, authRole('user')|| authRole('admin')], displaylessonController);


module.exports = app;