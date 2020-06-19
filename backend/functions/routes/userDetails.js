const {DB,xdb,auth} = require('../constant')
const bodyParser=require('body-parser')
module.exports.userDetails=(req,res,next)=>{
    const additional_user_detail=req.body;
    xdb.doc(`user/${req.user.userName}`)
    .update(additional_user_detail)
    return res.status(403).json({message:"created Successfully"});
}