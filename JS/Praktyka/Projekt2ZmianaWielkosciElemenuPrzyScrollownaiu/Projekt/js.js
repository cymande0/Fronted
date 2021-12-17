
document.body.style.height = "1000vh";
let size = 0;
let grow = true;

const div = document.createElement("div");
div.style.width = "100%";
div.style.top = "0";
div.style.left = "0";
div.style.position = "fixed";

document.body.appendChild(div);
console.log(window.innerWidth/2)

function changeHeight() {
    console.log(size)

    if(size > (window.innerWidth/2)) {
        grow = false;
        div.style.background = "red";
    } else if (size <= 0) {
        grow = true;  
        div.style.background = "green";
    }

    if(grow) {
        size += 20;
    }
    else {
        size -= 20;
    }
    div.style.height = `${size}px`;
    
}

window.addEventListener("scroll", changeHeight)