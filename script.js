// This function returns a random computer choice
let choices = ['rock', 'paper', 'scissors'];

function computerSelection() {
    let computerChoice = choices[(Math.floor(Math.random() * choices.length))];
    console.log(computerChoice);
    return computerChoice;
    
}

// This function returns the player's selection

function playerSelection() {
    let playerChoice = prompt("Make a choice: 'rock?','paper?', 'scissors?'");
    console.log(playerChoice);
    return playerChoice;
}

/*function playGame(computerSelection, playerSelection) {

}*/