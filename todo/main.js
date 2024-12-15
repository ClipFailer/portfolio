const ITEMS = document.getElementById('items');
const ADD_BTN = document.getElementById('add');
const ITEM = document.querySelector('.item');
const ADD_ITEM = document.querySelector('.add-item');
const ITEM_DESCRIPTION = document.querySelector('.item-description');
const ITEM_COMPLETED = document.querySelector('.item-completed');

// Getting array form local storage
const tasks = JSON.parse(localStorage.getItem('todo')) || [];

function getTasks() {
    let task;
    let completed;
    let removeBtn;
    let div;

    ITEMS.innerHTML = "";

    tasks.forEach(value => {
        div = document.createElement('div');
        div.style.marginBottom = '10px';

        task = document.createElement('input');
        task.value = value.description;
        task.classList.add('item-description');

        completed = document.createElement('input');
        completed.type = 'checkbox';
        completed.classList.add('item-completed');
        completed.checked = value.completed;

        removeBtn = document.createElement('button');
        removeBtn.innerText = '-';
        removeBtn.classList.add('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.id = value.id;

        div.appendChild(completed);
        div.appendChild(task);
        div.appendChild(removeBtn);

        ITEMS.appendChild(div);

        task.addEventListener('change', (e) =>  {
            updateTask(value.id, 'description', e.target.value);
        })

        completed.addEventListener('change', (e) =>  {
            updateTask(value.id, 'completed', e.target.checked);
        })

        removeBtn.addEventListener('click', (e) => {
            removeTask(e.target.id);
        })
    })

    return tasks;
}

getTasks();

function updateTask(id, key, value) { 
    let index = tasks.findIndex((i) => i.id === id);
    console.log(index);
    if(index > -1) {
        tasks[index][key] = value;
        setTasks(tasks);
    }
}

// Change array
function setTasks(tasks) {
    const newTasks = JSON.stringify(tasks);
    localStorage.setItem('todo', newTasks);
}

// Add task to tasks array and set it in local storage
function addTask(description, completed) {
    tasks.push( {
        description: description,
        completed: completed,
        id: Date.now(),
    });

    setTasks(tasks);
    getTasks();
}

function removeTask(id) { 
    let index = tasks.findIndex((i) => i.id == id)

    tasks.splice(index, 1);
    setTasks(tasks);
    getTasks();
}

// Show item by click
ADD_BTN.addEventListener('click', () => {
    ITEM.style.display = 'block';
})

// Add task by click
ADD_ITEM.addEventListener('click', () => {
    const description = ITEM_DESCRIPTION.value;
    const completed = ITEM_COMPLETED.checked;

    addTask(description, completed);

    ITEM.style.display = 'none';
    ITEM_DESCRIPTION.value = '';
})

