const mongoose = require('mongoose');

// to create connection 
const lessonSchema = mongoose.Schema({
    title:{type:String},
    desc:{type:String},
    keywords:{type:String},
    language:{type:String},
    courseID: {type:mongoose.Schema.Types.ObjectId, ref:'course'},
    confirmed:{type:Boolean, default:false},  
})



module.exports = mongoose.model('lesson', lessonSchema)