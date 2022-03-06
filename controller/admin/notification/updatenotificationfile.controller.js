const fileModel = require('../../../models/file.model')

const notificationFileModel = require("../../../models/admin/notification/notificationFile.model")

module.exports= async(req, res) => {
    //lessonID, fileID
    const { lessonID, fileID } = req.body;

    try {
        
        let files = await fileModel.find({ lessonID })
        if(files.length != 0){
            await fileModel.updateMany( { lessonID }, { confirmed:true })

            let notificationFile = await notificationFileModel.find( { fileID } )
            if(notificationFile.length != 0){
                await notificationFileModel.deleteMany( { fileID } )

            }

            res.json({messages : 'file updated'})
        }else{
            res.json({messages : 'there is no file'})

        }
    
    } catch (error) {
        res.json({ message: "lesson update catch error" });   
    }

}
