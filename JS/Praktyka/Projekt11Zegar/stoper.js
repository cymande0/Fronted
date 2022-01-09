startBtn = document.querySelector(".start");
resetBtn = document.querySelector(".reset");
content = document.querySelector("div div");
let intervalIndex;
let countTime;
let isPaused = false;
let sec = 0;
let min = 0;
let h = 0;

const increseTime = () => {
        if(!isPaused) {
        sec++;
        if(sec === 60) {
            min++;
            sec = 0;
        } 
        if(min === 60) {
            h++;
            min = 0;
        }   
    }
        content.textContent = `${h<10 ? `0${h}` : h}:${min<10 ? `0${min}` : min}:${sec<10 ? `0${sec}` : sec}`;
}

const resetTime = () => {
    sec = 0;
    min = 0;
    h = 0;

    isPaused = false;

    clearInterval(intervalIndex);
    startBtn.textContent = "Start";

    content.textContent = `${h<10 ? `0${h}` : h}:${min<10 ? `0${min}` : min}:${sec<10 ? `0${sec}` : sec}`;
}

const action = () => {

    if(startBtn.textContent === "Start"){
        isPaused = false;
        startBtn.textContent = "Pauza";
        intervalIndex = setInterval(increseTime, 1000);
    } else if(startBtn.textContent === "Pauza") {
        isPaused = true;
        startBtn.textContent = "Start";
        clearInterval(intervalIndex);
    }
}

resetBtn.addEventListener("click", resetTime);
startBtn.addEventListener("click", action)
