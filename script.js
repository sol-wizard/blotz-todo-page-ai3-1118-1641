// 1. Find the elements on the page
const input = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const list = document.getElementById("task-list");

// 2. Listen for a click on "Add"
addButton.addEventListener("click", function () {
  const text = input.value.trim();
  if (text === "") return;

  // 3. Change the page: add a new item to the list
  const item = document.createElement("li");
  item.textContent = text;

  // Click a task to mark it as done (click again to undo)
  item.addEventListener("click", function () {
    item.classList.toggle("done");
  });

  list.appendChild(item);

  input.value = "";
  input.focus();
});

// "Clear done": find every task marked done and remove it
const clearDoneButton = document.getElementById("clear-done-button");

clearDoneButton.addEventListener("click", function () {
  const doneItems = list.querySelectorAll("li.done");
  doneItems.forEach(function (item) {
    item.remove();
  });
});
