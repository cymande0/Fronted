
const h1 = document.querySelector("h1");

//
// function(e) {

// }

document.body.addEventListener("mousemove", (e) => {
    // console.log(event.clientX, event.clientY);
    // h1.textContent = `${e.clientX}, ${e.clientY}`;
    // document.body.style.background = `rgb(${e.clientX},${e.clientY},100)`;
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    h1.textContent = `${x},${y}`;

    const red = x / width * 100;
    const green = y / height * 100;
    const blue = 50;

    document.body.style.background = `rgb(${red}%, ${green}%, ${blue}%)`;
});