const fileModel = require('../../models/file.model')

module.exports= async(req, res) => {

    const { title, keywords, language } = req.body;

    try {
        let file = await fileModel.findById({ _id:req.body.id }).populate({
            path : 'lessonID',
            populate : {
            path : 'courseID'
            }
        })
        if(req.userID == file?.lessonID?.courseID?.userID){
            await fileModel.updateOne( { title, keywords, language })
            res.json({messages : 'file updated'})
        }else{
            res.json({messages : 'file update not allowed'})
        }

    } catch (error) {
        res.json({ message: "file update catch error" });
    }
}  