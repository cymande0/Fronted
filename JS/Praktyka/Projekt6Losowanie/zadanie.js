const advices = [];

const addBtn = document.querySelector(".add");
const removeBtn = document.querySelector(".clean");
const showAdvicesBtn = document.querySelector(".showAdvice");
const showOptionsBtn = document.querySelector(".showOptions");
const message = document.querySelector("h1");
const userInput = document.querySelector("input");

const addAdvice = (e) => {
    e.preventDefault();
    input = userInput.value;
    advices.push(input);
    alert("Dodales " + input);
    userInput.value = "";
}

const showAdvices = () => {
    let index = Math.floor(Math.random() * advices.length);
    message.textContent = advices[index]; 
}

const resetAdvices = () => {
    advices = [];
}

const showOptions = () => {
    alert(advices);
}


addBtn.addEventListener("click", addAdvice);
showAdvicesBtn.addEventListener("click", showAdvices);
removeBtn.addEventListener("click", resetAdvices);
showOptionsBtn.addEventListener("click", showOptions)
