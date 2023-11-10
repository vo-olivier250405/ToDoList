const inputBox = document.getElementById("input-box") as HTMLInputElement;
const todoList = document.getElementById("list-container") as HTMLUListElement;

function addTask(): void {
  const li = document.createElement("li");
  if (inputBox.value === "") {
    alert("You must write something !");
  } else {
    li.innerHTML = inputBox?.value;
    todoList?.appendChild(li);
    li.setAttribute("onclick", "changeClass(this)");
  }
  inputBox.value = "";
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  span.setAttribute("onclick", "deleteElement(this)");
  li.appendChild(span);
  saveDatas();
}

function changeClass(element: HTMLLinkElement) {
  console.log(element.classList);

  if (element.className === "") {
    element.className = "checked";
  } else {
    element.className = "";
  }
  saveDatas();
}

function deleteElement(element: HTMLSpanElement) {
  element.parentElement?.remove();
  saveDatas();
}

function saveDatas() {
  sessionStorage.setItem("datas", todoList?.innerHTML);
}

function showTasks() {
  if (todoList != undefined){
    todoList.innerHTML = sessionStorage.getItem("datas")!;
  }
}

document.querySelector("input")?.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    document.querySelector("button")?.click();
  }
});

showTasks();
