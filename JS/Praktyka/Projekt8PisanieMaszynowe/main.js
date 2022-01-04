const spnText = document.querySelector('.text');
const txt = 'Loremeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeem';

// Parametry
let indexText = 0;
const time = 40;

// // Implementacja
// const addLetter = () => {
//  spnText.textContent += txt[indexText];
//  indexText++;
//  if (indexText === txt.length) clearInterval(indexTyping);
// }
// const indexTyping = setInterval(addLetter, time); 

// const time = 40;
// let indexText = 0; 

const addingLetter = () => {
    spnText.textContent += txt[indexText];
    indexText++;
    if(indexText === txt.length) clearInterval(indexInterval);
}

const indexInterval = setInterval(addingLetter, time);

const span = document.querySelector('.cursor');
// console.log(span);
const blinkingLetter = () => {
    span.classList.toggle('active');
}

setInterval(blinkingLetter, 400);