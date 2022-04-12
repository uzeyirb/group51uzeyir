// function sum(){
//   return 10;
// }

// var a = sum();

// console.log(a);

// function sum(gelenArr) {
//   var total = 0;
//   for (el of gelenArr){
//     total += el;
//   }
//   return total;

// }

// function multiple(num, sumArr){
//   return num * sum(sumArr);

// }

// var result = multiple(100, [2, 5, 7, 4]);

// console.log(result);

// function ziyaniHesablayan(satisArray){
  
//   var totalSalary = sum(satisArray);

//   if(totalSalary > 100){
//     return "Good Sales";
//   } else if (totalSalary >= 50 && 100 >= totalSalary) {
//     return "Normal sales";
//   } else {
//     return "Very bad sales";
//   }

// }

// console.log(ziyaniHesablayan([100, 1]));

// var a = [1, 2, 4];

// var b = [... a];  //spread operator

// b[1] = 100
// a[1] = 105

// console.log("a", a);
// console.log("b", b);
 
// var a = ['adam', 2, 4];

// var b = [];


// for(el of a ){
//   console.log(el);
//   b = [...b, el]
//   console.log(b);
// }

function test(a, b, c){
  console.log(arguments);
  
}

test();
