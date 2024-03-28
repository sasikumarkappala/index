const todoList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', function() {
  const newTaskText = newTaskInput.value.trim();
  if (newTaskText) {
    const newTask = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      this.parentNode.classList.toggle('completed');
    });
    newTask.appendChild(checkbox);
    newTask.appendChild(document.createTextNode(newTaskText));
    todoList.appendChild(newTask);
    newTaskInput.value = '';
  }
});
