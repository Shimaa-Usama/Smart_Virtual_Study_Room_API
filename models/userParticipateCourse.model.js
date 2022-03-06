const mongoose = require('mongoose');

// to create connection 
const userParticipateCourseSchema = mongoose.Schema({
    courseID: {type:mongoose.Schema.Types.ObjectId, ref:'course'},
    userID: {type:mongoose.Schema.Types.ObjectId, ref:'user'},
})




module.exports = mongoose.model('userParticipateCourse', userParticipateCourseSchema)