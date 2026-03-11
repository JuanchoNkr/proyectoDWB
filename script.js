let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){

let list = document.getElementById("taskList");
list.innerHTML = "";

let filteredTasks = tasks.filter(task => {

if(currentFilter === "completed") return task.completed;
if(currentFilter === "pending") return !task.completed;

return true;

});

filteredTasks.forEach((task, index) => {

let li = document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

li.innerHTML = `
<span onclick="toggleTask(${index})">${task.text}</span>
<button class="delete-btn" onclick="deleteTask(${index})">X</button>
`;

list.appendChild(li);

});

}

function addTask(){

let input = document.getElementById("taskInput");
let text = input.value.trim();

if(text === ""){
alert("Debes escribir una tarea");
return;
}

tasks.push({
text:text,
completed:false
});

input.value="";

saveTasks();
renderTasks();

}

function toggleTask(index){

tasks[index].completed = !tasks[index].completed;

saveTasks();
renderTasks();

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();
renderTasks();

}

function filterTasks(type){

currentFilter = type;

renderTasks();

}

renderTasks();
