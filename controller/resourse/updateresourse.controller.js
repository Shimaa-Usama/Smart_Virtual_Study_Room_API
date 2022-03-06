const resourseModel = require('../../models/resourse.model')

module.exports= async(req, res) => {

    const { title, desc, keywords, language } = req.body;
    console.log(req.body);

    try {
        let resourse = await resourseModel.findById({ _id:req.body.id })
        if(req.userID == resourse?.userID){
            await resourseModel.updateOne( { title, desc, keywords, image:req.file.path, language })
            res.json({messages : 'resourse updated'})
        }else{
            res.json({messages : 'resourse update not allowed'})
        }

    } catch (error) {
        res.json({ message: "resourse update catch error" });   
    }

}