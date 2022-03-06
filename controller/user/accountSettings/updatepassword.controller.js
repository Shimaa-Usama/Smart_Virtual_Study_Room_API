const userModel = require('../../../models/user.model')
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

module.exports= async(req, res) => {

    const { oldPass, newPass } = req.body;

    try {

        let userData = await userModel.findOne( {  _id:req.userID } );
        console.log(userData);
        const match = await bcrypt.compare(oldPass, userData.password);
        console.log(match);
        let errors = validationResult(req);
        if(match){
            if(errors.isEmpty()){
                
                bcrypt.hash(newPass, 7, async(err, hash)=> {
                    if (err) {
                        res.json({message:'hash error'})
                    } else {

                        await userModel.findByIdAndUpdate( {_id:req.userID }, { password:hash} )
                        res.json({ message: "update pass" });   
                    }
                });        
            }else{
                res.json({message:'in-valid data', messageError:errors.errors})

            }
        }else{
            
            res.json({message:'pass not match in DB'})

        }

    } catch (error) {
        res.json({ message: "update catch error" });   
    }

}



