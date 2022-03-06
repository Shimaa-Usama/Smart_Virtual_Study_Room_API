const app = require('express').Router();


//controller
const updateaccountsettingsController = require('../../../controller/user/accountSettings/updateaccountsettings.controller');

//validation
const validation = require('../../../middleware/validation/accountSettings/accountsettings.valid');

//auth
const authRegisteration = require('../../../middleware/auth/auth.registeration');
const authRole = require('../../../middleware/auth/auth.role');

//multer
var multer  = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/user/userImage')
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

var upload = multer({ dest: 'uploads/user/userImage', storage, fileFilter })


//updateAccountSettings end point ..
app.put('/updateaccountsettings', [authRegisteration, authRole('user'), upload.single('image'), validation], updateaccountsettingsController);


module.exports = app;