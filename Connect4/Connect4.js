"use strict";
console.log("Hello There");
window.addEventListener("load", handleLoad);
let activePlayer = "Player 1";
let columns = 7;
let rows = 6;
function handleLoad(_event) {
    console.log("page has loaded");
    let startButton = document.getElementById("buttoncreateboard");
    startButton.addEventListener("click", handleStart);
}
function handleStart(_event) {
    columns = parseInt(document.getElementById("columns").value);
    rows = parseInt(document.getElementById("rows").value);
    createBoard(rows, columns);
}
function createBoard(x, y) {
    console.log("board is being created...");
    let board = document.getElementById("board");
    for (let i = 0; i < y; i++) {
        let rowHeight = i * 10;
        for (let t = 0; t < x; t++) {
            let box = document.createElement("div");
            box.className = "box";
            box.style.display = "inline";
            box.style.position = "absolute";
            box.style.top = rowHeight + "px";
            box.id = String(x) + String(y);
            if (x = t)
                board.appendChild(box);
        }
    }
}
function placeCoin(_event) {
    console.log("coin placement");
    let coinSpot = _event.target;
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
