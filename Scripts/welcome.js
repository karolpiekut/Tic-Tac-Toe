//event listeners
//query selectors
//basic scripts
//disable buttons
//check length of the name
//validate input
//cpu greyed out
//query selectors




let playerOneName = document.querySelector('#p1name');
let playerTwoName = document.querySelector('#p2name');
let gameSelectionTypeButtons = document.querySelectorAll("#buttons")
let gameSelectionType;


function gameSelection(e){
    e.target.classList.toggle('active');
    if (this.value === "pvp") {
        gameSelectionType = 1;
    } else if (this.value === "pvCPU"){
        gameSelectionType = 2;
    }
    console.log(gameSelectionType);
}














Array.from(gameSelectionTypeButtons).forEach((button) => button.addEventListener('click', gameSelection));


