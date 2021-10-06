//selectors
const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');
const clearToDoButton = document.getElementById('clearToDo');


//Event listeners
addToDoButton.addEventListener('click', addToDo)
clearToDoButton.addEventListener('click', clearToDo)
toDoContainer.addEventListener('click', deleteToDo)
toDoContainer.addEventListener('click', updateToDo)



//Functons
function addToDo(e) {
 e.preventDefault();
 const todoDiv = document.createElement('div');
 todoDiv.classList.add('paragraph-style');
 todoDiv.innerText = inputField.value;
 inputField.value = "";

 //newTodo
 //const newTodo = document.createElement('li');
 //newTodo.innerText = 'hey';
 //newTodo.classList.add('paragraph-style');
 //todoDiv.appendChild(newTodo)

 //check mark button

const trashButton = document.createElement('button')
trashButton.innerHTML = 'delete';
trashButton.classList.add("complete-btn")
todoDiv.appendChild(trashButton);

const updateButton = document.createElement('button')
//updateButton.innerHTML = '<i class="fas fa-trash"></i>';
updateButton.innerHTML = 'update';
updateButton.classList.add("complete")
todoDiv.appendChild(updateButton);
 

 //append to toDoContainer
 toDoContainer.appendChild(todoDiv)
}


function deleteToDo(e) {
 //console.log(e.target);
 const item = e.target;
 if (item.classList[0] === "complete-btn") {
 const toDoContainer = item.parentElement;
 toDoContainer.remove();
 }
}

function updateToDo(e) {
 //console.log(e.target);
 const item = e.target;
 if (item.classList[0] === "complete") {
 const toDoContainer = item.parentElement;
 toDoContainer.remove();
 }
}

function clearToDo(e) {
 console.log(e.target);
 e.preventDefault();
 toDoContainer.style.textDecoration = "line-through";
 //toDoContainer.remove();
 //toDoContainer.removeChild(todoDiv);
}
