const lessonModel = require('../../models/lesson.model')

module.exports= async(req, res) => {

    const { title, desc, keywords, language } = req.body;

    try {
        let lesson = await lessonModel.findById({ _id:req.body.id }).populate("courseID")
        if(req.userID == lesson?.courseID?.userID){
            await lessonModel.updateOne( { title, desc, keywords, language })
            res.json({messages : 'lesson updated'})
        }else{
            res.json({messages : 'lesson update not allowed'})
        }

    } catch (error) {
        res.json({ message: "lesson update catch error" });   
    }

}