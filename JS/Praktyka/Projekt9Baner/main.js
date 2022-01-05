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

index = 0;

const changeDot = () => {
    const currentDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[currentDot].classList.remove("active");
    dots[index].classList.add("active");
}

const checkKey = (e) => {
    console.log(e.keyCode);
    // if(e.keyCode === '38') {
    //     console.log("UP");
    // }
}

const changeSlide = () =>  {
    // dots[index].classList.remove("active");
    index++;
    if(index === slideList.length) {
        index = 0;
    }
    
    console.log(index);
    h1.textContent = slideList[index].text;
    img.src = slideList[index].img;
    checkKey();
    changeDot();
    // dots[index].classList.add("active");
}

changeSlide();



// setInterval(changeSlide, 1000);