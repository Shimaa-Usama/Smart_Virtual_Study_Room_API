const notificationResourseModel = require("../../../models/admin/notification/notificationResourse.model")

module.exports= async(req, res) => {

    try {
        let notificationResourse = await notificationResourseModel.find({  }).populate("resourseID");

        res.json({notificationResourse:notificationResourse})

    } catch (error) {
        res.json({ message:"catch error", error })
    }

}