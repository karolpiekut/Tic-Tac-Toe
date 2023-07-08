function theGame() {
    //***********************Query Selectors***********************
    const p1nameField = document.querySelector('#p1nameField')
    const p2nameField = document.querySelector('#p2nameField')
    const boardFields = document.querySelectorAll('.board-field');
    const reset = document.querySelector('#reset');

//show player names
    const localP1 = localStorage.getItem('localP1');
    const localP2 = localStorage.getItem('localP2');
    p1nameField.innerText = localP1 + ':';
    p2nameField.innerText = localP2 + ':';

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

//***********************Game Modules***********************
    function GameController(a, playerOne = localP1, playerTwo = localP2) {
        let playerTurn = players.player1;
        //done
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

        let newGame = winLogic();  //test

        function checkWin(winScenario) {
            const p1win = (element) => element === 3;
            const p2win = (element) => element === 6;
            if (winScenario.some(p1win)) {
                console.log("P1 WINS");
            } else if (winScenario.some(p2win)) {
                console.log("P2 WINS");
            }
        }
        checkWin(newGame); //test

        const changeTurn = () => {
            playerTurn = playerTurn === players.player1 ? players.player2 : players.player1;
        }

        console.log(a.target.value);

            switch (a.target.value) {
                case 'tl' :
                    gameBoard.tl = 'x';
                    a.target.appendChild(xImg);
                    break;
                case 'tm' :
                    gameBoard.tm = 'x';
                    a.target.appendChild(xImg);
                    break;
                case 'tr' :
                    gameBoard.tr = 'x';
                    a.target.appendChild(xImg);
                    break;
                case 'ml' :
                    gameBoard.ml = 'x';
                    a.target.appendChild(xImg);
                    break;
                case 'mm' :
                    gameBoard.mm = 'x';
                    a.target.appendChild(xImg);
                    break;
                case 'mr' :
                    gameBoard.mr = 'x';
                    a.target.appendChild(xImg);
                    break;
                case 'bl' :
                    gameBoard.bl = 'x';
                    a.target.appendChild(xImg);
                    break;
                case 'bm' :
                    gameBoard.bm = 'x';
                    a.target.appendChild(xImg);
                    break;
                case 'br' :
                    gameBoard.br = 'x';
                    a.target.appendChild(xImg);
                    break;
            }
        }





    function screenController() {

    }

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
}

theGame();