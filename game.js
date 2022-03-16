const resultDiv = document.querySelector('.results');
const choiceButtons = document.querySelectorAll('button');

choiceButtons.forEach(button => button.addEventListener('click', e => {
  const playerChoice = e.target.textContent;
  const computerChoice = computerPlay();
  resultDiv.textContent = playRound(playerChoice, computerChoice);
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


