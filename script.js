function addTask() {
  var input = document.getElementById("todo-input").value;
  if (input === "") {
    alert("Please enter a task!");
    return;
  }
  var list = document.getElementById("list");
  var item = document.createElement("li");
  item.innerHTML = input + ' <button onclick="deleteTask(this)">X</button>';
  list.appendChild(item);
  document.getElementById("todo-input").value = "";
}

function deleteTask(btn) {
  btn.parentNode.remove();
}
