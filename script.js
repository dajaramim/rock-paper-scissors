const gameOption = ["rock", "paper", "scissors"]
let playerChoice;
let computerChoice;

let playerScore = 0;
let computerScore = 0;

// The second column represents the losing option, and the third represents the winning option
const result = [
    ["rock", "paper", "scissors"],
    ["paper", "scissors", "rock"],
    ["scissors", "rock", "paper"]
]

const MAX_ROUNDS = 5

for (let i = 1; i <= MAX_ROUNDS; i++) {

    while (playerChoice !== 0 && playerChoice !== 1 && playerChoice !== 2) {
    
        playerChoice = prompt("Choose: rock, paper or scissors").toLowerCase()
    
        if (playerChoice === "rock") {
            playerChoice = gameOption.indexOf("rock")
        }
        else if (playerChoice === "paper") {
            playerChoice = gameOption.indexOf("paper")

     
        }
        else {
            playerChoice = gameOption.indexOf("scissors")
    
        }
    }
    computerChoice = getComputerChoice()
    

    console.log(getWinner(playerChoice, computerChoice))
    playerChoice = ""
}
const winner = playerScore > computerScore ? "You are the winner in the best of 5 rounds!" : "You lose, the computer has completely destroyed you!"
console.log(winner)

// Functions
function getComputerChoice() {
    // random number
    let randomNumber = Math.floor(Math.random() * 3) // 3 because it is the number of available options in the game.

    return randomNumber
}

function getWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection  ) {
        return "Tied!"
    }
    else if (playerSelection + 1 === computerSelection) { //second column
        computerScore++
        return `You lose! ${result[playerSelection][computerSelection]} beats ${result[playerSelection][playerSelection]}`
    }
    else { // third column
        playerScore++
        return `You win! ${result[playerSelection][playerSelection]} beats ${result[playerSelection][computerSelection]}`
    }
}
