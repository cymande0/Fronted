// const slideList = [{
//  img: "images/img1.jpg",
//  text: 'Pierwszy tekst'
// },
// {
//  img: "images/img2.jpg",
//  text: 'Drugi tekst'
// },
// {
//  img: "images/img3.jpg",
//  text: 'Trzeci tekst'
// }];

// const image = document.querySelector('img.slider');
// const h1 = document.querySelector('h1.slider');
// // Interfejs
// const time = 3000;
// let active = 0;

// const changeSlide = () => {
//  active++;
//  if (active === slideList.length) {
//   active = 0;
//  }
//  image.src = slideList[active].img;
//  h1.textContent = slideList[active].text;

// }
// setInterval(changeSlide, time)

// // Implementacje


// 1. Klawisz <- (stzałka w lewo) przesuwa w lewo (cofa) slider
// 2. Klawisz -> (stzałka w lewo) przesuwa w prawo slider (do przod, czyli tak jak przy funkcji changeSlide) 
// lewa strzałka: keyCode = 37
// prawy strzałka: keyCode = 39
// 3. (strzałki) wstrzymuje setInterval, a po zmianie slajdu uruchamiają go ponownie (czas ma się liczyć ponownie)

// Projekt tutaj (przetestuj działajanie strzałek na klawiaturze)
// https://websamuraj.pl/examples/js/projekt9/


const slideList = [{
    img: "images/img1.jpg",
    text: "Tekst 1"
},
{
    img: "images/img2.jpg",
    text: "Tekst 2"
},
{
    img: "images/img3.jpg",
    text: "Tekst 3"
}];


h1 = document.querySelector("h1.slider");
img = document.querySelector("img.slider");
dots = [...document.querySelectorAll(".dots span")];

const intervalTime = 1000;
let index = 0;
let intervalIndex;

const changeDot = (move) => {

    const currentDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[currentDot].classList.remove("active");
    
    if(move === "left") {
        if(currentDot == 0) index = 2;
        else index = currentDot - 1;
        intervalIndex = setInterval(changeSlide, intervalTime);
    } else if (move === "right") {
        if(currentDot === 2) index = 0;
        else index = currentDot + 1;
        intervalIndex = setInterval(changeSlide, intervalTime);
    }

    h1.textContent = slideList[index].text;
    img.src = slideList[index].img;
    dots[index].classList.add("active");
}

const resetInterval = () => {
    clearInterval(intervalIndex);
}

const changeSlide = () =>  {

    index++;
    
    if(index === slideList.length) {
        index = 0;
    }    
    h1.textContent = slideList[index].text;
    img.src = slideList[index].img;
    changeDot();
    // dots[index].classList.add("active");
}

const keyChangeSlide = (e) => {
    e.preventDefault();
    const key = e.keyCode;
    resetInterval();
    switch(key) {
        case 37:
            changeDot("left");     
            break;
        case 39:
            changeDot("right");
            break;
    }
}

// utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
window.addEventListener("keydown", keyChangeSlide);
intervalIndex = setInterval(changeSlide, intervalTime);