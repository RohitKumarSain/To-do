function addTask() {
  var input = document.getElementById("todo-input").value;
  var list = document.getElementById("list");
  var item = document.createElement("li");
  item.innerHTML = input + ' <button onclick="deleteTask(this)">X</button>';
  list.appendChild(item);
  // document.getElementById("todo-input").value = "";
}

function deleteTask(btn) {
  btn.parentNode.remove();
}