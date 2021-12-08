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

function playRound(e) {
    playerSelection = this.classList.item(0);
    const computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        console.log("A Tie.");
        return "A Tie.";
    }
    
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper") {
                computerScore++;
                console.log("You Lose! Paper beats Rock.");
                return "You Lose! Paper beats Rock.";
            } else {
                playerScore++;
                console.log("You Win!");
                return "You Win!";
            }
        case "paper":
            if (computerSelection === "scissors") {
                computerScore++;
                console.log("You Lose! Scissors beats Paper.");
                return "You Lose! Scissors beats Paper.";
            } else {
                playerScore++;
                console.log("You Win!");
                return "You Win!";
            }
        case "scissors":
            if (computerSelection === "rock") {
                computerScore++;
                console.log("You Lose! Rock beats Scissors.");
                return "You Lose! Rock beats Scissors.";
            } else {
                playerScore++;
                console.log("You Win!");
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

//game();

const btn_rock = document.querySelector('.rock');
const btn_paper = document.querySelector('.paper');
const btn_sci = document.querySelector('.scissors');

btn_rock.addEventListener('click', playRound);
btn_paper.addEventListener('click', playRound);
btn_sci.addEventListener('click', playRound);