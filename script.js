const input = document.getElementById("createTask");
const todoList = document.getElementById("listContainer");
const sumbitTask = document.getElementById("write");
const fpostit = document.getElementById("input");
const donelist = document.getElementById("listContainer2");

const done_page = document.getElementById("done")
const home_page = document.getElementById("home")

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
    image.parentNode.remove()
  });
  image2.addEventListener("click", function () {
    let new_div = image2.parentElement
    new_div.removeChild(image2)
    donelist.appendChild(new_div)
    image2.parentNode.remove()
  });
  input.value = "";
}

function Done() {
  done_page.style.display = "none"
  home_page.style.display = "block"
}



function Home() {
  done_page.style.display = "block"
  home_page.style.display = "none"
}
