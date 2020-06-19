const {DB,xdb,auth} = require('../constant')
const bodyParser=require('body-parser')
module.exports.postBugReports=(req,res,next)=>{
    if(req.method !=='POST'){
        return res.status(400).json({error:'Method not Allowed'})
    }
    const{description,name}=req.body
    const new_bug_report={ 
        description,
        userHandle:req.user.userName,
        resolved:false,
        priority_level:'unmarked',
        assigned_to:'unassigned', 
        createdAt:DB.time_stamp.fromDate(new Date())
    }
    DB.bug_reports.add(new_bug_report)
    .then(doc=>{
        res.json({message:'created Successfully!!!'})
    })
    .catch(err=>{
        console.log('error in routes')
        res.json({Error:`${err}`})
    })
}