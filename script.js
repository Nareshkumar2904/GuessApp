"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// console.log(secretNumber);

let messageFunction = (msg) => {
  document.querySelector(".message").textContent = msg;
};
let guessNumber = (guess) => {
  document.querySelector(".guess").textContent = guess;
};
let scoreNumber = (score) => {
  document.querySelector(".scoreNumber").textContent = score;
};

document
  .querySelector(".checkButton")
  .addEventListener("click", function select() {
    let guess = Number(document.querySelector(".inputNumber").value);
    // console.log(guess);
    if (!guess) {
      messageFunction("👎 No Number !!!");
    } else if (guess === secretNumber) {
      messageFunction("🏆 Correct Number !!!");
      guessNumber(secretNumber);
      document.querySelector(".container").style.backgroundColor = "#60b347";
      document.querySelector(".container").style.color = "white";
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highScore").textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        messageFunction(
          guess > secretNumber ? "📈 Too High !!!" : "📉 Too Low !!!"
        );
        score--;
        scoreNumber(score);
      } else {
        messageFunction("👎 You Lost The Match");
        scoreNumber(0);
      }
    }
  });

document
  .querySelector(".resetButton")
  .addEventListener("click", function resetFunction() {
    scoreNumber(20);
    guessNumber("?");
    document.querySelector(".inputNumber").value = "";
    messageFunction("👍 Start guessing....");
    document.querySelector(".container").style.backgroundColor = "white";
    document.querySelector(".container").style.color = "black";
  });
