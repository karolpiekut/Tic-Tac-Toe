(function () {
    //query selectors
    const p1nameField = document.querySelector('#p1nameField');
    const p2nameField = document.querySelector('#p2nameField');
    const p1ScoreField = document.querySelector('#p1score-number');
    const p2ScoreField = document.querySelector('#p2score-number');
    const boardFields = document.querySelectorAll('.board-field');
    const reset = document.querySelector('#reset');
    //show player names
    const localP1 = localStorage.getItem('localP1');
    const localP2 = localStorage.getItem('localP2');
    p1nameField.innerText = localP1 + ':';
    p2nameField.innerText = localP2 + ':';
    //to be used in the multiplayer game
    const gameStateValue = localStorage.getItem('gameStateValue'); //single or multiplayer value
    //load x/o images
    const xImg = document.createElement('img');
    const oImg = document.createElement('img');
    oImg.src = '../Resources/o.svg';
    xImg.src = '../Resources/x.svg';
    //reset game
    function resetGame(e) {
        e.preventDefault();
        window.location.href = '../index.html';
        score.p1score = 0;
        score.p2score = 0;
        localStorage.clear();
    }
    //game board
    function createGameBoard()  {
        return {
            tl: 0, tm: 0, tr: 0,
            ml: 0, mm: 0, mr: 0,
            bl: 0, bm: 0, br: 0
        }
    }
    //score fields
    let score = {
        p1score: 0,
        p2score: 0
    }
    function updateScoreBoard() {
        p1ScoreField.innerText = score.p1score;
        p2ScoreField.innerText = score.p2score;
    }
    let players = {
        player1: {
            name: localP1,
            symbol: 1,
            //score: 0,//fix once whole game is operational
            pic: xImg
        },
        player2: {
            name: localP2,
            symbol: 4,
            //score: 0,//fix once whole game is operational
            pic: oImg
        }
    }
    const changeTurn = () => {
        playerTurn = playerTurn === players.player1 ? players.player2 : players.player1;
    }
    const winLogic = () => {
        let one = gameBoard.tl + gameBoard.tm + gameBoard.tr;
        let two = gameBoard.ml + gameBoard.mm + gameBoard.mr;
        let three = gameBoard.bl + gameBoard.bm + gameBoard.br;
        let four = gameBoard.tl + gameBoard.ml + gameBoard.bl;
        let five = gameBoard.tm + gameBoard.mm + gameBoard.bm;
        let six = gameBoard.tr + gameBoard.mr + gameBoard.br;
        let seven = gameBoard.tl + gameBoard.mm + gameBoard.br;
        let eight = gameBoard.tr + gameBoard.mm + gameBoard.bl;
        return [one, two, three, four, five, six, seven, eight];
    }
    let playerTurn = players.player1;
    let gameBoard = createGameBoard();

    function removeXO() {
        const imgXO = document.getElementsByTagName('img');
        Array.from(imgXO).forEach((img) => img.remove());
    }

    function GameController(a) {
        function checkWin(winScenario) {
            let boardFields = [];
            const zeroValue = (element) => element === 0;
            const p1win = (element) => element === 3;
            const p2win = (element) => element === 12;
            const draw = (element) => element !== 3 || element !== 12;
            for (const i in gameBoard) {
                boardFields.push(gameBoard[i]);
            }

            if (winScenario.some(p1win)) {
                alert(`${localP1} WINS!`)
                score.p1score ++;
                updateScoreBoard();
                gameBoard = createGameBoard();
                removeXO();
            } else if (winScenario.some(p2win)) {
                alert(`${localP2} WINS!`)
                score.p2score ++;
                updateScoreBoard();
                gameBoard = createGameBoard();
                removeXO();
            } else if (winScenario.some(draw) && !boardFields.some(zeroValue)) {
                alert("DRAW");
                gameBoard = createGameBoard();
                removeXO();
            }

        }
            if (a.target.value === 'tl' && gameBoard.tl === 0) {
                a.target.appendChild(playerTurn.pic.cloneNode(true));
                gameBoard.tl = playerTurn.symbol;
                checkWin(winLogic());
                changeTurn();
            } else if (a.target.value === 'tm' && gameBoard.tm === 0) {
                a.target.appendChild(playerTurn.pic.cloneNode(true));
                gameBoard.tm = playerTurn.symbol;
                checkWin(winLogic());
                changeTurn();
            } else if (a.target.value === 'tr' && gameBoard.tr === 0) {
                a.target.appendChild(playerTurn.pic.cloneNode(true));
                gameBoard.tr = playerTurn.symbol;
                checkWin(winLogic());
                changeTurn();
            } else if (a.target.value === 'ml'&& gameBoard.ml === 0) {
                a.target.appendChild(playerTurn.pic.cloneNode(true));
                gameBoard.ml = playerTurn.symbol;
                checkWin(winLogic());
                changeTurn();
            } else if (a.target.value === 'mm'&& gameBoard.mm === 0) {
                a.target.appendChild(playerTurn.pic.cloneNode(true));
                gameBoard.mm = playerTurn.symbol;
                checkWin(winLogic());
                changeTurn();
            } else if (a.target.value === 'mr'&& gameBoard.mr === 0) {
                a.target.appendChild(playerTurn.pic.cloneNode(true));
                gameBoard.mr = playerTurn.symbol;
                checkWin(winLogic());
                changeTurn();
            } else if (a.target.value === 'bl'&& gameBoard.bl === 0) {
                a.target.appendChild(playerTurn.pic.cloneNode(true));
                gameBoard.bl = playerTurn.symbol;
                checkWin(winLogic());
                changeTurn();
            } else if (a.target.value === 'bm'&& gameBoard.bm === 0) {
                a.target.appendChild(playerTurn.pic.cloneNode(true));
                gameBoard.bm = playerTurn.symbol;
                checkWin(winLogic());
                changeTurn();
            } else if (a.target.value === 'br' && gameBoard.br === 0) {
                a.target.appendChild(playerTurn.pic.cloneNode(true));
                gameBoard.br = playerTurn.symbol;
                checkWin(winLogic());
                changeTurn();
            } else {
                console.log("pick the right field");
            }
    }
    //event listeners
    Array.from(boardFields).forEach((button) => button.addEventListener('click', GameController));
    reset.addEventListener('click', resetGame)

})();