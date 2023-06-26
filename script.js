// This function returns a random computerchoice
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[(Math.floor(Math.random() * choices.length))];
    console.log(computerChoice);
    return computerChoice;
    
}

// This function returns the player's selection

function getPlayerChoice() {
    let playerChoice = prompt("Make a choice: 'rock?','paper?', 'scissors?'");
    console.log(playerChoice);
    return playerChoice;
}

// Function to play a single round of Rock
function playGame(computerSelection, playerSelection) {

    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    let computerScore = 0;
    let playerScore = 0;

    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScore++;
        console.log('You lose! Rock beat scissors');
    } else if(computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore++
        console.log('You lose! Scissors beat paper');
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore++;
        console.log('You lose! Scissors beat paper');
    } else if (computerSelection === playerSelection) {
        console.log("It's a tie!");
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        playerScore++;
        console.log('You win! Rock beat scissors');
    } else if(computerSelection === 'paper' && playerSelection === 'scissors') {
        playerScore++;
        console.log('You win! Scissors beat paper');
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        playerScore++;
        console.log('You win! Paper beat rock');
    }

    // code to check the winner

    if(computerScore > playerScore) {
        console.log("Too bad for you. You lost the game!!!!");
    } else if(computerScore === playerScore) {
        console.log("It's a try. Try again!");
    }
    else {
        console.log("You're a superstar");
    }

}

function game() {
    /*for (let i = 0; i < 5; i++) {
        return playGame();
    }*/
    playGame();
    playGame();
    playGame();
    playGame();
    playGame();
}
