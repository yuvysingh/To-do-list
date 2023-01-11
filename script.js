const input = document.getElementById("createTask");
const todoList = document.getElementById("listContainer");
const sumbitTask = document.getElementById("write");
const fpostit = document.getElementById("input");
const donelist = document.getElementById("listContainer2");

sumbitTask.addEventListener("click", function () {
  createTask();
});

let count = 0;

function createTask() {
  if (input.value == "") {
    return;
  }
  let div = document.createElement("div");
  div.classList.add("task");
  div.setAttribute("id", `div${count}`);
  let text = document.createElement("p");
  text.append(`${input.value}`);
  text.classList.add("text");

  let image = document.createElement("img");
  image.setAttribute("src", "redtrashcan.svg");
  image.setAttribute("width", "16");
  image.setAttribute("height", "16");
  image.setAttribute("id", `image${count}`);
  count++;
  let image2 = document.createElement("img");
  image2.setAttribute("src", "greentick.svg");
  image2.setAttribute("width", "16");
  image2.setAttribute("height", "16");
  image2.setAttribute("id", `image${count}`);
  div.append(text);
  div.append(image);
  div.append(image2);

  todoList.insertBefore(div, fpostit);

  image.addEventListener("click", function () {
    div.remove();
  });
  image2.addEventListener("click", function () {
    div.remove();
    donelist.append(div);
    image2.remove();

    //
  });
  input.value = "";
}
