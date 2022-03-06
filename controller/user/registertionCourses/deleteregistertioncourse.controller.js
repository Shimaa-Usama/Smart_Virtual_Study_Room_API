const userParticipateCourseModel = require('../../../models/userParticipateCourse.model')

module.exports= async(req, res) => {

    try {
        let course = await userParticipateCourseModel.findOne({ _id:req.body.id })
            if(req.userID == course?.userID){
                await userParticipateCourseModel.deleteOne({ _id:req.body.id })
                res.json({messages : 'registered course deleted'})
            }
            else{
                res.json({messages : 'registered course delete not allowed'})
            }

    } catch (error) {
        res.json({ message: "course delete catch error" });   
    }

}