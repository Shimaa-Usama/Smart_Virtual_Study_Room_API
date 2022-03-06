const userModel = require('../../../models/user.model')

module.exports= async(req, res) => {


    try {
        await userModel.findOneAndUpdate({ _id:req.userID }, {  $unset:{image:""} })
        res.json({messages : 'image deleted'})

    } catch (error) {

        res.json({ message: "delete catch error" });  
        
    }

}