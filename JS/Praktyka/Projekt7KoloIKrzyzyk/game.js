// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const btn = document.querySelector("button");

const gameSummary = {
    gameNumbers: 0,
    win: 0,
    lose: 0,
    draw: 0
}

const game = {
    playerHand: "",
    aiHand: ""
}

function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

const checkResult = (player, ai) => {
    console.log(player, ai);
    if(player === ai) {
        ++gameSummary.draw;
        return "Remis";
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")){
        ++gameSummary.win;
        return "Wygrałeś";
    }
    else {
        ++gameSummary.lose;
        return "AI wygrał";
    }
}

function clearHands() {

    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    // document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
}

const play = () => {
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    document.querySelector('[data-summary="your-choice"]').textContent = game.playerHand;
    document.querySelector('[data-summary="ai-choice"]').textContent = game.aiHand;
    document.querySelector('[data-summary="who-win"]').textContent = gameResult; 
    document.querySelector(".numbers span").textContent = ++gameSummary.gameNumbers;
    document.querySelector(".wins span").textContent = gameSummary.win;
    document.querySelector(".losses span").textContent = gameSummary.lose;
    const cos = document.querySelector(".draws span").textContent = gameSummary.draw;


    clearHands();
}

const startGame = () => {

    if(game.playerHand) {
        play();
    } else {
        alert("Wybierz zagranie");
        return;        
    }
}

function handSelection() {
    game.playerHand = this.dataset.option;
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 4px red";
}

const hands = [...document.querySelectorAll('.select img')];

hands.forEach(hand => hand.addEventListener("click", handSelection));
btn.addEventListener("click", startGame);
