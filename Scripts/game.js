(function () {
    //***********************Query Selectors***********************
    const p1nameField = document.querySelector('#p1nameField');
    const p2nameField = document.querySelector('#p2nameField');
    const p1ScoreField = document.querySelector('#p1score-number');
    const p2ScoreField = document.querySelector('#p2score-number')
    const boardFields = document.querySelectorAll('.board-field');
    const reset = document.querySelector('#reset');

    //show player names
    const localP1 = localStorage.getItem('localP1');
    const localP2 = localStorage.getItem('localP2');
    p1nameField.innerText = localP1 + ':';
    p2nameField.innerText = localP2 + ':';
    const gameStateValue = localStorage.getItem('gameStateValue'); //single or multiplayer value

    //load x/o images
    const xImg = document.createElement('img');
    const oImg = document.createElement('img');
    oImg.src = '../Resources/o.svg';
    xImg.src = '../Resources/x.svg';

    //game board
    const gameBoard = {
        tl: 0, tm: 0, tr: 0,
        ml: 0, mm: 0, mr: 0,
        bl: 0, bm: 0, br: 0
    }

    //score fields
    let score = {
        p1score: 0,
        p2score: 0
    }

    //players
    let players = {
        player1: {
            name: localP1,
            symbol: 1
        },
        player2: {
            name: localP2,
            symbol: 2
        }
    }
    
     //change turn logic
    const changeTurn = () => {
        playerTurn = playerTurn === players.player1 ? players.player2 : players.player1;
    }
    
    //win logic
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
    
    //check win logic
    function checkWin(winScenario) {
        const p1win = (element) => element === 3;
        const p2win = (element) => element === 6;
        if (winScenario.some(p1win)) {
            console.log("P1 WINS");
            //need more code here!!!!!!!
        } else if (winScenario.some(p2win)) {
            console.log("P2 WINS");
            //need more code here!!!!!!!
        }
    }

    //player starts;
    let playerTurn = players.player1;
//***********************Game Modules***********************
    function GameController(a) {
        let targetValue = a.target.value;
        function gameRound() {
            console.log(targetValue);
            if (targetValue === 'tl' && gameBoard.tl === 0) {
                console.log(targetValue);
                gameBoard.tl = playerTurn.symbol;
                a.target.appendChild(xImg);
                changeTurn();
                console.log(gameBoard);
            } else if (targetValue === 'tm' && gameBoard.tm === 0) {
                gameBoard.tm = playerTurn.symbol;
                a.target.appendChild(xImg);
                changeTurn();
                console.log(gameBoard);
            } else {
                alert("please select a valid field");
            }


            /*
            switch (a.target.value) {
                case 'tl':
                case gameBoard.tl === 0:
                    gameBoard.tl = playerTurn.symbol;
                    a.target.appendChild(xImg);
                    changeTurn();
                    console.log(gameBoard);
                    break;
                case 'tm':
                case gameBoard.tm === 0:
                    gameBoard.tm = playerTurn.symbol;
                    a.target.appendChild(xImg);
                    changeTurn();
                    console.log(gameBoard);
                    break;
                case ('tr' && gameBoard.tr === 0) :
                    gameBoard.tr = playerTurn.symbol;
                    a.target.appendChild(xImg);
                    changeTurn();
                    break;
                case ('ml'&& gameBoard.ml === 0) :
                    gameBoard.ml = playerTurn.symbol;
                    a.target.appendChild(xImg);
                    changeTurn();
                    break;
                case ('mm'&& gameBoard.mm === 0) :
                    gameBoard.mm = playerTurn.symbol;
                    a.target.appendChild(xImg);
                    changeTurn();
                    break;
                case ('mr'&& gameBoard.mr === 0) :
                    gameBoard.mr = playerTurn.symbol;
                    a.target.appendChild(xImg);
                    changeTurn();
                    break;
                case ('bl'&& gameBoard.bl === 0) :
                    gameBoard.bl = playerTurn.symbol;
                    a.target.appendChild(xImg);
                    changeTurn();
                    break;
                case ('bm'&& gameBoard.bm === 0) :
                    gameBoard.bm = playerTurn.symbol;
                    a.target.appendChild(xImg);
                    changeTurn();
                    break;
                case ('br'&& gameBoard.br === 0) :
                    gameBoard.br = playerTurn.symbol;
                    a.target.appendChild(xImg);
                    changeTurn();
                    break;
                default:
                    alert("please select a valid field");
            }

             */
        }
        gameRound();
    }
        
/*
    function screenController() {

    }
*/
    

//**************************************************************
    function resetGame(e) {
        e.preventDefault();
        window.location.href = '../index.html';
        score.p1score = 0;
        score.p2score = 0;
        localStorage.clear();
    }

//***********************Event Listeners***********************
    Array.from(boardFields).forEach((button) => button.addEventListener('click', GameController));
    reset.addEventListener('click', resetGame)

})();