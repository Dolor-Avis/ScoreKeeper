/*Button and Inputs*/
let buttonPOne = document.querySelector("#p1");
let buttonPTwo = document.querySelector("#p2");
let buttonReset = document.querySelector("#reset");
let winningScore = document.querySelector("#getRed");
/*===========Player Scores==============*/
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let pOneScore = "0";
let pTwoScore = "0";
let gameOver = false;
let playerWin = NaN;
winningScore.textContent = "5";
/*--------Player 1----------*/
buttonPOne.addEventListener("click",function setPOneScores() {
    if (!gameOver) {
        pOneScore++;
        p1Display.textContent = pOneScore;
    }else if (pOneScore === winningScore.textContent){
        gameOver = true;
        playerWin = true;
        colorChange();
    }
});
/*--------Player 2----------*/
buttonPTwo.addEventListener("click",function setPTowScores() {
    if (!gameOver) {
        pTwoScore++;
        p2Display.textContent = pTwoScore;
    } else if (pTwoScore === winningScore.textContent){
        gameOver = true;
        playerWin = false;
        colorChange();
    }
});
/*----------Reset Button----------*/
buttonReset.addEventListener("click",function resetScores() {
    p1Display.textContent = pOneScore = "0";
    p2Display.textContent = pTwoScore = "0";
    gameOver = false;
    playerWin = NaN;
    p1Display.style.color = p2Display.style.color = "black";
});
/*----------Color Changer----------*/
function colorChange() {
    if (playerWin === true){
        p1Display.style.color = "rgba(6, 214, 160, 1)";
    }else if (playerWin === false){
        p2Display.style.color = "rgba(6, 214, 160, 1)";
    }
}