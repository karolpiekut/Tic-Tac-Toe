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
let playGameButton = document.querySelector('#play');
let gameSelectionTypeButtons = document.querySelectorAll("#buttons")
console.log(gameSelectionTypeButtons[0].firstChild.nextElementSibling);

function gameSelection(e){
    //e.target.classList.toggle('active');
    let gameStateSelection = 0;
    if (e.target.value === "pvp") {
        gameStateSelection = 1;
        e.target.classList.add('active');
        gameSelectionTypeButtons[0].firstChild.nextElementSibling.nextElementSibling.classList.remove('active')
    } else if (e.target.value === "pvCPU"){
        gameStateSelection = 2;
        e.target.classList.add('active');
        gameSelectionTypeButtons[0].firstChild.nextElementSibling.classList.remove('active')
    }

    if (gameStateSelection === 1){
        console.log("PVP")
    } else if (gameStateSelection === 2){
        console.log("PVCPU")
    }
}



Array.from(gameSelectionTypeButtons).forEach((button) => button.addEventListener('click', gameSelection));


