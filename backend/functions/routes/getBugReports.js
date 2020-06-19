const {DB,xdb,auth} = require('../constant')
const bodyParser=require('body-parser')
module.exports.getbugReports=(req,res,next)=>{
    DB.bug_reports.orderBy('name','asc').get()
    .then(data=>{
        let bug_report=[];
        data.forEach(document=>{
             bug_report.push({...document.data()})
        })
        return res.send(bug_report)
    })
    .catch(err=>{ 
        console.log(err) 
    }) 
}
