let userinput= "";

function getInput(userinput){
    let randomNumber= Math.random()*3;
    let computerChoice = ""
if (randomNumber>0 && randomNumber<1){
    computerChoice = 'Bat';
}else if(randomNumber>1 && randomNumber<2){
    computerChoice = 'Ball';
}else if(randomNumber>2 && randomNumber<3){
    computerChoice = 'Stump'
};
    document.getElementById("choiceDisplay").innerText= `Your Choice: ${userinput} 
    computer choosen: ${computerChoice}`;
    // result(userinput,computerChoice);
    scoreBoard(userinput,computerChoice);
    
}

// function result(userinput, computerChoice){
//     if(userinput == 'Bat' && computerChoice == 'Bat'){
//         document.getElementById("resultDisplay").innerText= `Result : Tie`;
//     }else if(userinput == 'Bat' && computerChoice == 'Ball'){
//         document.getElementById("resultDisplay").innerText= `Result : You Won`;
//     }else if(userinput == 'Bat' && computerChoice == 'Stump'){
//         document.getElementById("resulteDisplay").innerText= `Result : You Lost`;
//     }else if(userinput == 'Ball' && computerChoice == 'Bat'){
//         document.getElementById("resultDisplay").innerText= `Result : You Lost`;
//     }else if(userinput == 'Ball' && computerChoice == 'Ball'){
//         document.getElementById("resultDisplay").innerText= `Result : Tie`;
//     }else if(userinput == 'Ball' && computerChoice == 'Stump'){
//         document.getElementById("resultDisplay").innerText= `Result : You Won`;
//     }else if(userinput == 'Stump' && computerChoice == 'Bat'){
//         document.getElementById("resultDisplay").innerText= `Result : You Won`;
//     }else if(userinput == 'Stump' && computerChoice == 'Ball'){
//         document.getElementById("resultDisplay").innerText= `Result : You Lost`;
//     }else if(userinput == 'Stump' && computerChoice == 'Stump'){
//         document.getElementById("resultDisplay").innerText= `Result : Tie`;
//     }
// }

let userScores = 0;
let pcScores = 0;

function scoreBoard(userinput,computerChoice){
    if(userinput == 'Bat' && computerChoice == 'Bat'){
        document.getElementById("resultDisplay").innerText= `Result : Tie`;
    }else if(userinput == 'Bat' && computerChoice == 'Ball'){
        document.getElementById("userScoreCount").innerText= userScores++;
    }else if(userinput == 'Bat' && computerChoice == 'Stump'){
        document.getElementById("pcScoreCount").innerText= pcScores++;
    }else if(userinput == 'Ball' && computerChoice == 'Bat'){
        document.getElementById("pcScoreCount").innerText= pcScores++;
    }else if(userinput == 'Ball' && computerChoice == 'Ball'){
        document.getElementById("resultDisplay").innerText= `Result : Tie`;
    }else if(userinput == 'Ball' && computerChoice == 'Stump'){
        document.getElementById("userScoreCount").innerText= userScores++;
    }else if(userinput == 'Stump' && computerChoice == 'Bat'){
        document.getElementById("userScoreCount").innerText= userScores++;
    }else if(userinput == 'Stump' && computerChoice == 'Ball'){
        document.getElementById("pcScoreCount").innerText= pcScores++;
    }else if(userinput == 'Stump' && computerChoice == 'Stump'){
        document.getElementById("resultDisplay").innerText= `Result : Tie`;
    }
}
