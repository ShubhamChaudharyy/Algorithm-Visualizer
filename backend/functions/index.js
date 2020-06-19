const app=require('express')()
const bodyParser=require('body-parser')
const {getbugReports}=require('./routes/getBugReports')
const {login}=require('./routes/login')
const {postBugReports}=require('./routes/postBugReports')
const {register}=require('./routes/register');
const { fbAuth } = require('./middlewares/fbAuth');
const {userDetails}=require('./routes/userDetails')
const port=5000 || process.env.port;
app.listen(port,()=>{console.log('Running on PORT 5000..')})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/home',getbugReports)
app.post('/add/bug_report',fbAuth,postBugReports)
app.post('/add/user_details',fbAuth,userDetails)
app.post('/signUp',register)
app.post('/login',login)