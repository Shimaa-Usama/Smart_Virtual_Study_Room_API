const lessonModel = require("../../models/lesson.model")
const fileModel = require("../../models/file.model")

module.exports= async(req, res) => {
    try {
        let lesson = await lessonModel.findOne({_id:req.params.id}).populate({
            path : 'courseID',
            populate : {
            path : 'userID'
            }
        });
        let file = await fileModel.find({lessonID:req.params.id}).populate({
            path : 'lessonID',
            populate : {
                path : 'courseID',
                populate : {
                    path : 'userID'
                }
            }
        });
        res.json({lesson:lesson, files:file, userName: req.userName , userID:req.userID})

    } catch (error) {
        res.json({ message:"catch error", error })
    }

}