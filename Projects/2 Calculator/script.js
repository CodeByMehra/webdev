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
    document.getElementsByClassName("display")[0].innerText ="";
}

function clearLast(){
    displayText = displayText.slice(0, -1);
    document.getElementsByClassName("display")[0].innerText = `${display}`;
}