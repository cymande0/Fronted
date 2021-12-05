let size = 10;
let orderElement = 1;

function createLi() {
    let li;
    for(let i = 0; i < 10; i++){
       li = document.createElement("li");
       li.style.fontSize = `${size++}px`;
       li.textContent = "eloooo";
       ul.appendChild(li);
    }
}

const init = () => {
    const btn = document.createElement("button");
    const btnReset = document.createElement("button");
    btn.style.width = "150px";
    btn.style.height = "80px";
    btn.textContent = "Click";
    btnReset.style.width = "150px";
    btnReset.style.height = "80px";
    btnReset.textContent = "Wyczysc";
    document.body.appendChild(btn);
    document.body.append(btnReset);

    ul = document.createElement("ul");
    ul.style.listStyle = "none";
    document.body.appendChild(ul);
    
    btn.addEventListener("click", createLi);
    btnReset.addEventListener('click', cleanList);
}

const cleanList = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
   }

init()
