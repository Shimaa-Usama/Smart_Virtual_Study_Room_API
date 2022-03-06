const app = require('express').Router();


//controller
const lessondetailsController = require('../../controller/lesson/lessondetails.controller');

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');


//lessonDetails end point ..
app.get('/lessondetails/:id', [authRegisteration, authRole('user')|| authRole('admin')], lessondetailsController);


module.exports = app;