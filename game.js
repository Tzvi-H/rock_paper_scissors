const gameResultElement = document.querySelector('.game-result');
const winnerElement = document.querySelector('#winner');
const choiceButtons = document.querySelectorAll('button');
const WINNING_SCORE = 3;  

let playerScore = 0;
let compScore = 0;

choiceButtons.forEach(button => button.addEventListener('click', e => {
  const playerChoice = e.target.textContent;
  const computerChoice = computerPlay();
  
  const result = playRound(playerChoice, computerChoice);
  gameResultElement.textContent = result;
  
  if (result.startsWith('You Win')) {
    playerScore++
  } else if (result.startsWith('You Lose')) {
    compScore++;
  }

  updateScores();
  
  if (playerScore === WINNING_SCORE) {
    winnerElement.textContent = 'Contrats! You win!';
    choiceButtons.forEach(btn => btn.disabled = true);
  } else if (compScore === WINNING_SCORE) {
    winnerElement.textContent = 'You lose! Better luck next time';
    choiceButtons.forEach(btn => btn.disabled = true);
  }
}))

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return `Tie! you both picked ${playerSelection}`
  } else if (isWinner(playerSelection, computerSelection)) {
    return `You Win! ${playerSelection} beats ${computerSelection}`
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  }
}

function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  
  return choices[randomIndex];
}

function isWinner(choice1, choice2) {
  return (choice1 === 'rock' && choice2 === 'scissors') ||
         (choice1 === 'paper' && choice2 === 'rock') ||
         (choice1 === 'scissors' && choice2 === 'paper');
}

function updateScores() {
  document.querySelector('#playerScore').textContent = playerScore;
  document.querySelector('#compScore').textContent = compScore;
}


