
const boardFields = document.querySelectorAll(".board-field");

function theGame() {
    if (this.id === "top-left") {
        this.innerText = "X";
    }
}





Array.from(boardFields).forEach((button) => button.addEventListener('click', theGame));



/*

const playerOne = {
  name: "tim",
  marker: "X"
}

const playerTwo = {
  name: "jenn",
  marker: "O"
}

function gameOver(winningPlayer){
  console.log("Congratulations!")
  console.log(winningPlayer.name + " is the winner!")
}
function Player(name, marker) {
  this.name = name
  this.marker = marker
}

const player = new Player('steve', 'X')
console.log(player.name) // 'steve'

 */

