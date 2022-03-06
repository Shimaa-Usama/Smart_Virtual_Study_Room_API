const app = require('express').Router();


//controller
const addcourseController = require('../../controller/course/addcourse.controller');

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');

//multer
var multer  = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/course/courseImage')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now())
    }
    })
//fileFilter
function fileFilter (req, file, cb) {
    
        if( file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg'){
            cb(null, true)
        }else{
            cb(null, false)
        }
}

var upload = multer({ dest: 'uploads/course/courseImage', storage, fileFilter })

//addCourse end point ..
app.post('/addcourse', [authRegisteration, authRole('user'), upload.single('image')], addcourseController);


module.exports = app;