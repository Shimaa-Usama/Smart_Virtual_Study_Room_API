const notificationFileModel = require("../../../models/admin/notification/notificationFile.model")

module.exports= async(req, res) => {

    try {
        let notificationFile = await notificationFileModel.find({  }).populate("fileID");

        res.json({notificationFile:notificationFile})

    } catch (error) {
        res.json({ message:"catch error", error })
    }

}