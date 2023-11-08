"use strict";
const inputBox = document.getElementById("input-box");
const todoList = document.getElementById("list-container");
function addTask() {
    const li = document.createElement("li");
    if (inputBox.value === "") {
        alert("You must write something !");
    }
    else {
        li.innerHTML = inputBox === null || inputBox === void 0 ? void 0 : inputBox.value;
        todoList === null || todoList === void 0 ? void 0 : todoList.appendChild(li);
    }
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
function changeClass(event) {
    console.log(event);
    //   const tasks = document.querySelector(`#task-${id}`) as HTMLDListElement;
    //   console.log(tasks);
    event.classList.add("checked");
    //   const truc = (document.getElementById("tasks")?.className = "checked");
}
