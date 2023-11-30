const gameOption = ["rock", "paper", "scissors"]
const choices = document.querySelector('#choices');
const game = document.querySelector('#game');
let playerChoice;
let computerChoice;

eventListeners()
function eventListeners() {
    choices.addEventListener('click', getPlayerChoice)
}

// Functions

function getPlayerChoice(e) {
    if (e.target.classList.value) {
        playerChoice = e.target.classList.value
        computerChoice = getComputerChoice()
        showGame()
    }
}

function getComputerChoice() {
    // random number
    let randomNumber = Math.floor(Math.random() * 3) // 3 because it is the number of available options in the game.
    return gameOption[randomNumber]
}

function showGame() {
    clearHTML()
    const playerGame = document.createElement('p')
    const computerGame = document.createElement('p')
    const winner = document.createElement('p')
    const gameDiv = document.createElement('div')

    playerGame.textContent = playerChoice;
    computerGame.textContent = computerChoice;
    winner.textContent = getWinner(playerChoice, computerChoice)

    gameDiv.appendChild(playerGame)
    gameDiv.appendChild(computerGame)
    gameDiv.appendChild(winner)
    game.appendChild(gameDiv)


}

function clearHTML() {
    while (game.firstChild) {
        game.removeChild(game.firstChild)
    }
}

function getWinner(player, computer) {
    if (player === computer) {
        return "Tied!"
    }
    else if (player === "rock" && computer === "paper"
        || player === "paper" && computer === "scissors"
        || player === "scissors" && computer === "rock") { //second column
        return `You lose! ${computer} beats ${player}`
    }
    else { // third column
        return `You win! ${player} beats ${computer}`
    }
}
/* const winner = playerScore > computerScore ? "You are the winner in the best of 5 rounds!" : "You lose, the computer has completely destroyed you!" */