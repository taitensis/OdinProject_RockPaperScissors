const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
const titleContainer = document.createElement("div");
const title = document.createElement("h1");
title.textContent = "ROCK PAPER SCISSORS";
title.style.textAlign = "center";

titleContainer.appendChild(title);
titleContainer.style.width = "80%";
titleContainer.style.padding = "30px 0 5px 0";
titleContainer.style.borderBottom = "3px rgb(48, 121, 48) solid";
body.appendChild(titleContainer);

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
rockBtn.className = "gameActionBtn";

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
paperBtn.className = "gameActionBtn";

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
scissorsBtn.className = "gameActionBtn";

rockBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playRound("rock", getComputerSelection());
});

paperBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playRound("paper", getComputerSelection());
});

scissorsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playRound("scissors", getComputerSelection());
});

const gameChoices = document.createElement("div");
gameChoices.style.margin = "30px auto 15px auto";
const gameChoicesHeader = document.createElement("h2");
gameChoicesHeader.textContent = "Make a choice!";
gameChoicesHeader.style.textAlign = "center";

const choices = document.createElement("div");
choices.style.display = "flex";
choices.style.flexDirection = "row";
choices.style.alignItems = "center";
choices.style.gap = "20px";
choices.style.margin = "15px auto";

choices.appendChild(rockBtn);
choices.appendChild(paperBtn);
choices.appendChild(scissorsBtn);
gameChoices.appendChild(gameChoicesHeader);
gameChoices.appendChild(choices);
body.appendChild(gameChoices);

const resultsBoard = document.createElement("div");
resultsBoard.style.display = "flex";
resultsBoard.style.flexDirection = "column";
resultsBoard.style.alignItems = "center";
const resultsBoardHeader = document.createElement("h2");
resultsBoardHeader.textContent = "Results";

const playerScore = document.createElement("p");
playerScore.id = "playerScore";
playerScore.textContent = `Player Score: 0`;
const computerScore = document.createElement("p");
computerScore.id = "computerScore";
computerScore.textContent = `Computer Score: 0`;

const resultsMessage = document.createElement("p");
resultsMessage.id = "message";
resultsMessage.textContent = "";
resultsMessage.style.fontWeight = "600";

resultsBoard.appendChild(resultsBoardHeader);
resultsBoard.appendChild(playerScore);
resultsBoard.appendChild(computerScore);
resultsBoard.appendChild(resultsMessage);

body.appendChild(resultsBoard);

const playAgainContainer = document.createElement("div");
playAgainContainer.style.padding = "30px 0 5px 0";

body.appendChild(playAgainContainer);

let playerScoreValue = 0;
let computerScoreValue = 0;
const message = document.querySelector("#message");
const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");

function getComputerSelection() {
  const computerSelection = Math.floor(Math.random() * 3 + 1);
  switch (computerSelection) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function disableBtn() {
  rockBtn.setAttribute("disabled", "true");
  paperBtn.setAttribute("disabled", "true");
  scissorsBtn.setAttribute("disabled", "true");
}

function enableBtn() {
  rockBtn.removeAttribute("disabled");
  paperBtn.removeAttribute("disabled");
  scissorsBtn.removeAttribute("disabled");
}

function endOfGame() {
  disableBtn();
  const playAgainBtn = document.createElement("button");
  playAgainBtn.textContent = "Play again?";
  playAgainBtn.className = "gameUIBtn";
  playAgainContainer.appendChild(playAgainBtn);

  playAgainBtn.addEventListener("click", (e) => {
    e.preventDefault();

    playerScoreValue = 0;
    computerScoreValue = 0;

    resultsMessage.textContent = "";
    playerScore.textContent = `Player Score: 0`;
    computerScore.textContent = `Computer Score: 0`;
    enableBtn();
    playAgainContainer.removeChild(playAgainBtn);
  });
}

function playRound(playerSelection = "", computerSelection = "") {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScoreValue++;
    computerScoreDisplay.textContent = `Computer Score: ${computerScoreValue}`;
    message.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    message.style.color = "red";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScoreValue++;
    playerScoreDisplay.textContent = `Player Score: ${playerScoreValue}`;
    message.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    message.style.color = "green";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScoreValue++;
    computerScoreDisplay.textContent = `Computer Score: ${computerScoreValue}`;
    message.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    message.style.color = "red";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScoreValue++;
    playerScoreDisplay.textContent = `Player Score: ${playerScoreValue}`;
    message.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    message.style.color = "green";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScoreValue++;
    playerScoreDisplay.textContent = `Player Score: ${playerScoreValue}`;
    message.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    message.style.color = "green";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScoreValue++;
    computerScoreDisplay.textContent = `Computer Score: ${computerScoreValue}`;
    message.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    message.style.color = "red";
  } else {
    message.textContent = `It's a draw!`;
    message.style.color = "orange";
  }
  if (playerScoreValue === 5) {
    message.textContent = `You won! You got ${playerScoreValue} points and the computer got ${computerScoreValue} points.`;
    endOfGame();
  } else if (computerScoreValue === 5) {
    message.textContent = `You lost! You got ${playerScoreValue} points and the computer got ${computerScoreValue} points. Try again!`;
    endOfGame();
  }
}
