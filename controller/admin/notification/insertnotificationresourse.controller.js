const notificationResourseModel = require("../../../models/admin/notification/notificationResourse.model")
module.exports= async(req, res) => {

    const { resourseID }= req.body;
    try {
            await notificationResourseModel.insertMany({ resourseID, userID:req.userID})
            res.json({ message: "add notification done"});
    } catch (error) {
        res.json({ message: "error catch" });   
    }
}