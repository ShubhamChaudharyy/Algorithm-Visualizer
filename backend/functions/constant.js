const functions = require('firebase-functions');
const firebase = require('firebase')
const serviceAccount=require('./taskforce-28c9c-firebase-adminsdk-n560k-81f892314b.json')
const admin=require('firebase-admin')
var firebaseConfig = {
    apiKey: "AIzaSyBqwERTzI8eTEfJk3Z_71AKEkY-K2vd8dU",
    authDomain: "taskforce-28c9c.firebaseapp.com",
    databaseURL: "https://taskforce-28c9c.firebaseio.com",
    projectId: "taskforce-28c9c",
    storageBucket: "taskforce-28c9c.appspot.com",
    messagingSenderId: "416925175728",
    appId: "1:416925175728:web:0cf948c8f71f3479a69075",
    measurementId: "G-TDDPWPFZF4"
}
admin.initializeApp(firebaseConfig)

class FirebaseClass {
    constructor(){
        if(firebase.apps.length===0){
            firebase.initializeApp(firebaseConfig)
            firebase.firestore().enablePersistence()
        }
        this.auth=firebase.auth()
        this.db=firebase.firestore()
        this.region=functions.region('europe-west1')
        this.trigger=functions.region("europe-west1").firestore;
        this.time_stamp=firebase.firestore.Timestamp
        this.admin_auth=admin.auth()
    }
    batch(){
        return this.db.batch()
    }
    user_signup(username){
        return(
            username ?
            this.db.doc(`/user/${username}`)
            :
            this.db.collection('user')
        )
    }
    bug_reports(key){
        return(
            key ? 
            this.db.doc(`/bug_reports/${key}`)
            : 
            this.db.collection(`bug_reports`)
        )
    }
    comments(key){
        return(
            key ?
            this.db.doc(`/comments/${key}`)
            :
            this.db.collection(`comments`) 
        )
    }
    likes(key){
        return(
            key ?
            this.db.doc(`/likes/${key}`)
            :
            this.db.collection(`likes`)
        ) 
    }
    notifications(id){
        return(
            id?
            this.db.doc(`/notifications/${id}`)
            :
            this.db.collection(`notifications`)
        )
    }
    report_change(){
        return this.trigger.document('bug_reports/{bugReportId}')
    }
    like_notification(){
        return this.trigger.document('likes/{id}')
    }
    comment_notification(){
        return this.trigger.document('comments/{id}')
    }
    user_detail_change(){
        return this.trigger.document('user/{userId')
    }
}
module.exports = FirebaseClass; 