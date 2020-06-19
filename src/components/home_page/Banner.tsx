import React from 'react'
import {TextField,Paper,Grid,Button} from '@material-ui/core'
import '../css/Banner.css'
export default()=>(
    // const[email,setEmail]=useState<any>('')
    <section className='banner navbar-after'>
        <div className="row">
            <div className="col-lg-2">
                <Paper className="left-about">
                   <div className="main-name">
                        <p>So yes,<br/>
                        Panchaayat is<br/>
                        on the web</p>
                   </div>
                </Paper>
            </div>
            <div className="col-lg-2">
                <Paper className='right-login' elevation={2}>
                    <Paper className='header-paper' elevation={2}>
                       <p>Register</p> 
                    </Paper>
                    <Grid container spacing={4} className='login-form'>
                        <Grid item xs={10}>
                        <TextField id="standard-basic" label="E-mail" color="secondary" />
                        </Grid>
                        <Grid item xs={10}>
                        <TextField id="standard-basic" label="Password" color="secondary" />
                        </Grid>
                        <Grid item xs={10}>
                        <TextField id="standard-basic" label="Confirm Password" color="secondary" />
                        </Grid>
                        <Grid item xs={10}>
                        <TextField id="standard-basic" label="Username" color="secondary" />
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="secondary" className='sign-up'>
                        Register
                    </Button>
                </Paper>
            </div>
        </div>
    </section>
)