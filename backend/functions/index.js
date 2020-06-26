const app=require('express')()
const bodyParser=require('body-parser')
const {
    getbugReports,
    getSpecificBugReport,
    postCommentOnReport,
    likeBugReport,
    unlikeBugReport,
    deleteBugReport,
}   =  require('./routes/getBugReports')
const {login}=require('./routes/login')
const {postBugReports}=require('./routes/postBugReports')
const {register}=require('./routes/register');
const { fbAuth } = require('./middlewares/fbAuth');

const FirebaseClass=require('./constant')
var firebase=new FirebaseClass();

const {
    userDetails,
    getAuthenticatedUser,
    getUserDetails
}   =  require('./routes/userDetails')
const { firestore } = require('firebase-admin')
const port=5000 || process.env.port;
app.listen(port,()=>{console.log('Running on PORT 5000..')})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/bug_report/:reportId/comments',fbAuth,postCommentOnReport)
app.get('/bug_report/:reportId',getSpecificBugReport)
app.get('/user',fbAuth,getAuthenticatedUser)
app.get('/home',getbugReports)

app.post('/add/bug_report',fbAuth,postBugReports)
app.post('/bug_report/:reportId/like',fbAuth,likeBugReport)
app.post('/bug_report/:reportId/unlike',fbAuth,unlikeBugReport)
app.delete('/delete/bug_report/:reportId',fbAuth,deleteBugReport)
app.get('/admin/searchUser/:userName',fbAuth,getUserDetails)
app.post('/add/user_details',fbAuth,userDetails)
app.post('/signUp',register)
app.post('/login',login)
// app.post('/notifications',fbAuth,markNotificationRead)

exports.api=firebase.region.https.onRequest(app)
exports.onLike=firebase.like_notification().onCreate((snapshot,context)=>{
    firebase.bug_reports(snapshot.data().bugReportId)
    .get()
    .then(doc=>{
        if(doc.exists){
            return firebase.notification(snapshot.id).set({
                createdAt:new Date().toISOString(),
                type:'like',
                read:false,
                reportId:doc.id,
                reciever:doc.data().userName,
                sender:snapshot.data().userName
            })
            .then(()=>{
                return;
            })
            .catch(err=>{
                console.log(err)
                return;
            })
        }
    })
})
exports.onComment=firebase.comment_notification().onCreate((snapshot,context)=>{
    console.log("Triggerred!!!!!")
    firebase.bug_reports(snapshot.data().bugReportId).get()
    .then(doc=>{
        if(doc.exists){
            return firebase.notifications(snapshot.id).set({
                createdAt:new Date().toISOString(),
                user:doc.data().userName,
                type:'comment',
                read:false,
                reportId:doc.id,
                reciever:doc.data().userName,
                sender:snapshot.data().userName
            })
            .then(()=>{
                return;
            })
            .catch(err=>{
                console.log(err)
                return;
            })
        }
    })
})
exports.onUnLike=firebase.like_notification().onDelete((snapshot,context)=>{
    firebase.bug_reports(snapshot.data().bugReportId)
    .get()
    .then(doc=>{
        if(doc.exists){
            firebase.notifications(snapshot.id)
            .delete()
            .then(()=>{
                return
            })
            .catch(err=>{
                return res.status(500).json(err)
            })
        }
    })
})
exports.OnUserDetailsChange=firebase.user_detail_change().onUpdate(change=>{
    console.log(change.before.data())
    console.log(change.after.data())
    if(change.before.data().userName!==change.after.data().userName){
    let batch = firebase.batch()
    return firebase.bug_reports().where('userName',"==",change.before.data().userName).get()
        .then(data=>{
            data.forEach(doc=>{
                batch.update(firebase.bug_reports(doc.id),{userName:change.after.data().userName}) 
            })
            return batch.commit();
        })
    }
})
exports.onDeleteReport=firebase.report_change().onDelete((snapshot,context)=>{
    let reportId=snapshot.id;
    let batch=firebase.batch();
    let dataChunk={}
    dataChunk.comment_data=firebase.comments().where("bugReportId","==",reportId).get()
    dataChunk.like_data=firebase.likes().where("bugReportId","==",reportId).get()
    dataChunk.notification_data=firebase.notifications().where("bugReportId","==",reportId).get()
    return dataChunk.get()
    .then(data=>{
        data.comment_data.forEach(doc=>{
            batch.delete(firebase.comments(doc.id))
        })
        data.like_data.forEach(doc=>{
            batch.delete(firebase.likes(doc.id))
        })
        data.notification_data.forEach(doc=>{
            batch.delete(firebase.notifications(doc.id))
        })
        return batch.commit();
    })
    .catch(err=>{
        console.log(err)
    })
})