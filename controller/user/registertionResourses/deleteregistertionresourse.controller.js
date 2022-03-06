const userParticipateResourseModel = require('../../../models/userParticipateResourse.model')

module.exports= async(req, res) => {

    try {
        let resourse = await userParticipateResourseModel.findOne({ _id:req.body.id })
            if(req.userID == resourse?.userID){
                await userParticipateResourseModel.deleteOne({ _id:req.body.id })
                res.json({messages : 'registered resourse deleted'})
            }
            else{
                res.json({messages : 'registered resourse delete not allowed'})
            }

    } catch (error) {
        res.json({ message: "resourse delete catch error" });   
    }

}