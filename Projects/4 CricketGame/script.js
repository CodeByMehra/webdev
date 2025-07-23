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
    document.getElementById("choiceDisplay").innerText= `You Choosen ${userinput} And computer choosen ${computerChoice}`;
}

