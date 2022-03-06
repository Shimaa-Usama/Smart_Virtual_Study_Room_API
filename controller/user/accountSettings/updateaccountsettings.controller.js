const userModel = require('../../../models/user.model')
const { validationResult } = require('express-validator');

module.exports= async(req, res) => {

    const { fname, lname, email, bio } = req.body;

    try {
        let emailAlreadyExist = await userModel.findOne( { email })
        console.log(emailAlreadyExist);

        if(emailAlreadyExist?._id != req.userID && emailAlreadyExist !== null){
                res.json({messages : 'email already exist'})

        }else{
            let errors = validationResult(req);
            if(errors.isEmpty()){
                let user = await userModel.findOne( { _id:req.userID })
                if(user.email == email){
                    await userModel.updateOne( { _id:req.userID }, { fname, lname, email, bio, image:req.file.path })
                    res.json({messages : 'account updated'})
                }else{
                    await userModel.updateOne( { _id:req.userID }, { fname, lname, email, bio, image:req.file.path, confirmed:false })
                    res.json({messages : 'account updated pls confirm your email'})
                    //logOut
                }
            }else{
                res.json({messages : 'not valid', errors:errors.errors})
            }
        }

    } catch (error) {
        res.json({ message: "update catch error" });   
    }

}