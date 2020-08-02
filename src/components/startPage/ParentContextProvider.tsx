import React,{useState,Component,createContext} from 'react'
import {Grid, TextField,Container,Dialog} from '@material-ui/core'
import '../css/startHome.css'
//@ts-ignore
export const ParentContext=createContext();
export const ParentProvider=(props)=>{
    const [open,setOpen]=useState<any>(true)
    
    return(
        <ParentContext.Provider value={{open,setOpen}}>
            {props.children}
        </ParentContext.Provider>
    )
}