// Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
// We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to 
// the next step!

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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Enter Rock, Paper, or Scissors');

    const result = playRound(playerSelection, computerPlay());
    alert(result);

    if (result.startsWith('You Win')) {
      playerScore++
    } else if (result.startsWith('You Lose')) {
      computerScore++;
    }
  }

  alert(`Game Over! 
player score: ${playerScore}
computer score: ${computerScore}`)
}

game()