
const add = () => {
 let number = 0;
 number++;
 console.log(number);
 document.body.textContent = `aktualny stan licznika to ${number}`;
}
document.addEventListener('click', add)