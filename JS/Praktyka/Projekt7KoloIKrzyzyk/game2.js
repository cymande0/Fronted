
const gameResults = {
    numberOfGames: 0,
    winNumber: 0,
    drawNumber: 0,
    loseNumber: 0
}

const gameStatus = {
    aiChoice: "",
    userChoice: ""
}

const getAIChoice = () => {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

const getResult = (user, ai) => {
    if((user === "nożyczki" && ai == "papier") ||
    (user === "kamień" && ai === "nożyczki") || 
    (user === "nożyczki" && ai === "papier")) {
        return "Human";
    } else if (user === ai) {
        return "Remis";
    } else {
        return "AI";
    }
}

const publishResult = (result, user, ai) => {
    console.log(result, ai, user);
    document.querySelector("[data-summary='your-choice']").textContent = user;
    document.querySelector("[data-summary='ai-choice']").textContent = ai;
    document.querySelector("[data-summary='who-win']").textContent = result;
    document.querySelector(".numbers span").textContent = ++gameResults.numberOfGames;
    if(result === "Human"){
    document.querySelector(".wins span").textContent = ++gameResults.winNumber;
    } else if (result === "AI") {
        document.querySelector(".losses span").textContent = ++gameResults.loseNumber;
    } else if(result === "Remis") {
        document.querySelector(".draws span").textContent = ++gameResults.drawNumber;
    }
}

const clearGame = () => {
    hands.forEach(hand => hand.style.boxShadow = "");
}

const startGame = () => {
    if(gameStatus.userChoice){
        gameStatus.aiChoice = getAIChoice();
        const result = getResult(gameStatus.userChoice, gameStatus.aiChoice);
        publishResult(result, gameStatus.userChoice, gameStatus.aiChoice);
        clearGame();
    } else {
        alert("Wybierz akcje.");
        return;
    }
}

const takeChoice = (e) => {
    gameStatus.userChoice = e.target.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "");
    e.currentTarget.style.boxShadow = "0 0 0 4px red";
}

const hands = [...document.querySelectorAll(".select img")];
hands.forEach(hand => hand.addEventListener("click", takeChoice));
document.querySelector("button").addEventListener("click", startGame);