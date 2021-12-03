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
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "A tie";
    }
    
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper") {
                return "You Lose! Paper beats Rock";
            } else {
                return "You Win!";
            }
        case "paper":
            if (computerSelection === "scissors") {
                return "You Lose! Scissors beats Paper";
            } else {
                return "You Win!";
            }
        case "scissors":
            if (computerSelection === "rock") {
                return "You Lose! Rock beats Scissors";
            } else {
                return "You Win!";
            }
        default:
            break;
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));