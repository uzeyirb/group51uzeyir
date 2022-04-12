"use strict"

let arr = [1, 1, 0, -1, -1, 2, 3, 0, 4, 5, -1];

function plusMinus(arr) {
  let numberOfElements = arr.length;

  let newArr = [];

  let positive = 0;
  let negative = 0;
  let zero = 0;
  let el = 0;
  for (el of arr) {
    if (el < 0) {
      negative++;
    } else if (el > 0) {
      positive++;
    } else {
      zero++;
    }
  }
  newArr.push(positive, negative, zero);

  for (el of newArr) {
    let num = (el / numberOfElements).toFixed(6);
    console.log(num);
  }
}

plusMinus(arr);
