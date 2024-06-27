"use strict";
console.log("Hello There");
window.addEventListener("load", handleLoad);
let activePlayer = "Player 1";
let columns = 7;
let rows = 6;
function handleLoad(_event) {
    console.log("page has loaded");
}
function createBoard(rows, columns) {
    console.log("board is being created...");
    for (let i = 0; i < columns; i++) {
        for (let t = 0; t < rows; t++) {
            let box = document.createElement("div");
            box.style.position = "absolute";
        }
    }
}
function placeCoin(_event) {
    console.log("coin placement");
}
function checkWin() {
    console.log("checking for victory");
}
function switchPlayer(Player) {
    console.log("player switch");
    if (Player == "Player 1") {
        activePlayer == "Player 2";
    }
    else {
        activePlayer == "Player 2";
    }
}
