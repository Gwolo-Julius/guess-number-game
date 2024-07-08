const secretNumber = Math.trunc(Math.random() * 20) + 1;
const secNum = document.querySelector(".s__number");
let oddNumber = 20;
let highScore = 0;

// function for displaying message

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

// function for updating score

const upadateScore = (myScore) => {
  document.querySelector(".score").textContent = myScore;
};

const guessNumber = () => {
  const guess = Number(document.querySelector(".put__yourNumber").value);

  if (!guess) {
    displayMessage("🚫 No number Entered!");
  } else if (guess === secretNumber) {
    displayMessage("🏆 You won the game!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    secNum.style.width = "180px";
    secNum.textContent = secretNumber;

    if (oddNumber > highScore) {
      highScore = oddNumber;
      document.querySelector(".larger__number").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (oddNumber > 1) {
      displayMessage(
        guess > secretNumber
          ? "🏫 The number is high!"
          : "🏫 The number is low!"
      );
      oddNumber--;
      upadateScore(oddNumber);
      // document.querySelector(".score").textContent = oddNumber;
    } else {
      displayMessage("💥You lose the game!");
      upadateScore(0)
      // document.querySelector(".score").textContent = 0;
    }
  }
};

document.querySelector(".again").addEventListener("click", () => {
  secNum.textContent = "?";
  document.querySelector(".put__yourNumber").value = "";
  oddNumber = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("🤙 Start guessing...");
  document.querySelector(".s__number").style.width = "";
  upadateScore(oddNumber)
  // document.querySelector(".score").textContent = oddNumber;
});

document.querySelector(".js-btn").addEventListener("click", guessNumber);
