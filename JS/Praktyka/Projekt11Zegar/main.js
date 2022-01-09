
// const clock = () => {
//  const time = new Date();
//  // console.log(time.toLocaleString());
//  // console.log(time.toLocaleDateString());
//  const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
//  const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
//  const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();

//  document.querySelector('.clock span').textContent = `${hours}:${minutes}:${seconds}`
// }

// setInterval(clock, 1000);

const getTime = () => {
    const time = new Date;

    let sec = time.getSeconds() < 10 ? `0${time.getSeconds()}` :  time.getSeconds();
    let min = time.getMinutes() < 10 ? `0${time.getMinutes()}` :  time.getMinutes(); 
    let hours = time.getHours() < 10 ? `0${time.getHours()}` :  time.getHours(); 

     document.querySelector('.clock span').textContent = `${hours}:${min}:${sec}`
}

setInterval(getTime, 1000);









setInterval(getTime, 1000)