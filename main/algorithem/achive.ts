// import QuickSort from "./sort/quickFunction"

// const express = require('express')
// const createServer = require('http')
// const routes = require('./routes/index')

// const app = express(createServer)
// const port = 4100
// app.get('/ping', (req, res) => {
//     console.log("Ping test");
//     res.json("Pong")
// });

// app.use('/v1', routes);

// app.listen(port, () => {
//     console.log(":::::: Server started at port: ", port);

// })

// const pivot = (arr, start = 0, end = arr.length - 1) => {
//     const swap = (arr, idx1, idx2) => {
//         [ arr[ idx1 ], arr[ idx2 ] ] = [ arr[ idx2 ], arr[ idx1 ] ]
//     }
//     let pivot = arr[start];
//     let swapIndex = start

//     for (let i = start + 1; i <= end; i++) {
//         let element = arr[ i ];

//         if (pivot > element) {
//             swapIndex++;
//             swap(arr, swapIndex, i);
//         }
//     }
//     swap(arr, swapIndex, start)
//     return swapIndex
// }

// const quickSort = (arr, left = 0, right = arr.length - 1) => {
//     if (left < right) {
//         let pivotIndex = pivot(arr, left, right);

//         //left 
//         quickSort(arr, left, pivotIndex - 1)
//         //left 
//         quickSort(arr, pivotIndex +1, right)
//     }

//     return arr
// }

// const resQuick = QuickSort([5,6,3,12,45,5,5,2,1,777,88,9,26,45])

// let res = quickSort([5,6,3,12,45,5,5,2,1,777,88,9,26,45])

// console.log(res);
// console.log(resQuick);

// name
// reverse
// checked type
// removed trimmed words
// merged trimmed words and long words logic
// removed for loop to join results with
// used split array function to join results instead

const data = [
  {
    id: '98cafd563f418fa69497',
    due_date: '2023-09-13',
    status: 'paid'
  },
  {
    id: '98cafd563f418fa69497',
    due_date: '2023-09-15',
    status: 'paid'
  },
  {
    id: '98cafd563f418fa69497',
    due_date: '2023-09-17',
    status: 'paid'
  },
  {
    id: '98cafd563f418fa69497',
    due_date: '2023-09-19',
    status: 'Unpaid'
  },
  {
    id: '98cafd563f418fa69497',
    due_date: '2023-09-21',
    status: 'Unpaid'
  },
  {
    id: '98cafd563f418fa69497',
    due_date: '2023-09-23',
    status: 'Unpaid'
  },
  {
    id: '98cafd563f418fa69497',
    due_date: '2023-09-25',
    status: 'Unpaid'
  },
  {
    id: '98cafd563f418fa69497',
    due_date: '2023-09-27',
    status: 'Unpaid'
  },
];


const update = (data: []) => {
  const queue = [];
  const updated = data.map((dates:[]) => {
    if(dates.status.toLowerCase() === 'paid'){
      queue.push(dates.due_date);
      dates.due_date = null;
      return dates
    }
    if(queue.length < 1){
      return "queue is empty"
    }
    
    console.log(';::::::::::: queue', queue);
    
    const topQueueValue = queue.shift()
    console.log(';::::::::::: topQueueValue', topQueueValue);
    queue.push(dates.due_date);
    console.log(';::::::::::: queue push', queue);
    dates.due_date = topQueueValue
    return dates;
  })

  return updated
}

console.log("::::::::::: update", update(data));
