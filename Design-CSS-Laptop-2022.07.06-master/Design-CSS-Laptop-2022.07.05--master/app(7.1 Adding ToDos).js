const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");         // <--- = const toDoInput = toDoForm.querySelector("input");   
const toDoList = document.getElementById("todo-list");

function paintTodo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintTodo(newToDo);
}


toDoForm.addEventListener("submit", handleToDoSubmit);
