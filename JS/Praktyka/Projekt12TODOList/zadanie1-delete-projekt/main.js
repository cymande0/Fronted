// const input = document.querySelector('input');
// const ul = document.querySelector('ul');
// let list = [...document.querySelectorAll('li')];

// const search = (e) => {
//     let searchedText = e.target.value;
//     list = list.filter(task => task.textContent.toLowerCase().includes(searchedText));
//     ul.textContent = '';
//     list.forEach(li => ul.appendChild(li));
// }

// document.addEventListener('input', search);



// const removeTask = (e) => {
//  // e.target.remove();
//  // e.target.parentNode.remove();
//  // console.log(e.target.parentNode);
//  // e.target.parentNode.style.textDecoration = "line-through";
//  // e.target.remove();
//  const index = e.target.dataset.key;
//  console.log(index);
//  document.querySelector(`li[data-key="${index}"]`).remove()

// }


// document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask))

const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const btn = document.querySelector('button');
const counter = document.querySelector('span');
const listItem = document.getElementsByClassName('task');
const input = document.querySelector('input');


const removeTask = (e) => {
    // e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key
    toDoList.splice(index,1);
    renderList();
    counter.textContent = listItem.length;
}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if(titleTask === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + '<button>Usuń</button>';
    
    toDoList.push(task);
    
    renderList();
    
    ul.appendChild(task);
    input.value = "";
    
    // const listItem = document.querySelectorAll('li.task').length;
    counter.textContent = listItem.length;
    task.querySelector('button').addEventListener('click', removeTask);
    
}

const renderList = () => {
    ul.textContent = '';
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
}
form.addEventListener('submit', addTask);