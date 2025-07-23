let userinput= "";
let randomNumber= math.random()*3;
let computerChoice = ""
if (randomNumber>0 && randomNumber<1){
    computerChoice = 'Bat';
}else if(randomNumber>1 && randomNumber<2){
    computerChoice = 'Ball';
}else(randomNumber>2 && randomNumber<3){
    computerChoice = 'Stump';
};

function getInput(userinput){
    document.getElementById("choiceDisplay").innerText= `You Choosen ${userinput} `;
}

