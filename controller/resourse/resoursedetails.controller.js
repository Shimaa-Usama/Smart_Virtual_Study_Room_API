const resourseModel = require("../../models/resourse.model")

module.exports= async(req, res) => {
    try {
        let resourse = await resourseModel.findOne({_id:req.params.id}).populate("userID");

        res.json({resourse:resourse, userName: req.userName , userID:req.userID})

    } catch (error) {
        res.json({ message:"catch error", error })
    }

}