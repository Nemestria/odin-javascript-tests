console.log("Let's play Rock - Paper - Scissor!");

// COMPUTER CHOICE
function getComputerChoice(){
    max = 3;
// declaramos variable y le asignamos que sea un valor aleatorio con "floor" limitado a 3 resultados: 0, 1 y 2
    let choice = (Math.floor(Math.random() * max))
    if(choice == 0){
        choice = "ROCK";
    }
    else if(choice == 1){
        choice = "PAPER";
    }
    else if(choice == 2){
        choice = "SCISSOR";
    }
    console.log("BOT CHOICE : " + choice)

    return choice;
}
// let computerChoice = getComputerChoice(2);
// console.log("computer: "+ computerChoice);
function getHumanChoice(){
    // prompt hace que le pida al usuario un input, en este ej. no hace falta contemplar "fallos" del usuario, asumimos que escribirá 100% bien
    let choice = prompt("What's your choice... ROCK - PAPER - SCISSOR").toUpperCase();
    if(choice == "ROCK"){
        console.log("Your choice is "+ choice);
        return choice;
    }
    else if(choice == "PAPER"){
        console.log("Your choice is "+ choice);
        return choice;
    }
    else if(choice == "SCISSOR"){
        console.log("Your choice is "+ choice);
        return choice;
    }
}
// let humanChoice = getHumanChoice();
// console.log(humanChoice);
// let humanScore = 0;
// let computerScore = 0;
// console.log("humanchoice:", humanChoice, "computerchoice:", computerChoice, "humanscore: ", humanScore, "computerscore: ",computerScore);
function playRound(computerChoice, humanChoice){
    console.log("playRound is playing, computerchoice was:", computerChoice, "humanchoice is:", humanChoice);
    let whoWins = 0;
    if(computerChoice == "ROCK" && humanChoice == "SCISSOR"){
        console.log("You lose! Rock beats Scissor");
        whoWins = 1;
        return whoWins;
    }
    else if(computerChoice == "PAPER" && humanChoice == "ROCK"){
        console.log("You lose! Paper beats Rock");
        whoWins = 1;
        return whoWins;        
    }
    else if(computerChoice == "SCISSOR" && humanChoice == "PAPER"){
        console.log("You lose! Scissor beats Paper");
        whoWins = 1;
        return whoWins;        
    }
    else if(computerChoice == "ROCK" && humanChoice == "PAPER"){
        console.log("You win! Paper beats Rock");
        whoWins = 2;
        return whoWins;        
    }
    else if(computerChoice == "PAPER" && humanChoice == "SCISSOR"){
        console.log("You win! Scissor beats Paper");
        whoWins = 2;
        return whoWins;        
    }
    else if(computerChoice == "SCISSOR" && humanChoice == "ROCK"){
        console.log("You win! Rock beats Scissor");
        whoWins = 2;
        return whoWins;        
    }    
    else if(computerChoice == humanChoice){
        return false;
    }
}
// playRound(computerChoice, humanChoice);
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    while(humanScore < 5 && computerScore < 5){
        let humanChoice = getHumanChoice(); // pedimos cada ronda
        let computerChoice = getComputerChoice(2); // se genera cada ronda
        let winnerRound = playRound(computerChoice,humanChoice); //con las variables definidas podemos jugar la ronda

        if (winnerRound == 1){
            computerScore++;
            console.log("You need to try harder! '/n' Score: YOU "+ humanScore + " - PC "+ computerScore);
        }
        else if(winnerRound == 2){
            humanScore++;
            console.log("You got it! '/n' Score: YOU "+ humanScore + " - PC "+ computerScore);
        }
        else {
            console.log("It's a TIE! '/n' Score: YOU "+ humanScore + " - PC "+ computerScore);
        }
    }
    if (humanScore == 5){
        console.log("YOU WON!!!")
    }
    else{
        console.log("Won by a fockin computer...")
    }
}

playGame();