const notificationFileModel = require("../../../models/admin/notification/notificationFile.model")

module.exports= async(req, res) => {

    const { fileID }= req.body;
    try {
            await notificationFileModel.insertMany({ fileID, userID:req.userID})
            res.json({ message: "add notification done"});
    } catch (error) {
        res.json({ message: "error catch" });   
    }
}