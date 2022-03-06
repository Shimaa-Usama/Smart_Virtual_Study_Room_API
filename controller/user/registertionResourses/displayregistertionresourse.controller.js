const userParticipateResourseModel = require('../../../models/userParticipateResourse.model')

module.exports= async(req, res) => {

    try {
        let registertionResourseList = await userParticipateResourseModel.find({userID:req.userID});

        res.json({registertionResourseList:registertionResourseList, userName: req.userName , userID:req.userID})

    } catch (error) {
        res.json({ message:"catch error", error })
    }

}