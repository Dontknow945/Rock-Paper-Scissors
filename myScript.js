function computerPlay() {
    const computer = Math.floor(Math.random()*3)+1;
    
    switch (computer) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "rock";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "A Tie.";
    }
    
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper") {
                computerScore++;
                return "You Lose! Paper beats Rock.";
            } else {
                playerScore++;
                return "You Win!";
            }
        case "paper":
            if (computerSelection === "scissors") {
                computerScore++;
                return "You Lose! Scissors beats Paper.";
            } else {
                playerScore++;
                return "You Win!";
            }
        case "scissors":
            if (computerSelection === "rock") {
                computerScore++;
                return "You Lose! Rock beats Scissors.";
            } else {
                playerScore++;
                return "You Win!";
            }
        default:
            return "What's that? I don't understand.";
    }
}

function finalWinner() {
    if (playerScore === computerScore) {
        return "No one wins. It's a Tie.";
    } else if (playerScore < computerScore) {
        return "Computer is the final winner.";
    } else {
        return "You are the Final Winner!";
    }
}

function game() {
    let playerSelection = "rock";
    let computerSelection = "rock";

    for (let i=0; i<5; i++) {
        playerSelection = prompt("Rock, Paper or Scissors?");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

    console.log(finalWinner());
}

let playerScore = 0;
let computerScore = 0;

game();