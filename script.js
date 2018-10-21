/*Button and Inputs*/
let buttonPOne = document.querySelector("#p1");
let buttonPTwo = document.querySelector("#p2");
let buttonReset = document.querySelector("#reset");
let winingScore = document.querySelector("#getRed");
let score = document.querySelector("#numberInput");
/*===========Player Scores==============*/
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let gameOver = false;
let p1Win = NaN;
winingScore.textContent = "5";
/*--------Player 1----------*/
buttonPOne.addEventListener("click",function setPOneScores() {
    if (p1Display.textContent === winingScore.textContent) {
        gameOver = true;
    }
    if (!gameOver){
        p1Display.textContent++;
        console.log(p1Display);
    }else {
        p1Win = true;
        colorChange();
        alert("Player One won");
    }
});
/*--------Player 2----------*/
buttonPTwo.addEventListener("click",function setPTowScores() {
    if (p2Display.textContent === winingScore.textContent) {
        gameOver = true;
    }
    if (!gameOver) {
        p2Display.textContent++;
        console.log(p2Display);
    } else {
        p1Win = false;
        colorChange();
        alert("Player Two won");
    }
});
/*----------Reset Button----------*/
buttonReset.addEventListener("click",function resetScores() {
    p1Display.textContent = "0";
    p2Display.textContent = "0";
    gameOver = false;
    p1Win = NaN;
});
/*----------Color Changer----------*/
function colorChange() {
    if (p1Win === true){
        p1Display.style.color = "rgba(6, 214, 160, 1)";
    }else if (p1Win === false){
        p2Display.style.color = "rgba(6, 214, 160, 1)";
    }
}