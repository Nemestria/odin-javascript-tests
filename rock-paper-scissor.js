console.log("Let's play Rock - Paper - Scissor!");

// COMPUTER CHOICE

function getComputerChoice(max){
    let choice = (Math.floor(Math.random() * max))
    if(choice == 0){
        choice == "ROCK";
    }
    else if(choice == 1){
        choice == "PAPER";
    }
    else if(choice == 2){
        choice == "SCISSOR";
    }
    console.log("BOT CHOICE : " + choice)

    return choice;
}