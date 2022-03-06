const fileModel = require("../../models/file.model")

module.exports= async(req, res) => {
    try {
        let file = await fileModel.findOne({_id:req.params.id}).populate({
            path : 'lessonID',
            populate : {
                path : 'courseID',
                populate : {
                    path : 'userID'
                }
            }
        });
        res.json({ file:file, userName: req.userName , userID:req.userID})

    } catch (error) {
        res.json({ message:"catch error", error })
    }

}