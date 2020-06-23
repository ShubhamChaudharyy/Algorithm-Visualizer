const FirebaseClass=require('../constant') 
var firebase=new FirebaseClass();
const bodyParser=require('body-parser')
const {isEmpty,notMatching}=require('../util/util');
const { firestore } = require('firebase-admin');
module.exports.register=(req,res,next)=>{
    const userDets={email,password,confirmPassword,userName}=req.body;    
    let error={};
    if(isEmpty(userDets.email))
    error.email='E-mail cannot be Empty'
    if(isEmpty(userDets.password))
    error.password='Password cannot be empty'
    if(isEmpty(userDets.confirmPassword))  
    error.confirmPassword='Please fill compare password field'
    if(notMatching(userDets.password)(userDets.confirmPassword)!=0)
    error.notMatching='Passwords are not Matching'
    
    if(Object.keys(error).length>0) 
    return res.status(404).json(error)

    let token,userId;
    firebase.user_signup(userName).get()
    .then(doc=>{
        if(doc.exists){
            return res.status(400).json({handle:'this handle is already taken'})
        }
        else{
            const newUser={
                ...userDets
            }
           return firebase.auth.createUserWithEmailAndPassword(
                newUser.email,
                newUser.password
            )    
        }
    })
    .then(resultData=>{
        userId=resultData.user.uid;
        return resultData.user.getIdToken()
    })
    .then(idtoken=>{
        token=idtoken;
        const userCredentials={
            ...userDets,
            createdAt:firebase.time_stamp.fromDate(new Date()),
            userId
        }
        return firebase.user_signup(userName).set(userCredentials)
    })
    .then(()=>{
        return res.status(201).json({token})
    })
    .catch(err=>{
        console.log(err) 
        return res.status(500).json({error:err.code})
    })
}
