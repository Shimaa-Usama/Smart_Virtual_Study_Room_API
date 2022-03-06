const fileModel = require('../../models/file.model')

module.exports= async(req, res) => {

    const { title, keywords, language, lessonID } = req.body;
    try {
            await fileModel.insertMany({ title, keywords, language, lessonID})
            res.json({ message: "add file done"});

    } catch (error) {
        res.json({ message: "error catch" });   
    }

}