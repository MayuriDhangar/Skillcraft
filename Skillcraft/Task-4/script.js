function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskDate = document.getElementById("taskDate");

    if (taskInput.value === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let taskText = document.createElement("span");
    taskText.innerText = taskInput.value;

    let dateText = document.createElement("div");
    dateText.className = "date";
    dateText.innerText = taskDate.value ? "Due: " + taskDate.value : "";

    let actions = document.createElement("div");
    actions.className = "task-actions";

    // Complete button
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "✔";
    completeBtn.onclick = function() {
        taskText.classList.toggle("completed");
    };

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.innerText = "✏";
    editBtn.onclick = function() {
        let newTask = prompt("Edit task:", taskText.innerText);
        if (newTask !== null) {
            taskText.innerText = newTask;
        }
    };

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "🗑";
    deleteBtn.onclick = function() {
        li.remove();
    };

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(taskText);
    li.appendChild(dateText);
    li.appendChild(actions);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
    taskDate.value = "";
}