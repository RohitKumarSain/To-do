// declare a function for adding a task or todo
function addTask() { 
  var input = document.getElementById("todo-input").value; //take input from user
  // if input will empty 
  if (input === "") {
    alert("Please Enter Valid To-Do");
    return;
  }
  var list = document.getElementById("list"); 
  var item = document.createElement("li"); // create a li elment to add list items
  item.innerHTML =
    input +
    ' <button class="delete-btn" onclick="deleteTask(this)"><span class="material-symbols-outlined">delete_forever</span></button>';
  list.appendChild(item); // append items in list
  document.getElementById("todo-input").value = "";
}

// declare a fucntion for delete task or todo

function deleteTask(btn) {
  btn.parentNode.remove(); // this method remove the todo
}
