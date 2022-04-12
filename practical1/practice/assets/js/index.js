// var a = 0;
// while (a < 10) {
//   console.log("salam");
//   a = a + 1;
// }
//

// var arr = ["Salam", "Hola", "Hello", "Merhaba"];

// for (var  i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 10; j++) {
//     console.log("salam" + i + "--" + j);
//   }
// }

// var arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (var i = 0; i < arr.length; i++) {
// //    console.log(arr[i]);
//    for (var j = 0; j < arr[i].length; j++) {
//     console.log("salam " + arr[i][j]);
//   }
//   }

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var i = 0;

while (i < numbers.length) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
  i++;
}
