// Variables
const play = document.querySelector('#play');
const reset = document.querySelector('#reset');
const scorePlayerHTML = document.querySelector('#score-player');
const scoreComputerHTML = document.querySelector('#score-cpu');
const choices = document.querySelectorAll('#choice');
const gameResult = document.querySelector('#game-result');
const choicesArray = [...choices];
let result;
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

// Events
eventListeners()
function eventListeners() {
    choices.forEach(choice => {
        choice.addEventListener('click', getPlayerChoice)
    });
    play.addEventListener('click', playAgain)
    reset.addEventListener('click', resetScore)
}

// Functions
function playAgain() {
    if (playerScore + computerScore >= 5) return
    clearHTML()
    clearChoice()
}
function resetScore() {
    clearHTML()
    clearChoice()
    playerScore = 0;
    computerScore = 0;
    scorePlayerHTML.textContent = 0;
    scoreComputerHTML.textContent = 0;
}
function clearHTML() {
    while (gameResult.firstChild) {
        gameResult.removeChild(gameResult.firstChild)
    }
}

function clearChoice() {
    choices.forEach(choice => {
        choice.classList.remove('choice--selected', 'computer', 'playerSelected', 'computerSelected', 'tiedSelected','choice--no-hover');
    })
}

function getPlayerChoice(e) {
    if (choicesArray.some(choice => choice.classList.contains('choice--selected'))) return
    const selectedChoice = !e.target.classList.contains("choice") ? e.target.parentNode : e.target;
    if (playerScore + computerScore >= 5) return
    computerChoice = getComputerChoice()  
    playerChoice = selectedChoice.getAttribute('data-id')

    if (playerChoice === computerChoice) {
        selectedChoice.classList.add('choice--selected', 'tiedSelected','choice--no-hover');
    } else {
        choices.forEach(choice => {
            if (choice.getAttribute('data-id') === computerChoice) {
                choice.classList.add('computerSelected', 'choice--selected');
            }
        });      
        selectedChoice.classList.add('choice--selected', 'playerSelected','choice--no-hover' );
    }
    showGame()
}

function getComputerChoice() {
    const gameOption = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * gameOption.length) // 3 because it is the number of available options in the game.
    return gameOption[randomNumber]
}

function showGame() {
    clearHTML()
    const winner = getWinner(playerChoice, computerChoice)
    const winnerHTML = document.createElement('p')
    const gameDiv = document.createElement('div')

    if (playerScore + computerScore >= 5) {
        winnerHTML.textContent = playerScore > computerScore ? "You are the winner in the best of 5 rounds!" : "You lose, the CPU destroyed you!"
        playerScore > computerScore ? gameDiv.classList.add('winner') : gameDiv.classList.add('loser')
    }
    else {
        winnerHTML.textContent = winner
        if (result === 'winner') {
            gameDiv.classList.add('winner')
        } else if (result === 'loser') {
            gameDiv.classList.add('loser')
        } else {
            gameDiv.classList.add('tied')
        }
    }
    winnerHTML.classList.add('winner-text')
    gameDiv.classList.add('game-result')

    scorePlayerHTML.textContent = playerScore;
    scoreComputerHTML.textContent = computerScore;

    gameDiv.appendChild(winnerHTML)
    gameResult.appendChild(gameDiv)

}
function getWinner(player, computer) {
    if (player === computer) {
        result = 'tied'
        return "Tied!"
    }
    else if (player === "rock" && computer === "paper"
        || player === "paper" && computer === "scissors"
        || player === "scissors" && computer === "rock") { 
        result = 'loser'
        computerScore++
        return `You Lose! ${computer} beats ${player}`
    }
    else { 
        result = 'winner'
        playerScore++
        return `You Win! ${player} beats ${computer}`
    }
}



