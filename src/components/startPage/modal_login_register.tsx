import React,{Fragment,useEffect,useState,Component} from 'react'
import {Grid,TextField,Container,Dialog} from '@material-ui/core'
import { render } from '@testing-library/react'

export default(props)=>{
    const [close,setClose]=useState<any>(true)
    const handleClose=()=>{
        setClose(false)
    }
    return(
    <div>
        {(props.open==true)?
        <Fragment>
        <Dialog open={props.open && close} onClose={handleClose} className="modal" 
        aria-labelledby="form-dialog-title" 
        disableBackdropClick={false}>
        <Grid item xs>
                <div className='every-other-stuff'>
                    <Container className="login-register-view">
                        <Grid spacing={3}  
                        container
                        direction="column"
                        justify="center"
                        alignItems="center">
                            <Grid item xs>
                            <TextField 
                            id="outlined-basic" 
                            label="e-mail" 
                            variant="outlined" 
                            className="outlined-input"/>
                            </Grid>
                            <Grid item xs>
                            <TextField 
                            id="outlined-basic" 
                            label="password" 
                            variant="outlined" 
                            className="outlined-input"/>
                            </Grid>
                            {(props.loginview)?
                            <div className="custom-button register" >
                            Login 
                            </div>
                            :
                            <div>{" "}</div>
                            }
                            {(!props.loginview)
                            ?
                            <Fragment>
                            <Grid item xs>
                            <TextField 
                            id="outlined-basic" 
                            label="confirm password" 
                            variant="outlined" 
                            className="outlined-input"/>
                            </Grid>
                            <Grid item xs>
                            <TextField 
                            id="outlined-basic" 
                            label="username" 
                            variant="outlined" 
                            className="outlined-input"/>
                            </Grid>
                            <div className="custom-button register" >
                            Register
                            </div>
                            </Fragment>
                            :
                            <p></p>
                            }
                        </Grid>
                    </Container>
                </div>
            </Grid>
            </Dialog> 
        </Fragment>
        :
        <div>{" "}</div>
        }  
        </div> 
        )
}
