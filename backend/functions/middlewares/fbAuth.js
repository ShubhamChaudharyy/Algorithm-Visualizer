const FirebaseClass=require('../constant') 
var firebase=new FirebaseClass();

exports.fbAuth=(req,res,next)=>{
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        idToken=req.headers.authorization.split('Bearer ')[1];
    }
    else {
        return res.status(403).json({error:'Unauthorized'})
    }
    firebase.admin_auth.verifyIdToken(idToken)
    .then(decodedToken=>{
        req.user=decodedToken;
        console.log(decodedToken)
        return firebase.user_signup(req.user.userName)
        .where('userId','==',req.user.uid)
        .limit(1)
        .get()
    })
    .then(data=>{
        console.log(data.docs[0].data())
        req.user.userName=data.docs[0].data().userName
        return next();
    })
    .catch(err=>{
        console.log("error in middleware")
        console.log(err)
        return res.status(403).json({error:"Login again"})
    })
}