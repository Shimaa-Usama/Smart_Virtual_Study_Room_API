const courseModel = require('../../models/course.model')

module.exports= async(req, res) => {

    try {
        let course = await courseModel.findById({ _id:req.body.id })

        if(req.userID == course?.userID){
            await courseModel.deleteOne({ _id:req.body.id })
            res.json({messages : 'course deleted'})
        }else{
            res.json({messages : 'course delete not allowed'})
        }

    } catch (error) {
        res.json({ message: "course delete catch error" });   
    }

}