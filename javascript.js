var dice1 = document.querySelector("img");
var dicenum1 = Math.floor(Math.random() * 6) + 1;
var image1 = "images/dice" + dicenum1 + ".png";
dice1.setAttribute("src",image1);

var dice2 = document.querySelectorAll("img")[1];
var dicenum2 = Math.floor(Math.random() * 6) + 1;
var image2 = "images/dice" + dicenum2 + ".png";
dice2.setAttribute("src",image2);

if(dicenum1>dicenum2){
  document.querySelector("h1").innerHTML = "Player1 Wins!! 🚩";
}
else if(dicenum2>dicenum1){
  document.querySelector("h1").innerHTML = "Player2 Wins!! 🚩";
}
else if (dicenum1===dicenum2) {
  document.querySelector("h1").innerHTML = "It's a Draw!! 🚩";
}
