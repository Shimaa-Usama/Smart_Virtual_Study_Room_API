const notificationLessonModel = require("../../../models/admin/notification/notificationLesson.model")

module.exports= async(req, res) => {

    const { lessonID }= req.body;
    try {
            await notificationLessonModel.insertMany({ lessonID, userID:req.userID})
            res.json({ message: "add notification done"});
    } catch (error) {
        res.json({ message: "error catch" });   
    }
}