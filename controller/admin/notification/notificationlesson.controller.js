const notificationLessonModel = require("../../../models/admin/notification/notificationLesson.model")

module.exports= async(req, res) => {

    try {
        let notificationLesson = await notificationLessonModel.find({  }).populate("lessonID");

        res.json({notificationLesson:notificationLesson})

    } catch (error) {
        res.json({ message:"catch error", error })
    }

}