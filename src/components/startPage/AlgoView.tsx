import React,{Fragment,useEffect,useState,Component} from 'react'
import {Grid,TextField,Container,Dialog,Chip,Paper} from '@material-ui/core'
import '../css/AlgoView.css'
import SelectInput from '@material-ui/core/Select/SelectInput'
import { render } from '@testing-library/react';
let i=0,j=0;
export default(props)=>{
    const [opa,setOpa]=useState<any>(false)
    const [chips,setChips]=useState<any[]>([])
    const [clicked,setClicked]=useState<any>(false)
    const [blockDelete,setBlockDelete]=useState<any>(false)
    const [tempArray,setTempArray]=useState<any[]>([])
    const [done,setDone]=useState<any>(false)
    const [method,setMethod]=useState<any>('none')
    const [sort,setSorts]=useState<any[]>([
    'Bubble Sort'])
    const randomIntFromInterval=(min,max)=>Math.floor( Math.random()*  ( max - min + 1 ) + min )
    const swap=(x,a,b)=>{
        setTimeout(()=>{
        //@ts-ignore
        document.getElementById(`${a}`).style.backgroundColor="red";document.getElementById(`${b}`).style.backgroundColor="red";
        setTimeout(()=>{
        if(tempArray[a]>tempArray[b]){    
        //@ts-ignore
        document.getElementById(`${a}`).style.height=`${chips[b]}px`;
        //@ts-ignore
        document.getElementById(`${b}`).style.height=`${chips[a]}px`;
        let odd=tempArray[a];
        tempArray[a]=tempArray[b];
        tempArray[b]=odd;
        }
        setTimeout(()=>{
        //@ts-ignore    
        document.getElementById(`${a}`).style.backgroundColor=`#16f024`;
        if(a==tempArray.length-2-x)
        {j=0;i=x+1;
        //@ts-ignore    
        document.getElementById(`${b}`).style.backgroundColor=`#2778e8 `}
        else
        {j=b;i=x;}
        handleCheck();
        },2000)
        },2000)
        },2000)
    }
    const handleCheck=()=>{
        bubble();
    }
    const bubble=()=>{
        for(let m=i;m<tempArray.length;m++){
            for(let k=j;k<tempArray.length-m-1;k++){
                swap(m,k,k+1);
                return;
            }
        }
    }
    const handleInput=async(e)=>{
        if(e.keyCode==13){
        setChips([...chips,e.target.value]) 
        setTempArray([...chips,e.target.value])
        e.target.value=''
        }
        else
        console.log(e.target.value)
    }
    const handleVisualise=()=>{
        if(!clicked){
            alert('hey...select a method')
        }
        else{
            if(clicked && !done){
                console.log(method,"is performing!!!!!11")
                setDone(true)
                setBlockDelete(true)
                i=0;j=0;
                bubble();
            }
            else{
                setChips([])
                setClicked(false) 
                setDone(false);
            }
        }
    }
    const randomiseInput=()=>{
        var Array:any[]=[]
        for(let i=0;i<10;i++)
           Array.push(randomIntFromInterval(50,310))
        setChips(Array) 
        setTempArray(Array)  
    }
    const handleSort=params=>(e)=>{
        //@ts-ignore
        setMethod(params);document.querySelector('.sorting-topics').style.backgroundColor='white';document.querySelector('.sorting-topics').style.color='#2778e8';document.getElementById(`${e.target.id}`).style.backgroundColor='#2778e8';document.getElementById(`${e.target.id}`).style.color='white'
        console.log(e.target.id)
        setClicked(true)
    }
    const handleDelete=params=>()=>{
        if(!blockDelete)
        {setChips((chips)=>chips.filter(chip=>chip!=params));
        setTempArray((tempArray)=>tempArray.filter(temp=>temp!=params))}
        console.log(chips,tempArray)
    }
    const handleClose=()=>{
        setOpa(false)
    }
    useEffect(()=>{
        if(props.open==true)
        setOpa(true)
    })
    //@ts-ignore
    render()
    {
    return(
        <div>
        {(true)?
        //@ts-ignore
        <Fragment>
            <Dialog open={opa}
            maxWidth='xl'
            aria-labelledby="form-dialog-title" 
            onClose={handleClose}
            disableBackdropClick={false}>
            <div className="grid-parent">  
            <Grid item xs container className="parent-eq-padding">
            <div className="sorting-topics-div">
            {   
                sort.map((value,index)=>{
                return(
                <div className="sorting-topics"
                //@ts-ignore
                onClick={handleSort(value)}
                id={`${value.split(' ').join('')}`}>
                {value}
                </div>    
                )    
                })
            }   
            </div>
            </Grid>  
            <Grid item xs>
            <div className='algo-div container'>
            <Container className="algo-contain">
            <Grid spacing={3}  
            container
            direction="column"
            justify="center"
            alignItems="center">     
            <Paper className="user-input-div" elevation={3}>
            {
                chips.map((value,index)=>{
                return(
                <li key={index}>
                <Chip
                className={`${index} indiv-chips`}
                label={value}
                clickable
                color="primary"
                onDelete={handleDelete(value)}
                />
                </li>
                )
                })
            }
            <div className="custom-button visualise" onClick={randomiseInput}>
            Randomise Input
            </div>
            </Paper>  
            </Grid>
            </Container>
            </div>
            </Grid>
            <Grid item xs className="adjuster">
            {(chips.length)?(
            <Fragment>
            <div className="adjuster-div">
            <span className="custom-button visualise" onClick={handleVisualise}>Visualise</span>
            {/* <span className="sort-adjuster">scroller</span> */}
            </div>
            </Fragment>
            ):(
            <div>{""}</div>    
            )
            }
            </Grid>
            <Grid item xs className="algoview-parent">    
            <Paper
            className="algo-view"
            elevation={3}
            >
            <br/>
            {   
            chips.map((value,index)=>{
                return(
                <div 
                className={`sorting-towers`}
                id={`${index}`}
                style={{height:`${value}px`}}
                >
                </div>
                )
            })    
            }
            </Paper>
            </Grid>
            </div>
            </Dialog> 
        </Fragment>
        :
        <div>{" "}</div>
        }  
        </div> 
    )
}
}
