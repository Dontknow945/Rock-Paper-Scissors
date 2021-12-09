function computerPlay() {
    const computerChoice = Math.floor(Math.random()*3)+1;
    
    switch (computerChoice) {
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
        result.textContent = "A Tie.";
        return;
    }
    
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper") {
                computer.textContent = `Computer: ${++computerScore}`;
                result.textContent = "You Lose! Paper beats Rock."
            } else {
                player.textContent = `Player: ${++playerScore}`;
                result.textContent = "You Win!";
            }
            break;
        case "paper":
            if (computerSelection === "scissors") {
                computer.textContent = `Computer: ${++computerScore}`;
                result.textContent = "You Lose! Scissors beats Paper.";
            } else {
                player.textContent = `Player: ${++playerScore}`;
                result.textContent = "You Win!";
            }
            break;
        case "scissors":
            if (computerSelection === "rock") {
                computer.textContent = `Computer: ${++computerScore}`;
                result.textContent = "You Lose! Rock beats Scissors.";
            } else {
                player.textContent = `Player: ${++playerScore}`;
                result.textContent = "You Win!";
            }
            break;
        default:
            result.textContent = "What's that? I don't understand.";
            break;
    }

    if (computerScore===5 || playerScore===5) {
        result.textContent = finalWinner();
        btns.forEach(btn => btn.removeEventListener('click', playRound));
        return;
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

let playerScore = 0;
let computerScore = 0;

const btns = Array.from(document.querySelectorAll('button'));
btns.forEach(btn => btn.addEventListener('click', playRound));

const body = document.querySelector('body');
const div = document.createElement('div');
const player = document.createElement('p');
const computer = document.createElement('p');
const result = document.createElement('p');
player.textContent = 'Player: 0';
computer.textContent = 'Computer: 0';
result.textContent = 'Rock, Paper or Scissors?';
div.appendChild(player);
div.appendChild(computer);
div.appendChild(result);
body.appendChild(div);