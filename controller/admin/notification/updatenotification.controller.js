const courseModel = require('../../../models/course.model')
const resourseModel = require("../../../models/resourse.model")

const notificationResourseModel = require("../../../models/admin/notification/notificationCourse.model")
const notificationCourseModel = require("../../../models/admin/notification/notificationCourse.model")

module.exports= async(req, res) => {
    //courseID or resourseID
    const { id } = req.body;

    try {
        let course = await courseModel.findOne({ _id:id })
        let resourse = await resourseModel.findOne({ _id:id })

        if(course){
            await courseModel.findOneAndUpdate( { _id:id }, { confirmed:true })
            await notificationCourseModel.findOneAndDelete( { _id:id } )


            res.json({messages : 'course updated',fileList:fileList})
        }else{
            if(resourse){
                await resourseModel.findOneAndUpdate( { _id:id }, { confirmed:true })
                await notificationResourseModel.findOneAndDelete( { _id:id } )
                res.json({messages : 'resourse updated'})
            }else{
                res.json({messages : 'not found!!'})
            }
        }

    } catch (error) {
        res.json({ message: "course update catch error" });   
    }

}