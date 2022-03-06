const userModel = require('../../models/user.model');
var jwt = require('jsonwebtoken');

module.exports= (req, res) => {

    const token =req.params.token;
    if (token && token != undefined && token != null) {
        jwt.verify(token, 'secret',async (err, decoded)=>{
        if (err) {
          res.json({message :'can not verify token'})
        } else {
          const email = decoded.email;
          console.log(email);
          await userModel.findOneAndUpdate({email},{confirmed:true})
          res.json({confirmed :'success'})
        }
      });
    } else {
      res.json({ message: 'invalidToken' });
    }

}