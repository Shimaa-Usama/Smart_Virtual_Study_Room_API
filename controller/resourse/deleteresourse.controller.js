const resourseModel = require('../../models/resourse.model')

module.exports= async(req, res) => {

    try {
        let resourse = await resourseModel.findById({ _id:req.body.id })

        if(req.userID == resourse?.userID){
            await resourseModel.deleteOne({ _id:req.body.id })
            res.json({messages : 'resourse deleted'})
        }else{
            res.json({messages : 'resourse delete not allowed'})
        }

    } catch (error) {
        res.json({ message: "resourse delete catch error" });   
    }

}