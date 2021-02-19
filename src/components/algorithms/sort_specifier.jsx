import MergeSort from './Merge_Sort/algorithms';
import BubbleSort from './Bubble Sort/algorithms'
class SortSpecifier {
    constructor(method,arr,speed){
        this.method=method;
        this.arr=arr;
        this.speed=speed;
    }
    setMethod=()=>{
        if(this.method==='MergeSort'){
            var merge_sort_provider=new MergeSort(this.arr,this.speed);
            merge_sort_provider.mergeSort(0,this.arr.length-1);
            merge_sort_provider.test(0);
        } 
        else if(this.method==='QuickSort'){
            
        }
        else if(this.method==='BubbleSort'){
            var bubble_sort_provider=new BubbleSort(this.arr,this.speed);
            bubble_sort_provider.bubbleSort();
        }
        else if(this.method==='InsertionSort'){

        }
        else if(this.method==='SelectionSort'){

        }
    }
}
export default SortSpecifier