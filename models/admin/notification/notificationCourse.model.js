const mongoose = require('mongoose');

// to create connection 
const notificationCourseSchema = mongoose.Schema({
    courseID:{type:mongoose.Schema.Types.ObjectId, ref:'course'},
    userID:{type:mongoose.Schema.Types.ObjectId, ref:'user'}, 
})



module.exports = mongoose.model('notificationCourse', notificationCourseSchema)