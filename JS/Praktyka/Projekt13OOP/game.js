class Game {
    constructor(startMoney) {
        this.wallet = new Wallet(startMoney);
        this.stats = new Statistics();

        this.resultInfo = document.querySelector('.score .result');
        this.numberInfo = document.querySelector('.score .number');
        this.winInfo = document.querySelector('.score .win');
        this.lossInfo = document.querySelector('.score .loss');
        this.walletInfo = document.querySelector('.wallet');
        this.btnStart = document.querySelector('#start');
        this.boards = [...document.querySelectorAll('div.color')];
        this.input = document.querySelector('#bid');
        this.inputBid = document.getElementById('bid');

        this.btnStart.addEventListener('click', this.startGame.bind(this));

        // console.log(this.boards);
        this.render();
    }

    render(colors = ['grey', 'grey', 'grey'], moneyAmount = this.wallet.getWalletValue(), stats = [0,0,0], result = "", winWon = 0, bid = 0) {
        this.boards.forEach((board, i) => {
            console.log(board.style.background = colors[i]);
        });

        if(result) {
            result = `Wygrales ${winWon} PLN.`;
        } else if(!result && result !== "") {
            result = `Przegrales ${bid} PLN.`;
        }

        this.walletInfo.textContent = moneyAmount;
        this.numberInfo.textContent = stats[0];
        this.winInfo.textContent = stats[1];
        this.lossInfo.textContent = stats[2];
        this.resultInfo.textContent = result;
        this.inputBid.textContent = "";
    }

    startGame() {
        if (this.inputBid.value < 1) return alert('Kwota, którą chcesz grać jest za mała!')
        const bid = Math.floor(this.inputBid.value);
      
        if (!this.wallet.checkCanPlay(bid)) {
         return alert("masz za mało środków lub podana została nieprawidłowa wartość")
        }
        this.wallet.changeWallet(bid, '-');
        
        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Result.checkWinner(colors);
        const wonMoney = Result.moneyWinInGame(win, bid);
        this.wallet.changeWallet(wonMoney);
        this.stats.addGameToStatistics(win, bid);

        this.render(colors, this.wallet.getWalletValue(), this.stats.showGameStatistics(), win, wonMoney, bid);
    }

}
