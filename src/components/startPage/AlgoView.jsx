import React,{Fragment,useEffect,useState,Component} from 'react'
import {Grid,Container,Dialog,Chip,Paper} from '@material-ui/core'
import '../css/AlgoView.css'
import SortSpecifier from '../algorithms/sort_specifier';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
let i=0,j=0;
export default(props)=>{
    const globalSize=300;
    const [opa,setOpa]=useState(false)
    const [speed,setSpeed]=useState(10000);
    const [chips,setChips]=useState([400,135,456,234]);
    const [sortProcess,setProcess]=useState(false)
    const [sortType,setSortType]=useState('none');
    const [sort,setSorts]=useState([ 'Bubble Sort','Merge Sort','Selection Sort','Insertion Sort','Quick Sort'])
    const randomIntFromInterval=(min,max)=>Math.floor( Math.random()*( max - min + 1 ) + min )
    const randomiseInput=(param)=>{
        const temp=new Array(); 
        for(var i=0;i<param*6;i++){
            temp[i]=5*randomIntFromInterval(0,100);
            setChips(temp);
            var temp_speed=parseInt(1000/param);
            setSpeed(temp_speed);
        }
        console.log("speed = ",speed)
    }
    const handleInputSlider=(e)=>{
        console.log(e.target.value)
        randomiseInput(e.target.value)
    }
    const handleVisualise=()=>{
        if(chips.length==0){
            alert('please hit randomise input');
            return;
        }
        if(sortType=='none'){
            alert('please select a sort type');
            return;
        }
        if(sortType!='none'){
            console.log('speed = ',parseInt(speed));
            const sortObject=new SortSpecifier(sortType,chips,parseInt(speed));
            sortObject.setMethod();
            setProcess(true);
        }
    }
    const handleSort=(e)=>{
        console.log(e.target.id,"is selected");
        setSortType(e.target.id);
        setSorts(sort.filter((method)=>(method.split(' ').join('')===e.target.id)))
    }
    const handleRefresh=()=>{
        setSortType('none')
        randomiseInput(4);
        setSorts(['Bubble Sort','Merge Sort','Selection Sort','Insertion Sort','Quick Sort'])
        setProcess(false)
    }
    const handleClose=()=>setOpa(false)
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
                            onClick={handleSort}
                            id={`${value.split(' ').join('')}`}>
                            {sort[index]}
                            </div>    
                        )    
                    })
                }   
                </div>
            </Grid>  
            <Grid item xs>
                <div className='algo-div container'>
                    <Paper>    
                    {/* <IOSSlider aria-label="ios slider" valueLabelDisplay="on" onHold={handleInputSlider} /> */}
                    </Paper>
                </div>
            </Grid>
            <Grid item xs className="adjuster">
            {   
                <Fragment>
                <div className="adjuster-div">{
                    (!sortProcess)?(
                        <span className="custom-button visualise" onClick={handleVisualise} style={{pointerEvents:'none'}}>Visualise</span>
                    ):(
                        <span className="custom-button visualise other-sort-offer" onClick={handleRefresh}>Try Other Sort</span>
                    )
                }
                    <div className="custom-button visualise random-input" onClick={randomiseInput} disable="true">
                        Randomise Input                     
                        <input type="range" min="4" max="50" defaultValue="4" onChange={handleInputSlider} className="input-slider"></input>

                    </div>
                </div>
                </Fragment>
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
