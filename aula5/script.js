document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    
    let tasks = [];

    
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task;

            const taskActions = document.createElement('div');
            taskActions.className = 'task-actions';

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Remover';
            deleteBtn.onclick = () => deleteTask(index);

            taskActions.appendChild(deleteBtn);
            li.appendChild(taskActions);
            taskList.appendChild(li);
        });
    }

    
    function addTask() {
        const task = taskInput.value.trim();
        if (task) {
            tasks.push(task);
            taskInput.value = '';
            renderTasks();
        }
    }

    
    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }


    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
