import React,{Fragment,useEffect,useState,Component} from 'react'
import {Grid,TextField,Container,Dialog,Chip,Paper} from '@material-ui/core'
import '../css/AlgoView.css'
export default()=>{
    const [chips,setChips]=useState<any[]>([])
    const [clicked,setClicked]=useState<any>(false)
    const [label,setLabel]=useState<any>('Visualise')
    const [done,setDone]=useState<any>(false)
    const [method,setMethod]=useState<any>('none')
    const [sort,setSorts]=useState<any[]>(['Selection Sort',
    'Bubble Sort','Insertion Sort',
    'Quick Sort','Heap Sort','Bucket Sort',
    'Counting Sort','Radix Sort','Merge Sort'])
    const handleInput=async(e)=>{
        if(e.keyCode==13){
        setChips([...chips,e.target.value]) 
        e.target.value=''
        }
        else
        console.log(e.target.value)
    }
    const handleVisualise=()=>{
        if(chips.length<10 || !clicked){
            alert('hey...select a method')
        }
        else{
            if(chips.length>=10 && clicked && !done){
                console.log(method,"is performing!!!!!11")
                setDone(true)
                setLabel("Try Other Method")
            }
            else{
                setLabel('Visualise') 
                setChips([])
                setClicked(false) 
                setDone(false);
            }
        }
    }
    const handleSort=params=>(e)=>{
        setMethod(params)
        setClicked(true)
    }
    const handleDelete=params=>()=>{
        setChips((chips)=>chips.filter(chip=>chip!=params))
        console.log(params)
    }
    return(
        <div>
        {(true)?
        <Fragment>
            <Dialog open={false}
            maxWidth='xl'
            aria-labelledby="form-dialog-title" 
            disableBackdropClick={false}>
            <div className="grid-parent">  
            <Grid item xs container className="parent-eq-padding">
            <div className="sorting-topics-div">
            {
                sort.map((value,index)=>{
                return(
                <div className={`${index} sorting-topics`} 
                //@ts-ignore
                onClick={handleSort(value)}>
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
            <TextField
            id="standard-basic"
            className="user-input"
            onKeyDown={handleInput}
            placeholder="Input"
            tabIndex={0}
            />
            <div className="custom-button visualise" onClick={handleVisualise}>
            {label}
            </div>
            </Paper>  
            </Grid>
            </Container>
            </div>
            </Grid>
            <Grid item xs className="algoview-parent">
            <Paper
            className="algo-view"
            elevation={3}
            >
            {   
            chips.map((value,index)=>{
                return(
                <div 
                className="sorting-towers"
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
