const resourseModel = require('../../models/resourse.model')

module.exports= async(req, res) => {

    try {
        let resourseList = await resourseModel.find({}).populate("userID");

        res.json({resourseList:resourseList, userName: req.userName , userID:req.userID})

    } catch (error) {
        res.json({ message:"catch error", error })
    }

}