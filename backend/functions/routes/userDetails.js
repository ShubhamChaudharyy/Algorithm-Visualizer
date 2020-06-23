const FirebaseClass=require('../constant') 
var firebase=new FirebaseClass();
module.exports.userDetails=(req,res,next)=>{
    const additional_user_detail=req.body;
    firebase.user_signup(userName)
    .update(additional_user_detail)
    return res.status(403).json({message:"created Successfully"});
}
module.exports.getAuthenticatedUser=(req,res,next)=>{
    let userData={};
    xdb.doc(`/user/${req.user.userName}`)
    .get()
    .then(doc=>{
        if(doc.exists){
            userData.credentials=doc.data()
            return firebase.likes()
            .where('userName','==',req.user.userName)
            .get()
        }
    })
    .then((data)=>{
        userData.likes=[];
        data.forEach((doc)=>{
            userData.likes.push(doc.data())
        })
        return res.json(userData)
    })
    .catch((err)=>{
        console.log(err)
        return res.status(500).json({error:err.code})
    })
}