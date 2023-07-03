//***********************Query Selectors***********************
const p1nameField = document.querySelector('#p1nameField')
const p2nameField = document.querySelector('#p2nameField')
const boardFields = document.querySelectorAll('.board-field');
const reset = document.querySelector('#reset');

//***********************Global Variables (temp)***********************

//show player names
const lclp1 = localStorage.getItem('lclp1');
const lclp2 = localStorage.getItem('lclp2');
p1nameField.innerText = lclp1 + ':';
p2nameField.innerText = lclp2 + ':';

//load x/o images
const xImg = document.createElement('img');
const oImg = document.createElement('img');
oImg.src = '../Resources/o.svg';
xImg.src = '../Resources/x.svg';

//score fields
let score = {
    p1score: 0,
    p2score: 0
}


//***********************Game Modules***********************

//board module



/*
function PushValue() {
    let userValue;



    return userValue;
}

*/
function GameController(a, playerOne = lclp1, playerTwo= lclp2) {
    function GameBoard() {
        const rows = 3;
        const columns = 3;
        const board = [];
        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < columns; j++) {
                board[i].push('');
            }
        }
        return board;
    }

    const players = [
        {
            name: playerOne,
            symbol: 0
        },
        {
            name: playerTwo,
            symbol: 1
        }
    ];

    let playerTurn = players[0];


    function changeTurn() {
        if (playerTurn.symbol === 0) {
            playerTurn = players[1];
        } else {
            playerTurn = players[0];
        }
    }

    console.log(a);
    console.log(playerOne);
    console.log(playerTwo);

    let board = GameBoard();


    switch (a.target.value) {
        case 'tl' :
            board[0][0] = 'x';
            console.log(playerTurn);
            a.target.appendChild(xImg);
            changeTurn();
            console.log(playerTurn);
            break;
        case 'tm' :
            board[0][1] = 'x';
            a.target.appendChild(xImg);
            break;
        case 'tr' :
            board[0][2] = 'x';
            a.target.appendChild(xImg);
            break;
        case 'ml' :
            board[1][0] = 'x';
            a.target.appendChild(xImg);
            break;
        case 'mm' :
            board[1][1] = 'x';
            a.target.appendChild(xImg);
            break;
        case 'mr' :
            board[1][2] = 'x';
            a.target.appendChild(xImg);
            break;
        case 'bl' :
            board[2][0] = 'x';
            a.target.appendChild(xImg);
            break;
        case 'bm' :
            board[2][1] = 'x';
            a.target.appendChild(xImg);
            break;
        case 'br' :
            board[2][2] = 'x';
            a.target.appendChild(xImg);
            break;
    }
    console.log(board);
}




function resetGame(e){
    e.preventDefault();
    window.location.href='../index.html';
    score.p1score = 0;
    score.p2score = 0;
    localStorage.clear();
}



//***********************Event Listeners***********************
Array.from(boardFields).forEach((button) => button.addEventListener('click', GameController));
reset.addEventListener('click', resetGame)
