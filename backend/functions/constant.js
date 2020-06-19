const functions = require('firebase-functions');
const firebase = require('firebase')
const serviceAccount=require('./taskforce-28c9c-firebase-adminsdk-n560k-81f892314b.json')
const admin=require('firebase-admin')
var firebaseConfig={
    credential:admin.credential.cert(serviceAccount),
    databaseURL:"https://taskforce-28c9c.firebaseio.com"
}
admin.initializeApp(firebaseConfig)
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
firebase.initializeApp(firebaseConfig)
const db=firebase.firestore()
exports.adminAuth=admin.auth()
exports.auth=firebase.auth()
exports.xdb=firebase.firestore()
exports.DB={
    bug_reports:db.collection('bug_reports'),
    users:db.collection('user'), 
    time_stamp:firebase.firestore.Timestamp
}


