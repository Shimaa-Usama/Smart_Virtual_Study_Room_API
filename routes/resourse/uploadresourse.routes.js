const app = require('express').Router();


//controller
const uploadresourseController = require('../../controller/resourse/uploadresourse.controller');

//auth
const authRegisteration = require('../../middleware/auth/auth.registeration');
const authRole = require('../../middleware/auth/auth.role');

//multer
var multer  = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/resourse/resourseImage')
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

var upload = multer({ dest: 'uploads/resourse/resourseImage', storage, fileFilter })

//uploadResourse end point ..
app.post('/uploadresourse', [authRegisteration, authRole('user'), upload.single('image')], uploadresourseController);


module.exports = app;