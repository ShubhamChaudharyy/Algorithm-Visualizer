import React,{Fragment,useEffect,useState,Component} from 'react'
import {Grid,TextField,Container,Dialog,Chip,Paper} from '@material-ui/core'
import '../css/AlgoView.css'
import SelectInput from '@material-ui/core/Select/SelectInput'
let i=0,j=0;
export default()=>{
    const [chips,setChips]=useState<any[]>([])
    const [clicked,setClicked]=useState<any>(false)
    const [tempArray,setTempArray]=useState<any[]>([])
    const [label,setLabel]=useState<any>('Visualise')
    const [done,setDone]=useState<any>(false)
    const [method,setMethod]=useState<any>('none')
    const [sort,setSorts]=useState<any[]>(['Selection Sort',
    'Bubble Sort','Insertion Sort',
    'Quick Sort','Heap Sort','Bucket Sort',
    'Counting Sort','Radix Sort','Merge Sort'])
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
        let temp=tempArray[a];
        tempArray[a]=tempArray[b];
        tempArray[b]=temp;
        }
        setTimeout(()=>{
        //@ts-ignore    
        document.getElementById(`${a}`).style.backgroundColor=`#16f024`;document.getElementById(`${b}`).style.backgroundColor=`#16f024`
        if(a==tempArray.length-2-x)
        {j=0;i=x+1;}
        else
        {j=b;i=x;}
        handleCheck();
        },0)
        },0)
        },0)
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
        if(chips.length<10 || !clicked){
            alert('hey...select a method')
        }
        else{
            if(chips.length>=10 && clicked && !done){
                console.log(method,"is performing!!!!!11")
                setDone(true)
                setLabel("Try Other Method")
                i=0;j=0;
                bubble();
            }
            else{
                setLabel('Visualise') 
                setChips([])
                setClicked(false) 
                setDone(false);
            }
        }
    }
    const randomiseInput=()=>{
        var Array:any[]=[]
        for(let i=0;i<60;i++)
           Array.push(randomIntFromInterval(50,310))
        setChips(Array) 
        setTempArray(Array)  
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
            <Dialog open={true}
            maxWidth='xl'
            aria-labelledby="form-dialog-title" 
            disableBackdropClick={false}>
            <div className="grid-parent">  
            <Grid item xs container className="parent-eq-padding">
            <div className="sorting-topics-div">
            {
                sort.map((value,index)=>{
                return(
                <div className={` sorting-topics`} 
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
            <div className="custom-button visualise" onClick={randomiseInput}>
            Random Input
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
