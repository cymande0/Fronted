
console.log("elo");
const btn = document.querySelector("button");
const li = document.querySelectorAll("li");
let size = 10;

// function initial() {
//     for(let i = 0; i < li.length; i++){
//         li[i].style.fontSize = `${size}px`;
//     }
// }

function changeSizeOfLi (){
    size++;
    li.forEach(element => {
        element.style.display = "block";
        element.style.fontSize = `${size}px`;
    });
    // for(let i = 0; i < li.length; i++){
    //     const tempLi = li[i];
    //     tempLi.style.display = "block";
    //     tempLi.style.fontSize = size + "px";
    // }
}

// initial()
btn.addEventListener("click", changeSizeOfLi)