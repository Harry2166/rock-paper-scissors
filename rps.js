
// create a function getComputerChoice that randomly returns rps ✓
// function playRound -> two parameters -> playerSelection, computerSelection -> returns a string that declares the winner
// function playerSelection -> rps ✓
// create a game() -> calls playRound 5 times
// use prompt() to get input from the user

function getComputerChoice(){
    let rps_choices = ['rock', 'paper', 'scissors'];
    return rps_choices[Math.floor(Math.random()*rps_choices.length)];
}

function getPlayerChoice(n){
    let player_choice = prompt("You are on atttempt " + n + ". Place your choice here: (rock, paper, scissors)").toLowerCase();
    return player_choice.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    console.log(computerSelection);
    if(computerSelection === playerSelection){
        return "It's a draw!";
    } else if (computerSelection === "rock") {
        if (playerSelection === "paper"){
            return "You won!";
        } else {
            return "You lost!";
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "scissors"){
            return "You won!";
        } else {
            return "You lost!";
        }
    } else if (computerSelection === "scissors") {
        if (playerSelection === "rock"){
            return "You won!";
        } else {
            return "You lost!";
        }
    } // this code is too sloppy to look at, will fix when im not lazy -> too many if else statements
} 

function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound(getPlayerChoice(i+1), getComputerChoice()));
    }
}

game();