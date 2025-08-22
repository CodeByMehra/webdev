let userinput = "";

function getInput(userinput) {
    let randomNumber = Math.random() * 3;
    let computerChoice = ""
    if (randomNumber > 0 && randomNumber < 1) {
        computerChoice = 'Bat';
    } else if (randomNumber > 1 && randomNumber < 2) {
        computerChoice = 'Ball';
    } else if (randomNumber > 2 && randomNumber < 3) {
        computerChoice = 'Stump'
    };
    document.getElementById("choiceDisplay").innerText = `Your Choice: ${userinput} 
    computer choosen: ${computerChoice}`;
    // result(userinput,computerChoice);
    scoreBoard(userinput, computerChoice);

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



function scoreBoard(userinput, computerChoice) {
    if (userScores < 5 && pcScores < 5) {
        if (userinput == 'Bat' && computerChoice == 'Bat') {
            document.getElementById("resultDisplay").innerText = `Result : Tie`;
        } else if (userinput == 'Bat' && computerChoice == 'Ball') {
            userScores++;
            document.getElementById("userScoreCount").innerText = `Your score : ${userScores}`;
        } else if (userinput == 'Bat' && computerChoice == 'Stump') {
            pcScores++;
            document.getElementById("pcScoreCount").innerText = `PC score : ${pcScores}`;
        } else if (userinput == 'Ball' && computerChoice == 'Bat') {
            pcScores++;
            document.getElementById("pcScoreCount").innerText = `PC score : ${pcScores}`;
        } else if (userinput == 'Ball' && computerChoice == 'Ball') {
            document.getElementById("resultDisplay").innerText = `Result : Tie`;
        } else if (userinput == 'Ball' && computerChoice == 'Stump') {
            userScores++;
            document.getElementById("userScoreCount").innerText = `Your score : ${userScores}`;
        } else if (userinput == 'Stump' && computerChoice == 'Bat') {
            userScores++;
            document.getElementById("userScoreCount").innerText = `Your score : ${userScores}`;
        } else if (userinput == 'Stump' && computerChoice == 'Ball') {
            pcScores++;
            document.getElementById("pcScoreCount").innerText = `PC score : ${pcScores}`;
        } else if (userinput == 'Stump' && computerChoice == 'Stump') {
            document.getElementById("resultDisplay").innerText = `Result : Tie`;
        }
        // Check for win after updating scores
        if (userScores === 5) {
            document.getElementById("resultSection").innerText = `Result : You Won!! `;
            document.getElementById("tryAgainButton").style.display="inline"
            document.getElementsByClassName("gamePanel")[0].style.display="none"
        } else if (pcScores === 5) {
            document.getElementById("resultSection").innerText = `Result : PC WON!! `;
            document.getElementById("tryAgainButton").style.display="inline"
            document.getElementsByClassName("gamePanel")[0].style.display="none"
        }
    }
}

function gameReset(){
    userScores= 0;
    pcScores= 0;
    document.getElementById("pcScoreCount").innerText = pcScores;
    document.getElementById("userScoreCount").innerText = userScores;
    document.getElementsByClassName("gamePanel")[0].style.display="inline"
    document.getElementById("tryAgainButton").style.display="none"
}