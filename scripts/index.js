"use strict";
var _a;
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
    }
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.setAttribute("onclick", "deleteElement(this)");
    li.appendChild(span);
    saveDatas();
}
function changeClass(element) {
    console.log(element.classList);
    if (element.className === "") {
        element.className = "checked";
    }
    else {
        element.className = "";
    }
    saveDatas();
}
function deleteElement(element) {
    var _a;
    (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
    saveDatas();
}
function saveDatas() {
    sessionStorage.setItem("datas", todoList === null || todoList === void 0 ? void 0 : todoList.innerHTML);
}
function showTasks() {
    if (todoList != undefined) {
        todoList.innerHTML = sessionStorage.getItem("datas");
    }
}
(_a = document.querySelector("input")) === null || _a === void 0 ? void 0 : _a.addEventListener("keyup", function (event) {
    var _a;
    if (event.code === "Enter") {
        (_a = document.querySelector("button")) === null || _a === void 0 ? void 0 : _a.click();
    }
});
showTasks();
