const bodyParser=require('body-parser')
const FirebaseClass=require('../constant')
var firebase=new FirebaseClass();
module.exports.getbugReports=(req,res,next)=>{
    firebase.bug_reports()
    .get()
    .then(data=>{
        let bug_report=[];
        data.forEach(document=>{
             bug_report.push({...document.data()})
        })
        return res.json(bug_report)
    })
    .catch(err=>{ 
        console.log(err) 
    }) 
}
module.exports.getSpecificBugReport=(req,res,next)=>{
    let bug_report_data={};
    firebase.bug_reports(req.params.reportId).get()
    .then(doc=>{
        if(!doc.exists){
            return res.status(404).json({error:'Bug_report not found'})
        }
        bug_report_data=doc.data();
        bug_report_data.bugReportId=doc.id;
        return firebase.comments().where('bugReportId',"==",req.params.reportId).get()
    })
    .then(data=>{
        bug_report_data.comments=[]
        data.forEach(doc=>{
            bug_report_data.comments.push(doc.data())
        })
        return res.json(bug_report_data)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:err.code})
    })
}
exports.postCommentOnReport=(req,res,next)=>{
    if(req.body.body.trim()==='') return res.status(400).json({error:'Must not be Empty'})
    
    const {body}=req.body
    const incoming_comment={
        body,
        createdAt:firebase.time_stamp.fromDate(new Date()),
        userName:req.user.userName,
        bugReportId:req.params.reportId
    }
    firebase.bug_reports(req.params.reportId).get()
    .then(doc=>{
        if(!doc.exists){
            return res.status(404).json({error:'Bug Report not found!!'})
        }
        let bug_report_data=doc.data();
        bug_report_data.commentCount++;
        
        firebase.bug_reports(req.params.reportId)
        .update({commentCount:bug_report_data.commentCount})

        return firebase.comments().add(incoming_comment)
    })
    .then(()=>{
        res.json(incoming_comment)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:err.code})
    }) 
}
exports.likeBugReport=(req,res,next)=>{
    var bug_report_data={}
    let likeDB = firebase.likes()
    .where('userName','==',req.user.userName)
    .where('bugReportId','==',req.params.reportId)
    .limit(1)

    let bug_report_DB=firebase.bug_reports(req.params.reportId)
    bug_report_DB.get()
    .then(doc=>{
        if(doc.exists){
            bug_report_data=doc.data();
            bug_report_data.reportId=doc.id;
            return likeDB.get()
        }
        else{
            return res.status(404).json({error:"Report not Found!!"})
        }
    })
    .then(data=>{
        if(data.empty){
            console.log("this post isn't addressed yet!")
            return firebase.likes().add({
                bugReportId:req.params.reportId,
                userName:req.user.userName
            })
            .then(()=>{
                bug_report_data.likeCount++;
                return bug_report_DB.update({likeCount:bug_report_data.likeCount})
            })
            .then((data)=>{
                return res.json(data)
            })
        }
        else {
            res.json({error:'Why man !!! the report is already liked'})
        }
    })
}
exports.unlikeBugReport=(req,res,next)=>{
    var bug_report_data={}
    let likeDB=firebase.likes()
    .where('userName','==',req.user.userName)
    .where('bugReportId','==',req.params.reportId).limit(1)
    
    let bug_report_DB=firebase.bug_reports(req.params.reportId)
    
    bug_report_DB.get()
    .then(doc=>{
        if(doc.exists){
            bug_report_data=doc.data();
            console.log(bug_report_data)
            bug_report_data.reportId=doc.id;
            return likeDB.get()
        }
        else{
            return res.status(404).json({error:"Report not Found!!"})
        }
    })
    .then(data=>{
        if(data.empty){
            res.json({error:"you can't unlike something you didn't liked"})
        }
        else {
            return firebase.likes(data.docs[0].id).delete()
            .then(()=>{
               bug_report_data.likeCount--; 
               bug_report_DB.update({likeCount:bug_report_data.likeCount})                
            })
            .then(()=>{
                res.status(200).json({message:"post unliked Successfully"})
            })
        }
    })
}
exports.deleteBugReport=(req,res,next)=>{
    var toBeDeleted=firebase.bug_reports(req.params.reportId);
    toBeDeleted.get()
    .then(doc=>{
        if(!doc.exists){
            return res.json({message:"Bug Report doesn't Exist"})
        }
        if(doc.data().userName!==req.user.userName){
            return res.status(500).json({error:"Unauthorized"})
        }
        else {
            return toBeDeleted.delete()
        }
    })
    .then(()=>{
        res.json({message:"Report deleted successfully"})
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).json({err:err.code})
    })
}
