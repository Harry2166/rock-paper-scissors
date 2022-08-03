
// create a function getComputerChoice that randomly returns rps ✓
// function playRound -> two parameters -> playerSelection, computerSelection -> returns a string that declares the winner
// function playerSelection -> rps ✓
// create a game() -> calls playRound 5 times
// use prompt() to get input from the user

let player_score_counter = 0
let computer_score_counter = 0
let round_winner = " "

function getComputerChoice(){
    let rps_choices = ['rock', 'paper', 'scissors'];
    return rps_choices[Math.floor(Math.random()*rps_choices.length)];
}

function getPlayerChoice(){
    let player_choice = prompt("Place your choice here: (rock, paper, scissors)").toLowerCase();
    return player_choice.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    console.log("Computer selected: " + computerSelection);
    console.log("You selected: " + playerSelection);
    player_select.textContent = `Player has selected: ${playerSelection}`
    computer_select.textContent = `Computer has selected: ${computerSelection}`
    if(computerSelection === playerSelection){
        console.log("It's a draw!");
    } else if (computerSelection === "rock") {
        if (playerSelection === "paper"){
            console.log("You win!");
            player_score_counter++;
            round_winner = "player";
        } else {
            console.log("You lost!");
            computer_score_counter++;
            round_winner = "computer";
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "scissors"){
            console.log("You win!");
            player_score_counter++;
            round_winner = "player";
        } else {
            console.log("You lost!");
            computer_score_counter++;
            round_winner = "computer";
        }
    } else if (computerSelection === "scissors") {
        if (playerSelection === "rock"){
            console.log("You win!");
            player_score_counter++;
            round_winner = "player";
        } else {
            console.log("You lost!");
            computer_score_counter++;
            round_winner = "computer";
        }
    } // this code is too sloppy to look at, will fix when im not lazy -> too many if else statements
    console.log("Player score: " + player_score_counter);
    console.log("Computer score: " + computer_score_counter);
    player_score.textContent = `Player Score: ${player_score_counter}`
    computer_score.textContent = `Computer Score: ${computer_score_counter}`
}

function gameOver(){
    return player_score_counter === 5 || computer_score_counter === 5;
}

function click(selection){

    if (gameOver()){ // if either one already has reached 5 points
        endMessage();
    }

    const random_choice = getComputerChoice()
    playRound(selection, random_choice);

    if (gameOver()){ // if either one has reached 5 points just after the playRound()
        endMessage();
    }
}

function endMessage(){
    return player_score_counter > computer_score_counter ? alert("You won!") : alert("You lost!")
}

const rock_btn = document.getElementById('rock_btn');
const paper_btn = document.getElementById('paper_btn');
const scissors_btn = document.getElementById('scissors_btn');
const player_score = document.getElementById('player_score');
const computer_score = document.getElementById('computer_score');
const player_select = document.getElementById('player_select');
const computer_select = document.getElementById('computer_select');

rock_btn.addEventListener('click', () => click("rock"));
paper_btn.addEventListener('click', () => click("paper"));
scissors_btn.addEventListener('click', () => click("scissors"));

// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = player_score_counter;
    
// container.appendChild(content);