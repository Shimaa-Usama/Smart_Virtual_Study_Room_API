const mongoose = require('mongoose');

// to create connection 
const fileSchema = mongoose.Schema({
    title:{type:String},
    keywords:{type:String},
    language:{type:String},
    lessonID: {type:mongoose.Schema.Types.ObjectId, ref:'lesson'},
    confirmed:{type:Boolean, default:false},  
    //content
})



module.exports = mongoose.model('file', fileSchema)