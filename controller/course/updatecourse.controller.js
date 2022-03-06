const courseModel = require('../../models/course.model')

module.exports= async(req, res) => {

    const { title, desc, keywords, language } = req.body;
    console.log(req.body);

    try {
        let course = await courseModel.findById({ _id:req.body.id })
        if(req.userID == course?.userID){
            await courseModel.updateOne( { title, desc, keywords, image:req.file.path, language })
            res.json({messages : 'course updated'})
        }else{
            res.json({messages : 'course update not allowed'})
        }

    } catch (error) {
        res.json({ message: "course update catch error" });   
    }

}