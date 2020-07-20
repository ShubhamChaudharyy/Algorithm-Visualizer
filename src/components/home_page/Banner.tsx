import React, { useEffect, Fragment } from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Paper,Grid,Button} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Facebook,Schedule,StoreRounded} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import '../css/Banner.css'
const ProfilePhoto=()=>{
    return(
    <div className="profile-photo">
        
    </div>
    )
}
const ListView=()=>{
    var array:any[]=[];
    array=["DASHBOARD","ACTIVITY","BUG OVERVIEW","TEAM MEMBERS"]
    return(
    <div className="list-div">
        { array.map((value,index)=>
            <div className="list-items">{value}</div>
            )
        }
    </div>
    )
}
const PaperView=()=>{
    var array:any[]=[]
    array=["BUGS SOLVED","BUGS ASSIGNED","ROLE IN TEAM","ACTIVITY LOG"]
    return(
   <Fragment>
        {
            array.map((value,index)=>
            <div>
                <Paper elevation={1} className="head-after-paper">
                    <Paper className='circ-paper'>
                        <Schedule style={{color:"white",margin:"8px 8px"}}/>
                    </Paper>  
                    <p className="paper-text">{value}</p>
                    <p className="paper-about">09</p>
                </Paper>
            </div>
            )
        }
    </Fragment>
    )
}

export default()=>(
    <section className='banner navbar-after'>
       <div className='inner-body'>
        
        <Grid container spacing={1}>
            <Grid item xs={2} className='sidebar'>                
                <div className='fixed-sidebar'>
                    <ProfilePhoto/>
                    <ListView/>
                </div>
            </Grid>
            <Grid item xs={10} className="parent-right">
                <Grid item xs={12} className="all-papers-adminPage">
                <PaperView/>
                </Grid>
                <Grid item xs={12}  className="activityChart">
                    <Grid xs={6}>
                        <Paper className="activity-page">
                            <p className="paper-heading">Activity Overview</p>
                            
                        </Paper>
                    </Grid>
                    <Grid xs={4}>
                        <Paper  className="notification" >
                            <p className="paper-heading notification-heading">Notifications</p>
                            <hr className="notif-after-hr"/>
                        </Paper>
                    </Grid>
                </Grid>     
            </Grid>
            
        </Grid>
        </div>
    </section>
)