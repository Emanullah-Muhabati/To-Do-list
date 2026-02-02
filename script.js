const addNewTask = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addTaskButton");
const taskList = document.querySelector("#taskList");
const clearBtn = document.querySelector(".delete-btn");
const search = document.querySelector("#search");
const hide = document.querySelector(".hide");

// Function to create a new task item
function createTaskItem(taskText) {
  const li = document.createElement("li");
  li.className = "task-item";
  li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
  return li;
}
// Event listener to add a new task
addTaskButton.addEventListener("click", () => {
  const taskText = addNewTask.value.trim();
  if (taskText !== "") {
    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    addNewTask.value = "";
    hide.style.display = "none";
  }
});

// Event listener to delete a task
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const taskItem = e.target.parentElement;
    taskList.removeChild(taskItem);
    if (taskList.children.length == 0) {
      hide.style.display = "block";
    }
  }
});

// Event listener to search tasks
search.addEventListener("input", () => {
  const searchTerm = search.value.toLowerCase();
  const tasks = taskList.getElementsByClassName("task-item");
  Array.from(tasks).forEach((task) => {
    const taskText = task.querySelector(".to-do-list").textContent.toLowerCase();
    if (taskText.includes(searchTerm)) {
      task.style.display = "";
    } else {
      task.style.display = "none";
    }
  });
});
