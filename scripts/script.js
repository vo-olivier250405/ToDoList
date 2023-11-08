var inputBox = document.getElementById("input-box");
var todoList = document.getElementById("list-container");
function addTask() {
    if ((inputBox === null || inputBox === void 0 ? void 0 : inputBox.value) === "") {
        alert("You must write something !");
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = inputBox === null || inputBox === void 0 ? void 0 : inputBox.value;
        todoList === null || todoList === void 0 ? void 0 : todoList.appendChild(li);
    }
    inputBox === null || inputBox === void 0 ? void 0 : inputBox.value = "";
    var span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
function changeClass() {
    var _a;
    var truc = ((_a = document.getElementById("tasks")) === null || _a === void 0 ? void 0 : _a.className = "checked");
    console.log("hell");
}
