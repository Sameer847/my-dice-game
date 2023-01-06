// alert("working");
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// Yeh wala code right side ke dice ke liye hai

var image1 = document.querySelectorAll("img")[0];
// Yeh wali line left side ke dice ke liye likhi hai yaha par [0] ka matlab hai 1st wali image if yaha par [1] aisa hota iska matlab hai second wali image ko hum target karre & [2] iska matlab 3rd button ko hum target karre.

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎉Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🎉Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
