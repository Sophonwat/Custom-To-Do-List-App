// This is a simple JavaScript To-Do List application that allows users to add, edit, delete, and mark tasks as completed.
let tasks = [];

function loadTasks() {
  const savedTasks = localStorage.getItem('tasks'); // Load tasks from localStorage
  if (savedTasks) {
    tasks = JSON.parse(savedTasks); // Parse the JSON string into an array of tasks
  }
}

// Load tasks from localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks
function renderTasks() {
    taskList.innerHTML = ''; // Clear the list
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('it'); 
        taskItem.className = 'task'; 
        //'li' list item is list of tasks. combine it with 'ul' unordered list.To combine logic with style.

        const taskText = document.createElement('span'); 
        taskText.textContent = task.text;
        if (task.completed) taskText.classList.add('completed'); // Add 'completed' class if task is done
        // 'span' for the task text.

        const completeButton = document.createElement('button'); // Create a "Complete" button
        completeButton.textContent = task.completed ? 'Undo' : 'Complete'; // Toggle button text
        completeButton.addEventListener('click', () => toggleComplete(index)); // Toggle completion on click

        const editButton = document.createElement('button'); // Create an "Edit" button
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTask(index));

        const deleteButton = document.createElement('button'); // Create a "Delete" button
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index));

        taskItem.appendChild(taskText); // Append the task text
        taskItem.appendChild(completeButton); // Append the "Complete" button
        taskItem.appendChild(editButton); // Append the "Edit" button
        taskItem.appendChild(deleteButton); // Append the "Delete" button
        taskList.appendChild(taskItem); // Append the task item to the list
    });
}

// Add a new task
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
      tasks.push({ text: taskText, completed: false }); // Add new task to the array
      saveTasks(); // Save tasks to localStorage
      renderTasks(); // Re-render the tasks
      taskInput.value = ''; // Clear the input field
  }
});


// Toggle task completion
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Edit task
function editTask(index) {
  const newTaskText = prompt('Edit task:', tasks[index].text);
  if (newTaskText !== null) {
    tasks[index].text = newTaskText.trim();
    saveTasks();
    renderTasks();
  }
}

// Load tasks and render them when the page loads
loadTasks();
renderTasks();