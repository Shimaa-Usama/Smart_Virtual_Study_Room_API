const mongoose = require('mongoose');

// to create connection 
const resourseSchema = mongoose.Schema({
    title:{type:String},
    desc:{type:String},
    keywords:{type:Array},
    image:{type:String},
    language:{type:String},
    userID: {type:mongoose.Schema.Types.ObjectId, ref:'user'},
    participants:{type:Number, default:0},  
    confirmed:{type:Boolean, default:false}, 
    time:{type:String}
    //content
})



module.exports = mongoose.model('resourse', resourseSchema)