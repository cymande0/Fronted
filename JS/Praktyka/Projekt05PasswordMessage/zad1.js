// const input = document.getElementById('pass');
// const div = document.querySelector('.message');
// const passwords = ["user", "wiosna"];
// const messages = ["wyjechałam na zawsze", "piekna pora roku"];

// input.addEventListener("input", (e) => {
//     const text = e.target.value;

//     passwords.forEach((password, index) => {
//         if(password === text){
//             div.textContent = messages[index];
//             e.target.value = "";
//         } else {
//             div.textContent = "";
//         }
//     })
// })


// input.addEventListener('input', (e) => {
//  // console.log(e.target.value);
//  if (password === e.target.value) {
//   div.textContent = message;
//   e.target.value = '';
//  } else {
//   div.textContent = '';
//  }
// })

const input = document.querySelector("input");
const passwords = ['jeden', 'DwA'];
const message = ["super", "działa"];

// const passwords = [10,45,66].map(number => number * 3);


passwords.forEach(element => {
    console.log(element);
})





// const showMessage = (e) => {
    
// }

// input.addEventListener("input", showMessage);

// input.addEventListener('focus', (e) => {
//  e.target.classList.add('active');
// })

// input.addEventListener('blur', (e) => {
//  e.target.classList.remove('active');
// })

