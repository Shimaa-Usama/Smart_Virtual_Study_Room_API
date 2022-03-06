const resourseModel = require("../../models/resourse.model")
const courseModel = require("../../models/course.model")
const lessonModel = require("../../models/lesson.model")
const fileModel = require("../../models/file.model")



module.exports=  async(req, res) => {
    try {
        let resourseList = await resourseModel.find({ confirmed:true  }).populate("userID");
        let courseList = await courseModel.find({ confirmed:true }).populate("userID");
        let lessonList = await lessonModel.find({ confirmed:true }).populate({
            path : 'courseID',
            populate : {
            path : 'userID'
            }
        });
        let fileList = await fileModel.find({ confirmed:true }).populate({
            path : 'lessonID',
            populate : {
                path : 'courseID',
                populate : {
                    path : 'userID'
                }
            }
        });

        res.json({resourseList:resourseList ,courseList:courseList, lessonList:lessonList, fileList:fileList, userName: req.userName , userID:req.userID})

    } catch (error) {
        res.json({ message:"catch error home", error })
    }
}