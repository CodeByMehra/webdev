// let display= ``;

// function buttonPress(num){
//     display =document.getElementsByClassName("display")[0].innerText = display +  `${num}` ;
// }

// function solution(display){
//     let answer= eval(display);
    
//     document.getElementsByClassName("display")[0].innerText = `${answer}` ;
//     display= answer;
// }

let displayText = ""; 

function buttonPress(num) {
    displayText = displayText + num;
    document.getElementsByClassName("display")[0].innerText = displayText;
}

function solution() {
    try {
        let answer = eval(displayText);
        document.getElementsByClassName("display")[0].innerText = answer;
        displayText = `${answer}`; 
    } catch (error) {
        document.getElementsByClassName("display")[0].innerText = "Error";
        displayText = "";
    }
}

function clearDisplay(){
    displayText= "";
    document.getElementsByClassName("display")[0].innerText = "";
}