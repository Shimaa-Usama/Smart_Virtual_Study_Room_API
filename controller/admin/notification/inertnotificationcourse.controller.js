const notificationCourseModel = require("../../../models/admin/notification/notificationCourse.model")

module.exports= async(req, res) => {

    const { courseID }= req.body;
    try {
            await notificationCourseModel.insertMany({ courseID, userID:req.userID})
            res.json({ message: "add notification done"});
    } catch (error) {
        res.json({ message: "error catch" });   
    }
}