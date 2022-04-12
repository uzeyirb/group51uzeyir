function maxEded(...arr){
  var num = 0

  for(el of arr){
    if(num < el){
      num = el
    }
  }
  return num
}


let a = maxEded(2, 43, 555);
console.log(a);








// (
//   function sayHello(){
//     console.log("Salam");
//   }

// )()

// function test(a, b, ...z){
//   console.log(a, b, z);
//   // var total = 0
//   // for (el of arguments){  
//   //   total += el 
//   // }
//   // return total
// }
// test(5, 4, 3 , 300, 102, 105);

// a[1] = 105
// var b = [222, ...a]
// console.log('a' , a);
// console.log('b', b);

// var b = []

// for(el of a){
//   console.log(el);
//   b = [...b, el]
//   console.log(b);
// }


// function salesCalc(salesArray){
//   var totalSalary = sum(salesArray);

//   if ( totalSalary > 100){
//     return "Good Sales"
//   } else if (totalSalary >= 50 && 100 < totalSalary){
//     return "Normal Sales"
//   }else{
//     return "Very bad sales"
//   }
// }

// console.log(salesCalc([100, 530, 5]));



// function sum(gelenArr){
//   var total = 0;

//   for( el of gelenArr){
//     total += el;
//   }
//   return total;
// }

// function multiple  (num, sumArr) {
//   return  num * sum(sumArr);
// }

// var result = multiple(100, [2, 5, 7]);



// console.log(result);


// console.log(b());

// function max(first = -Infinity, ...rest) {
//   let maxValue = first;

//   for (let n of rest) {
//     if (n > maxValue) {
//       maxValue = n;
//     }
//   }
//   return maxValue;
// }

// //This function takes a function and returns a wrapped version

// function timed(f) {
//   return function (...args) {
//     // Collect args into a rest parameter array
//     console.log(`Entering function ${f.name}`);
//     let startTime = Date.now;
//     try {
//       //Pass all of your args to the wrapped function
//       return f(...args); //Spread the args back out again
//     } finally {
//       //Before we return the wrapped return value, print elapsed time.
//       console.log(`Existing ${f.name} after ${Date.now() - startTime}ms`);
//     }
//   };
// }

// //Compute the sum of the numbers between 1 and n by brute force
// function benchmark(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) sum += i;
//   return sum;
// }

// //Now invoke the timed version of the test function
// timed(benchmark)(100000);









// console.log(max(1, 101, 2, 3, 2222));
// let o = {
//   m: function () {
//     let self = this;
//     this === o;
//     f();

//     function f() {
//       this === o;
//       self === o;
//     }
//   },
// };

// o.m();

// const printer = function printprops(o){
//     for(let p in o){
//         console.log(`${p}: ${o[p]}\n`)
//     }
// }

// let filtered = [1, null, 2, 3, "appke"].filter(x => x !== null);

// function hypetenuse(a, b) {
//     function square(x) {return x * x; }
//     return Math.sqrt(square(a) + square(b));
// }

// let calculator = {
//     operand1: 1,
//     opeand2: 1,
//     add(){
//         this.result = this.operand1 + this.opeand2;
//     }
// }
// calculator.add();
// const result = calculator.result;
// console.log("calculator is ", result);
