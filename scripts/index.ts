const inputBox = document.getElementById("input-box") as HTMLElement
const todoList = document.getElementById("list-container");

function addTask(): void {
  if (inputBox?.value === "") {
    alert("You must write something !");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox?.value;
    todoList?.appendChild(li);
  }
  inputBox?.value = "";
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span)
}

function changeClass() {
  const truc = (document.getElementById("tasks")?.className = "checked");
  console.log("hell");
}
