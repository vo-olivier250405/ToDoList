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
        li.setAttribute("onclick", "changeClass(this)");
        // li.onclick = changeClass(HTMLLinkElement)
    }
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.setAttribute("onclick", "deleteElement(this)");
    li.appendChild(span);
}
function changeClass(element) {
    console.log(element.classList);
    //   const tasks = document.querySelector(`#task-${id}`) as HTMLDListElement;
    //   console.log(tasks);
    if (element.className === "") {
        element.className = "checked";
    }
    else {
        element.className = "";
    }
    //   const truc = (document.getElementById("tasks")?.className = "checked");
}
function deleteElement(element) {
    var _a;
    console.log(element.parentElement);
    (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
}
