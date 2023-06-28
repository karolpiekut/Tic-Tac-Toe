//query selectors
//basic scripts

//cpu greyed out

let gameSelectionTypeButtons = document.querySelectorAll("#buttons");
let playGameButton = document.querySelector('#play');
let p1Name = document.querySelector('#p1name');
let p2Name = document.querySelector('#p2name');
let p1NameValue;
let p2NameValue;
let gameStateSelection = 0;
playGameButton.disabled = true;


function gameSelection(e){
    if (e.target.value === "pvp") {
        gameStateSelection = 1;
        e.target.classList.add('active');
        gameSelectionTypeButtons[0].firstChild.nextElementSibling.nextElementSibling.classList.remove('active')
        p2Name.value= "";
        p2Name.removeAttribute("disabled");
        playGameButton.disabled = false;
    } else if (e.target.value === "pvCPU"){
        gameStateSelection = 2;
        e.target.classList.add('active');
        gameSelectionTypeButtons[0].firstChild.nextElementSibling.classList.remove('active')
        p2Name.value= "HAL";
        p2Name.setAttribute("disabled", "");
        playGameButton.disabled = false;
    }
}



function startGame(e){
    e.preventDefault();
    p1NameValue = p1Name.value;
    p2NameValue = p2Name.value;
    if (p1NameValue === undefined || p2NameValue === undefined ){
        alert("Enter player name(s)");
    }

}

Array.from(gameSelectionTypeButtons).forEach((button) => button.addEventListener('click', gameSelection));
playGameButton.addEventListener('click', startGame);


