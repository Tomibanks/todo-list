//selectors using const
const inputVal = document.getElementsByClassName("inputVal")[0];
const addTaskBtn = document.getElementsByClassName("btn")[0];

//Event listeners and Function
addTaskBtn.addEventListener("click", function () {
  const task = inputVal.value;
  if (!task) {
    alert("Please fill out the todo Task");
    return;
  }
  if (inputVal.value.trim()) {
    let localItems = JSON.parse(localStorage.getItem("localItem"));
    if (!localItems === null) {
      taskList = [];
    } else {
      taskList = localItems;
    }
    taskList.push(inputVal.value);
    localStorage.setItem("localItem", JSON.stringify(taskList));
    inputVal.value = "";
  }

  showlist();
});
function showlist() {
  let outPut = "";
  let taskListShow = document.querySelector(".todoListItem");
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }

  //todoList div created with JS
  taskList.forEach((data, index) => {
    outPut += `
    <div class="todoList">
    <p class="pText">${data} <button class="deleteTask" onClick="deleteItem(${index})">X</button></p> 
    </div>
    `;
  });
  taskListShow.innerHTML = outPut;
}
showlist();

//Delete Todo Function
function deleteItem(index) {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  taskList.splice(index, 1);
  localStorage.setItem("localItem", JSON.stringify(taskList));
  showlist();
}

//Clear all task Function
function clearTask() {
  localStorage.clear();
  showlist();
}
