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
    firebase.user_signup(req.user.userName)
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
        return firebase.notification().where('reciever',"==",req.user.userName)
        .orderBy('createdAt','desc').limit(10).get();
    })
    .then(data=>{
        userData.notifications=[];
        data.forEach((doc)=>{
            userData.notification.push({
                ...doc.data()
            })
        })
        res.json(userData)
    })
    .catch((err)=>{
        console.log(err)
        return res.status(500).json({error:err.code})
    })
}
exports.getUserDetails=(req,res,next)=>{
    let userData={}
    firebase.user_signup(req.params.userName).get()
    .then(doc=>{
        if(doc.exists){
            userData.credentials=doc.data()
            return firebase.bug_reports().where('userName',"==",req.params.userName)
            .orderBy('createdAt','desc')
            .get()
        }
        else 
        return res.json("errror")
    })
    .then(data=>{
        userData.report=[];
        data.forEach((doc)=>{
            console.log(doc.data())
            userData.report.push({
                ...doc.data()
            })
        })
        return res.json(userData)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:err})
    })
}
