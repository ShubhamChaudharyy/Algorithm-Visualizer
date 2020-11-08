import handleDom, { msp_swap } from './handleDom'
class Algorithms {
    constructor(arr){
        this.arr=arr
        this.Animations=[]
        this.start=0;
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
                        var temp_start=0;
                        var mid=parseInt((points.low+points.high)/2)
                        var info={
                            low1:points.low,
                            low2:mid+1
                        }
                        while(info.low1<=mid && info.low2<=points.high){
                            if(this.arr[info.low1]<this.arr[info.low2]){
                                temp_array.push(this.arr[info.low1])
                                info.low1++;
                            }
                            else if(this.arr[info.low1]>=this.arr[info.low2]){
                                temp_array.push(this.arr[info.low2])
                                info.low2++;
                            }
                        }
                        while(info.low1<=mid){
                            temp_array.push(this.arr[info.low1]);
                            info.low1++;
                        }
                        while(info.low2<=points.high){
                            temp_array.push(this.arr[info.low2]);
                            info.low2++;
                        }
                        for(var i=points.low;i<=points.high;i++){
                            this.arr[i]=temp_array[temp_start];
                            handleDom.msp_swap(i,temp_array[temp_start])
                            temp_start++;
                        }
                    },60)
                this.start++;
                this.test(this.start)
            },60)
        },60)
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

