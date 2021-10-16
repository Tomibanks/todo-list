//selectors
const addToDoButton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");
const input = document.getElementById("input");
const clearToDoButton = document.getElementById("clearToDo");
const submitButton = document.getElementById("submitfield");

//Event listeners
addToDoButton.addEventListener("click", addToDo);
clearToDoButton.addEventListener("click", clearToDo);
toDoContainer.addEventListener("click", deleteToDo);
submitButton.addEventListener("click", submitfield);

//Functons

function save() {
  var new_data = " " + document.getElementById("input").value;

  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", "[]");
  }

  var old_data = JSON.parse(localStorage.getItem("data"));
  old_data.push(new_data);

  localStorage.setItem("data", JSON.stringify(old_data));
}

function view() {
  if (localStorage.getItem("data") != null) {
    document.getElementById("toDoContainer").innerHTML = JSON.parse(
      localStorage.getItem("data")
    );
    document.getElementById("toDoContainer").classList.add("paragraph-style");
  }
}

function addToDo(e) {
  const task = input.value;
  if (!task) {
    alert("Please fill out the Todo Task");
    return;
  }
  e.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("paragraph-style");
  todoDiv.innerText = input.value;
  input.value = "";

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.innerHTML = "delete";
  trashButton.classList.add("delete-btn");
  todoDiv.appendChild(trashButton);

  //append to toDoContainer
  toDoContainer.appendChild(todoDiv);
}

function deleteToDo(e) {
  const item = e.target;
  const toDoContainer = item.parentElement;
  toDoContainer.remove();
}

function clearToDo(e) {
  //console.log(e.target);
  e.preventDefault();
  const item = e.target;
  const toDoContainer = item.parentElement;
  toDoContainer.remove();
  window.location.reload();
}

function submitfield(e) {
  window.location.href = "todo.html";
}
