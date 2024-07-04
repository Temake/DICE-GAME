var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImages ="images/" + "dice" + randomNumber1 + ".png";
var imag = document.querySelectorAll("img")[0].setAttribute("src",diceImages);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImages2 ="images/" + "dice" + randomNumber2 + ".png";
var imag2 = document.querySelectorAll("img")[1].setAttribute("src",diceImages2);
if (randomNumber1==randomNumber2){
   document.querySelector("h1").innerHTML= "It is a tie!";
}
else if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML= "Player 1 Wins";
}
else {
    document.querySelector("h1").innerHTML= "Player 2 Wins";
}

