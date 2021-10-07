//selectors
const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');
const clearToDoButton = document.getElementById('clearToDo');


//Event listeners
addToDoButton.addEventListener('click', addToDo)
clearToDoButton.addEventListener('click', clearToDo)
toDoContainer.addEventListener('click', deleteToDo)
//toDoContainer.addEventListener('click', updateToDo)



//Functons
function addToDo(e) {
 const task = inputField.value;
if (!task) {
 alert("Please fill out the Todo Task. Love from Bankole David");
 //inputField.value = "Please fill out the todo task";
 return
}
 e.preventDefault();
 const todoDiv = document.createElement('div');
 todoDiv.classList.add('paragraph-style');
 todoDiv.innerText = inputField.value;
 inputField.value = "";
 

const trashButton = document.createElement('button')
//trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.innerHTML = 'delete';
trashButton.classList.add("delete-btn")
todoDiv.appendChild(trashButton);

const updateButton = document.createElement('button')
updateButton.innerHTML = 'update';
updateButton.classList.add("update")
//todoDiv.appendChild(updateButton);
 

 //append to toDoContainer
 toDoContainer.appendChild(todoDiv)
}


function deleteToDo(e) {
 const item = e.target;
 const toDoContainer = item.parentElement;
 toDoContainer.remove();
}

function updateToDo(e) {
 console.log(e.target);
 e.preventDefault();
 
}


function clearToDo(e) {
 //console.log(e.target);
 e.preventDefault();
 const item = e.target;
 const toDoContainer = item.parentElement;
 //toDoContainer.style.textDecoration = "line-through";
 toDoContainer.remove();
 window.location.reload()
}
