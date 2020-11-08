import React,{Fragment,useEffect,useState,Component} from 'react'
import {Grid,Container,Dialog,Chip,Paper} from '@material-ui/core'
import '../css/AlgoView.css'
import Algorithms from '../algorithms/algorithms'
let i=0,j=0;
export default(props)=>{
    const [opa,setOpa]=useState(false)
    const [chips,setChips]=useState ([])
    const [clicked,setClicked]=useState(false)
    const [blockDelete,setBlockDelete]=useState(false)
    const [tempArray,setTempArray]=useState ([])
    const [done,setDone]=useState(false)
    const [method,setMethod]=useState('none')
    const [sort,setSorts]=useState ([
    'Bubble Sort','Merge Sort','Selection Sort','Insertion Sort','Quick Sort'])
    const randomIntFromInterval=(min,max)=>Math.floor( Math.random()*  ( max - min + 1 ) + min )
    const swap=(x,a,b)=>{
        setTimeout(()=>{
            document.getElementById(`${a}`).style.backgroundColor="red";
            document.getElementById(`${b}`).style.backgroundColor="red";
                setTimeout(()=>{
                    if(tempArray[a]>tempArray[b]){    
                        document.getElementById(`${a}`).style.height=`${chips[b]}px`;
                        document.getElementById(`${b}`).style.height=`${chips[a]}px`;
                        let odd=tempArray[a];
                        tempArray[a]=tempArray[b];
                        tempArray[b]=odd;
                    }
                    setTimeout(()=>{
                        document.getElementById(`${a}`).style.backgroundColor=`#16f024`;
                        if(a==tempArray.length-2-x){
                            j=0;
                            i=x+1;
                            document.getElementById(`${b}`).style.backgroundColor=`#2778e8 `
                        }
                        else if(x==tempArray.length-1){
                        document.getElementById(`${a}`).style.backgroundColor=`#2778e8`;
                        document.getElementById(`${b}`).style.backgroundColor=`#2778e8`
                        }
                        else{
                            j=b;
                            i=x;                        
                        } 
                        handleCheck();
                    },300)
                },300)
        },300)
    }
    const handleCheck=()=>{
        if(i==9 && j==0)
        return
        else
        bubble()
    }
    const bubble=()=>{
        for(let m=i;m<chips.length;m++){
            for(let k=j;k<=chips.length-m-1;k++){
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
    const checkArray=()=>{
        console.log(chips,tempArray)
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
            checkArray()
        }
    }
    const randomiseInput=()=>{
        var Array=[]
        for(let i=0;i<200;i++)
        Array.push(randomIntFromInterval(50,300))
        setChips(Array) 
        setTempArray(Array)  
    }
    const handleSort=params=>(e)=>{
        setMethod(params);
        document.querySelector('.sorting-topics').style.backgroundColor='white';
        document.querySelector('.sorting-topics').style.color='#2778e8';
        document.getElementById(`${e.target.id}`).style.backgroundColor='#2778e8';
        document.getElementById(`${e.target.id}`).style.color='white'
        console.log(e.target.id)
        setClicked(true)
    }
    const handleClassCheck=()=>{
        const NewArray=tempArray;
        const test=new Algorithms(NewArray)
        test.mergeSort(0,199);
        test.test(0)
    }
    const handleDelete=params=>()=>{
        if(!blockDelete){
            setChips((chips)=>
            chips.filter(chip=>chip!=params)
            )
            setTempArray((tempArray)=>
            tempArray.filter(temp=>temp!=params)
            )
        }
    }
    const handleClose=()=>{
        setOpa(false)
    }
    useEffect(()=>{
        if(props.open==true)
            setOpa(true)
        
    })
    return(
        <div>
        {(true)?
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
            {   (chips.length)?(
                    <Fragment>
                    <div className="adjuster-div">
                    <span className="custom-button visualise" onClick={handleVisualise}>Visualise</span>
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
                <button onClick={handleClassCheck}>

                </button>
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
