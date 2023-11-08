const inputBox = document.getElementById("input-box") as HTMLInputElement;
const todoList = document.getElementById("list-container");

function addTask(): void {
  const li = document.createElement("li");
  if (inputBox.value === "") {
    alert("You must write something !");
  } else {
    li.innerHTML = inputBox?.value;
    todoList?.appendChild(li);
  }
  inputBox.value = "";
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
}

function changeClass(elemnt: HTMLLinkElement) {
    console.log(elemnt);
    
//   const tasks = document.querySelector(`#task-${id}`) as HTMLDListElement;
//   console.log(tasks);
  elemnt.classList.add("checked");

  //   const truc = (document.getElementById("tasks")?.className = "checked");
}
