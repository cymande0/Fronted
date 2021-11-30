btn = document.body.querySelector("button");
let counter = 1;

function addElement() {
    const li = document.createElement("li");
    const ul = document.querySelector("ul");

    li.textContent = counter;
    if(counter % 3 == 0) {
        li.classList.add("big");
    }
    ul.appendChild(li);
    counter += 2;
}

btn.addEventListener("click", addElement);