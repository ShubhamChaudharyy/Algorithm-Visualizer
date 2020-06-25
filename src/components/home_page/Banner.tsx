import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Paper,Grid,Button} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
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

export default()=>(
    <section className='banner navbar-after'>
       <div className='inner-body'>
        <AppBar position="static" className='navbar'>
            <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu" className="hamburger">
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" >
                    News
                </Typography>
            </Toolbar>
        </AppBar>
        <Grid container spacing={1}>
            <Grid item xs={2} className='sidebar'>                
                <div className='fixed-sidebar'>
                    <ProfilePhoto/>
                    <ListView/>
                </div>
            </Grid>
            <Grid item xs={8}>
            
            </Grid>
        </Grid>
        </div>
    </section>
)