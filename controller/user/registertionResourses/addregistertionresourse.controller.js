
const userParticipateResourseModel = require('../../../models/userParticipateResourse.model')
const resurseModel = require('../../../models/resourse.model')

module.exports= async(req, res) => {

    try {

        let registeredUser = await userParticipateResourseModel.find({ userID:req.userID, resourseID:req.body.id })
            if(registeredUser.length != 0){
                res.json({ message: "u already registered"});
            }else{

                let resourse = await resurseModel.findOne({ _id:req.body.id })
                if( req.userID == resourse.userID){
                    res.json({ message: "Not allow"});

                }else{
                    await userParticipateResourseModel.insertMany({ userID:req.userID, resourseID:req.body.id })

                    await resurseModel.updateOne({ _id:req.body.id }, { participants: resourse.participants+1})
    
                    res.json({ message: "u registeration done"});
                }
    
            }
    } catch (error) {
        res.json({ message: "error catch" });   
    }

}