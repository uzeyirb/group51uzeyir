"use strict";

let a = [1, 2, 3, 4, 3];
let b = [3, 2, 1, 2, 1];

function compareTriplets(a, b) {
  // Write your code here

  let alice = 0;
  let bob = 0;
  for (let i = 0; i < b.length; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    } 
  }
  return [alice, bob];
}

let result = compareTriplets(a, b);

console.log("result", result);

// let candles = [4, 4, 1, 3];
// function birthdayCakeCandles(candles) {
//   // Write your code here
//   let max = 0;
//   let count = 0;
//   candles.forEach((el) => {
//     if (el > max) {
//       max = el;
//       count = 1;
//     } else if (el === max) {
//       count++;
//     }
//   });
//   return count;
// }
// console.log("birthdayCakeCandles", birthdayCakeCandles(candles));
// birthdayCakeCandles(candles);
// let s = "04:45:45PM";
// function timeConversion(s) {
//   // Write your code here
//   const arr = s.slice(0, 8).split(":");
//   console.log(arr);
//   arr[0] =
//     s.indexOf("PM") > -1
//       ? arr[0] == 12
//         ? "12"
//         : Number(arr[0]) + 12
//       : arr[0] == 12
//       ? "00"
//       : arr[0];
//   return arr.join(":");
// }
// timeConversion(s);
// console.log(timeConversion(s));
// function diagonalDifference(arr) {
//   // Write your code here
//   let n = arr.length;
//   let diagonal1 = 0;
//   let diagonal2 = 0;
//   for(let i = 0; i<n; i++){
//     for(let j =0; j<n; j++){
//       if( i === j){
//         diagonal1 += arr[i][j];
//       }

//       if( i + j === n -1){
//         diagonal2 += arr[i][j];
//       }
//     }
//   }
//   return Math.abs(diagonal1 - diagonal2);

// }
// function staircase(n) {
//   // Write your code here

//   for (let i = 1; i <= n; i++){
//     console.log(" ".repeat(n-i) + "#".repeat(i));
//   }
// }
// staircase(14);

// let arr = [1, 1, 0, -1, -1, 2, 3, 0, 4, 5, -1];

// function plusMinus(arr) {
//   let numberOfElements = arr.length;

//   let newArr = [];

//   let positive = 0;
//   let negative = 0;
//   let zero = 0;
//   for (let el of arr) {
//     if (el < 0) {
//       negative++;
//     } else if (el > 0) {
//       positive++;
//     } else {
//       zero++;
//     }
//   }
//   newArr.push(positive, negative, zero);

//   for (el of newArr) {
//     let num = (el / numberOfElements).toFixed(6);
//     console.log(num);
//   }
// }

// plusMinus(arr);
