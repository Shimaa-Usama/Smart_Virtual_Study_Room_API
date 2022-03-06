const lessonModel = require('../../models/lesson.model')

module.exports= async(req, res) => {

    try {
        let lesson = await lessonModel.findById({ _id:req.body.id }).populate("courseID")
        if(req.userID == lesson?.courseID?.userID){
            await lessonModel.deleteOne({ _id:req.body.id })
            res.json({messages : 'lesson deleted'})
        }else{
            res.json({messages : 'lesson delete not allowed'})
        }

    } catch (error) {
        res.json({ message: "lesson delete catch error" });   
    }

}