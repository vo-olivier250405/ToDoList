const inputBox = document.getElementById("input-box") as HTMLInputElement;
const todoList = document.getElementById("list-container");

function addTask(): void {
  const li = document.createElement("li");
  if (inputBox.value === "") {
    alert("You must write something !");
  } else {
    li.innerHTML = inputBox?.value;
    todoList?.appendChild(li);
    li.setAttribute("onclick", "changeClass(this)");
    // li.onclick = changeClass(HTMLLinkElement)
  }
  inputBox.value = "";
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  span.setAttribute("onclick", "deleteElement(this)");
  li.appendChild(span);
}

function changeClass(element: HTMLLinkElement) {
  console.log(element.classList);

  //   const tasks = document.querySelector(`#task-${id}`) as HTMLDListElement;
  //   console.log(tasks);
  if (element.className === "") {
    element.className = "checked";
  } else {
    element.className = "";
  }

  //   const truc = (document.getElementById("tasks")?.className = "checked");
}

function deleteElement(element: HTMLSpanElement) {
  console.log(element.parentElement);
  element.parentElement?.remove();
}
