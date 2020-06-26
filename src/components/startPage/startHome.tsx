import React,{useEffect,useContext,useState,Fragment} from 'react'
import {Grid, TextField,Container} from '@material-ui/core'
import * as Icons from '@material-ui/icons'
import '../css/startHome.css'
export default()=>{
    const [loginview,SetLoginview]=useState<any>(true)
    const handleLoginView=()=>{
        SetLoginview(true)
    }
    const handleRegisterView=()=>{
        SetLoginview(false)
    }
    return(
    <div className='parent-start-page'>
    <div className='start-page'>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className='about-developer'>
                        <p>
                        <span style={{fontSize:'90px',fontWeight:600}}>TaskForce</span><br/>
                        <div className='developer-words'>
                            Hi, <br/>My name is Subham choudhary
                            , I made this WebApp by taking into 
                            consideration that sometimes it is 
                            difficult to manage teammates and 
                            assign tasks simply through chat 
                            applications therefore this webApp 
                            allows you to assign task to teamamtes 
                            and analyse their activity by being the Admin or Leader 
                            of the whole team.
                        </div>
                        <div className="custom-button contribute">
                            Contribute
                        </div>
                        <div className="follow">
                            <p>Follow Me</p>
                            <br/>
                        </div>
                        <div className="all-icons">
                            <Icons.Facebook/> &nbsp;<Icons.GitHub/>   
                        </div>
                        </p>
                </div>
            </Grid>
            <Grid item xs={6}>
                
                <div className='every-other-stuff'>
                    <Container fixed style={{marginTop:"100px"}}>
                        <Grid spacing={1}  
                        container
                        direction="row"
                        justify="center"
                        alignItems="center">
                            <Grid item xs={8}>
                            <TextField 
                            id="outlined-basic" 
                            label="e-mail" 
                            variant="outlined" 
                            className="outlined-input"/>
                            </Grid>
                            <Grid item xs={8}>
                            <TextField 
                            id="outlined-basic" 
                            label="password" 
                            variant="outlined" 
                            className="outlined-input"/>
                            </Grid>
                            {(!loginview)
                            ?
                            <Fragment>
                            <Grid item xs={8}>
                            <TextField 
                            id="outlined-basic" 
                            label="confirm password" 
                            variant="outlined" 
                            className="outlined-input"/>
                            </Grid>
                            <Grid item xs={8}>
                            <TextField 
                            id="outlined-basic" 
                            label="username" 
                            variant="outlined" 
                            className="outlined-input"/>
                            </Grid>
                            </Fragment>
                            :
                            <p></p>
                            }
                        </Grid>
                        <div className="custom-button register" onClick={handleRegisterView}>
                            Register
                        </div>
                        <div className="custom-button register" onClick={handleLoginView}>
                            Login 
                        </div>
                    </Container>
                </div>
            </Grid>
        </Grid>
    </div>
    </div>
)
}