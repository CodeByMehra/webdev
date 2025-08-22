let taskArea = {
    Name: " ",
    Date: " "
}

function getInput() {
    const taskText = document.querySelector('.inputBox input[type="text"]').value;
    const taskDate = document.querySelector('.inputBox input[type="date"]').value;

    if (taskText && taskDate) {
        document.querySelector(".outputBox").innerHTML = `
               <h4>${taskText}</h4>
               <h4>${taskDate}</h4>
               <button onclick="deleteTask(this)">Delete</button>
               `
    }
    outputBox.appendChild(outputBox);

    taskText = document.querySelector('.inputBox input[type="text"]').value= " ";
    taskDate = document.querySelector('.inputBox input[type="date"]').value= " ";
}

function deleteTask(btn) {
    btn.parentElement.remove();
}