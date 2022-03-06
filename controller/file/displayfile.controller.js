const fileModel = require('../../models/file.model')

module.exports= async(req, res) => {

    try {
        let fileList = await fileModel.find({}).populate({
            path : 'lessonID',
            populate : {
                path : 'courseID',
                populate : {
                    path : 'userID'
                }
            }
        });
        res.json({fileList:fileList, userName: req.userName , userID:req.userID})

    } catch (error) {
        res.json({ message:"catch error", error })
    }

}