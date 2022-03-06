const app = require('express').Router();


//controller
const resoorsedetailsController = require('../../controller/resourse/resoursedetails.controller');

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');


//resourseDetails end point ..
app.get('/resoursedetails/:id', [authRegisteration, authRole('user')|| authRole('admin')], resoorsedetailsController);


module.exports = app;