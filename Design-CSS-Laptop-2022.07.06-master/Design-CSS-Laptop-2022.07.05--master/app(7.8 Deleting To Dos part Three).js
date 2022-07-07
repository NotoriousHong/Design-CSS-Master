const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");         // <--- = const toDoInput = toDoForm.querySelector("input");   
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const liThatWantRemove = event.target.parentElement;
    liThatWantRemove.remove();
    toDos = toDos.filter((hereIsForAnyWords) => hereIsForAnyWords.id !== parseInt(liThatWantRemove.id));    // <- 여기서 'filter()'에 소괄호 안에 값이 true가 되어야 반환된 값이 남아있기 때문에 !==로 함
    saveToDos();
}

function paintTodo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);                             // <--- When you write down the fucntion, it would be better way to write down the 'appenChild'.
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObject = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newTodoObject);
    paintTodo(newTodoObject);
    saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    parsedToDos.forEach(paintTodo);                        // <--- = parsedToDos.forEach((item) => console.log("This is the turn of ", item));
}






