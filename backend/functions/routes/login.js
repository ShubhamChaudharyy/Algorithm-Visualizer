const {DB,xdb,auth} = require('../constant')
const bodyParser=require('body-parser')
const {isEmpty,notMatching}=require('../util/util')
module.exports.login=(req,res,next)=>{
    const user={email,password}=req.body;
    let error={};
    if(isEmpty(user.email)) error.email='Must not be empty';
    if(isEmpty(user.password)) error.password='Must not be empty';

    if(Object.keys(error).length>0) return res.status(400).json(error)
    auth.signInWithEmailAndPassword(user.email,user.password)
    .then(data=>{
        return data.user.getIdToken();
    })
    .then(token=>{
        return res.json({token})
    })
    .catch(err=>{
        console.log(err)
        return res.status(404).json({err:err.code})
    })
}
