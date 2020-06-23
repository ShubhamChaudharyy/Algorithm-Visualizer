import React from 'react'
import {Grid} from '@material-ui/core'
import '../css/startHome.css'
export default()=>(
    <div className='parent-start-page'>
    <div className='start-page'>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className='about-developer'>
                        <p>
                        <span style={{fontSize:'70px',fontWeight:600}}>OpenTaskSprint</span><br/>
                        <div className='developer-words'>
                            Hi My name is Subham choudhary
                            , I made this WebApp by taking into 
                            consideration that sometimes it is 
                            difficult to manage teammates and 
                            assign tasks simply through chat 
                            applications therefore this webApp 
                            allows you to assign task to teamamtes 
                            and analyse their activity by being the Admin or Leader 
                            of the whole team.
                        </div>
                        <div className="custom-button">
                            About Developer
                        </div>
                        </p>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className='every-other-stuff'>
                    
                </div>
            </Grid>
        </Grid>
    </div>
    </div>
)