function addTask(){

    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if(taskText === ""){
        alert("Escribe una tarea");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    let btn = document.createElement("button");
    btn.textContent = "X";

    btn.onclick = function(){
        li.remove();
    };

    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
