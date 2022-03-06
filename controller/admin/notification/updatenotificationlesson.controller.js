const lessonModel = require('../../../models/lesson.model')

const notificationLessonModel = require("../../../models/admin/notification/notificationLesson.model")

module.exports= async(req, res) => {

    const { courseID, lessonID } = req.body;

    try {
        
        let lessons = await lessonModel.find({ courseID })
        if(lessons.length != 0){
            await lessonModel.updateMany( { courseID }, { confirmed:true })

            let notificationLesson = await notificationLessonModel.find( { lessonID } )
            if(notificationLesson.length != 0){
                await notificationLessonModel.deleteMany( { lessonID } )

            }

            res.json({messages : 'lesson updated'})
        }else{
            res.json({messages : 'there is no lesson'})

        }
    
    } catch (error) {
        res.json({ message: "lesson update catch error" });   
    }

}



