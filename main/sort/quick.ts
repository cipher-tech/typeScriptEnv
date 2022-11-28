class QuickSort {

    // constructor(array: number[], left: number, right: number){
    //     this.sort(array, left, right)
    // }
    

    pivot(array: number[], start: number, end: number){
        const swap = (array: number[], idx1: number, idx2: number) => {
            [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
        }
        start = 0;
        end = array.length - 1; 

        let pivotIndex = array[start];
        let swapIndex = start;

        for (let i = start + 1; i <= end; i++) {
            const element = array[i];

            if(pivotIndex > element){
                swapIndex++;
                swap(array, swapIndex, i);
            }
        }
        swap(array, start, swapIndex,)
        
        return swapIndex;
    }

    sort = (array: number[], left: number, right: number) => {
        left = left || 0;
        right = right|| array.length-1;
        
        if(left < right){
            let pivot = this.pivot(array, left, right);

            //left 
            this.sort(array, left, pivot - 1);

            //right 
            this.sort(array, pivot + 1, right);
        }

        return array;
    }
}

// const quick = new QuickSort();
const arr = [3,1];

// console.log(quick.pivot(arr, 0, arr.length-1));
// console.log("quick", quick.pivot(arr, 0, arr.length-1));

export default QuickSort
