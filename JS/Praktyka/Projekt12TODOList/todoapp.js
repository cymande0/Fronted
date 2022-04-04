const addBtn = document.querySelector('button');
const form = document.querySelector('form');
const inputAddTask = document.querySelector('.addInput');
const searchInput = document.querySelector('div input')
const counter = document.querySelector('span');
const list = document.querySelector('ul');
const tasksNumber = document.querySelector('li span');
let tasks = [];
let searchedTasks = [];
let taskNumber = 0;

const renderPage = () => {
    list.textContent = '';
    tasks.forEach((task, index) => {
        task.dataset.key = index;
        taskNumber = index+1;
        list.appendChild(task);
    });
}

const removeTask = (e) => {
   const index = e.target.parentNode.dataset.key;
   tasks.splice(index, 1);
   counter.textContent = ` ${tasks.length} zadań`;
   renderPage();
}

const addTask = (e) => {
    e.preventDefault();
    // taskNumber++;
    let taskName = "";

    if(inputAddTask.value != "") {
       taskName = inputAddTask.value;
    } else {
        alert("Nie została wpisane zadanie.")
        return;
    }

    inputAddTask.value = "";
    let task = document.createElement('li');
    task.innerHTML = `<span>${taskNumber}. </span>` + taskName + "<button>Done!</button>";

    tasks.push(task);
    renderPage();

    counter.textContent = ` ${tasks.length} zadań`;
    task.querySelector('button').addEventListener('click', removeTask);
    
}

const search = (e) => {
    const searchText = e.target.value;
    searchedTasks = tasks.filter(task => task.textContent.includes(searchText));
    list.textContent = "";
    searchedTasks.forEach(li => {
        list.appendChild(li);
    })
    if(searchText == ""){
        renderPage();
    }
}

searchInput.addEventListener('input', search)
form.addEventListener('submit', addTask);
