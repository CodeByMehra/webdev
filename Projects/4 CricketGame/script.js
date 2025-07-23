let userinput= "";
let randomNumber= math.random()*3;


function getInput(userinput){
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

