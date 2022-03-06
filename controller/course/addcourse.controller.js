const courseModel = require('../../models/course.model')

module.exports= async(req, res) => {

    const { title, desc, keywords, language }= req.body;
    try {
        if(req.file == undefined){
            res.json({ message: "file undefined" });
        } else{
            await courseModel.insertMany({ title, desc, keywords, image:req.file.path, language, userID:req.userID})
            res.json({ message: "add course done"});
        }
    } catch (error) {
        res.json({ message: "error catch" });   
    }

}