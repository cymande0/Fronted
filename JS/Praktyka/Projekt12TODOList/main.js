const input = document.querySelector('input');
const ul = document.querySelector('ul');
let list = [...document.querySelectorAll('li')];

const search = (e) => {
    let searchedText = e.target.value;
    list = list.filter(task => task.textContent.toLowerCase().includes(searchedText));
    ul.textContent = '';
    list.forEach(li => ul.appendChild(li));
}

document.addEventListener('input', search);



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