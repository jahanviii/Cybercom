document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const priorityInput = document.getElementById('priority-input');
  const dueDateInput = document.getElementById('due-date-input');
  const categoryInput = document.getElementById('category-input');
  const taskList = document.getElementById('task-list');
  let tasks = [];

  function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    savedTasks.reverse().forEach(
      task => addTaskToList(task)
      );
  }

  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function addTaskToList(task) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    listItem.setAttribute('data-id', task.id);
//checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      updateTaskCompletion(listItem.dataset.id, checkbox.checked);
      saveTasks();
      if (checkbox.checked) {
        span.classList.add('text-decoration-line-through');
      } else{
        span.classList.remove('text-decoration-line-through');
      }
    });
    listItem.appendChild(checkbox);
//text
    const span = document.createElement('span');
    span.textContent = task.task;
    listItem.appendChild(span);
//due dae
    const dueDate = document.createElement('p');
    dueDate.classList.add('my-2');
    dueDate.textContent = task.dueDate;
    listItem.appendChild(dueDate);

    //edit button
  
    const editButton=document.createElement('button');
    editButton.textContent='Edit'
    editButton.classList.add('btn', 'btn-primary', 'ms-2');
    editButton.addEventListener('click',function() {
      let newText = prompt("Edit task:");
      if(newText){
        task.task= newText;
        span.textContent = newText;
       
        saveTasks();
      }})
      listItem.appendChild(editButton)
    
//delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'btn-danger', 'ms-2');
    deleteButton.addEventListener('click', () => {
      listItem.remove();
      saveTasks();
    });
    listItem.appendChild(deleteButton);
//append to li
    taskList.appendChild(listItem);
  }
//update when task complete
  function updateTaskCompletion(id, completed) {
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.completed = completed;
      saveTasks();
    }
  }

//on submit
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random().toString(),
      task: taskInput.value,
      priority: priorityInput.value,
      dueDate: dueDateInput.value,
      category: categoryInput.value,
      completed: false
    };
    tasks.push(newTask);
    saveTasks();
    addTaskToList(newTask);
   
    taskInput.value = '';
    // priorityInput.value = '';
    dueDateInput.value = '';
    // categoryInput.value = '';
  })
loadTasks();
})
