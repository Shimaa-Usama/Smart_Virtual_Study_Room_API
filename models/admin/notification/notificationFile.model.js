const mongoose = require('mongoose');

// to create connection 
const notificationFileSchema = mongoose.Schema({
    fileID:{type:mongoose.Schema.Types.ObjectId, ref:'file'},
    userID:{type:mongoose.Schema.Types.ObjectId, ref:'user'}, 
})



module.exports = mongoose.model('notificationFile', notificationFileSchema)