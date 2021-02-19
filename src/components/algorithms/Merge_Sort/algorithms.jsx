import handleDom, { msp_swap } from './handleDom'
class Algorithms {
    constructor(arr,speed){
        this.arr=arr
        this.Animations=[]
        this.chips=arr
        this.start=0;
        this.speed=speed;
    }
    test(start){
        var i=0;
        for(i=start;i<this.Animations.length;i++){
            const points={...this.Animations[i]};
            this.visualiseMergeSort(points)
            return
        }
        console.log(this.arr)
    }
    clear(){
        this.AnimationsPoints=[]
    }
    visualiseMergeSort(points){
        setTimeout(()=>{
            var temp_array=[]
            handleDom.msp_low(points.low)
            handleDom.msp_high(points.high)
            setTimeout(()=>{
                handleDom.msp_low_reset(points.low)
                handleDom.msp_high_reset(points.high)
                    setTimeout(()=>{
                        var mid=parseInt((points.low+points.high)/2)
                        var info={
                            low1:points.low,
                            low2:mid+1
                        }
                        while(info.low2<=points.high){
                            var target=this.arr[info.low2];
                            for(var i=info.low2-1;i>=points.low;i--){
                                if(target<this.arr[i]){
                                    handleDom.msp_swap(i,i+1,this.chips);
                                    var temp=this.arr[i];
                                    this.arr[i]=this.arr[i+1];
                                    this.arr[i+1]=temp;
                                }
                            }
                            info.low2++;
                        }
                    },this.speed)
                this.start++;
                this.test(this.start)
            },this.speed)
        },this.speed)
    }
    recurse(low,high){
        this.Animations.push({low,high})
    }
    mergeSort(low,high){
        if(low >=high )
        return
        var mid=parseInt((low+high)/2);
        this.mergeSort(low,mid);
        this.mergeSort(mid+1,high);
        this.recurse(low,high);
    }
}
export default Algorithms

