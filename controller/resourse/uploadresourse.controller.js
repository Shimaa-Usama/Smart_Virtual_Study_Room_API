const resourseModel = require('../../models/resourse.model')

module.exports= async(req, res) => {

    const { title, desc, keywords, language }= req.body;
    try {
        if(req.file == undefined){
            res.json({ message: "file undefined" });
        } else{
            await resourseModel.insertMany({ title, desc, keywords, image:req.file.path, language, userID:req.userID})
            res.json({ message: "upload resourse done"});
        }
    } catch (error) {
        res.json({ message: "error catch" });   
    }

}
