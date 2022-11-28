const pivot = (array: number[] = [], start = 0, end = array.length - 1) => {
    const swap = (arr: number[], idx1: number, idx2: number) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    let pivot = array[start];
    let swapIndex = start;
    
    for (let i = start + 1; i <= end; i++) {
        const element = array[i];

        if(pivot > element){
            swapIndex++;
            swap(array, swapIndex, i);
        }
        
    }
    swap(array, start, swapIndex)
    return swapIndex;
}

// const pivot = (arr, start = 0, end = arr.length - 1) => {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }

//     let pivot = arr[start]
//     let swapIdx = start

//     for (let i = start + 1; i <= end; i++){
//         if(pivot > arr[i]){
//             swapIdx++
//             swap(arr, swapIdx, i)
//         }
//     }

//     swap(arr, start, swapIdx)
//     return swapIdx
// }
// const quickSort = (array: number[], left = 0, right = array.length - 1) => {

//     if(left < right){
//         let pivotIndex = pivot(array, left, right);

//         //left 
//         quickSort(array, left, pivotIndex! - 1)

//         //right  
//         quickSort(array, pivotIndex! + 1, right)
//         console.log("LOg", pivotIndex);
        
//     }
//     return array;
// }

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if(left < right){
        let pivotIndex = pivot(arr, left, right)// 3
        //left

        quickSort(arr, left, pivotIndex - 1)

        //right

        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

// let res1 = quickSort([5,6,3,12,45,5,5,2,1,777,88,9,26,45])
// console.log("res1", res1);

export default quickSort;

