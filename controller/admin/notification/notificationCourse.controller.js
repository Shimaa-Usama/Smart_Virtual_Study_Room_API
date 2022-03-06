const notificationCourseModel = require("../../../models/admin/notification/notificationCourse.model")

module.exports= async(req, res) => {

    try {
        let notificationCourse = await notificationCourseModel.find({ }).populate("courseID");

        res.json({notificationCourse:notificationCourse})

    } catch (error) {
        res.json({ message:"catch error", error })
    }

}