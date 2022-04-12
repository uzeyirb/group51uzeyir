// function cemiHesablayan(){
//     var a = 5;
//     var b = 6;

//     console.log( "cem " + (a + b));
// }

// cemiHesablayan();

// function cevreSahesi(radius){
//     let pi = 3.14;
//     var result = radius * pi * 2;
//     return result;
// }

// console.log("radiusu 40 olan cever", cevreSahesi(20));

// function writeLogArray(arr) {
//   for (el of arr) {
//     console.log(el);
//   }
//   console.log("-------------------");
// }

// var heroes = [
//   "Wolverine",
//   "Spider-Man",
//   "Thor",
//   "Iron Man",
//   "Hulk",
//   "Captain America",
//   "Daredevil",
//   "Punisher",
// ];

// var brands = ["Apple", "Samsung", "Sony", "PS"];

// writeLogArray(brands);
// writeLogArray(heroes);

function saitlerQaytaran(soz){
    var result = [];
    var saitler = ["a", "e", "i", "o", "u"];
    for(el of saitler){
        if(soz.indexOf(el) !== -1){
            result.push(el);
        }
    }
    return result.join();
}

var userName = "Adam Edioo";

var netice = saitlerQaytaran(userName);
console.log(netice);