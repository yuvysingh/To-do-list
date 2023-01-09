const input = document.getElementById("textinput");
const sumbitButton = document.getElementById("sumbitButton");
const todoList = document.getElementById("listContainer");

sumbitButton.addEventListener("click", function () {
  createTask();
});

let count = 0;

function createTask() {
  let div = document.createElement("div");
  div.append(`${input.value}`);
  div.classList.add("Task");
  div.setAttribute("id", `${count}`);
  let button = document.createElement("button");
  button.append("delete");
  button.classList.add("delButton");
  button.setAttribute("btnNumber", `${count}`);
  div.append(button);

  todoList.append(div);

  input.value = "";
}
