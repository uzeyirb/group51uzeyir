var letters = 'abcdefghijklmnoprstuvwxyz';

for(let letter of letters){
    let x = document.createElement('button');
    x.innerHTML = letter.toUpperCase();
    x.addEventListener('click', function (){
      startGame(letter);
    });

    document.querySelector('#X').append(x);
}

class Game {
    compChoice = '';
    userChoice = '';
    wins = 0;
    losses = 0;
    letters = 'abcdefghijklmnoprstuvwxyz';
    selectLetterRandomly (){
        var index = Math.floor(Math.random() * this.letters.length);
        this.compChoice = this.letters[index];
    }

    compare(){
        return this.userChoice === this.compChoice;
    }

    setUserChoice (userChoice){
        this.userChoice = userChoice;
    }
    printStats(){
        console.log("Komputerin Secimi", this.compChoice);
        console.log("Userin secimi", this.userChoice);
        console.log("Sizin qalibiyyetleriniz", this.wins);
        console.log("Sizin meglubiyyetleriniz", this.losses);
        console.log("=======================");

    }

}


function startGame (letter){
    game.setUserChoice(letter);
    game.selectLetterRandomly();
    if(game.compare()){
        alert("You won!");
        game.wins++;
    }else { 
        alert("You loose!")
        game.losses++;
    }
    game.printStats();
}

const game = new Game();



























//     ad: "Adam",
// var a = {
//     sayHello: function (){
//         return "Salam";
//     },
//     sayGoodbye: function (){
//         this.sayHello();
//     }
// }

// console.log('test');

// CHALLENGE 3
// You should find how many time  repeating   number of "3" in the store array
//  2.  var  store =[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//  3. expecting output :  4

// var  store =[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// function repeatCount(arr, value){
// var count = 0;
// arr.forEach((val) => (val === value && count++ ));
// return count;
// }

// console.log( "repeatCount", repeatCount(store, 3));



// class Car  {
//     constructor(manufacturer, ){
//     this.manufacturer = manufacturer;
//     this.model = model;
//     this.price = price;
//     this.mileage = milage;
//     this.isEngineOn = isEngineOn;
//     this.isBroken = this.isBroken
// }
// turnOn () {
//         this.isEngineOn = true;
//         this.printState();
//     };
//     turnOff () {
//         this.isEngineOn = false;
//         this.printState();
//     };
// brake () {
//     };
//     travel () {
//     };
//     printState() {
//         console.log("=====================");
//         console.log(car.manufacturer, car.model, car.price);
//         console.log("Mileage:", car.mileage);
//         console.log("Is engine on?", car.isEngineOn);
//         console.log("is car broken?", car.isBroken);
//         console.log("======================")
//     }
// }
// window.onkeypress = function (e) {
//     if (e.key === 'r') {
//         car.turnOn();
//     } else if (e.key === 't') {
//         car.turnOff();
//     }
// }
// // var personal = {
// //     name: 'John',
// //     surname: 'Doe',
// //     age: 45,
// //     married: false
// // }

// // var arr = Object.keys(personal);

// // var arr1 = Object.values(personal);

// // var arr2 = Object.values(personal);


// // console.log('arr2', arr2);

// // var titleDate = document.querySelector("#titleDate")

// // titleDate.dataset.age = 34;

// // console.log(titleDate);



// // var obj1 = {
// //     name: 'Obj1',
// //     age: 45,

// //     zengEt: function () {
// //         console.log('Zeng edilir....');
// //     }
// // }

// // function stop() {
// //     this.zengEt();
// //     //console.log("stop", this);
    
// // }

// // stop.call(obj1);



// // var a = {
// //     name: 'Obj1',
// //     show: function(){
// //         console.log("show this", this);

       
// //        var B = () => {
// //             console.log("this b", this);
// //         }
// //         B();
// //     }
// // }

// // a.show();

// // var car1 = {
// //   marka: "BMW",
// //   model: "X6",
// //   year: 2007,
// //   isNew: false,
// //   img: null,
// //   speed: 0,
// //   models: [
// //     {
// //       name: "X5",
// //       engine: 'M'
// //     },
// //     {
// //         name: "525",
// //         engine: '540'
// //       },
// //   ],

// //   start: function(suret){
// //       if(suret >= 50){
// //           console.log("Yavas biraz");
// //           console.log(this);
// //       }
// //       this.speed = suret;
// //       console.log(`Masin yerinden goturuldu!!! ${this.speed} km/s`)
// //   }
// // };
// // car1.start(55);
// // console.log(car1.models[0].name);
// // function test(){
// //     console.log(this);
// // }
// // test()
// // const arr =['a', 'b', 'c', 'd', 'e', 'f'];
// // const newArr = arr.map(e => {
// //     if (e === arr[1]){
// //         return arr[4];
// //     }else if( e === arr[4]){
// //         return arr[1]
// //     }
// //     return e;
// // })
// // console.log("arr", arr);
// // console.log("newArr", newArr);
// // var personal = {
// //   name: "Adam",
// //   age: 27,
// //   address: ["filan street", "state", "zip code"],
// //   children: [
// //     {
// //       name: "Marry",
// //       age: 5,
// //     },
// //     {
// //       name: "Joe",
// //       age: 3,
// //     },
// //   ],
// //   married: true,
// // };
// // for (key in personal) {
// //   console.log(personal[key]);
// // }
// // // console.log(personal.name);
// // // console.log(personal.children[1]);
