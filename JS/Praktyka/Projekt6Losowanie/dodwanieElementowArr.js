const names = []

const btn = document.querySelector("button");
const userInput = document.querySelector("input");
const div = document.querySelector("div");

const addInput = (e) => {
    e.preventDefault();
    let input = userInput.value;

    if(input.length) {
        for(name of names) {
            if(name === input){
            alert("bylo!");
            userInput.value = "";
            return;
            }
        }
    }

    names.push(input);
    div.textContent += input + ", ";
    userInput.value = "";
    
}

btn.addEventListener("click", addInput);





































// const names = [];
// const div = document.querySelector('div')

// const addName = (e) => {
//  e.preventDefault();
//  const input = document.querySelector('input');
//  const newName = input.value;
//  if (input.value.length) {
//   for (name of names) {
//    if (name === newName) {
//     alert("to już jest!!!!!!");
//     return
//    }
//   }
//   names.push(newName);
//   // console.log(names);
//   div.textContent += newName + ", ";
//   input.value = "";
//  }

// }
// document.querySelector('button').addEventListener('click', addName)