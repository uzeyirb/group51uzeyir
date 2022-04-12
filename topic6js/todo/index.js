var formButton = document.querySelector("#submitForm");
var fullName = document.querySelector("#fullName");
var showData = document.querySelector("#showData");
var tableRow = document.querySelector("table tbody");
var infoData = [];

formButton.addEventListener("click", addTodo);

fullName.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    addTodo();
  }
});

function addTodo(e) {
    if(fullName.value.trim().length ===0){
        alert("Get yaxsi doldur");
        return;
    }
  infoData = [...infoData, fullName.value];
  fullName.value = "";
  renderTable();
}

function renderTable() {
  console.log(infoData);
  // var tbody = document.createElement("tbody");
  tableRow.innerHTML = "";
  for (i in infoData) {
    console.log("Xos gelin", infoData[i]);

    var tr = document.createElement("tr");

    tr.innerHTML = `
    <th scope="row">${+i + 1}</th>
    <td>${infoData[i]}</td> `;

    tableRow.appendChild(tr);
  }
}

// window.onkeydown = function(e){
//     if(e.key === "Enter"){
//         addTodo();
//     }
// }
