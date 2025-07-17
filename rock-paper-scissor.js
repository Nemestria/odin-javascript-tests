console.log("Let's play Rock - Paper - Scissor!");

//DECLARACION DE VARIABLES

const mainContainer = document.querySelector(".container");
const computerCounter = document.getElementById("computerPoints");
const humanCounter = document.getElementById("humanPoints");
const rock = document.getElementById("rockBtn");
const scissor = document.getElementById("scissorBtn");
const paper = document.getElementById("paperBtn");
const humanDisplay = document.getElementById("humanDisplayOption");
const computerDisplay = document.getElementById("computerDisplayOption");
const restartGame = document.getElementById("restart");
const finalMenu = document.querySelector(".finalMenu");
const resultFinal = document.getElementById("resultFinal")

let computerScore = 0;
let humanScore = 0;


// COMPUTER CHOICE
function getComputerChoice(){
// declaramos variable y le asignamos que sea un valor 
// aleatorio con "floor" limitado a los 3 items del array
    let choice = ['ROCK', 'PAPER', 'SCISSORS']
    return choice[Math.floor(Math.random() * choice.length)]
}

rock.addEventListener("click", () => handleClick("ROCK"));
paper.addEventListener("click", () => handleClick("PAPER"));
scissor.addEventListener("click", () => handleClick("SCISSOR"));

function handleClick(humanChoice){
    const computerChoice = getComputerChoice();
    updateChoice(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    winDisplay();
}

function winDisplay() {
    if(humanScore === 5){
        resultFinal.textContent = "You WIN!"
    }
    else if(computerScore === 5) resultFinal.textContent = "You LOST!"
    if(humanScore === 5 || computerScore === 5){
        mainContainer.style.visibility = "none";
        finalMenu.style.visibility = 'visible';
    }
}

restartGame.addEventListener("click", () => resetGame());


function updateChoice(playerChoice, computerChoice){
    humanDisplay.textContent = playerChoice;
    computerDisplay.textContent = computerChoice;
}


function playRound(humanChoice, computerChoice){
    if(computerChoice == "ROCK" && humanChoice == "SCISSOR" ||
       computerChoice == "PAPER" && humanChoice == "ROCK" ||
       computerChoice == "SCISSOR" && humanChoice == "PAPER"){
        computerScore++;
        computerCounter.textContent = computerScore;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    
    } 
    else if(computerChoice === humanChoice){
        console.log("It's a tie!");
    }
    else{
        humanScore++;
        humanCounter.textContent = humanScore;
        console.log("You win! " + computerChoice + " beats " + humanChoice)
    }
}

function resetGame(){
    finalMenu.style.visibility = "hidden";
    mainContainer.style.display = "flex";
    humanScore = 0;
    computerScore = 0;
    humanCounter.textContent = "";
    computerCounter.textContent = "";
    humanDisplay.textContent = "";
    computerDisplay.textContent = "";
}