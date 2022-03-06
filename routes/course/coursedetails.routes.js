const app = require('express').Router();


//controller
const coursedetailsController = require('../../controller/course/coursedetails.controller');

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');


//courseDetails end point ..
app.get('/coursedetails/:id', [authRegisteration, authRole('user')|| authRole('admin')], coursedetailsController);


module.exports = app;