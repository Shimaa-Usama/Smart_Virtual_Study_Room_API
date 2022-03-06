const mongoose = require('mongoose');

// to create connection 
const notificationResourseSchema = mongoose.Schema({
    resourseID:{type:mongoose.Schema.Types.ObjectId, ref:'resourse'},
    userID:{type:mongoose.Schema.Types.ObjectId, ref:'user'} 
})



module.exports = mongoose.model('notificationResourse', notificationResourseSchema)