// import frequencyCounter from "./frequencyCounter";

// import missingInteger from "./missingIntOpt";
// import permCheck from "./permCheck";
// import turingTest, { validInput } from "./turingTest";

// // console.log(frequencyCounter([1,1,3,3,4], [1,4,9,16]));

// // const arr = [5,6,3,12,45,5,5,2,1,777,88,9,26,45];
// // let res = quick(arr);
// // const sortQuick = new quick();
// // console.log(new quick(arr, 0, arr.length-1));
// // console.log("quick", res);

// // // let A =  ["5", "-2", "4", "C", 'D', "9", "+", "+"]; 
// // let A =  [1, 2,3,4, 5]; 
// // // let A = '{()}'
// // console.log("turn ::::::::", permCheck(A));

// const numberToGuess = 9
// let numberOfTries = 3
// const userInputList = [2,3,1]
// //get user input
// let userInput = 9

// if(userInput === userInputList[0]){
//     console.log("That was your last input");
// }else if(userInput !== numberToGuess){
//     numberOfTries++;
//     console.log("Wrong guess, try again");
// }else{
//     console.log("you guessed the number.", numberToGuess);
// }

import fs from "fs";
import {promisify} from 'util'

// fs.readFile(__dirname + '/../fileToRead.txt', (error, data) => {
//     if (error) {
//         throw error;
//     }
// console.log(data.toString());
// });

// const readFile = promisify(fs.readFile);
// const writeFile = promisify(fs.writeFile);
// const appendFile = promisify(fs.appendFile);
// const renameFile = promisify(fs.rename);

// renameFile(__dirname + '/../fileToRead3.txt','fileToRead5.txt')
// appendFile(__dirname + '/../fileToRead1.txt', " this is me Appending to the file to the file")
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     throw err
// })

// readFile(__dirname + '/../fileToRead1.txt')
// .then((data) => {
//     console.log(data.toString());
// })
// .catch((err) => {
//     throw err
// })
