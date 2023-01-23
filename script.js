function addTask() {
  var input = document.getElementById("todo-input").value;
  if (input === "") {
    alert("Please Enter Your To-Do");
    return;
  }
  var list = document.getElementById("list");
  var item = document.createElement("li");
  item.innerHTML =
    input +
    ' <button class="delete-btn" onclick="deleteTask(this)"></button>';
  list.appendChild(item);
  document.getElementById("todo-input").value = "";
}

function deleteTask(btn) {
  btn.parentNode.remove();
}
