const userParticipateCourseModel = require('../../../models/userParticipateCourse.model')
const courseModel = require('../../../models/course.model')

module.exports= async(req, res) => {

    try {

        let registeredUser = await userParticipateCourseModel.find({ userID:req.userID, courseID:req.body.id })
            if(registeredUser.length != 0){
                res.json({ message: "u already registered"});
            }else{

                let course = await courseModel.findOne({ _id:req.body.id })
                if( req.userID == course.userID){
                    res.json({ message: "Not allow"});

                }else{
                    await userParticipateCourseModel.insertMany({ userID:req.userID, courseID:req.body.id })

                    await courseModel.updateOne({ _id:req.body.id }, { participants: course.participants+1})
    
                    res.json({ message: "u registeration done"});
                }
    
            }
    } catch (error) {
        res.json({ message: "error catch" });   
    }

}