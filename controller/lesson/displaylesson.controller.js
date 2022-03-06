const lessonModel = require("../../models/lesson.model")

module.exports= async(req, res) => {

    try {
        let lessonList = await lessonModel.find({}).populate({
            path : 'courseID',
            populate : {
            path : 'userID'
            }
        });

        res.json({lessonList:lessonList, userName: req.userName , userID:req.userID})

    } catch (error) {
        res.json({ message:"catch error", error })
    }

}