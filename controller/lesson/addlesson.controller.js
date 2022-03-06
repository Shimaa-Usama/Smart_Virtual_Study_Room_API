const lessonModel = require('../../models/lesson.model')

module.exports= async(req, res) => {

    const { title, desc, keywords, language, courseID } = req.body;
    try {
            await lessonModel.insertMany({ title, desc, keywords, language, courseID})
            res.json({ message: "add lesson done"});

    } catch (error) {
        res.json({ message: "error catch" });   
    }

}