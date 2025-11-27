function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3 + 1);
  switch (computerChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt(
    "Please enter your choice: rock, paper, or scissors?"
  );
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice = "", computerChoice = "") {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else {
      console.log(`It's a draw!`);
    }
  }

  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log(
      `You won! You got ${humanScore}, and the computer got ${computerScore}.`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `Too bad, you lost! You got ${humanScore}, and the computer got ${computerScore}.`
    );
  } else {
    console.log(
      `It's a draw, you and the computer got ${humanScore}. You should play again!`
    );
  }
}

playGame();
