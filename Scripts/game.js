const lclp1 = localStorage.getItem("lclp1");
const lclp2 = localStorage.getItem("lclp2");

const p1nameField = document.querySelector("#p1nameField")
const p2nameField = document.querySelector("#p2nameField")

p1nameField.innerText = lclp1 + ":";
p2nameField.innerText = lclp2 + ":";


const boardFields = document.querySelectorAll(".board-field");
const reset = document.querySelector("#reset");
let score = {
    p1score: 0,
    p2score: 0
}

//board module
function GameBoard() {
    const rows = 3;
    const columns = 3;
    const board = [];
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push("");
        }
    }
    return board;
}
/*
function PushValue() {
    let userValue;



    return userValue;
}

*/
function GameController(a, playerOne = "Jim", playerTwo= "John") {

    const players = [
        {
            name: playerOne,
            symbol: 1
        },
        {
            name: playerTwo,
            symbol: 0
        }
    ];

    console.log(a);
    console.log(playerOne);
    console.log(playerTwo);

    let board = GameBoard();
    let playerTurn = players[0];

    switch (a.target.value) {
        case 'tl' :
            board[0][0] = "x";
            a.target.innerText = board[0][0];
            break;
        case 'tm' :
            board[0][1] = "x";
            a.target.innerText = board[0][1];
            break;
        case 'tr' :
            board[0][2] = "x";
            a.target.innerText = board[0][2];
            break;
        case 'ml' :
            board[1][0] = "x";
            a.target.innerText = board[1][0];
            break;
        case 'mm' :
            board[1][1] = "x";
            a.target.innerText = board[1][1];
            break;
        case 'mr' :
            board[1][2] = "x";
            a.target.innerText = board[1][2];
            break;
        case 'bl' :
            board[2][0] = "x";
            a.target.innerText = board[2][0];
            break;
        case 'bm' :
            board[2][1] = "x";
            a.target.innerText = board[2][1];
            break;
        case 'br' :
            board[2][2] = "x";
            a.target.innerText = board[2][2];
            break;
    }
}

function resetGame(e){
    e.preventDefault();
    window.location.href="../index.html";
    score.p1score = 0;
    score.p2score = 0;
}


Array.from(boardFields).forEach((button) => button.addEventListener('click', GameController));
reset.addEventListener('click', resetGame)
