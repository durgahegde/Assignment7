var userChoice;
var computerChoice;

function rpsGame(userC, computerC){
    "user strict";

    if (userC == computerC){
        return "It's tie !!! Play one more game"
    } 
    else if (userC === "Rock"){
        if (computerC === "Paper"){
            return "Computer wins";
        } else{
            return "User wins"
        }
    }else if (userC === "Paper"){
        if(computerC === "Scissor"){
            return "Computer wins";
        } else{
            return "User wins"
        }
    }else if (userC === "Scissor"){
        if (computerC === "Rock"){
            return "Computer wins";
        } else{
            return "User wins"
        }
    }
    else {
        return "Invalid Entry Please choose Rock, Paper or Scissor"
    }  
}

var randomChoice = parseInt(Math.floor(Math.random()*10))
window.console.log(randomChoice);

if(randomChoice <= 3){
    computerChoice = "Rock";
}else if (randomChoice > 3 && randomChoice < 6){
    computerChoice = "Paper";
}else {
    computerChoice = "Scissor";
}

userChoice = window.prompt("Please select your option Rock or Paper or Scissor");
window.console.log("user choice : " +userChoice);
window.console.log("Computer choice : " +computerChoice);

var result = rpsGame (userChoice, computerChoice)
window.alert(result);

