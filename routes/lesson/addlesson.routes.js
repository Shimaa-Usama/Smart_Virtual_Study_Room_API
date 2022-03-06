const app = require('express').Router();


//controller
const addlessonController = require('../../controller/lesson/addlesson.controller');

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');



//addlesson end point ..
app.post('/addlesson', [authRegisteration, authRole('user')], addlessonController);


module.exports = app;