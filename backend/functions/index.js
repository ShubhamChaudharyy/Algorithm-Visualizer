const app=require('express')()
const bodyParser=require('body-parser')
const {
    getbugReports,
    getSpecificBugReport,
    postCommentOnReport,
    likeBugReport,
    unlikeBugReport,
    deleteBugReport
}   =  require('./routes/getBugReports')
const {login}=require('./routes/login')
const {postBugReports}=require('./routes/postBugReports')
const {register}=require('./routes/register');
const { fbAuth } = require('./middlewares/fbAuth');

const FirebaseClass=require('./constant')
var firebase=new FirebaseClass();

const {
    userDetails,
    getAuthenticatedUser
}   =  require('./routes/userDetails')
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

app.post('/add/user_details',fbAuth,userDetails)
app.post('/signUp',register)
app.post('/login',login)

exports.onLike=firebase.like_notification().onCreate((snapshot)=>{
    firebase.bug_reports(snapshot.data().screamId)
    .get()
    .then(doc=>{
        if(doc.exists){
            return firebaseObject.db.doc(`/notifications/${snapshot.id}`).set({
                createdAt:new Date().toISOString,
                user:doc.data().userName,
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
exports.onComment=firebase.comment_notification().onCreate((snapshot)=>{
    xdb.doc(`/bug_reports/${snapshot.data().screamId}`).get()
    .then(doc=>{
        if(doc.exists){
            return firebaseObject.db.doc(`/notifications/${snapshot.id}`).set({
                createdAt:new Date().toISOString,
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
exports.onUnLike=firebase.like_notification().onDelete((snapshot)=>{
    xdb.doc(`/bug_reports/${snapshot.data().reportId}`)
    .get()
    .then(doc=>{
        if(doc.exists){
            firebaseObject.db.doc(`/notifications/${snapshot.id}`)
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