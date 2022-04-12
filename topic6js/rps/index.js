var gameArray = ["r", "p", "s"];
var player1Score = 0;
var player2Score = 0;
var player1 = document.querySelector("#player1Img");
var player2 = document.querySelector("#player2Img");
var player1ScorePanel = document.querySelector("#player1ScorePanel");
var player2ScorePanel = document.querySelector("#player2ScorePanel");
var winInfoPanel1 = document.querySelector("#winGame1");
var winInfoPanel2 = document.querySelector("#winGame2");

function randomCompAttack(arr) {
  var randomNum = Math.floor(Math.random() * arr.length);

  return arr[randomNum];
}

var comp = randomCompAttack(gameArray);

function startGame(e) {
  var userAttack = e.key;
  var compAttack = randomCompAttack(gameArray);

  player1.src = `./img/${userAttack}.png`;
  player2.src = `./img/${compAttack}.png`;

  if (gameArray.indexOf(userAttack) === -1) {
    alert("Zehmet olmasa r, p, s herflerinden birini secin");
  }
  if (userAttack === "r" && comp === "s") {
    player1Score++
    player1ScorePanel.innerHTML = `Score: ${player1Score}`
    winInfoPanel1.innerHTML = "WIN";
    winInfoPanel2.innerHTML = "LOSE";
  } else if (userAttack === "s" && comp === "p") {
    player1Score++
    player1ScorePanel.innerHTML = `Score: ${player1Score}`
    winInfoPanel1.innerHTML = "WIN";
    winInfoPanel2.innerHTML = "LOSE";
  } else if (userAttack === "p" && comp === "r") {
    player1Score++
    player1ScorePanel.innerHTML = `Score: ${player1Score}`
    winInfoPanel1.innerHTML = "WIN";
    winInfoPanel2.innerHTML = "LOSE";
  } else if (userAttack === comp) {
    winInfoPanel1.innerHTML = 'DRAW'
    winInfoPanel2.innerHTML = 'DRAW'
  } else {
    player2Score++
    player2ScorePanel.innerHTML = `Score: ${player2Score}`
    winInfoPanel1.innerHTML = 'LOSE'
    winInfoPanel2.innerHTML = 'WIN'
  }
}

window.onkeydown = startGame;
