const courseModel = require("../../models/course.model")
const lessonModel = require("../../models/lesson.model")

module.exports= async(req, res) => {
    try {
        let course = await courseModel.findOne({_id:req.params.id}).populate("userID");
        let lesson = await lessonModel.find({courseID:req.params.id}).populate({
            path : 'courseID',
            populate : {
            path : 'userID'
            }
        });
        res.json({course:course, lessons:lesson, userName: req.userName , userID:req.userID})

    } catch (error) {
        res.json({ message:"catch error", error })
    }

}