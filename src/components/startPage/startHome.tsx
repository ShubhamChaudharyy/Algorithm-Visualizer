import React,{useEffect,useContext,useState,Fragment} from 'react'
import {Grid, TextField,Container} from '@material-ui/core'
import * as Icons from '@material-ui/icons'
import '../css/startHome.css'
import LogReg from './modal_login_register'
export default()=>{
    const [loginview,SetLoginview]=useState<any>(true)
    const [open,setOpen]=useState<any>(false)
    const handleModal=param=>(e)=>{
        (param)?
        SetLoginview(true)
        :
        SetLoginview(false)  
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    return(
    <div className='parent-start-page'>
        <div className="child">
        <Grid container className="grid parent">
            <Grid item xs className="child">
                <div className='about-developer'>
                        <p>
                        <span className="heading">TaskForce</span><br/>
                        <div className='developer-words'>
                            Hi, <br/>My name is Subham choudhary
                            , I made this WebApp by taking into 
                            consideration that sometimes it is 
                            difficult to manage teammates and 
                            assign tasks simply through chat 
                            applications therefore this webApp 
                            allows you to assign task to teamamtes 
                            and analyse their activity by being the 
                            Admin or Leader 
                            of the whole team.Lorem Ipsum is simply 
                            dummy text of the 
                            printing and typesetting industry. Lorem Ipsum has been the 
                            industry's standard dummy text ever since the 1500s, when an 
                            unknown printer took a galley of type and scrambled it to make 
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
                            <Grid item xs className='button-grid'>
                                <div className="custom-button login-view">
                                <p className="btn-text" onClick={handleModal(true)} >LOGIN</p>
                                <br/>
                                </div>
                                <div className="custom-button login-view">
                                <p className="btn-text" onClick={handleModal(false)} >REGISTER</p>
                                <br/>
                                </div>
                            </Grid>
                        </p>
                </div>
            </Grid>
        </Grid>
        <LogReg open={open} loginview={loginview} />
    </div>
    </div>
)
}