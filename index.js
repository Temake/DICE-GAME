var score1 = 0;
var score2 = 0;

// Function to roll dice
function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var diceImage1 = "images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", diceImage1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var diceImage2 = "images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", diceImage2);

    var resultElement = document.getElementById("result");
    var winSound = document.getElementById("winSound");

    // Reset win class
    resultElement.classList.remove("win");

    if (randomNumber1 === randomNumber2) {
        resultElement.innerHTML = "It's a Tie!";
    } else if (randomNumber1 > randomNumber2) {
        resultElement.innerHTML = "Player 1 Wins!";
        score1++;
        resultElement.classList.add("win");  // Add animation for win
        winSound.play();  // Play win sound
    } else {
        resultElement.innerHTML = "Player 2 Wins!";
        score2++;
        resultElement.classList.add("win");  // Add animation for win
        winSound.play();  // Play win sound
    }

    // Update the scores
    document.getElementById("score1").innerHTML = "Score: " + score1;
    document.getElementById("score2").innerHTML = "Score: " + score2;
}

// Add a click event listener to the "Roll Again" button
document.getElementById("rollBtn").addEventListener("click", rollDice);
