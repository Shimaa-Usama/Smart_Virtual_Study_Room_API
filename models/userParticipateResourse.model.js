const mongoose = require('mongoose');

// to create connection 
const userParticipateResourseSchema = mongoose.Schema({
    resourseID: {type:mongoose.Schema.Types.ObjectId, ref:'resourse'},
    userID: {type:mongoose.Schema.Types.ObjectId, ref:'user'},
})




module.exports = mongoose.model('userParticipateResourse', userParticipateResourseSchema)