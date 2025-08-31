let taskArea = {
    Name: " ",
    Date: " "
}

function getInput() {
    const taskText = document.querySelector('.inputBox input[type="text"]').value;
    const taskDate = document.querySelector('.inputBox input[type="date"]').value;

    if (taskText && taskDate) {
        const outputBox = document.querySelector(".outputBox");
        const taskArea = document.createElement("section");
        taskArea.className = "taskArea";
        taskArea.innerHTML = `
            <h4>${taskText}</h4>
            <h4>${taskDate}</h4>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        
    }
}

function deleteTask(btn) {
    btn.parentElement.remove();
}