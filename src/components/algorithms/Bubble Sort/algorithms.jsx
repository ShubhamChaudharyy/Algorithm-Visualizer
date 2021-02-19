import handleDom from '../Merge_Sort/handleDom'
class Algorithms {
    constructor(arr){
        this.arr=arr
        this.Animations=[]
        this.chips=arr
        this.start=0;
        this.start2=0;
    }
    test=()=>{
        for(var i=this.start;i<this.Animations.length;i++){
            const points={...this.Animations[i]};
            this.visualiseBubbleSort(points);
        }
    }
    visualiseBubbleSort=(points)=>{
        setTimeout(()=>{
            handleDom.msp_low(points.left);
            handleDom.msp_high(points.right)
            setTimeout(()=>{
                    if(this.arr[points.left]>this.arr[points.right]){
                        handleDom.msp_swap(points.left,points.right,this.arr)
                        var temp=this.arr[points.left];
                        this.arr[points.left]=this.arr[points.right];
                        this.arr[points.right]=temp;
                    }
                    setTimeout(()=>{
                        handleDom.msp_low_reset(points.left);
                        handleDom.msp_high_reset(points.right);
                        this.start2++;
                        if(this.start2>=99-this.start){
                            document.getElementById(`${points.right}`).style.backgroundColor='blue !important'
                            this.start++;
                            this.start2=0;
                        }
                        this.bubbleSort();     
                    },20)
            },20)
        },20)
    }
    bubbleSort=()=>{
        for(var j=this.start2;j<=98-this.start;j++){
            this.visualiseBubbleSort({left:j,right:j+1});
            return;
        }
    }
}
export default Algorithms

