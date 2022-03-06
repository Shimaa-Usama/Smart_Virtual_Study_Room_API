const userParticipateCourseModel = require('../../../models/userParticipateCourse.model')

module.exports= async(req, res) => {

    try {
        let registertionCourseList = await userParticipateCourseModel.find({userID:req.userID});

        res.json({registertionCourseList:registertionCourseList, userName: req.userName , userID:req.userID})

    } catch (error) {
        res.json({ message:"catch error", error })
    }

}