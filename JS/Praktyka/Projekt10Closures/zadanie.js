
const counter = () => {
    let time = 0;
    increaseTime = () => {
        time++;
        document.body.textContent = `${time}`;
    }
    return increaseTime;
}

const start = counter();
setInterval(start, 1000);