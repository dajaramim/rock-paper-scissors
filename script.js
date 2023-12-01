const gameOption = ["rock", "paper", "scissors"]
const choices = document.querySelectorAll('#choice');
const game = document.querySelector('#game');
let result;
let playerChoice;
let computerChoice;

eventListeners()
function eventListeners() {
    choices.forEach(choice => {
        choice.addEventListener('click', getPlayerChoice)
    });
}

// Functions

function getPlayerChoice(e) {
    clearChoice()
    computerChoice = getComputerChoice()
    choices.forEach(choice => {
        if (choice.getAttribute('data-id') === computerChoice) {
            choice.classList.add('computer','choice-selected');
        }
    });
    if (!e.target.classList.contains("choice")) {
        playerChoice = e.target.parentNode.getAttribute('data-id')
    } else {
        playerChoice = e.target.getAttribute('data-id')
    }
    const selectedChoice = !e.target.classList.contains("choice") ? e.target.parentNode : e.target;
    selectedChoice.classList.add('choice-selected');
    showGame()
    setTimeout(() => {
        clearHTML()
        clearChoice()
    }, 3000);
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * gameOption.length) // 3 because it is the number of available options in the game.
    return gameOption[randomNumber]
}

function showGame() {
    clearHTML()
    const winner = document.createElement('p')
    const gameDiv = document.createElement('div')

    winner.textContent = getWinner(playerChoice, computerChoice)
    winner.classList.add('winner-text')
    gameDiv.classList.add('game-result')
    if (result === 'winner') {
        gameDiv.classList.add('winner')
    } else if (result === 'loser') {
        gameDiv.classList.add('loser')
    } else {
        gameDiv.classList.add('tied')
    }
    gameDiv.appendChild(winner)
    game.appendChild(gameDiv)

}

function clearHTML() {
    while (game.firstChild) {
        game.removeChild(game.firstChild)
    }
}

function clearChoice() {
    choices.forEach(choice => {
        choice.classList.remove('choice-selected', 'computer');
    })
}

function getWinner(player, computer) {
    if (player === computer) {
        result = 'tied'
        return "Tied!"
    }
    else if (player === "rock" && computer === "paper"
        || player === "paper" && computer === "scissors"
        || player === "scissors" && computer === "rock") { //second column
        result = 'loser'
        return `You Lose! ${computer} beats ${player}`
    }
    else { // third column
        result = 'winner'
        return `You Win! ${player} beats ${computer}`
    }
}
/* const winner = playerScore > computerScore ? "You are the winner in the best of 5 rounds!" : "You lose, the computer has completely destroyed you!" */