import React,{Fragment,useEffect,useState,Component, useContext} from 'react'
import {Grid} from '@material-ui/core'
import * as Icons from '@material-ui/icons'
import Modal from './AlgoView'
import {ParentContext} from './ParentContextProvider'
import '../css/MainPage.css' 
export default()=>{
    //@ts-ignore
    const [open,setOpen]=useState<any>(false);
    const handleModal=()=>{
        setOpen(true)
    }
    return(
    <div className='parent-start-page'>
        <div className="child">
            <Grid container className="grid parent">
                <Grid item xs className="child">
                    <div className='about-developer'>
                        <p>
                        <span className="heading">Algorithm Visualizer</span><br/>
                        <div className='developer-words'>
                            Hi, <br/>My name is Subham choudhary
                            , I made this WebApp by taking into 
                            consideration that sometimes it is 
                            easier to Visualise an Algo before 
                            starting to Code the Algo,Therefore 
                            there will be Sorting and Pathfinding Algorithms 
                            on This App that actually fullfills the motive 
                            of this project . If you liked this project then do
                            give it try and star on github. Also you can contribute and
                            add more algos to this project as the code will be Open Source.
                            All Feature ideas and requests will be accepted.
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
                                <p className="btn-text" onClick={handleModal}>
                                Visualise
                                </p>
                            <br/>
                            </div>
                            <div className="custom-button login-view github-star">
                                <p className="btn-text" >
                                    Star on Github
                                </p>
                            <br/>
                            </div>
                        </Grid>
                        </p>
                    </div>
                </Grid>
            </Grid>
        <Modal open={open}/>
        </div>
    </div>
)
}
