const courseModel = require("../../models/course.model")

module.exports= async(req, res) => {

    try {
        let courseList = await courseModel.find({}).populate("userID");

        res.json({courseList:courseList, userName: req.userName , userID:req.userID})

    } catch (error) {
        res.json({ message:"catch error", error })
    }

}