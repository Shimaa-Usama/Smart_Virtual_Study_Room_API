const mongoose = require('mongoose');

// to create connection 
const courseSchema = mongoose.Schema({
    title:{type:String},
    desc:{type:String},
    keywords:{type:String},
    image:{type:String},
    language:{type:String},
    userID: {type:mongoose.Schema.Types.ObjectId, ref:'user'},
    participants:{type:Number, default:0},  
    confirmed:{type:Boolean, default:false},  
    time:{type:String}
})



module.exports = mongoose.model('course', courseSchema)