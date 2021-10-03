//selectors
const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');
const inputField2 = document.getElementById('inputField2');
const clearToDoButton = document.getElementById('clearToDo');


//Event listeners
addToDoButton.addEventListener('click', addToDo)
clearToDoButton.addEventListener('click', clearToDo)


//Functons
function addToDo(e) {
 e.preventDefault();
 const paragraph = document.createElement('p');
 paragraph.classList.add('paragraph-style');
 paragraph.innerText = inputField.value;
 toDoContainer.appendChild(paragraph);
 inputField.value = "";
}

function clearToDo(e) {
e.preventDefault();
const paragraph = document.removeChild('p');
toDoContainer.replaceChild(paragraph);
console.log (paragraph)

}