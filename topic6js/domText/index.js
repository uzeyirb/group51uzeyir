let data = [1, 2, 3, 4, 5, 6, 7, 8], sum = 0;
data.forEach(value => { sum += value});

console.log(sum);


let result = data.map( x => x * x);
console.log(result);

let firstFileter = data.filter( x => x < 4);
console.log(firstFileter);


let reducedSum = data.reduce( (x, y) => x + y, 0);
console.log("reducedSum", reducedSum);


let reduceMult = data.reduce( (x, y) => x * y , 1);
console.log("reduceMult", reduceMult);




// let sliceData = data.slice(0, 2);
// console.log("sliceData", sliceData);

// let spliceData = data.splice(6);

// console.log(spliceData);

// let spliceData2 = data.splice(1, 3);

// console.log(spliceData2);

let joinData = data.join("-");

console.log("joinData",joinData);

// let letters = [..."Hello World"]; //An array of letters

// let String = "";

// for(let letter of letters){
//     String += letter;
// }

// console.log(String);




// let everyOther = "";
// for(let [index, letter] of letters.entries()){
//     if(index % 2 === 0) everyOther += letter;
// }

// console.log(everyOther);


// let uppercase = "";

// letters.forEach(letter => {
//     uppercase += letter.toUpperCase();
// })

// console.log(uppercase);




// // var container = document.querySelector("body");

// // container.style.backgroundColor= "blue";

// // //Yaratdim
// // let aboutContent = document.createElement("div");

// // let aboutTitle = document.createElement("h1");

// // let aboutDesc = document.createElement("p");

// // let aboutImg = document.createElement("img");


// // //Elave olundu
// // container.appendChild(aboutContent);

// // aboutContent.append(aboutTitle, aboutDesc, aboutImg);

// // aboutTitle.innerHTML = "About Title"
// // aboutDesc.innerHTML= "Description of the title ......"
// // aboutImg.setAttribute("src", "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg")
// // aboutImg.style.width = "200px";

