const userModel = require('../../../models/user.model')

module.exports= async(req, res) => {


    try {
        await userModel.findOneAndUpdate({ _id:req.userID }, {  $unset:{bio:""} })
        res.json({messages : 'bio deleted'})

    } catch (error) {

        res.json({ message: "delete catch error" });  
        
    }

}