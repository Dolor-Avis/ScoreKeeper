/*Button and Inputs*/
let buttonPOne = document.querySelector("#p1");
let buttonPTwo = document.querySelector("#p2");
let buttonReset = document.querySelector("#reset");
let inputField = document.querySelector("#numberInput");
/*===========Player Scores==============*/
let pOneScore = 0;
let pTwoScore = 0;
/* Data to change out scores and tries*/
let h1 = document.querySelector("h1");
let score = document.querySelector("h3");
/*==========*/
buttonPOne.addEventListener("click",function () {
    pOneScore++;

});