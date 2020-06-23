const FirebaseClass=require('../constant') 
var firebase=new FirebaseClass();
const bodyParser=require('body-parser')
module.exports.postBugReports=(req,res,next)=>{
    if(req.method !=='POST'){
        return res.status(400).json({error:'Method not Allowed'})
    }
    const{description,name}=req.body
    const new_bug_report={ 
        description,
        userName:req.user.userName,
        resolved:false,
        likeCount:0,
        commentCount:0,
        priority_level:'unmarked',
        assigned_to:'unassigned', 
        createdAt:firebase.time_stamp.fromDate(new Date())
    }
    firebase.bug_reports().add(new_bug_report)
    .then(doc=>{
        res.json({message:'created Successfully!!!'})
    })
    .catch(err=>{
        console.log('error in routes')
        res.json({Error:`${err}`})
    })
}