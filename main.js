const inputBar = document.getElementById('input-bar');
const addTaskBtn = document.getElementById('add-task-btn');
const list = document.getElementById('list-wrapper');

function makeTask() {
    var taskwrapper = document.createElement('label');
    taskwrapper.classList.add('task-wrapper');

    var taskcontent = document.createElement('div');
    taskcontent.classList.add('task-content');

    var inputcheckbox = document.createElement('input');
    inputcheckbox.setAttribute('type', 'checkbox');

    var spanCheckBox = document.createElement('span');
    spanCheckBox.classList.add('checkmark');

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(inputBar.value));
    
    var deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));

    var spanDeleteBtn = document.createElement('span');
    spanDeleteBtn.appendChild(document.createTextNode('Delete task'));

    taskcontent.appendChild(inputcheckbox);
    taskcontent.appendChild(spanCheckBox);
    taskcontent.appendChild(li);
    
    taskwrapper.appendChild(taskcontent);
    deleteBtn.appendChild(spanDeleteBtn);
    taskwrapper.appendChild(deleteBtn);

    
    

    list.appendChild(taskwrapper);
    inputBar.value = '';
    inputBar.focus();

    // When "remove" is clicked
    deleteBtn.addEventListener('click', (e) => {
        taskwrapper.remove();
    });
}



// When Enter key is pressed
inputBar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){ 
        makeTask();
    }
});


// When "Add Task" button is clicked
addTaskBtn.addEventListener('click', makeTask);

