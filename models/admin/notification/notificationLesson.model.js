const mongoose = require('mongoose');

// to create connection 
const notificationLessonSchema = mongoose.Schema({
    lessonID:{type:mongoose.Schema.Types.ObjectId, ref:'lesson'},
    userID:{type:mongoose.Schema.Types.ObjectId, ref:'user'}, 
})



module.exports = mongoose.model('notificationLesson', notificationLessonSchema)