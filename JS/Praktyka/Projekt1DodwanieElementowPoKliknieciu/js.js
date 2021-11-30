const btn = document.querySelector("button");
let counter = 0;
// btn.addEventListener("click", function() {
//     console.log("Click");
// });

const addElement = function() {
    const div = document.createElement("div");
    div.textContent = ++counter;
    if(counter % 5 == 0){
       div.classList.add("circle")
    }
    document.body.appendChild(div);
}
// const getCounter = function () { 
//     return ++counter;
//  }


btn.addEventListener("click", addElement);

