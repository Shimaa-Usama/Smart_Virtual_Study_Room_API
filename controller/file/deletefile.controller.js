const fileModel = require('../../models/file.model')

module.exports= async(req, res) => {

    try {
        let file = await fileModel.findById({ _id:req.body.id }).populate({
            path : 'lessonID',
            populate : {
            path : 'courseID'
            }
        })
        if(req.userID == file?.lessonID?.courseID?.userID){
            await fileModel.deleteOne({ _id:req.body.id })
            res.json({messages : 'file deleted'})
        }else{
            res.json({messages : 'file delete not allowed'})
        }

    } catch (error) {
        res.json({ message: "file delete catch error" });   
    }

}