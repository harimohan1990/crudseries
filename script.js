// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Add task (Create)
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (!taskText) {
    alert('Task cannot be empty!');
    return;
  }

  // Create task element
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task-item');

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  // Add Edit button
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => editTask(taskContent));

  // Add Delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => deleteTask(taskDiv));

  // Append content and buttons to task div
  taskDiv.appendChild(taskContent);
  taskDiv.appendChild(editButton);
  taskDiv.appendChild(deleteButton);

  // Append task to the task list
  taskList.appendChild(taskDiv);

  // Clear input field
  taskInput.value = '';
});

// Edit task (Update)
function editTask(taskContent) {
  const newTask = prompt('Edit your task:', taskContent.textContent);
  if (newTask !== null && newTask.trim() !== '') {
    taskContent.textContent = newTask.trim();
  }
}

// Delete task
function deleteTask(taskDiv) {
  taskList.removeChild(taskDiv);
}
