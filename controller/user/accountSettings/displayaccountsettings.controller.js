const userModel = require('../../../models/user.model')

module.exports= async(req, res) => {

    try {
        let user = await userModel.findOne({ _id:req.userID });

        res.json({ user:user })

    } catch (error) {
        res.json({ message:"catch error", error })
    }

}