// initialize choices
let choices = ["rock", "paper", "scissors"];
//prompt
let userInput; 
userInput = prompt ("Please choose either Rock, Paper or Scissors");
//computer choice
let computerChoice = Math.floor(Math.random() * 3);
console.log(computerChoice, choices[computerChoice]);
// Determine if win or lose
let wins = 0 
let losses = 0
let ties = 0
if(userInput === "rock" && computerChoice === "scissors"){
    console.log ("user wins")
}
else if(userInput === "scissors" && computerChoice === "rock"){
    console.log ("user loses")
}
else if(userInput === "Paper" && computerChoice === "rock"){
    console.log ("user wins")
}
